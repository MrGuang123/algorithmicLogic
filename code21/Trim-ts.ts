// https://bigfrontend.dev/zh/typescript/Trim
type Trim<T extends string> = T extends ` ${infer Left}` ? Trim<Left> :
  (T extends `${infer Right} ` ? Trim<Right> : T);