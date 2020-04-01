import React, { Component } from 'react';
import Headercomponent from './Headercomponent'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    
    render() {
        const { data } = this.state;
        if (!data){
            return <div>Loading...</div>
        }
        return (
            <div className="App">
                <Headercomponent compareSummary={data.compareSummary} />
            </div>
        );
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/fwwg4')
        .then(res => res.json())
        .then(result => this.setState({ data: result.products }))
    }
}

export default App;
