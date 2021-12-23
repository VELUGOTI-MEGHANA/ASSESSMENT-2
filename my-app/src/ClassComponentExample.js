import React,{Component} from 'react';
import ClassComponent from './ClassComponent';
import PropsExample from './PropsExample';

class ClassComponentExample extends Component{
    render(){
        return(
            <div>
                <h1> My Class Component</h1>
                <PropsExample name = "Meghana"  age = {22}>
                    <p>This is Child tag</p>
                </PropsExample>
                <PropsExample name = "sai"/>
                <ClassComponent name = "swathi"  age = {45}>
                </ClassComponent>
            </div>
        );
    }
}
export default ClassComponentExample;