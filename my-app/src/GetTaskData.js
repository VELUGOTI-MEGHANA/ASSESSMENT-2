import React,{Component} from 'react';
import axios from 'axios';

class GetTaskData extends Component{
constructor(){
super()
this.state={
tasks:[]
}
this.handleClick = this.handleClick.bind(this)
}
handleClick(){
axios.get('http://localhost:8080/task')
.then(response => this.setState({tasks:response.data}))
}
render(){
return(
<div style={{"backgroundColor":"pink","color":"black","textAlign":"center"}}>
<button className='button' onClick={this.handleClick}> click me </button>
<ul>{this.state.tasks.map(task =>(<h3>
TaskID:{task.task_ID}<br/>
TaskName:{task.name}<br/>
TaskOwner:{task.owner_ID}<br/>
Task CreatorID:{task.creator_ID}<br/>
Task status:{task.status}<br/>
Description:{task.description}<br/>
notes:{task.notes}<br/>
status_Changed_On:{task.status_CHANGED_ON}<br/>
Priority:{task.priority}<br/>
bookMarked:{task.isbookmarked.toString()}<br/>
 createdon:{task.created_ON}<br/>
</h3>))}</ul>
</div>
)
}
}
export default GetTaskData;
