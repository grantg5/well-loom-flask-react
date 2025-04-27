type ColorObject = {
    [key: string]: string;
};

type ColorType = {
    [key: string]: ColorObject;
};

const colors: ColorType = {
    primary: {
        // Primary palette (olive green)
        light: '#a8cc5d',      // 300
        main: '#6b8e23',       // 500 (the main color)
        dark: '#4c6619',       // 800
        contrastText: '#fff',
        50: '#f2f8e1',
        100: '#d8eab6',
        200: '#c0db8a',
        300: '#a8cc5d',
        400: '#94c13b',
        500: '#6b8e23',
        600: '#618020',
        700: '#56731c',
        800: '#4c6619',
        900: '#3a4d13',
        A100: '#e8ffcd',
        A200: '#c5ff8f',
        A400: '#a2ff52',
        A700: '#91ff39',
    },
    secondary: {
        // Accent palette (orange)
        light: '#ffc273',      // 300
        main: '#ffa414',       // 500
        dark: '#cc7600',       // 800
        contrastText: '#fff',
        50: '#fff4e5',
        100: '#ffe4bf',
        200: '#ffd399',
        300: '#ffc273',
        400: '#ffb347',
        500: '#ffa414',
        600: '#ff9400',
        700: '#e68500',
        800: '#cc7600',
        900: '#b36600',
        A100: '#ffffff',
        A200: '#ffe6db',
        A400: '#ffcbb8',
        A700: '#ffbfa6',
    },
    error: {
        // Warn palette (red/orange)
        light: '#ff8a65',      // 300
        main: '#ff5722',       // 500
        dark: '#d84315',       // 800
        contrastText: '#fff', 
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
        A100: '#ff9e80',
        A200: '#ff6e40',
        A400: '#ff3d00',
        A700: '#dd2c00',
    }
};

export default colors;