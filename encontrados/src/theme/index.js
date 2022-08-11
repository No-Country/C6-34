import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    variants: {
        'border-bottom': {
            borderBottomWidth: "2px",
            borderBottomColor: "#000000",
            borderBottomStyle: "solid", 
        },
    },
});

export default theme;