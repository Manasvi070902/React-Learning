import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid , setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(enteredValue.trim().length > 0){
      setIsValid(true);
      return;
    }
  
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    //validation
 
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* dynamic style change using external css */}
      {/* <div className={`form-control ${(isValid ? 'invalid' : '')}`}> */}
       {/* inline style 
        <label style= {{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input type="text" style= {{borderColor: !isValid ? 'red' : '#ccc', background: !isValid ? 'salmon' : 'transparent'}}onChange={goalInputChangeHandler} />
      */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}> 
       <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </div> 
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
