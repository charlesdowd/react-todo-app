import React from 'react';
import './App.css';

function randomNumberGen() {
  return Math.random(0,100)
}

function App() {
  const [ toDoList, setToDoList ] = React.useState([])
  const [ input, setInput ] = React.useState('')
  
  const handleSubmit = () => {
    setToDoList((toDoList) => toDoList.concat({
      id: randomNumberGen(),
      text: input
    }))
    setInput('')
  }

  const deleteToDo = (id) => setToDoList((toDoList) => toDoList.filter((t) => t.id !== id))
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
          {toDoList.map(({ id, text }) => (
            <div>
              {console.log({id})}
              <li key={id}>
                <span>{text}</span>
              </li>
              <button onClick={() => deleteToDo(id)}>X</button>  
            </div>
          ))}
        </ul>
    </div>

  );
}

export default App;
