import TodoListApp from "./components/todo-list/todo";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter  >
            <TodoListApp/>
        </BrowserRouter>
    );
}

export default App;
