const partialAssign: (target: any, source: any) => any = (target, source) => {
  if (!(source instanceof Object)) {
    return source;
  }
  Object.keys(source).forEach(key => {
    if (source[key] instanceof Function) {
      target[key] = source[key];
    } else if (source[key] instanceof Array) {
      target[key] = [...source[key]];
    } else if (source[key] instanceof Object) {
      target[key] = {};
      partialAssign(target[key], source[key])
    } else {
      target[key] = source[key];
    }
  })
  return target;
}

const deepAssign = (...objs: any) => objs.reduce(partialAssign);

export default deepAssign;
