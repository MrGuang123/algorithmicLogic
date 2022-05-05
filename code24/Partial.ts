// https://bigfrontend.dev/zh/typescript/implement-Partial-T
type MyPartial<T> = { [key in keyof T]: T[key] }