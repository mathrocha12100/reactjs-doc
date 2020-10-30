import { darken } from 'polished';

export default {
  title: 'dark',
  body: {
    primary: '#d63af9',
    secondary: '#c62e65',
    background:  '#121212',
    text: darken(0.2, '#eee'),
  },
  header: {
    primary: '#333',
    text: darken(0.15, '#eee'),
  },
  dialog: {
    primary: '#424242',
    text: '#eee',
  },
};
