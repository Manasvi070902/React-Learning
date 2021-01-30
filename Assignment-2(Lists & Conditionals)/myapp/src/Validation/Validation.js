import React from 'react'

const validation = (props)=>{
let validationMessage = 'Text too short!'

if(props.length >= 5){
    validationMessage = 'Text long enough!!'
}

 return (
     <div>
         {/* {props.length > 5 ? <p>Text long enough!!</p> : <p>Text too short!!</p> } */}
         <p>{validationMessage}</p>
     </div>
 )
}

export default validation;