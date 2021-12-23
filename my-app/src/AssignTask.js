import axios from "axios";
import React, { Component } from "react";

class AssignTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            task_ID:'',
            owner_ID:'',
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
        axios.get("http://localhost:8080/taskid/"+this.state.task_ID+"/ownerid/"+this.state.owner_ID,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {task_ID,owner_ID} = this.state
        return (
            <div style={{"backgroundColor":"pink","color":"black","textAlign":"center"}}>
            <form  onSubmit={this.submitHandler}>
                <div>
                    task_id:
                    <input type="number" name="task_ID" value={task_ID} onChange={this.changeHandler} placeholder="task_ID" required/>
                </div>
                        
                <div>
                    owner_id:
                    <input type="number" name="owner_ID" value={owner_ID} onChange={this.changeHandler} placeholder="owner_ID" required/>

                     
                      
                </div>
                 <button type="submit">Submit</button>

            </form>
        </div>
            
        )
    }
}

export default AssignTask;