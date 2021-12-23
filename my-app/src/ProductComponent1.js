import React,{Component} from 'react';
import Props from './Props';

class ProductComponent1 extends Component{
    render(){
        return(
            <div>
                <h1> My Class</h1>
                <Props ProductName= "Samsung Mobile" ProductPrice = {20000} >
                    <img src="Mobile.jpg"/>
                    <p>This is the tag</p>
                </Props>
            </div>
        );
    }
}
export default ProductComponent1;