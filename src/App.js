import React from 'react';
import './App.css';

function App() {
  const [ toDoList, setToDoList ] = React.useState([])
  const [ input, setInput ] = React.useState('')
  
  const handleSubmit = () => {
    setToDoList((toDoList) => toDoList.concat(input))
    setInput('')
  }

  return (
    <div className="App">
        <h1>My To Do List</h1>
        
        <input
        type='text'
        placeholder='To Do...'
        value={input} 
        onChange={(e) => setInput(e.target.value)}/>
        
        <button disabled={input.trim().length === 0}
        onClick={handleSubmit}>Submit</button>

        <ul>
          {toDoList.map((todo) => (
            <li>
              {todo}
            </li>
          ))}
        </ul>
    </div>

  );
}

export default App;
