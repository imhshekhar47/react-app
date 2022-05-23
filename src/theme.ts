import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontSize: 12,
        h1: { fontSize: '32px' },
        h2: { fontSize: '28px' },
        h3: { fontSize: '24px' },
        h4: { fontSize: '20px' },
        h5: { fontSize: '18px' },
        h6: { fontSize: '16px', },
    }
});

export default theme;