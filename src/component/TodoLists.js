import React, { Component } from 'react'
import TodoList from './TodoList'
import axios from "axios";

class TodoLists extends Component {
    state = {
        list:[]
    }
    constructor(props){
        super(props);
    }

    componentDidMount = async () =>{

        const response = await axios.get("http://localhost:8080/todolist/get?userId=1")
        this.setState({
            list : response.data
        })
    }
    render() {

        return (
            <div>
                {this.state.list.map(list=> <TodoList name={list.name}/> )}
            </div>
        )
    }
}
export default TodoLists