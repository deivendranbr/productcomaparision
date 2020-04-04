import React, { Component } from 'react';
import Tablecomponent from './Tablecomponent';
import inputdata from './input';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    
    render() {
        // const { data } = this.state;
        const data = inputdata.products;
        if (!data){
            return <div>Loading...</div>
        }
        return (
            <div className="App">
                <Tablecomponent data={data} />
            </div>
        );
    }

    // componentDidMount() {
    //     fetch('http://www.mocky.io/v2/5e86ec5531000011d8814754')
    //     .then(res => res.json())
    //     .then(result => this.setState({ data: result.products }))
    // }
}

export default App;
