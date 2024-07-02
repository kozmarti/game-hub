import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'

}

const theme = extendTheme({ config
    // can override colors here
    // use color palettes https://smart-swatch.netlify.app/#35343a
    // colors: {
    //     gray: {
    //         50: "#f7effb",
    //         100: "#ddd3e1",
    //         200: "#c4b7c9",
    //         300: "#aa9ab1",
    //         400: "#927d9a",
    //         500: "#796481",
    //         600: "#5e4e65",
    //         700: "#433749",
    //         800: "#2b202d",
    //         900: "#110914"
    //     }

    // }
 }
);

export default theme;