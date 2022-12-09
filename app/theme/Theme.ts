import { createTheme,responsiveFontSizes } from "@mui/material/styles"

let Theme = createTheme({
    palette: {
        primary: {
            main: "#FFFBEB",
            dark: "#2A2727"
        },
        secondary: {
            main: "#FF7000",
            light: "#D6E4E5",
            dark: "#497174",
        },
        error: {
            main: "#FF0033"
        }
    },
})

Theme = createTheme ({
    ...Theme,
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: Theme.palette.secondary.dark,
                    padding: "0",
                },
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    padding: "0 1rem",
                    "&.Mui-selected": {
                        borderBottom: `2.5px solid ${Theme.palette.secondary.main}`,
                    },
                },
            }
        },
        
    },
    typography: {
        h3: {
            fontFamily: "Brush Script MT",
            fontSize: "3.5rem",
            padding: "2rem",
        },
        h4: {
            fontFamily: "IBM Plex Mono",
            fontSize: "2.5rem",
            padding: "0.8rem",
        },
        body1: {
            fontFamily: "Rockwell Extra Bold",
            fontSize: "1.5rem",
        },
        body2: {
            fontFamily: "Geneva",
            fontSize: "1.2rem",
            color: Theme.palette.primary.light,
        },
    },
})


export default Theme