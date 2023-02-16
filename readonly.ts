let obj: {
  readonly num: number;
};

obj = { num: 1 }
// obj.num = 2 (readonly修飾子で読み取り専用になっている為に代入不可)

