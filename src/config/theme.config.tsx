import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: React.ReactNode;
};


export const themePalette ={
    BG:"#137EAD",
    GREEN:"#67E08A",
    FONT_FAMILY: "'Playwrite HU', cursive",

} as const;


const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default:themePalette.BG,
        },
        primary:{
            main:themePalette.GREEN,
        }
    },
    typography:{
        fontFamily: themePalette.FONT_FAMILY,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"0.5rem",
                }
            }
        }
    }
});

export const ThemeConfig = ({ children }: ThemeProp) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};