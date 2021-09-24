import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { GlobalStyles } from "../styles/globalStyles";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Main />
        </>
    );
};

export default App;