import React from 'react';
const Todo =(props)=>{
 
    return(
        <>
        <div className='cross'>
        <i className="fas fa-times-circle" onClick={()=>{
            props.onSelect(props.id);
        }} ></i>
        <li>{props.text}</li>
        </div>
        </>
    );
};
export default Todo;