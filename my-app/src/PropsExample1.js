import React from 'react';

const PropsExample1 = (props) =>{
    return(
        <div>
            <h1>Student details {props.StdId} {props.StdName} {props.StdMarks}</h1>
            <h2>{props.childern}</h2>

        </div>
    )
}
export default PropsExample1;