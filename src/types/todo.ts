//type 型の名前= 定義した型　: 定義した複数の型を別の名前で登録する。プロパティは';'で区切る
//key?: boolean; : keyの後に'?'をつけるとそのプロパティをpropsで送るかは任意になる。
// 共通化する場合はpropsを受け取る方でPickやOmitを使い、必要なプロパティだけを受け取るように指定する。
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};