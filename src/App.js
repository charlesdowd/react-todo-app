import React from 'react';
import './App.css';

function App() {
  const [ toDoList, setToDoList ] = React.useState([])
  const [ input, setInput ] = React.useState('')
  
  console.log(input)

  return (
    <div className="App">
        <h1>My To Do List</h1>
        <input
        type='text'
        placeholder='To Do...'
        value={input} 
        onChange={(e) => setInput(e.target.value)}/>
        <button disabled={input.trim().length === 0}>Submit</button>
    </div>

  );
}

export default App;
