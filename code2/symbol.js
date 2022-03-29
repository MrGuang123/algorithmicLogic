// symbol实现
/**
 * tc39文档地址：https://tc39.es/ecma262/#sec-symbol-objects
 * github polyfill: https://github.com/medikoo/es6-symbol
 * symbol特点：
 * 1. 函数，参数为字符串，返回值类型为symbol
 * 2. 唯一性，两个相同参数返回值不相等
 * 3. 不允许作为构造器使用
 * 4. 不允许隐式转换为字符串、数字，可以转为布尔值
 * 5. 两个静态方法为for和keyFor
 */
// TODO: 时间有限，抽时间重新梳理完整逻辑

var created = Object.create(null);
const generateName = function (desc) {
  var postfix = 0, name, ie11BugWorkaround;
  while (created[desc + (postfix || "")]) ++postfix;
  desc += postfix || "";
  created[desc] = true;
  name = "@@" + desc;
  Object.defineProperty(
    Object.prototype,
    name,
    {
      get: function (value) {
        if (ie11BugWorkaround) return;
        ie11BugWorkaround = true;
        Object.defineProperty(this, name, {
          value,
          configurable: true,
          enumerable: false,
          writable: true
        });
        ie11BugWorkaround = false;
      },
      configurable: true,
      enumerable: false
    }
  );
  return name;
};

const HiddenSymbol = function (description) {
  if (this instanceof HiddenSymbol) throw new TypeError("Symbol is not a constructor");
  return SymbolPolyfill(description);
};

const SymbolPolyfill = function (description) {
  var symbol;
  // 不允许作为构造器使用
  if (this instanceof Symbol) throw new TypeError("Symbol is not a constructor");
  // 如果有原生Symbol返回原生的
  if (window.Symbol) return window.Symbol(description);

  symbol = Object.create(HiddenSymbol.prototype);
  description = description === undefined ? "" : String(description);

  return defineProperties(symbol, {
    __description__: {
      value: description,
      configurable: true,
      enumerable: false,
      writable: true
    },
    __name__: {
      value: generateName(description),
      configurable: true,
      enumerable: false,
      writable: true
    }
  });
};

const s1 = SymbolPolyfill('hello')
const s2 = SymbolPolyfill('hello')
console.log(s1 === s2)