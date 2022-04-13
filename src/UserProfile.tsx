import {VFC} from "react";
import { User } from "./types/user";

type Props = {
  user: User;
}

export const UserProfile: VFC<Props> = (props) => {
  const {user} = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* 値?.メソッド() : 条件分岐により値がundefinedのときがある。
      値が存在するならメソッドを実行し、undefinedなら'?.以降のメソッドを実行せず、undefinedを返す' 
      (JavaでいうOptional)*/}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  )
}