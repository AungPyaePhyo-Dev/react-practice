import { createContext, useState, useContext } from "react";

import {
    CssBaseline,
    ThemeProvider,
    createTheme
} from "@mui/material"

import App from "./App";

const theme = createTheme({
    palette: {
        mode: "dark"
    }
})


const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

export default function ThemedApp() {
    // const [mode, setMode] = useState("dark")
    const [showForm, setShowForm] = useState(false);

    return <ThemeProvider theme={theme}>
                <AppContext.Provider value={{ showForm, setShowForm}}>
                    <App />
                    <CssBaseline />
                </AppContext.Provider>
            </ThemeProvider>

    return (
        <AppContent.Provider value={{ mode, setMode }}>
            <App />
        </AppContent.Provider>
    );
}
