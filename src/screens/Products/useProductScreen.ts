import {useEffect, useState} from "react";
import {Product, Products, useProductScreenT } from "./types";


const productsUrl = 'https://gist.githubusercontent.com/marcusbrandt/8507b74f6cc0247c9656a228cf0b3475/raw/92a63a70eec517932c9c6ebc26bec1dcdaf8621f/products.json';

const useProductScreen: () => useProductScreenT = () => {
    const [products, setProducts] = useState<Product[] | undefined>();

    useEffect(() => {
        const fetchProducts = async () => {
            return fetch(productsUrl)
        }
        fetchProducts()
            .then(response => response.json())
            .then(data => ((data as Products).products.map(product => ({...product, cart: false}))))
            .then(data => setProducts(data))
            .catch(error => console.error(error))
    }, [])

    const buttonAdd = (id: number) => {
        console.log('buttonAdd', id)
        const newProducts = products?.map(product => {
            if(product.id === id) {
                return {...product, cart: true}
            }
            return product
        })
        setProducts(newProducts)
    }

    const buttonRemove = (id: number) => {
        console.log('buttonRemove', id)
        const newProducts = products?.map(product => {
            if(product.id === id) {
                return {...product, cart: false}
            }
            return product
        })
        setProducts(newProducts)
    }

    return {
        products,
        buttonAdd,
        buttonRemove,
    }
};

export default useProductScreen;
