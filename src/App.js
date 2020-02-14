import React from 'react';
import './App.css';
import todoData from "./todoData";
import TodoItems from "./todoItems";

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      todos : todoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed : !todo.completed
            }
          }
          return todo
        })
        return {
          todos : updatedTodos
        }
      })
    }
  render() {
    const list = this.state.todos.map(item => <TodoItems key={item.id} item={item} handleChange={this.handleChange}/>)
    return(
      <div className="todo-list">
        <h1>To Do List</h1>
        {list}
      </div>
    );
  }
}

export default App;
