import './App.css';
import {useAllUsers} from "./hooks/useAllUsers";
import { UserCard } from './components/UserCard';

function App2() {
  //カスタムフックからApiを呼ぶ関数とstate３種類をオブジェクトで受け取り、展開。
  const {getUsers, userProfiles,loading,error} = useAllUsers();

  //カスタムフックから取り出した関数をイベントに当てる。
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>エラーです</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <>
          {
            userProfiles.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          }
        </>)}

    </div>
  );
}

export default App2;