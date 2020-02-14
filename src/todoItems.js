import React from "react";
import "./App.css";

class TodoItems extends React.Component {
    render() {
        const changeStyle = {
            color : "green",
            fontStyle : "italic",
            textDecoration : "line-through"
        }
        return (
            <div className="todo-item">
                <input type="checkbox" 
                checked = {this.props.item.completed} 
                onChange= {() => this.props.handleChange(this.props.item.id)}/>
                <p style={this.props.item.completed ? changeStyle : null}>{this.props.item.info}</p>
            
            </div>
        );
    }
}

export default TodoItems;