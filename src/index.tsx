import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss'
function App() {
    return (
        <div className="w-60 h-50 center outline">
            <h1 className="f1 tracked">Success</h1>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)