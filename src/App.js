import logo from './logo.svg';
import './App.css';
import { TodoList } from './todolist/TodoList'

function App() {
  return (
    <div className='flex bg-slate-800 justify-center w-screen h-screen p-2'>
        <TodoList />
    </div>
  );
}

export default App;
