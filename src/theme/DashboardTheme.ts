import { createTheme } from '@mui/material/styles'

export type ThemeMode = 'system' | 'light' | 'dark'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        style: {
          color: '#fff',
        },
      },
    },
  },
})
