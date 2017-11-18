'use strict';

import React from 'react';
import {render} from 'react-dom';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <h1>React Shopping Site</h1>
            </div>
        );
    }
}

render(<App />, document.getElementById('container'));