import { Stack, Link } from 'expo-router';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HeaderButtonProps } from '@react-navigation/elements';
import { Provider } from 'react-redux';
import { store } from './store';
import { AntDesign } from '@expo/vector-icons';
import BadgeIcon from './features/components/BadgeIcon';

const theme: DefaultTheme = {
  colors: {
    primary: 'blue',
    text: 'black',
    buttonText: 'white',
    card: 'white',
    error: 'red',
  },
};

function LogoTitle(props: HeaderButtonProps) {
  return (
    <Link href={'/cart'} asChild>
      <TouchableOpacity {...props}>
        <AntDesign name="shoppingcart" size={32} color="black" />
        <BadgeIcon />
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
