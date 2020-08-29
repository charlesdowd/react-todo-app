import React, { useCallback } from 'react';
import './App.css';

function randomNumberGen() {
  return Math.random(0,100)
}

function App() {
  const [ toDoList, setToDoList ] = React.useState([])
  const [ input, setInput ] = React.useState('')
  
  const handleInputChange = useCallback((event) => {
    setInput(event.target.value)
  }, [])

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
        
        <form>
          <label htmlFor='newTodo'>Enter "To Do" : </label>
          <input
            id='newTodo'
            name='newTodo'
            value={input} 
            onChange={handleInputChange}/>
        </form>
        
        <button disabled={input.trim().length === 0}
        onClick={handleSubmit}>Submit</button>

        <ul>
          {toDoList.map(({ id, text }) => (
            <div>
              {console.log({id})}
              <li key={id}>
                <span>{text}</span>
                <button onClick={() => deleteToDo(id)}>Remove To Do</button> 
              </li>
            </div>
          ))}
        </ul>
    </div>

  );
}

export default App;
