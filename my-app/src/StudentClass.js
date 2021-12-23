import React,{Component} from 'react';
import PropsExample1 from './PropsExample1';

class StudentClass extends Component{
    render(){
        return(
            <div>
                <h1> My Class</h1>
                <PropsExample1 StdId = "21046" StdName = "Meghana" StdMarks = {60}>
                    <p>This is Child tag</p>
                </PropsExample1>
                
            </div>
        );
    }
}
export default StudentClass;