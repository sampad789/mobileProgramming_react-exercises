import React, { Component } from 'react';
import './App.css';
class TodoTable extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {todos: []}
    }

    render() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr><th>Date</th><th>Description</th><th>Action</th></tr>
                        {this.props.todos.map((item, index) =>
                            <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td><button onClick={this.props.delete} id={index}>Delete</button></td></tr>
                        )}
                    </tbody>
                </table>
            </div>       
        )
    }
}
export default TodoTable;