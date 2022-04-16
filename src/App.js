import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Distant from "./distant_work/Distant";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Distant />
        </div>
    );
}

export default App;
