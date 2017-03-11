import React from 'react';
import {render} from 'react-dom';

import {Home} from './components/home';
import {Header} from './components/header';

class App extends React.Component {
    render(){
        return(
            <div className="container">
                <Header/>
                <Home/>
                <h1>Welcome to react with webpack 2.0</h1>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('app'));