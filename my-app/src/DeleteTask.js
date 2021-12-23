import axios from "axios";
import React, { Component } from "react";

class DeleteTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            task_ID:'',
            
        }
        this.state={
            tasks:[]
            }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.delete("http://localhost:8080/deletetask/"+this.state.task_ID)
        .then(response => this.setState({tasks:response.data}
        ))
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {task_ID} = this.state
        return (
            <div style={{"backgroundColor":"pink","color":"black","textAlign":"center"}}>
                <form  onSubmit={this.submitHandler}>
                <div>
                    task_id:
                    <input type="number" name="task_ID" value={task_ID} onChange={this.changeHandler} placeholder="task_ID" required/>
                </div><br/>
                        
              
                 <button type="submit">Submit</button>

            </form>
        </div>
            
        )
    }
}
export default DeleteTask;