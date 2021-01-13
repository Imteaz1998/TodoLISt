import React, { useState } from 'react';
import Todo from './Todo.jsx';

const App=()=>{
  const [inputList,setInputList]=useState('');
  const [items,setItems]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);

  }
  const listItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    });
    setInputList("");

  }
  const deleteItems=(id)=>{
    console.log('Item deleted');
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;

      })
    })
        }
  
  return(
    <>

<div className='main_div'>
  <div className='center_div'>
    <br />
    <h1>ToDo list 🤙</h1>
    <br/>
    <input type='text' placeholder='ADD a item' onChange={itemEvent}
      value={inputList}
    />
    <button onClick={listItems}>Add 📌</button>
    <br/>
    <ol>
    {items.map((cvalue,index)=>{
      return(
      <Todo
      key={index}
      id={index}
        text={cvalue}
        onSelect={deleteItems}
      />)
    })}
    
    </ol>
  
</div>
</div>
      
    </>
  )



}
export default App;