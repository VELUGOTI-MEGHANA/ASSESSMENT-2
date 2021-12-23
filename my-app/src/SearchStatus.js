import axios from "axios";
import React, { Component } from "react";

class SearchStatus extends Component {
    constructor(props){
        super(props)
        this.state = {
            status:'',
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
        axios.get("http://localhost:8080/status/"+this.state.status)
        .then(response => this.setState({tasks:response.data}
        ))
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {status} = this.state
        return (
            
            <div style={{"backgroundColor":"pink","color":"black","textAlign":"center"}}>
                <form  onSubmit={this.submitHandler}>
                <div>
                    Status:
                    <input type="text" name="status" value={status} onChange={this.changeHandler} placeholder="status" required/>
                </div><br/><br/>
                        
                <div>
                <button className='button' onClick={this.handleClick}>Status</button>
                 <ul>{this.state.tasks.map(task =>(<h3>
                 <li>TaskID:{task.task_ID}</li>
                 <li>TaskName:{task.name}</li>
                 <li>TaskOwner:{task.owner_ID}</li>
                 <li>Task CreatorID:{task.creator_ID}</li>
                 <li>Task status:{task.status}</li>
                 <li>Description:{task.description}</li>
                 <li>notes:{task.notes}</li>
                 <li>status_Changed_On:{task.status_CHANGED_ON}</li>
                 <li>Priority:{task.priority}</li>
                 <li>bookMarked:{task.isbookmarked.toString()}</li>
                 <li> createdon:{task.created_ON}</li>
                 </h3>))}</ul>
                 </div>
                    
                 

            </form>
        </div>
            
        )
    }
}

export default SearchStatus;