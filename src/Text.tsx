import {FC} from "react";

type Props = {
  color: string;
  fontSize: string;
}
/**
 * react17ではFCはchildrenも暗黙的に含む。
 * export const コンポーネント名: FC<型> = コンポーネント : コンポーネントの型指定。
 * FCで関数コンポーネントに型定義を行える。VFCはタグで囲んだ要素(children)を含まない。
 */

export const Text: FC<Props> = (props) => {
  const {color,fontSize} = props;
  {/* reactのstyleはプロパティと値が同じなら値を省略できる。例: fontSize: fontSize */}
  return <p style={{color,fontSize}}>テキストです</p>
}

export const Text2 = (props: Props) => {
  const {color,fontSize} = props;
  return <p style={{color,fontSize}}>テキストです</p>
}