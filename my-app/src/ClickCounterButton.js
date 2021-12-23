import React, {Component} from 'react';
import UpdatedComponent from './withCounter';

class ClickCounterButton extends Component {

    /* incrementCount =()=>{}*/
    render(){
        const {count, incrementCount}=this.props
        return <button onClick={incrementCount}>Clicked {count} times</button>

    }

}
export default UpdatedComponent(ClickCounterButton);