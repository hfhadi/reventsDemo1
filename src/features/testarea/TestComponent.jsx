import React, { Component } from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './TestActions';
import { Button } from 'semantic-ui-react';

// a.k.a
const mapState = (state) => ({
    data: state.test.data
})

// a.k.a mapDispatchToProps
const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data}</h3> 
                <Button onClick={incrementCounter} positive content="Increment"/>
                <Button onClick={decrementCounter} negative content="Decrement"/>
            </div>
        )
    }
}

export default connect(mapState, actions)(TestComponent);
