import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

export const theme: DefaultTheme = {
  colors: {
    primary: 'blue',
    text: 'black',
    buttonText: 'white',
    card: 'white',
    error: 'red',
  },
};

interface Props {
  children: React.JSX.Element;
}

export const Providers = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

function customRender(ui: ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: Providers, ...options });
}

export { customRender as render };
