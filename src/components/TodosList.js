import react from "react";
import TodoItem from "./TodoItem";

class TodosList extends react.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))}
            </ul>
        );
    }
}

export default TodosList