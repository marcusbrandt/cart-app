import { Stack, Link } from 'expo-router';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtonProps } from '@react-navigation/elements';
import { Provider } from 'react-redux';
import { store } from './store';

const theme: DefaultTheme = {
  colors: {
    primary: 'blue',
    text: 'black',
    buttonText: 'white',
    card: 'white',
    error: 'red',
  },
};

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

function LogoTitle(props: HeaderButtonProps) {
  return (
    <Link href={'/cart'} asChild>
      <TouchableOpacity {...props}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </TouchableOpacity>
    </Link>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack.Screen
            options={{
              title: 'Produtos',
              headerRight: (props) => <LogoTitle {...props} />,
            }}
            name="index"
          />
          <Stack.Screen name="cart" />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
