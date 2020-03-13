import React, { Component } from 'react'

export class TodoList extends Component {
    render() {
        return (
            <div className="container col-md-10 mt-3  ">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                    </div>
                </div>
            </div>
        )
    }
}export default TodoList;
