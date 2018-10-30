import { createMuiTheme } from '@material-ui/core';

const customTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#f9683a',
            main: '#bf360c',
            dark: '#870000',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#c1d5e0',
            main: '#90a4ae',
            dark: '#62757f',
            contrastText: '#000000'
        }
    }
})

export default customTheme;