import { TodoType } from "./types/todo";

//propsで受け取る引数の型を定義。titleがstring,userIdがnumber,completedがbooleanのものだけを受け取る
// propsを作成したTodoTypeに指定。プロパティの型や数が違うと呼び出し元にエラーが発生する。
/**
 * 共通化したオブジェクトの型定義から指定したプロパティのみをpropsにとる方法
 * 1つ目: Pick<型, "property1" | "property2" ...> : 指定したプロパティをpropsにとる。
 * 2つ目: Omit<型, "property1" | "property2" ...> : 指定したプロパティ以外をpropsにとる。
 */

//Pick<TodoType, "userId" | "title" | "completed">
export const Todo = (props : Omit<TodoType, "id">) => {
  const {title,userId,completed=false} = props;
  const completeMark = completed ? "[完]" : "[未]";
  return (
    <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
  );
}