import axios from "axios";
import React, { Component } from "react";

class UpdateBookmark extends Component {
    constructor(props){
        super(props)
        this.state = {
            task_ID:'',
            isbookmarked:'',
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
        axios.get("http://localhost:8080/taskid/"+this.state.task_ID+"/bookmark/"+this.state.isbookmarked,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {task_ID,isbookmarked} = this.state
        return (
            <div style={{"backgroundColor":"pink","color":"black","textAlign":"center"}}>
                <form  onSubmit={this.submitHandler}>
                <div>
                    task_ID:
                    <input type="number" name="task_ID" value={task_ID} onChange={this.changeHandler} placeholder="task_ID" required/><br></br>
                </div>
                <div>
                 isBookmarked :
                    <select  name="isbookmarked" value={isbookmarked} onChange={this.changeHandler} >
                            <option value="select">select</option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select><br/>
                </div>
                 <button type="submit">Submit</button>

            </form>
        </div>
            
        )
    }
}

export default UpdateBookmark;