// https://bigfrontend.dev/zh/problem/immerjs
function produce(base, recipe) {
  // 拷贝数据
  let produced = JSON.parse(JSON.stringify(base));
  // 传递给回调
  recipe(produced);
  // 对比如果相同，将原始数据赋值给拷贝数据
  if (compare(base, produced)) {
    produced = base;
  }

  // 返回拷贝数据
  return produced;
}

const compare = (base, produced) => {
  // base和produced类型应该相同
  if (typeof base !== typeof produced) {
    return false;
  }
  // 如果不是对象，直接对比原始值是否相同
  if (typeof base !== 'object') {
    return base == produced;
  }
  // 深度对比是否相同
  let equal = true;
  for (const key in produced) {
    if (key in base) {
      if (compare(base[key], produced[key])) {
        produced[key] = base[key];
      } else {
        equal = false;
      }
    } else {
      equal = false;
    }
  }
  for (const key in base) {
    if (!(key in produced)) {
      equal = false;
    }
  }
  return equal;
}