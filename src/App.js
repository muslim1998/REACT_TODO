import { createContext, useState } from 'react';
import { Form } from './components/Form/Form'
import { Todo } from './components/Todos/Todo'
export const TodoContext = createContext('')


const initialDate = [
  {
    title: 'Red a book',
    text: 'At lease 10 pages by 10 PM',
    create: new Date(),
    status:'new'
  },
  {
    title: 'Implement a calc app',
    text: 'Use only React and ContextAPI',
    create: new Date(),
    status: 'new'
  },
  
]




function App() {

  const [todos, setTodos] = useState(initialDate) //Начальное значение
  
  const addTask = (t) => {
    setTodos([...todos,t])
  }

  const onDelete = (index) => {
    setTodos(todos.filter((t, inx) => inx !== index ))
  }

  const onDone = (index) => {
    setTodos(todos.map((t, inx) => {
      if (index === inx) {
        return {
          ...t,
          status:'done',
        }
      }
        return t
    }))
  }

  const onDeleteAll = () => {
    setTodos([])
  }

  const onMarlAllDone = () => {
    setTodos(todos.map(t => {
      return {...t, status: 'done'}
    }))
  }

  return (
    <TodoContext.Provider value={todos}>
      <div className='todos'>
          <h1>Todo App using React</h1>
          <Form addTask={ addTask }/>
        <Todo onDone={onDone} onDelete={onDelete} />
        <div>
          <button className='onDelete' onClick={onDeleteAll}>Delete all</button>
          <button className='onMarlAllDone' onClick={onMarlAllDone}>Mark  all as  done</button>
        </div>
    </div>
    </TodoContext.Provider>
  )
}
export default App;
