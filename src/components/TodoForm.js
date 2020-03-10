import React from "react"

class TodoForm extends React.Component {
    constructor () {
        super ();
        this.state = {
            task : ""
        }
    }
  

    handleChanges = e => {
        this.setState({
            task : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({
            task: '',
        })
    }

   


    render(){
        return (
            <div className = "container1">
            <form onSubmit = {this.handleSubmit} className = "form" >
                <input
                type = "text"
                name = "task"
                value = {this.state.task}
                onChange = {this.handleChanges}
                />
                <br></br>
                <br></br>
                <button className = "button" type = "submit">Add Todo</button>
            </form>
            <button className = "button" onClick = {this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm