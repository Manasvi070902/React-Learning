import React from 'react';


const userInput = (props) => {
    const style={
        border : '3px solid #ADD8E6',
    
    }
    return(
        <div>
        <p> Enter your details</p>
        <input type="text" style={style} onChange={props.changed} value={props.value}></input>
        </div>
    )
}

export default userInput;