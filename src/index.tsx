import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Container } from './components/container';
import { Keyboard } from './components/keyboard'
import './index.scss';

function App() {
    return (
        <Container direction="row" justify="start" width="60%" title="3-tskeys" outline={true}>
            <Keyboard height="200px" rootNote="A#3" octaves="2" />
        </Container>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)