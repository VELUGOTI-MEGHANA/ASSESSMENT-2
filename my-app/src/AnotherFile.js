import React, { Component } from "react";
import UpdateComponent from "./withCounter";

class AnotherFile extends Component{
    /*constructor(props){
        super(props)
        this.state={count=0}

    }
    incrementCount = ()=>{
        this.setState(prevState =>{
        return{count:prevState.count+1}

        })
    }*/
    render(){
        const{count,incrementCount} = this.props
        return <h2 onMouseOver={incrementCount}>Clicked {count} times</h2>

    }

}
export default AnotherFile;