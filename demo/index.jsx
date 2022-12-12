import React from "react";
import { createRoot } from 'react-dom/client';
import {
    Activity, ACTIVITY_STYLE, ACTIVITY_TYPE
} from "../src/index"

import "./index.less"

const App = () => {
    return (
        <>
            <div className="button-container" style={{flexFlow: "column"}}>
                <h1>Metro UI<br/>Activities and Progress Set</h1>
                <h2>For React</h2>
                <p>Copyright 2022 by <a href="https://Korzh.com">Korzh.com</a></p>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h1>Activities</h1>
            </div>
            <div className="button-container">
                <h2>Simple</h2>
            </div>
            <div className="button-container">
                <div className="grid">
                    <div className="cell">
                        <Activity style={ACTIVITY_STYLE.DEFAULT} type={ACTIVITY_TYPE.SIMPLE}/>
                    </div>
                    <div className="cell bg-dark">
                        <Activity style={ACTIVITY_STYLE.LIGHT} type={ACTIVITY_TYPE.SIMPLE}/>
                    </div>
                    <div className="cell">
                        <Activity style={ACTIVITY_STYLE.COLOR} type={ACTIVITY_TYPE.SIMPLE}/>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <h2>Atom</h2>
            </div>
            <div className="button-container">
                <div className="grid">
                    <div className="cell">
                        <Activity style={ACTIVITY_STYLE.DEFAULT} type={ACTIVITY_TYPE.ATOM}/>
                    </div>
                    <div className="cell bg-dark">
                        <Activity style={ACTIVITY_STYLE.LIGHT} type={ACTIVITY_TYPE.ATOM}/>
                    </div>
                    <div className="cell">
                        <Activity style={ACTIVITY_STYLE.COLOR} type={ACTIVITY_TYPE.ATOM}/>
                    </div>
                </div>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );