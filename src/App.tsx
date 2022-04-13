import './App.css';
import axios from 'axios';
import {useState} from "react";
import { Todo } from './Todo';
import { TodoType } from "./types/todo";
import { Text } from './Text';
import { UserProfile } from './UserProfile';

const user = {
  name: "tom",
  hobbies: ["映画","ゲーム"]
}

function App() {

  // メソッド<型引数>(引数) : 型引数の型に応じて戻り値の型が変化する。配列が戻り値のuseState()はそれぞれ文字列、文字列を返す関数が配列の要素になる。
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    //メソッド<戻り値の型>() : メソッドの戻り値の型を指定。この場合はnumber,number,string,booleanを持つTodoTypeの配列を指定。
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  /**ReactElementを返す方法
   * 1つ目: (() => {return (value);})
   * 2つ目: (() => (value))
   */
  return (
    <div className="App">
      <UserProfile user={user}/>
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
        )
      })}
    </div>
  );
}

export default App;
