import React, { useEffect } from "react"; 3.4K

import "./App.css";

const App = () => {
    const APP_ID = () => 'b10e3984';
    const APP_KEY = "e01f3d1092dfbbf75e6f09c13c48e39b";
    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key-${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

    useEffect(() => {
        console.log('Effect has been run');
    });

    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" />
                <button
                    onClick={() => setCounter(counter + 1)}
                    className="search-button"
                    type="submit"
                >
                    {counter}
                </button>
            </form>
        </div>
    );
};

export default App;
