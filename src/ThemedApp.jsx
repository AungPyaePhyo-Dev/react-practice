import { createContext, useState, useContext } from "react";

import {
    CssBaseline,
    ThemeProvider,
    createTheme
} from "@mui/material"

import App from "./App";

const theme = createTheme({
    palette: {
        mode: "dark "
    }
})

export const AppContent = createContext();

export default function ThemedApp() {
    const [mode, setMode] = useState("dark")
    return (
        <AppContent.Provider value={{ mode, setMode }}>
            <App />
        </AppContent.Provider>
    );
}
