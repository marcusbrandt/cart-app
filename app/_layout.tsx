import { Stack, Link } from "expo-router";
import {DefaultTheme, ThemeProvider} from "styled-components";
import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";

const theme: DefaultTheme = {
    colors: {
        primary: 'blue',
        text: 'black',
        buttonText: 'white',
        card: 'white',
        error: 'red'
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
});

function LogoTitle() {
    return (
        <Link href={'/cart'} asChild>
            <TouchableOpacity>
                <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
            </TouchableOpacity>
        </Link>
    );
}

export default function RootLayout() {
  return (
      <ThemeProvider theme={theme}>
          <Stack>
              <Stack.Screen

                  options={
                    {
                        title: 'Produtos',
                        headerRight: props => <LogoTitle {...props} />,
                    }
                 }
                  name="index" />
              <Stack.Screen name="cart" />
          </Stack>
      </ThemeProvider>
  );
}
