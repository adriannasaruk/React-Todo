import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css"


const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077453,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Go Shopping',
    id: 1528817077586,
    completed: false
  },
  {
    task: 'Bring Kids to School',
    id: 1528817034558,
    completed: false
  },
  {
    task: 'Clean the House',
    id: 152881694286,
    completed: false
  },
  {
    task: 'Wash the windows',
    id: 1528817482358,
    completed: false
  }
]

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todo,
      task : ""
    };
  }
  toggleCompleted = clickedTaskId => {
    this.setState ({
        todo : this.state.todo.map(item => {
            if (item.id === clickedTaskId) {
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            else {
                return item;
            }
        })
    })
  }

clearCompleted = () => {
   const uncompTask = this.state.todo.filter(task => !task.completed )

  this.setState ({
    todo : uncompTask
  })
   
  
}

  addTask = taskName => {
    const newTask = {
      task : taskName,
      id: new Date (),
      completed: false
    }
    this.setState ({
      todo: [...this.state.todo, newTask]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "container">
        <div className = "header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask = {this.addTask}
        clearCompleted = {this.clearCompleted}/>
        </div>
        <div className = "body">
        <TodoList 
        todo = {this.state.todo}
        toggleCompleted = {this.toggleCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;
