import React, { Component } from 'react';
import Foods from './components/Foods';

// __________________________________________________________________________________

class App extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                {/* Exersice1 */}
                <Foods />
            </>
        );
    }
}
export default App;
