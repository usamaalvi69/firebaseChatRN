import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2E2739',
      secondary: '#15B79E',
      red: '#D92D20',
      error: '#D32F2F',
      subText: '#535862',
      text: '#FFF',
      global: '#61C3F2',
      bg:'#F2F2F6',
      black: '#000',
      placeHolder: '#202C434D',
      white:'#FFF',
      genre: ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F'],
    },
  },
  
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#212121',
      secondary: '#15B79E',
      red: '#D92D20',
      error: '#D32F2F',
      subText: '#827D88',
      text: '#FFFFFF',
      global: '#FFFFFF',
      bg:'#F2F2F6',
      black: '#000',
      placeHolder: '#202C434D',
      white:'#FFF',
      genre: ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F'],
    },
  },
};
