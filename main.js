!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('3');
  module.exports = function (it) {
    return Object(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('4', ['5', '6', '2', '7', '8', '9', 'a', 'b'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('5'),
      $export = $__require('6'),
      toObject = $__require('2'),
      call = $__require('7'),
      isArrayIter = $__require('8'),
      toLength = $__require('9'),
      getIterFn = $__require('a');
  $export($export.S + $export.F * !$__require('b')(function (iter) {
    Array.from(iter);
  }), 'Array', { from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    } });
  return module.exports;
});
$__System.registerDynamic('c', ['d', '4', 'e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('d');
  $__require('4');
  module.exports = $__require('e').Array.from;
  return module.exports;
});
$__System.registerDynamic("f", ["c"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("c"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("10", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var define,
      global = this || self,
      GLOBAL = global;
  return module.exports;
});
$__System.registerDynamic('11', ['12', '3'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('12'),
      defined = $__require('3');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});
$__System.registerDynamic('d', ['11', '13'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('11')(true);
  $__require('13')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});
$__System.registerDynamic("14", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function () {/* empty */};
  return module.exports;
});
$__System.registerDynamic("15", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
  return module.exports;
});
$__System.registerDynamic('16', ['17'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('17');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});
$__System.registerDynamic("3", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('18', ['16', '3'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('16'),
      defined = $__require('3');
  module.exports = function (it) {
    return IObject(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('19', ['1a', '1b', '1c', '1d', '1e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('1a'),
      descriptor = $__require('1b'),
      setToStringTag = $__require('1c'),
      IteratorPrototype = {};
  $__require('1d')(IteratorPrototype, $__require('1e')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});
$__System.registerDynamic('13', ['1f', '6', '20', '1d', '21', '22', '19', '1c', '1a', '1e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('1f'),
      $export = $__require('6'),
      redefine = $__require('20'),
      hide = $__require('1d'),
      has = $__require('21'),
      Iterators = $__require('22'),
      $iterCreate = $__require('19'),
      setToStringTag = $__require('1c'),
      getProto = $__require('1a').getProto,
      ITERATOR = $__require('1e')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});
$__System.registerDynamic('23', ['14', '15', '22', '18', '13'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('14'),
      step = $__require('15'),
      Iterators = $__require('22'),
      toIObject = $__require('18');
  module.exports = $__require('13')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});
$__System.registerDynamic('24', ['23', '22'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('23');
  var Iterators = $__require('22');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});
$__System.registerDynamic("1f", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
  return module.exports;
});
$__System.registerDynamic('6', ['25', 'e', '5'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('25'),
      core = $__require('e'),
      ctx = $__require('5'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});
$__System.registerDynamic("26", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('7', ['27'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('27');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});
$__System.registerDynamic('8', ['22', '1e'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('22'),
        ITERATOR = $__require('1e')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    return module.exports;
});
$__System.registerDynamic("12", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});
$__System.registerDynamic('9', ['12'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('12'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});
$__System.registerDynamic('28', ['17', '1e'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('17'),
        TAG = $__require('1e')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    return module.exports;
});
$__System.registerDynamic("22", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
  return module.exports;
});
$__System.registerDynamic('a', ['28', '1e', '22', 'e'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('28'),
        ITERATOR = $__require('1e')('iterator'),
        Iterators = $__require('22');
    module.exports = $__require('e').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    return module.exports;
});
$__System.registerDynamic('29', ['5', '7', '8', '27', '9', 'a'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var ctx = $__require('5'),
      call = $__require('7'),
      isArrayIter = $__require('8'),
      anObject = $__require('27'),
      toLength = $__require('9'),
      getIterFn = $__require('a');
  module.exports = function (iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      call(iterator, f, step.value, entries);
    }
  };
  return module.exports;
});
$__System.registerDynamic('2a', ['1a', '2b', '27', '5'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var getDesc = $__require('1a').getDesc,
      isObject = $__require('2b'),
      anObject = $__require('27');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
      try {
        set = $__require('5')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});
$__System.registerDynamic("2c", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});
$__System.registerDynamic('27', ['2b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2b');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('2d', ['27', '2e', '1e'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var anObject = $__require('27'),
        aFunction = $__require('2e'),
        SPECIES = $__require('1e')('species');
    module.exports = function (O, D) {
        var C = anObject(O).constructor,
            S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
    return module.exports;
});
$__System.registerDynamic('2e', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('5', ['2e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('2e');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
$__System.registerDynamic("2f", [], true, function ($__require, exports, module) {
                  var define,
                      global = this || self,
                      GLOBAL = global;
                  // fast apply, http://jsperf.lnkit.com/fast-apply/5
                  module.exports = function (fn, args, that) {
                                    var un = that === undefined;
                                    switch (args.length) {
                                                      case 0:
                                                                        return un ? fn() : fn.call(that);
                                                      case 1:
                                                                        return un ? fn(args[0]) : fn.call(that, args[0]);
                                                      case 2:
                                                                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                                      case 3:
                                                                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                                      case 4:
                                                                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                                    }return fn.apply(that, args);
                  };
                  return module.exports;
});
$__System.registerDynamic('30', ['25'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('25').document && document.documentElement;
  return module.exports;
});
$__System.registerDynamic('2b', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});
$__System.registerDynamic('31', ['2b', '25'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var isObject = $__require('2b'),
        document = $__require('25').document,
        is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
        return is ? document.createElement(it) : {};
    };
    return module.exports;
});
$__System.registerDynamic('32', ['5', '2f', '30', '31', '25', '17', '33'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var ctx = $__require('5'),
        invoke = $__require('2f'),
        html = $__require('30'),
        cel = $__require('31'),
        global = $__require('25'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function () {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function (event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('17')(process) == 'process') {
        defer = function (id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function (id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function (id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function (id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('33'));
  return module.exports;
});
$__System.registerDynamic("17", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});
$__System.registerDynamic('34', ['25', '32', '17', '33'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var global = $__require('25'),
        macrotask = $__require('32').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('17')(process) == 'process',
        head,
        last,
        notify;
    var flush = function () {
      var parent, domain, fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain) domain.enter();
        fn();
        if (domain) domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent) parent.enter();
    };
    if (isNode) {
      notify = function () {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true });
      notify = function () {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function () {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function () {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('33'));
  return module.exports;
});
$__System.registerDynamic("1b", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});
$__System.registerDynamic('1d', ['1a', '1b', '35'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('1a'),
      createDesc = $__require('1b');
  module.exports = $__require('35') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});
$__System.registerDynamic('20', ['1d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('1d');
  return module.exports;
});
$__System.registerDynamic('36', ['20'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var redefine = $__require('20');
  module.exports = function (target, src) {
    for (var key in src) redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});
$__System.registerDynamic("21", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});
$__System.registerDynamic('1c', ['1a', '21', '1e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('1a').setDesc,
      has = $__require('21'),
      TAG = $__require('1e')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
  return module.exports;
});
$__System.registerDynamic("1a", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});
$__System.registerDynamic("37", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
$__System.registerDynamic('35', ['37'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('37')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
$__System.registerDynamic('38', ['e', '1a', '35', '1e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var core = $__require('e'),
      $ = $__require('1a'),
      DESCRIPTORS = $__require('35'),
      SPECIES = $__require('1e')('species');
  module.exports = function (KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };
  return module.exports;
});
$__System.registerDynamic('39', ['25'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('25'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
    return module.exports;
});
$__System.registerDynamic('3a', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});
$__System.registerDynamic('25', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('1e', ['39', '3a', '25'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('39')('wks'),
        uid = $__require('3a'),
        Symbol = $__require('25').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
    return module.exports;
});
$__System.registerDynamic('b', ['1e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('1e')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});
$__System.registerDynamic('3b', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
    return module.exports;
});
$__System.registerDynamic("3c", ["3b"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("3b");
  return module.exports;
});
$__System.registerDynamic('3d', ['3c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('3c');
  return module.exports;
});
$__System.registerDynamic("33", ["3d"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("3d");
  return module.exports;
});
$__System.registerDynamic('3e', ['1a', '1f', '25', '5', '28', '6', '2b', '27', '2e', '26', '29', '2a', '2c', '1e', '2d', '34', '35', '36', '1c', '38', 'e', 'b', '33'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var $ = $__require('1a'),
        LIBRARY = $__require('1f'),
        global = $__require('25'),
        ctx = $__require('5'),
        classof = $__require('28'),
        $export = $__require('6'),
        isObject = $__require('2b'),
        anObject = $__require('27'),
        aFunction = $__require('2e'),
        strictNew = $__require('26'),
        forOf = $__require('29'),
        setProto = $__require('2a').set,
        same = $__require('2c'),
        SPECIES = $__require('1e')('species'),
        speciesConstructor = $__require('2d'),
        asap = $__require('34'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        empty = function () {},
        Wrapper;
    var testResolve = function (sub) {
      var test = new P(empty),
          promise;
      if (sub) test.constructor = function (exec) {
        exec(empty, empty);
      };
      (promise = P.resolve(test))['catch'](empty);
      return promise === test;
    };
    var USE_NATIVE = function () {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
        if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('35')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', { get: function () {
              thenableThenGotten = true;
            } }));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function (a, b) {
      if (LIBRARY && a === P && b === Wrapper) return true;
      return same(a, b);
    };
    var getConstructor = function (C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function (it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function (C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function (exec) {
      try {
        exec();
      } catch (e) {
        return { error: e };
      }
    };
    var notify = function (record, isReject) {
      if (record.n) return;
      record.n = true;
      var chain = record.c;
      asap(function () {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok) record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject) setTimeout(function () {
          var promise = record.p,
              handler,
              console;
          if (isUnhandled(promise)) {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({
                promise: promise,
                reason: value
              });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          }
          record.a = undefined;
        }, 1);
      });
    };
    var isUnhandled = function (promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h) return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise)) return false;
      }
      return true;
    };
    var $reject = function (value) {
      var record = this;
      if (record.d) return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function (value) {
      var record = this,
          then;
      if (record.d) return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function () {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('36')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a) record.a.push(reaction);
          if (record.s) notify(record, false);
          return promise;
        },
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: P });
    $__require('1c')(P, PROMISE);
    $__require('38')(PROMISE);
    Wrapper = $__require('e')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, { reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      } });
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, { resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this)) return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      } });
    $export($export.S + $export.F * !(USE_NATIVE && $__require('b')(function (iter) {
      P.all(iter)['catch'](function () {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function () {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining) $.each.call(values, function (promise, index) {
            var alreadyCalled = false;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              results[index] = value;
              --remaining || resolve(results);
            }, reject);
          });else resolve(results);
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('33'));
  return module.exports;
});
$__System.registerDynamic('e', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('3f', ['10', 'd', '24', '3e', 'e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('10');
  $__require('d');
  $__require('24');
  $__require('3e');
  module.exports = $__require('e').Promise;
  return module.exports;
});
$__System.registerDynamic("40", ["3f"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("3f"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("41", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = [{ "code": "9911", "name": "Admont", "height": 637, "bundesland": "Stmk.", "long": 14.49083333, "lat": 47.59472222, "snow": ["9999", "9999", "9999", "9999", "9999", "4", "8", "2", "", "25", "8", "12", "48", "5", "20", "26", "37", "10", "13", "29", "12", "", "2", "9999", "9999", "9999", "32", "13", "9", "", "25", "38", "33", "", "8", "7", "35", "", "13", "8", "24", "31", "15", "19", "24", "5", "14", "", "23", "9", "27", "44", "", "23", "4", "88", "2", "20", "5", "", "21", "30", "15", "5", "", ""], "avg": 19.96551724137931, "max": { "value": 88, "year": 2005 } }, { "code": "9801", "name": "Aigen im Ennstal", "height": 641, "bundesland": "Stmk.", "long": 14.13833333, "lat": 47.53277778, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "13", "33", "15", "22", "", "6", "17", "3", "", "", "30", "14", "", "13", "", "", "", "16", "33", "20", "", "6", "", "25", "", "", "6", "6", "18", "", "4", "24", "2", "9", "", "2", "", "8", "8", "", "13", "", "29", "", "2", "", "", "10", "20", "4", "", "", ""], "avg": 20.886792452830186, "max": { "value": 33, "year": 1964 } }, { "code": "9643", "name": "Bad Aussee", "height": 743, "bundesland": "Stmk.", "long": 13.7584444, "lat": 47.6105, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "2", "", "17", "9", "21", "100", "10", "28", "22", "55", "20", "10", "40", "12", "", "", "70", "50", "4", "40", "2", "", "", "20", "55", "20", "", "6", "16", "60", "", "30", "10", "40", "20", "10", "20", "15", "10", "15", "", "25", "20", "25", "60", "", "20", "10", "100", "", "37", "", "", "54", "50", "15", "8", "", ""], "avg": 23.71186440677965, "max": { "value": 100, "year": 1962 } }, { "code": "20002", "name": "Bad Bleiberg", "height": 909, "bundesland": "Ktn.", "long": 13.68444444, "lat": 46.62527778, "snow": ["79", "", "34", "22", "", "2", "38", "5", "", "29", "42", "42", "50", "20", "20", "53", "30", "9", "74", "55", "12", "26", "16", "", "1", "24", "20", "20", "55", "60", "75", "80", "20", "20", "28", "13", "14", "13", "", "", "49", "34", "25", "9", "42", "10", "", "", "23", "23", "9", "8", "5", "3", "", "44", "16", "6", "65", "9", "16", "5", "7", "", "", "2"], "avg": 100.69696969696973, "max": { "value": 80, "year": 1981 } }, { "code": "15501", "name": "Bad Gastein", "height": 1092, "bundesland": "Sbg.", "long": 13.13333333, "lat": 47.11055556, "snow": ["35", "7", "19", "30", "27", "4", "23", "1", "", "10", "50", "1", "46", "16", "36", "37", "35", "16", "15", "24", "7", "2", "10", "25", "44", "22", "22", "8", "10", "28", "54", "50", "48", "2", "25", "38", "46", "3", "18", "3", "20", "50", "25", "12", "40", "10", "5", "5", "40", "28", "25", "53", "17", "10", "3", "70", "20", "20", "20", "", "", "28", "10", "20", "", ""], "avg": 56.106060606060616, "max": { "value": 70, "year": 2005 } }, { "code": "9618", "name": "Bad Ischl", "height": 507, "bundesland": "OÖ", "long": 13.64722222, "lat": 47.70611111, "snow": ["13", "", "20", "19", "15", "", "6", "3", "", "6", "6", "26", "66", "16", "16", "", "28", "6", "3", "40", "33", "", "", "42", "14", "5", "30", "", "", "", "42", "45", "22", "5", "", "", "49", "", "21", "4", "26", "5", "", "", "25", "", "7", "", "18", "12", "4", "42", "", "23", "", "62", "", "5", "", "", "29", "12", "10", "", "", ""], "avg": 26.151515151515152, "max": { "value": 66, "year": 1962 } }, { "code": "13702", "name": "Bernstein", "height": 631, "bundesland": "Bgld.", "long": 16.26138889, "lat": 47.40833333, "snow": ["7", "", "2", "", "", "1", "18", "1", "", "6", "", "1", "22", "18", "10", "2", "1", "", "8", "15", "4", "", "", "", "", "5", "", "", "6", "", "5", "20", "9", "", "1", "", "14", "", "7", "", "9999", "5", "2", "", "22", "10", "2", "", "7", "2", "1", "19", "", "", "", "", "", "10", "", "", "", "", "", "", "", ""], "avg": 10.938461538461533, "max": { "value": 22, "year": 1962 } }, { "code": "11104", "name": "Bregenz", "height": 424, "bundesland": "Vbg.", "long": 9.746111111, "lat": 47.49916667, "snow": ["11", "", "", "", "", "", "15", "", "1", "", "3", "0", "15", "3", "", "", "5", "", "", "25", "16", "", "", "", "", "4", "14", "", "4", "4", "", "15", "6", "", "", "", "14", "", "", "", "4", "", "", "", "", "", "1", "", "8", "4", "", "14", "", "2", "", "4", "", "", "", "", "10", "", "", "", "", ""], "avg": 13.901515151515154, "max": { "value": 25, "year": 1969 } }, { "code": "14802", "name": "Brenner", "height": 1372, "bundesland": "Tirol", "long": 11.50722222, "lat": 47.0075, "snow": ["62", "", "56", "10", "9999", "9999", "22", "21", "40", "70", "69", "5", "82", "23", "20", "70", "80", "15", "15", "42", "8", "28", "20", "55", "32", "45", "28", "13", "17", "64", "40", "70", "37", "53", "24", "12", "32", "9", "33", "1", "60", "40", "108", "23", "18", "10", "37", "25", "20", "71", "9", "43", "5", "20", "17", "59", "21", "38", "70", "31", "40", "40", "39", "15", "", ""], "avg": 95.125, "max": { "value": 108, "year": 1992 } }, { "code": "13302", "name": "Bruck/Mur", "height": 482, "bundesland": "Stmk.", "long": 15.24972222, "lat": 47.40555556, "snow": ["37", "1", "4", "5", "4", "6", "6", "", "", "5", "3", "3", "18", "21", "", "4", "", "", "14", "20", "0", "", "", "14", "6", "", "", "", "5", "", "", "17", "28", "", "", "", "19", "", "1", "", "", "18", "", "", "20", "4", "2", "", "2", "2", "", "2", "", "9", "", "11", "", "", "", "", "9", "1", "2", "", "", ""], "avg": 41.340909090909115, "max": { "value": 37, "year": 1950 } }, { "code": "18906", "name": "Deutschlandsberg", "height": 354, "bundesland": "Stmk.", "long": 15.22666667, "lat": 46.82138889, "snow": ["9", "", "12", "6", "", "2", "12", "", "", "", "", "24", "32", "34", "", "", "", "", "13", "30", "4", "", "", "", "", "", "", "", "8", "3", "5", "18", "5", "", "5", "", "", "", "", "", "", "", "", "", "65", "5", "1", "", "", "10", "", "1", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], "avg": 13.469696969696974, "max": { "value": 65, "year": 1994 } }, { "code": "18001", "name": "Döllach", "height": 1071, "bundesland": "Ktn.", "long": 12.9025, "lat": 46.96333333, "snow": ["45", "", "23", "32", "58", "2", "", "", "11", "40", "73", "5", "34", "3", "36", "40", "28", "", "48", "11", "3", "8", "", "20", "12", "59", "9999", "2", "20", "80", "16", "30", "10", "10", "3", "", "23", "", "", "1", "58", "50", "15", "15", "8", "5", "5", "", "6", "", "3", "", "", "", "", "26", "", "", "55", "3", "6", "9999", "9999", "9999", "9999", "9999"], "avg": 61.59999999999999, "max": { "value": 80, "year": 1979 } }, { "code": "7704", "name": "Eisenstadt", "height": 184, "bundesland": "Bgld.", "long": 16.53861111, "lat": 47.85388889, "snow": ["3", "", "", "", "", "", "2", "", "", "", "", "2", "3", "7", "2", "9", "", "", "1", "39", "7", "", "", "", "", "", "", "", "1", "", "", "2", "", "", "", "", "0", "", "", "", "3", "", "", "", "20", "", "5", "", "1", "", "", "", "1", "", "", "", "", "", "", "", "", "", "3", "", "", ""], "avg": 4.643939393939396, "max": { "value": 39, "year": 1969 } }, { "code": "11115", "name": "Feldkirch", "height": 438, "bundesland": "Vbg.", "long": 9.609722222, "lat": 47.27111111, "snow": ["5", "", "2", "", "", "", "6", "", "", "", "10", "", "33", "5", "", "", "8", "1", "", "6", "8", "", "", "", "", "1", "10", "", "", "", "2", "40", "", "", "", "", "27", "", "", "", "12", "", "", "", "2", "", "", "", "1", "2", "", "7", "", "9", "6", "10", "", "", "", "", "3", "8", "", "", "", ""], "avg": 8.31818181818182, "max": { "value": 40, "year": 1981 } }, { "code": "16601", "name": "Fürstenfeld", "height": 271, "bundesland": "Stmk.", "long": 16.08083333, "lat": 47.03083333, "snow": ["25", "", "3", "4", "", "4", "16", "", "", "", "", "9", "15", "30", "", "1", "", "", "6", "28", "1", "", "", "", "", "", "", "", "15", "", "6", "18", "1", "", "", "", "8", "", "", "", "2", "", "", "", "21", "4", "2", "", "10", "4", "", "", "", "", "", "", "", "3", "", "", "4", "", "", "", "", ""], "avg": 28.25757575757577, "max": { "value": 30, "year": 1963 } }, { "code": "17002", "name": "Galtür", "height": 1587, "bundesland": "Tirol", "long": 10.18555556, "lat": 46.96805556, "snow": ["50", "18", "110", "12", "80", "9", "20", "2", "61", "64", "40", "6", "160", "15", "50", "97", "114", "20", "21", "67", "21", "36", "34", "110", "109", "37", "78", "16", "26", "78", "41", "148", "16", "30", "10", "8", "49", "", "60", "24", "60", "80", "33", "55", "21", "25", "60", "33", "40", "36", "32", "20", "17", "45", "38", "60", "15", "77", "71", "38", "40", "90", "36", "3", "", ""], "avg": 94.27272727272731, "max": { "value": 160, "year": 1962 } }, { "code": "16501", "name": "Gleisdorf", "height": 377, "bundesland": "Stmk.", "long": 15.70805556, "lat": 47.11555556, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "11", "10", "21", "", "", "", "", "8", "8", "", "", "", "", "", "2", "", "", "12", "", "6", "20", "6", "", "", "", "13", "", "", "", "", "", "", "", "44", "13", "2", "", "8", "7", "", "5", "", "", "", "", "", "5", "", "", "17", "", "", "", "", ""], "avg": 14.763636363636364, "max": { "value": 44, "year": 1994 } }, { "code": "16412", "name": "Graz-Universität", "height": 367, "bundesland": "Stmk.", "long": 15.44888889, "lat": 47.07777778, "snow": ["5", "", "", "7", "", "5", "15", "", "", "", "", "14", "10", "19", "", "0", "", "", "14", "9", "1", "", "", "", "", "", "", "", "16", "", "7", "19", "1", "", "2", "", "12", "", "", "", "", "", "", "", "47", "7", "1", "", "3", "6", "", "1", "", "", "", "", "", "2", "", "", "8", "", "", "", "", ""], "avg": 8.431818181818185, "max": { "value": 47, "year": 1994 } }, { "code": "5972", "name": "Groß Enzersdorf", "height": 154, "bundesland": "NÖ", "long": 16.55916667, "lat": 48.19972222, "snow": ["", "", "", "", "1", "", "6", "", "", "", "", "1", "3", "3", "4", "11", "", "", "", "17", "3", "", "", "", "", "3", "", "", "", "", "", "14", "", "", "", "", "4", "", "", "", "", "", "", "", "11", "", "10", "", "", "", "1", "", "2", "", "", "", "", "", "", "", "", "", "2", "", "", ""], "avg": 1.4545454545454546, "max": { "value": 17, "year": 1969 } }, { "code": "5000", "name": "Hoersching", "height": 298, "bundesland": "OÖ", "long": 14.18805556, "lat": 48.23527778, "snow": ["5", "", "", "4", "", "", "2", "", "", "2", "", "7", "6", "12", "7", "1", "", "", "", "24", "11", "", "", "", "", "5", "", "", "", "", "", "10", "2", "", "3", "", "6", "", "", "", "", "", "", "", "13", "", "13", "", "2", "3", "2", "12", "", "3", "", "", "", "", "", "", "3", "", "", "", "", ""], "avg": 7.318181818181821, "max": { "value": 24, "year": 1969 } }, { "code": "2601", "name": "Hohenau", "height": 154, "bundesland": "NÖ", "long": 16.90444444, "lat": 48.61638889, "snow": ["1", "", "", "", "", "", "4", "", "", "", "", "2", "", "4", "1", "5", "1", "1", "4", "17", "6", "", "", "", "", "5", "", "", "", "", "", "9", "", "", "", "", "1", "", "", "", "", "", "", "", "5", "", "11", "", "", "1", "", "5", "2", "", "", "", "", "", "", "", "2", "", "0", "", "", ""], "avg": 2.31060606060606, "max": { "value": 17, "year": 1969 } }, { "code": "11402", "name": "Holzgau", "height": 1092, "bundesland": "Tirol", "long": 10.33861111, "lat": 47.2575, "snow": ["32", "21", "95", "4", "62", "6", "3", "2", "20", "22", "20", "9", "154", "13", "30", "44", "75", "10", "13", "54", "15", "22", "33", "53", "80", "25", "54", "12", "11", "28", "62", "120", "15", "20", "3", "14", "65", "", "31", "2", "29", "23", "16", "25", "20", "8", "38", "15", "29", "20", "2", "18", "1", "46", "26", "51", "8", "36", "34", "20", "28", "57", "45", "16", "1", ""], "avg": 61.303030303030305, "max": { "value": 154, "year": 1962 } }, { "code": "11804", "name": "Innsbruck Flughafen", "height": 578, "bundesland": "Tirol", "long": 11.35666667, "lat": 47.26, "snow": ["9999", "", "22", "4", "10", "", "12", "", "1", "12", "17", "", "96", "4", "11", "10", "25", "", "1", "19", "8", "7", "", "", "12", "7", "11", "", "", "1", "20", "24", "10", "", "", "", "16", "", "", "7", "3", "17", "2", "", "14", "", "5", "", "2", "13", "", "6", "", "4", "2", "30", "", "", "4", "", "", "20", "", "", "", ""], "avg": 7.523076923076921, "max": { "value": 96, "year": 1962 } }, { "code": "9811", "name": "Irdning-Gumpenstein", "height": 697, "bundesland": "Stmk.", "long": 14.09972222, "lat": 47.495, "snow": ["9999", "9999", "9999", "14", "36", "5", "8", "1", "8", "20", "20", "14", "40", "12", "25", "21", "26", "", "10", "18", "4", "", "", "34", "12", "2", "22", "2", "", "", "24", "30", "20", "2", "5", "4", "24", "", "7", "10", "16", "36", "10", "7", "24", "6", "13", "", "5", "4", "9", "14", "", "16", "", "32", "3", "5", "", "3", "21", "11", "10", "", "", ""], "avg": 25.28571428571426, "max": { "value": 40, "year": 1962 } }, { "code": "11901", "name": "Jenbach", "height": 530, "bundesland": "Tirol", "long": 11.75805556, "lat": 47.38888889, "snow": ["9999", "9999", "9999", "9999", "9999", "", "2", "", "", "7", "3", "3", "88", "5", "18", "5", "33", "8", "4", "32", "4", "5", "", "15", "20", "0", "32", "", "4", "", "25", "21", "", "", "", "", "35", "", "3", "20", "16", "25", "", "", "3", "", "4", "", "5", "3", "", "11", "", "15", "5", "46", "", "", "", "", "6", "15", "", "", "", ""], "avg": 8.959016393442626, "max": { "value": 88, "year": 1962 } }, { "code": "20101", "name": "Kanzelhöhe", "height": 1520, "bundesland": "Ktn.", "long": 13.90111111, "lat": 46.67694444, "snow": ["90", "", "45", "20", "6", "2", "38", "3", "", "39", "70", "30", "9999", "27", "34", "74", "47", "10", "39", "46", "9", "12", "15", "25", "", "24", "35", "25", "49", "60", "70", "65", "52", "38", "10", "23", "24", "22", "3", "", "37", "40", "25", "25", "43", "2", "6", "20", "20", "31", "14", "5", "8", "17", "", "49", "15", "8", "85", "14", "13", "14", "17", "26", "", ""], "avg": 115.00000000000006, "max": { "value": 90, "year": 1950 } }, { "code": "12203", "name": "Kitzbühel", "height": 772, "bundesland": "Tirol", "long": 12.38916666, "lat": 47.44388885, "snow": ["22", "9999", "9999", "9999", "9999", "9999", "9999", "", "", "20", "24", "2", "85", "15", "28", "32", "66", "23", "12", "42", "13", "20", "19", "9999", "9999", "9999", "9999", "9999", "6", "2", "33", "56", "19", "3", "3", "", "41", "", "25", "14", "16", "35", "6", "14", "17", "", "8", "", "23", "18", "6", "34", "", "23", "23", "79", "2", "19", "10", "3", "23", "37", "18", "8", "", ""], "avg": 40.636363636363654, "max": { "value": 85, "year": 1962 } }, { "code": "20212", "name": "Klagenfurt-Flughafen", "height": 450, "bundesland": "Ktn.", "long": 14.31833333, "lat": 46.64833333, "snow": ["30", "", "11", "3", "", "1", "13", "", "", "6", "", "16", "17", "20", "2", "26", "9", "3", "27", "23", "2", "6", "", "", "", "", "", "", "32", "12", "28", "33", "24", "", "", "13", "18", "", "", "", "7", "6", "10", "", "47", "", "", "", "12", "10", "", "4", "", "", "", "17", "", "", "", "4", "15", "", "", "", "", ""], "avg": 37.227272727272734, "max": { "value": 47, "year": 1994 } }, { "code": "1401", "name": "Kollerschlag", "height": 714, "bundesland": "OÖ", "long": 13.83944444, "lat": 48.60305556, "snow": ["21", "4", "37", "9", "26", "1", "6", "", "2", "15", "3", "12", "72", "7", "18", "12", "59", "40", "2", "46", "14", "", "", "50", "23", "10", "24", "22", "4", "", "19", "100", "10", "", "4", "4", "65", "", "13", "5", "13", "1", "14", "2", "16", "5", "25", "", "13", "39", "13", "29", "", "13", "17", "80", "", "", "", "", "20", "20", "5", "8", "", ""], "avg": 37.22727272727274, "max": { "value": 100, "year": 1981 } }, { "code": "3805", "name": "Krems", "height": 203, "bundesland": "NÖ", "long": 15.62138889, "lat": 48.41833333, "snow": ["1", "", "", "1", "", "", "4", "", "", "", "", "3", "10", "4", "4", "2", "", "", "", "16", "5", "", "", "", "", "3", "", "", "1", "", "", "10", "4", "", "", "", "1", "", "", "", "", "", "", "", "13", "", "14", "", "", "", "", "1", "3", "", "", "", "", "", "", "", "", "", "", "", "", ""], "avg": 2.4999999999999996, "max": { "value": 16, "year": 1969 } }, { "code": "5012", "name": "Kremsmünster", "height": 382, "bundesland": "OÖ", "long": 14.13111111, "lat": 48.055, "snow": ["5", "", "", "8", "5", "", "7", "", "", "", "", "11", "16", "8", "11", "1", "", "", "", "40", "9", "", "", "", "", "5", "", "", "2", "", "", "14", "5", "", "", "", "9", "", "", "", "", "", "", "", "16", "", "9", "", "7", "6", "1", "15", "", "4", "", "2", "", "3", "", "", "12", "", "", "", "", ""], "avg": 8.424242424242427, "max": { "value": 40, "year": 1969 } }, { "code": "15105", "name": "Krimml", "height": 1009, "bundesland": "Sbg.", "long": 12.18194444, "lat": 47.22916667, "snow": ["9999", "9999", "9999", "17", "20", "10", "25", "", "", "24", "30", "3", "67", "8", "19", "34", "62", "22", "24", "38", "9", "22", "15", "18", "41", "25", "35", "15", "10", "9999", "9999", "9999", "9999", "2", "14", "3", "33", "", "11", "5", "10", "23", "10", "11", "18", "8", "12", "3", "13", "27", "7", "26", "", "19", "9", "59", "13", "14", "17", "", "16", "17", "9", "8", "", ""], "avg": 33.83050847457626, "max": { "value": 67, "year": 1962 } }, { "code": "9016", "name": "Kufstein", "height": 490, "bundesland": "Tirol", "long": 12.16277778, "lat": 47.57527778, "snow": ["15", "", "20", "7", "12", "", "5", "", "1", "6", "7", "6", "63", "11", "13", "1", "45", "18", "2", "37", "19", "4", "", "25", "12", "5", "25", "", "4", "", "31", "32", "10", "3", "2", "", "40", "", "4", "13", "10", "14", "", "2", "11", "", "6", "", "12", "35", "", "49", "", "25", "8", "52", "", "1", "", "", "18", "14", "7", "", "", ""], "avg": 26.31818181818183, "max": { "value": 63, "year": 1962 } }, { "code": "14403", "name": "Landeck", "height": 796, "bundesland": "Tirol", "long": 10.56361111, "lat": 47.14027778, "snow": ["8", "", "27", "", "13", "", "", "", "3", "12", "12", "1", "67", "6", "8", "7", "11", "", "1", "27", "2", "", "", "", "10", "4", "10", "", "", "9", "9", "30", "3", "", "", "", "19", "", "1", "3", "2", "11", "1", "", "8", "", "", "", "3", "", "", "2", "", "4", "24", "19", "", "", "21", "", "3", "26", "26", "", "", ""], "avg": 14.742424242424244, "max": { "value": 67, "year": 1962 } }, { "code": "14311", "name": "Langen am Arlberg", "height": 1221, "bundesland": "Vbg.", "long": 10.12361111, "lat": 47.13166667, "snow": ["65", "30", "170", "8", "105", "35", "53", "13", "32", "52", "38", "20", "195", "26", "68", "92", "190", "20", "30", "80", "8", "10", "20", "110", "140", "45", "80", "", "15", "45", "70", "190", "40", "30", "35", "", "115", "", "100", "20", "45", "70", "25", "40", "20", "5", "30", "45", "57", "40", "2", "48", "14", "58", "38", "98", "10", "79", "70", "40", "33", "143", "78", "15", "2", ""], "avg": 117.04545454545462, "max": { "value": 195, "year": 1962 } }, { "code": "17901", "name": "Lienz", "height": 661, "bundesland": "Tirol", "long": 12.80638889, "lat": 46.82555556, "snow": ["41", "", "32", "40", "13", "", "15", "", "9", "40", "60", "4", "33", "9", "29", "14", "15", "2", "42", "9999", "6", "24", "", "7", "2", "57", "6", "11", "42", "90", "32", "53", "4", "15", "4", "13", "16", "20", "", "", "60", "45", "22", "", "20", "15", "", "", "12", "4", "", "", "", "", "", "10", "", "", "50", "", "6", "1", "", "", "", ""], "avg": 56.446153846153855, "max": { "value": 90, "year": 1979 } }, { "code": "3202", "name": "Linz-Stadt", "height": 262, "bundesland": "OÖ", "long": 14.28555556, "lat": 48.29638889, "snow": ["8", "", "", "4", "", "", "4", "", "", "", "", "8", "5", "6", "1", "1", "", "", "", "17", "8", "", "", "9999", "", "2", "", "", "", "", "", "12", "", "", "", "", "10", "", "", "", "", "", "", "", "9", "", "12", "", "", "5", "", "15", "", "2", "", "", "", "", "", "", "", "", "", "", "", ""], "avg": 9.861538461538457, "max": { "value": 17, "year": 1969 } }, { "code": "500", "name": "Litschau", "height": 558, "bundesland": "NÖ", "long": 15.03833333, "lat": 48.95472222, "snow": ["9999", "9999", "9999", "9999", "17", "", "8", "", "", "23", "", "9999", "9999", "1", "15", "8", "", "10", "", "9999", "27", "", "", "", "", "10", "", "5", "3", "9999", "", "30", "17", "2", "1", "", "33", "", "1", "", "5", "10", "4", "", "30", "8", "17", "2", "9", "18", "5", "33", "2", "15", "", "35", "", "4", "", "4", "13", "3", "4", "", "", ""], "avg": 24.155172413793107, "max": { "value": 35, "year": 2005 } }, { "code": "18111", "name": "Mallnitz", "height": 1199, "bundesland": "Ktn.", "long": 13.16638889, "lat": 46.99194444, "snow": ["70", "", "28", "30", "30", "", "", "", "3", "24", "98", "10", "55", "5", "43", "32", "18", "", "27", "", "2", "", "9999", "10", "", "30", "5", "15", "45", "80", "19", "45", "20", "15", "8", "10", "22", "", "", "1", "75", "40", "15", "5", "17", "5", "2", "", "2", "3", "4", "1", "", "", "", "41", "", "", "56", "2", "20", "8", "7", "", "", ""], "avg": 85.89230769230774, "max": { "value": 98, "year": 1960 } }, { "code": "7221", "name": "Mariazell", "height": 864, "bundesland": "Stmk.", "long": 15.30222222, "lat": 47.78916667, "snow": ["3", "", "", "", "40", "", "3", "4", "", "15", "3", "10", "88", "16", "12", "16", "53", "20", "2", "55", "35", "", "", "55", "40", "8", "15", "10", "10", "", "25", "85", "45", "", "", "14", "50", "", "55", "6", "20", "30", "25", "3", "32", "20", "8", "", "38", "30", "16", "73", "", "20", "5", "95", "5", "55", "3", "", "35", "20", "5", "1", "", ""], "avg": 23.136363636363637, "max": { "value": 95, "year": 2005 } }, { "code": "6415", "name": "Mattsee", "height": 502, "bundesland": "Sbg.", "long": 13.10694444, "lat": 47.97777778, "snow": ["10", "", "", "6", "6", "", "3", "", "", "", "4", "26", "60", "15", "5", "", "", "", "", "50", "20", "", "", "12", "", "10", "15", "", "6", "", "", "36", "12", "", "", "", "18", "", "", "", "5", "", "", "", "18", "", "6", "", "6", "16", "", "35", "", "9", "", "30", "", "3", "", "2", "6", "", "", "", "", ""], "avg": 16.66666666666667, "max": { "value": 60, "year": 1962 } }, { "code": "15002", "name": "Mayrhofen", "height": 640, "bundesland": "Tirol", "long": 11.85138889, "lat": 47.1625, "snow": ["26", "7", "30", "16", "40", "3", "9", "", "3", "15", "38", "3", "75", "10", "28", "14", "30", "12", "10", "32", "15", "22", "18", "10", "29", "21", "30", "", "7", "3", "30", "29", "28", "", "7", "7", "30", "", "7", "7", "10", "36", "9", "2", "20", "2", "6", "", "9", "20", "", "14", "", "11", "5", "40", "2", "1", "10", "", "9", "14", "8", "14", "", ""], "avg": 39.8939393939394, "max": { "value": 75, "year": 1962 } }, { "code": "6512", "name": "Mondsee", "height": 481, "bundesland": "OÖ", "long": 13.34722222, "lat": 47.85083333, "snow": ["8", "", "10", "7", "5", "", "3", "", "", "", "3", "20", "54", "15", "10", "1", "21", "9999", "", "24", "13", "", "", "20", "", "4", "30", "", "2", "", "", "36", "15", "", "", "", "42", "", "", "", "", "", "", "", "17", "", "4", "", "3", "7", "", "50", "", "7", "", "30", "", "1", "", "", "10", "3", "", "", "", ""], "avg": 15.184615384615382, "max": { "value": 54, "year": 1962 } }, { "code": "10401", "name": "Mürzzuschlag", "height": 705, "bundesland": "Stmk.", "long": 15.67277778, "lat": 47.60222222, "snow": ["22", "1", "9", "", "35", "4", "4", "", "", "7", "3", "10", "40", "16", "", "15", "20", "10", "23", "9", "2", "", "", "30", "12", "2", "15", "4", "7", "", "8", "27", "24", "", "", "12", "36", "", "16", "", "8", "50", "12", "26", "22", "23", "3", "1", "27", "8", "8", "52", "2", "22", "", "56", "", "39", "5", "", "28", "20", "8", "3", "", ""], "avg": 34.48484848484851, "max": { "value": 56, "year": 2005 } }, { "code": "7906", "name": "Neusiedl am See", "height": 148, "bundesland": "Bgld.", "long": 16.84166667, "lat": 47.95083333, "snow": ["", "", "", "", "", "", "5", "", "", "", "", "1", "", "1", "2", "7", "", "", "3", "30", "8", "", "", "", "", "", "", "", "", "", "", "11", "", "", "", "", "5", "", "", "", "", "", "", "", "8", "1", "7", "", "", "", "", "2", "3", "", "", "", "", "", "", "", "", "", "2", "", "", ""], "avg": 1.4545454545454541, "max": { "value": 30, "year": 1969 } }, { "code": "17301", "name": "Obergurgl", "height": 1942, "bundesland": "Tirol", "long": 11.02444444, "lat": 46.86666667, "snow": ["9999", "9999", "9999", "28", "100", "40", "64", "28", "118", "105", "90", "36", "115", "46", "96", "52", "80", "25", "24", "46", "26", "49", "48", "77", "72", "55", "64", "9999", "29", "106", "13", "56", "29", "46", "22", "22", "44", "37", "74", "37", "57", "100", "75", "48", "47", "57", "57", "39", "39", "42", "46", "46", "45", "37", "25", "73", "26", "50", "94", "58", "61", "60", "54", "31", "10", ""], "avg": 80.38709677419354, "max": { "value": 118, "year": 1958 } }, { "code": "16905", "name": "Partenen", "height": 976, "bundesland": "Vbg.", "long": 10.02861111, "lat": 46.98583333, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "14", "48", "66", "80", "29", "120", "48", "16", "28", "18", "65", "75", "28", "56", "2", "17", "17", "60", "104", "23", "27", "15", "10", "70", "", "58", "5", "25", "60", "22", "28", "25", "14", "23", "6", "35", "9999", "9999", "38", "8", "37", "23", "75", "15", "59", "55", "29", "20", "95", "43", "20", "2", ""], "avg": 50.117647058823536, "max": { "value": 120, "year": 1968 } }, { "code": "18805", "name": "Preitenegg", "height": 1034, "bundesland": "Ktn.", "long": 14.915, "lat": 46.93805556, "snow": ["35", "", "25", "4", "4", "8", "10", "3", "", "15", "3", "16", "42", "28", "15", "30", "30", "2", "45", "63", "5", "10", "1", "", "", "", "10", "9", "15", "10", "40", "32", "46", "", "6", "10", "20", "", "3", "", "18", "18", "25", "24", "58", "18", "7", "8", "15", "26", "5", "10", "6", "2", "", "46", "10", "30", "24", "6", "10", "5", "10", "6", "", ""], "avg": 49.34848484848484, "max": { "value": 63, "year": 1969 } }, { "code": "12615", "name": "Radstadt", "height": 858, "bundesland": "Sbg.", "long": 13.45611111, "lat": 47.38527778, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9", "106", "9999", "29", "35", "35", "19", "12", "32", "6", "15", "", "63", "47", "13", "35", "10", "12", "15", "44", "53", "28", "13", "11", "13", "36", "", "22", "5", "14", "40", "14", "19", "18", "12", "19", "", "24", "19", "21", "31", "", "26", "6", "50", "2", "20", "19", "2", "25", "25", "17", "9", "", ""], "avg": 30.129629629629623, "max": { "value": 106, "year": 1962 } }, { "code": "12711", "name": "Ramsau am Dachstein", "height": 1207, "bundesland": "Stmk.", "long": 13.63416667, "lat": 47.42527778, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "10", "0", "75", "60", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "60", "30", "15", "30", "20", "13", "10", "25", "25", "20", "50", "", "25", "5", "60", "6", "68", "35", "10", "35", "50", "30", "10", "", ""], "avg": 36.46551724137932, "max": { "value": 75, "year": 1973 } }, { "code": "15402", "name": "Rauris", "height": 934, "bundesland": "Sbg.", "long": 12.9925, "lat": 47.22361111, "snow": ["24", "6", "25", "21", "32", "7", "7", "1", "", "14", "27", "", "42", "6", "20", "34", "32", "5", "7", "32", "6", "3", "3", "18", "30", "14", "18", "4", "12", "4", "36", "31", "27", "1", "4", "8", "39", "", "15", "7", "6", "8", "16", "10", "17", "8", "11", "", "28", "30", "15", "41", "", "12", "12", "70", "5", "14", "20", "", "16", "27", "16", "16", "", ""], "avg": 39.0909090909091, "max": { "value": 70, "year": 2005 } }, { "code": "10510", "name": "Reichenau an der Rax", "height": 488, "bundesland": "NÖ", "long": 15.83694444, "lat": 47.69972222, "snow": ["10", "", "1", "", "2", "", "6", "", "", "1", "1", "7", "15", "9", "2", "1", "", "", "4", "20", "3", "", "", "", "", "4", "9999", "", "7", "", "", "7", "8", "", "", "", "11", "", "", "", "", "5", "", "", "23", "2", "6", "", "8", "6", "4", "20", "", "8", "", "7", "", "9", "", "", "", "2", "5", "", "", ""], "avg": 13.292307692307686, "max": { "value": 23, "year": 1994 } }, { "code": "905", "name": "Retz", "height": 320, "bundesland": "NÖ", "long": 15.94166667, "lat": 48.76111111, "snow": ["6", "", "1", "1", "", "", "2", "", "", "1", "", "1", "3", "1", "3", "10", "0", "", "", "19", "12", "", "", "", "", "1", "", "", "1", "", "", "3", "", "", "", "", "0", "", "", "", "", "", "", "", "10", "0", "14", "", "", "3", "1", "1", "3", "", "", "", "", "", "", "", "", "", "4", "", "", ""], "avg": 7.462121212121218, "max": { "value": 19, "year": 1969 } }, { "code": "11505", "name": "Reutte", "height": 842, "bundesland": "Tirol", "long": 10.71527778, "lat": 47.49444444, "snow": ["13", "10", "32", "4", "25", "10", "8", "", "13", "5", "28", "5", "85", "11", "21", "24", "45", "15", "5", "52", "30", "10", "10", "13", "22", "19", "33", "9", "9", "5", "35", "69", "13", "10", "2", "", "40", "", "10", "0", "25", "11", "4", "1", "25", "5", "15", "1", "18", "39", "", "28", "", "35", "20", "38", "6", "21", "3", "13", "15", "27", "11", "9", "", ""], "avg": 29.780303030303035, "max": { "value": 85, "year": 1962 } }, { "code": "4705", "name": "Ried im Innkreis", "height": 427, "bundesland": "OÖ", "long": 13.475, "lat": 48.21722222, "snow": ["15", "9999", "9999", "8", "2", "", "3", "", "", "", "1", "7", "24", "9", "10", "", "", "", "1", "20", "14", "", "", "", "", "5", "3", "", "1", "", "", "17", "2", "", "", "", "12", "", "", "", "", "", "", "", "25", "", "10", "", "2", "4", "", "14", "", "2", "", "15", "", "2", "", "", "10", "", "", "", "", ""], "avg": 18.484375, "max": { "value": 25, "year": 1994 } }, { "code": "1415", "name": "Rohrbach", "height": 597, "bundesland": "OÖ", "long": 13.99416667, "lat": 48.56972222, "snow": ["23", "1", "20", "5", "12", "1", "7", "", "", "5", "2", "8", "38", "3", "16", "3", "20", "", "", "33", "12", "", "", "36", "7", "3", "9", "2", "2", "", "16", "75", "15", "0", "5", "", "59", "", "5", "2", "15", "", "10", "", "13", "7", "10", "", "6", "24", "7", "44", "", "1", "5", "23", "", "", "", "3", "17", "7", "", "", "", ""], "avg": 32.31060606060607, "max": { "value": 75, "year": 1981 } }, { "code": "12302", "name": "Saalbach", "height": 975, "bundesland": "Sbg.", "long": 12.64833333, "lat": 47.38777778, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "20", "66", "8", "13", "19", "38", "78", "29", "13", "12", "11", "59", "", "61", "19", "21", "56", "15", "24", "11", "13", "17", "10", "35", "30", "15", "50", "", "40", "20", "95", "5", "50", "50", "10", "40", "60", "30", "10", "", ""], "avg": 47.63414634146341, "max": { "value": 95, "year": 2005 } }, { "code": "6300", "name": "Salzburg-Flughafen", "height": 430, "bundesland": "Sbg.", "long": 13.00333333, "lat": 47.79444444, "snow": ["10", "", "1", "14", "2", "", "7", "1", "", "", "6", "11", "35", "19", "3", "", "6", "", "", "18", "19", "", "3", "4", "", "5", "10", "", "4", "", "", "14", "5", "", "", "", "22", "", "", "", "3", "", "", "", "18", "", "7", "", "3", "10", "", "17", "", "8", "", "16", "", "1", "", "", "3", "", "", "", "", ""], "avg": 14.469696969696972, "max": { "value": 35, "year": 1962 } }, { "code": "11203", "name": "Schoppernau", "height": 839, "bundesland": "Vbg.", "long": 10.01777778, "lat": 47.31138889, "snow": ["32", "15", "81", "2", "35", "2", "32", "6", "10", "38", "29", "3", "112", "7", "38", "42", "95", "38", "7", "64", "20", "27", "18", "49", "70", "29", "68", "13", "17", "16", "60", "118", "28", "18", "14", "", "56", "5", "59", "2", "42", "30", "16", "4", "28", "18", "44", "10", "45", "40", "5", "36", "", "48", "25", "70", "10", "51", "45", "15", "38", "57", "44", "14", "", "4"], "avg": 63.54545454545454, "max": { "value": 118, "year": 1981 } }, { "code": "11301", "name": "Schröcken", "height": 1244, "bundesland": "Vbg.", "long": 10.08611111, "lat": 47.26194444, "snow": ["39", "13", "160", "5", "80", "33", "65", "", "55", "55", "39", "", "186", "12", "64", "90", "176", "40", "23", "90", "50", "30", "50", "120", "170", "50", "100", "40", "25", "50", "100", "220", "45", "40", "35", "10", "120", "20", "100", "10", "65", "82", "30", "40", "40", "20", "50", "50", "65", "55", "20", "60", "10", "65", "35", "90", "8", "77", "66", "22", "32", "120", "67", "14", "3", ""], "avg": 95.92424242424242, "max": { "value": 220, "year": 1981 } }, { "code": "5990", "name": "Schwechat", "height": 183, "bundesland": "NÖ", "long": 16.56972222, "lat": 48.11027778, "snow": ["9", "", "", "", "0", "", "3", "", "", "", "", "2", "9", "0", "5", "0", "0", "", "", "17", "11", "", "", "", "", "", "", "", "", "", "", "13", "", "", "", "", "14", "", "", "", "", "", "", "", "9", "", "11", "", "", "", "", "", "2", "", "", "", "", "", "", "", "", "", "1", "", "", ""], "avg": 10.500000000000004, "max": { "value": 17, "year": 1969 } }, { "code": "11706", "name": "Seefeld", "height": 1182, "bundesland": "Tirol", "long": 11.17555556, "lat": 47.32472222, "snow": ["39", "12", "84", "12", "46", "17", "3", "", "20", "35", "35", "20", "130", "5", "35", "50", "78", "13", "26", "50", "10", "30", "22", "70", "103", "19", "76", "3", "9999", "9999", "50", "97", "23", "31", "14", "5", "53", "", "53", "12", "27", "35", "22", "43", "12", "14", "30", "21", "25", "40", "8", "36", "7", "40", "30", "70", "9", "48", "25", "20", "25", "75", "50", "10", "", ""], "avg": 71.25, "max": { "value": 130, "year": 1962 } }, { "code": "10415", "name": "Semmering", "height": 988, "bundesland": "NÖ", "long": 15.82833333, "lat": 47.63333333, "snow": ["9999", "9999", "16", "1", "23", "1", "20", "4", "9999", "25", "", "28", "42", "22", "20", "1", "15", "1", "22", "60", "8", "", "", "18", "", "13", "6", "", "9999", "9999", "9999", "9999", "9999", "", "", "25", "57", "", "55", "0", "35", "50", "20", "40", "35", "50", "6", "20", "9999", "25", "15", "83", "5", "55", "9999", "102", "", "100", "110", "4", "90", "55", "15", "", "", ""], "avg": 40.6875, "max": { "value": 110, "year": 2008 } }, { "code": "19505", "name": "Sillian", "height": 1081, "bundesland": "Tirol", "long": 12.42361111, "lat": 46.74638889, "snow": ["65", "", "31", "45", "37", "", "21", "3", "40", "60", "100", "4", "36", "7", "45", "22", "31", "1", "34", "56", "6", "23", "", "15", "2", "74", "10", "", "42", "142", "50", "76", "20", "38", "7", "12", "23", "28", "3", "", "115", "42", "49", "", "15", "9", "3", "4", "2", "9", "11", "", "9", "20", "4", "18", "", "", "71", "20", "7", "12", "2", "19", "", ""], "avg": 89.01515151515157, "max": { "value": 142, "year": 1979 } }, { "code": "18705", "name": "St. Andrä/Lavanttal", "height": 403, "bundesland": "Ktn.", "long": 14.82833333, "lat": 46.76416667, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "20", "12", "17", "", "10", "5", "1", "37", "16", "", "10", "", "", "", "9999", "1", "", "16", "2", "3", "18", "11", "", "1", "3", "17", "", "", "", "", "7", "0", "", "25", "", "1", "", "4", "9", "", "4", "", "", "", "3", "", "3", "", "", "9", "", "", "", "", ""], "avg": 24.546296296296305, "max": { "value": 37, "year": 1968 } }, { "code": "14302", "name": "St. Anton am Arlberg", "height": 1304, "bundesland": "Tirol", "long": 10.26666667, "lat": 47.13138889, "snow": ["54", "9999", "9999", "9999", "9999", "9999", "9999", "2", "35", "35", "20", "5", "120", "5", "40", "50", "80", "5", "20", "45", "20", "10", "25", "90", "80", "15", "70", "8", "21", "68", "49", "113", "17", "39", "5", "5", "67", "", "35", "13", "26", "40", "19", "33", "8", "13", "46", "20", "25", "9", "5", "10", "5", "33", "45", "57", "2", "67", "40", "22", "28", "85", "55", "11", "", ""], "avg": 85.93333333333335, "max": { "value": 120, "year": 1962 } }, { "code": "17701", "name": "St. Jakob/Def.", "height": 1383, "bundesland": "Tirol", "long": 12.35388889, "lat": 46.91694444, "snow": ["62", "", "52", "30", "53", "5", "23", "14", "76", "75", "102", "24", "49", "19", "55", "53", "63", "6", "45", "23", "8", "27", "24", "33", "24", "64", "27", "14", "38", "9999", "43", "44", "48", "49", "18", "23", "46", "25", "15", "8", "75", "60", "34", "33", "15", "20", "45", "42", "13", "30", "30", "7", "10", "20", "10", "38", "15", "7", "72", "59", "36", "30", "34", "10", "", ""], "avg": 94.15384615384616, "max": { "value": 102, "year": 1960 } }, { "code": "12530", "name": "St. Johann im Pongau", "height": 634, "bundesland": "Sbg.", "long": 13.18666667, "lat": 47.31972222, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "3", "46", "", "16", "12", "15", "43", "16", "19", "29", "12", "12", "", "19", "31", "15", "25", "", "20", "5", "42", "2", "2", "13", "1", "21", "23", "15", "10", "", ""], "avg": 17.967741935483875, "max": { "value": 46, "year": 1986 } }, { "code": "15702", "name": "St. Michael/Lungau", "height": 1052, "bundesland": "Sbg.", "long": 13.62277778, "lat": 47.09444444, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "17", "31", "1", "2", "", "18", "15", "", "13", "8", "35", "15", "35", "37", "56", "", "18", "15", "35", "", "1", "5", "10", "48", "18", "15", "16", "13", "13", "5", "10", "10", "11", "10", "", "12", "", "46", "4", "8", "12", "", "10", "9", "4", "5", "", ""], "avg": 30.10416666666666, "max": { "value": 56, "year": 1982 } }, { "code": "5609", "name": "St. Pölten", "height": 274, "bundesland": "NÖ", "long": 15.63111111, "lat": 48.19972222, "snow": ["9", "", "", "0", "", "", "7", "", "", "", "", "7", "11", "12", "17", "1", "", "", "", "50", "30", "", "", "", "", "10", "", "", "", "", "", "10", "19", "", "", "", "15", "", "", "", "", "", "", "", "17", "", "9", "", "0", "2", "", "14", "", "", "", "", "", "2", "", "", "", "", "", "", "", ""], "avg": 12.545454545454549, "max": { "value": 50, "year": 1969 } }, { "code": "15712", "name": "Tamsweg", "height": 1025, "bundesland": "Sbg.", "long": 13.8075, "lat": 47.13361111, "snow": ["50", "", "12", "20", "34", "5", "7", "", "", "7", "20", "13", "32", "5", "25", "45", "18", "", "18", "20", "5", "", "", "10", "10", "", "18", "7", "25", "5", "35", "30", "35", "", "3", "20", "35", "", "", "3", "", "38", "20", "20", "18", "8", "8", "5", "4", "10", "13", "3", "", "8", "", "32", "3", "4", "8", "1", "5", "9", "8", "", "", ""], "avg": 61.318181818181856, "max": { "value": 50, "year": 1950 } }, { "code": "14631", "name": "Umhausen", "height": 1035, "bundesland": "Tirol", "long": 10.92888889, "lat": 47.13916667, "snow": ["30", "4", "36", "8", "18", "0", "2", "", "9", "15", "26", "1", "60", "5", "15", "23", "42", "1", "3", "29", "3", "13", "19", "4", "18", "16", "26", "", "4", "14", "18", "45", "14", "2", "5", "", "20", "", "8", "2", "5", "20", "12", "", "10", "3", "21", "2", "9", "13", "6", "6", "3", "12", "11", "31", "5", "", "28", "2", "7", "15", "18", "8", "", ""], "avg": 41.75000000000002, "max": { "value": 60, "year": 1962 } }, { "code": "20123", "name": "Villach", "height": 493, "bundesland": "Ktn.", "long": 13.87388889, "lat": 46.61805556, "snow": ["39", "", "15", "10", "", "", "25", "", "", "15", "10", "21", "33", "15", "5", "46", "26", "", "59", "31", "8", "14", "", "", "", "3", "8", "3", "45", "25", "48", "55", "20", "12", "", "21", "20", "", "", "", "21", "", "14", "9999", "44", "", "", "", "9", "8", "", "2", "", "", "", "13", "", "", "6", "3", "13", "", "", "", "", ""], "avg": 50.1692307692308, "max": { "value": 59, "year": 1968 } }, { "code": "20021", "name": "Villacher Alpe", "height": 2117, "bundesland": "Ktn.", "long": 13.67138889, "lat": 46.60305556, "snow": ["300", "1", "93", "15", "70", "12", "57", "30", "107", "144", "186", "33", "25", "51", "136", "66", "82", "8", "77", "65", "32", "39", "28", "20", "22", "72", "51", "6", "26", "106", "59", "64", "67", "99", "31", "27", "11", "67", "10", "7", "98", "60", "36", "21", "10", "21", "42", "51", "14", "7", "50", "6", "25", "37", "8", "56", "18", "5", "147", "61", "88", "16", "18", "55", "15", ""], "avg": 346.46969696969694, "max": { "value": 300, "year": 1950 } }, { "code": "19821", "name": "Weissensee", "height": 949, "bundesland": "Ktn.", "long": 13.28611111, "lat": 46.71861111, "snow": ["68", "", "26", "24", "5", "", "12", "", "", "64", "68", "23", "54", "19", "30", "40", "20", "1", "47", "34", "", "20", "2", "3", "", "25", "10", "8", "40", "50", "42", "70", "14", "20", "10", "10", "20", "20", "", "", "37", "22", "24", "6", "35", "", "", "5", "13", "12", "5", "", "", "", "", "28", "", "", "72", "", "16", "", "", "2", "", ""], "avg": 84.7878787878788, "max": { "value": 72, "year": 2008 } }, { "code": "18502", "name": "Weitensfeld", "height": 704, "bundesland": "Ktn.", "long": 14.19083333, "lat": 46.84944444, "snow": ["9999", "9999", "9999", "7", "", "4", "14", "", "", "2", "25", "20", "45", "23", "5", "41", "27", "8", "40", "34", "4", "21", "", "1", "2", "5", "8", "10", "33", "20", "32", "33", "30", "", "", "13", "13", "", "", "", "15", "16", "17", "6", "29", "7", "6", "", "14", "12", "3", "3", "", "3", "", "22", "", "", "7", "5", "17", "", "", "", "", ""], "avg": 18.03174603174602, "max": { "value": 45, "year": 1962 } }, { "code": "1802", "name": "Weitra", "height": 572, "bundesland": "NÖ", "long": 14.89861111, "lat": 48.70222222, "snow": ["15", "9999", "9999", "9999", "", "1", "5", "", "0", "3", "2", "7", "15", "3", "40", "1", "", "", "3", "40", "15", "", "", "", "", "10", "", "", "2", "", "", "10", "13", "", "", "", "17", "", "", "", "7", "", "", "", "18", "", "20", "", "1", "8", "1", "17", "", "13", "", "17", "", "3", "", "1", "9", "", "", "", "", ""], "avg": 19.80158730158729, "max": { "value": 40, "year": 1964 } }, { "code": "5904", "name": "Wien Hohe Warte", "height": 198, "bundesland": "Wien", "long": 16.35638889, "lat": 48.24861111, "snow": ["5", "", "", "", "3", "", "6", "", "", "", "", "3", "10", "11", "3", "10", "", "", "", "30", "14", "", "", "", "", "10", "", "", "1", "", "", "20", "", "", "", "", "12", "", "", "", "", "", "", "", "13", "", "17", "", "", "", "", "1", "3", "", "", "", "", "0", "", "", "5", "", "1", "", "", ""], "avg": 7.628787878787882, "max": { "value": 30, "year": 1969 } }, { "code": "7604", "name": "Wiener Neustadt", "height": 275, "bundesland": "NÖ", "long": 16.23138889, "lat": 47.83222222, "snow": ["6", "", "", "", "", "", "13", "", "", "8", "", "3", "5", "8", "8", "7", "", "", "2", "17", "2", "", "", "", "", "2", "", "", "", "", "9999", "9999", "", "", "", "", "5", "", "", "", "3", "", "", "", "17", "5", "4", "", "", "", "1", "3", "", "2", "", "2", "", "3", "", "", "", "", "2", "", "", ""], "avg": 7.90625, "max": { "value": 17, "year": 1969 } }, { "code": "9919", "name": "Windischgarsten", "height": 600, "bundesland": "OÖ", "long": 14.32611111, "lat": 47.72027778, "snow": ["2", "4", "30", "17", "9999", "9999", "9999", "9999", "", "9999", "14", "16", "79", "3", "11", "9", "28", "18", "7", "29", "16", "", "", "20", "50", "3", "18", "", "", "", "9999", "9999", "9999", "", "4", "8", "60", "", "18", "10", "14", "35", "3", "12", "24", "4", "10", "", "40", "10", "21", "60", "", "23", "10", "89", "", "23", "2", "", "45", "37", "18", "7", "", ""], "avg": 18.534482758620687, "max": { "value": 89, "year": 2005 } }, { "code": "4815", "name": "Wolfsegg", "height": 635, "bundesland": "OÖ", "long": 13.67083333, "lat": 48.10555556, "snow": ["9999", "", "10", "18", "11", "9999", "8", "", "", "", "5", "24", "40", "16", "28", "", "20", "", "5", "9999", "18", "", "", "1", "", "8", "4", "", "5", "", "", "39", "20", "", "", "", "38", "", "", "", "3", "", "", "", "27", "", "23", "", "9", "7", "6", "22", "", "15", "", "15", "", "5", "", "4", "25", "", "", "", "", ""], "avg": 7.603174603174601, "max": { "value": 40, "year": 1962 } }, { "code": "16711", "name": "Wörterberg", "height": 404, "bundesland": "Bgld.", "long": 16.09666667, "lat": 47.22611111, "snow": ["22", "", "2", "4", "", "", "16", "", "", "", "", "2", "", "12", "", "", "", "", "5", "5", "", "", "", "", "", "", "", "", "10", "", "", "20", "2", "", "0", "", "9", "", "", "", "1", "", "2", "", "28", "7", "2", "", "2", "2", "", "5", "1", "", "", "", "", "4", "", "", "", "", "", "", "", ""], "avg": 24.143939393939405, "max": { "value": 28, "year": 1994 } }, { "code": "12322", "name": "Zell am See", "height": 770, "bundesland": "Sbg.", "long": 12.79527778, "lat": 47.32666667, "snow": ["19", "", "32", "14", "37", "4", "3", "", "", "16", "17", "", "40", "5", "17", "20", "27", "8", "2", "25", "4", "", "", "23", "23", "3", "14", "", "11", "4", "35", "36", "35", "", "4", "4", "60", "", "20", "16", "10", "37", "14", "22", "22", "13", "15", "", "24", "22", "8", "28", "", "26", "12", "65", "2", "8", "18", "", "20", "20", "12", "9", "", ""], "avg": 33.636363636363654, "max": { "value": 65, "year": 2005 } }, { "code": "16101", "name": "Zeltweg", "height": 678, "bundesland": "Stmk.", "long": 14.74694444, "lat": 47.19972222, "snow": ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "26", "18", "9", "12", "12", "", "14", "25", "2", "", "", "", "", "", "7", "", "20", "5", "23", "10", "34", "", "1", "", "14", "", "", "", "3", "13", "11", "5", "20", "15", "1", "", "8", "10", "1", "6", "", "", "", "27", "3", "3", "", "", "17", "", "", "", "", ""], "avg": 32.46296296296297, "max": { "value": 34, "year": 1982 } }];
  return module.exports;
});
$__System.register("42", [], function (_export, _context) {
  "use strict";

  var __useDefault, type, properties, geometry;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("type", type = "Feature");

      _export("type", type);

      _export("properties", properties = {});

      _export("properties", properties);

      _export("geometry", geometry = { "type": "Polygon", "coordinates": [[[9.3, 49.2], [17.2, 49.2], [17.2, 46], [9.3, 46], [9.3, 49.2]]] });

      _export("geometry", geometry);

      _export("default", {
        type: type,
        properties: properties,
        geometry: geometry
      });
    }
  };
});
$__System.register('1', ['40', '41', '42', 'f'], function (_export) {
	var _Promise, stations, bbox, _Array$from, $, $$, canvas, playing, imgs, playButton, w, h, select, avg, ctx, last, drawOpacity, play, animateSnow, sliderEl, slider, parseSnow, getSnow, getHeap, drawMap, drawLines, getNearest, updateHeaps, drawHeaps, buildStr, drawEverything, button;

	return {
		setters: [function (_) {
			_Promise = _['default'];
		}, function (_2) {
			stations = _2['default'];
		}, function (_3) {
			bbox = _3['default'];
		}, function (_f) {
			_Array$from = _f['default'];
		}],
		execute: function () {
			'use strict';

			$ = function $(sel) {
				return document.querySelector(sel);
			};

			$$ = function $$(sel) {
				return _Array$from(document.querySelectorAll(sel));
			};

			canvas = $('#snow-canvas');
			playing = true;
			imgs = [];
			playButton = $('#js-play-button');

			playButton.addEventListener('click', function () {

				if (imgs.length > 0) {

					playing = !playing;

					if (playing) {

						if (sliderEl.value === '2015') {
							sliderEl.value = 1950;
						}
						play(imgs);
					}

					playButton.innerHTML = playing ? 'Stopp' : 'Abspielen';
				}
			});

			w = 0;
			h = 0;
			select = $('#js-location-select');

			stations.forEach(function (s) {
				var o = document.createElement('option');
				o.value = s.code;
				o.innerHTML = s.name + ' (' + s.bundesland + ')';
				select.appendChild(o);
			});

			avg = d3.mean(stations.map(function (s) {
				return s.avg;
			}));
			ctx = null;
			last = null;

			drawOpacity = function drawOpacity(img1, img2, opacity) {

				ctx.save();
				ctx.clearRect(0, 0, w, h);
				ctx.globalAlpha = 1 - opacity;
				if (img2) {
					ctx.drawImage(img2, 0, 0, w, h);
				}
				ctx.globalAlpha = opacity;
				ctx.drawImage(img1, 0, 0, w, h);

				ctx.restore();
			};

			play = function play(imgs) {
				var v = parseInt(sliderEl.value);
				if (v === 2015) {
					playing = false;
					playButton.innerHTML = 'Abspielen';
				}
				animateSnow(imgs, v - 1950, 100);
			};

			animateSnow = function animateSnow(imgs, i, opacity) {

				var v = parseInt(sliderEl.value);

				$('.year-info').innerHTML = '24. Dezember ' + v;

				if (opacity <= 0) {

					if (playing) {

						if (v < 2016) {
							sliderEl.value = v + 1;
						}

						play(imgs);
					}
				} else {

					drawOpacity(imgs[i], imgs[i + 1], opacity / 100);
					if (playing) {
						requestAnimationFrame(function () {
							return animateSnow(imgs, i, opacity - 7);
						});
					}
				}
			};

			sliderEl = $('#time-slider');
			slider = d3.select(sliderEl);

			slider.on('input', function () {
				playing = false;
				playButton.innerHTML = 'Abspielen';
				play(imgs);
			});

			parseSnow = function parseSnow(str) {

				if (str === '') {
					return 0;
				}
				if (str === '0') {
					return 0.5;
				}
				if (str === '9999') {
					return -1;
				}

				return parseInt(str);
			};

			getSnow = function getSnow(width, intensity) {

				var coords = [];
				var flakes = Math.floor(intensity * 50);

				for (var i = 0; i < flakes; i++) {
					coords.push([boxMuller() * width / 20, boxMuller() * width / 20]);
				}
				return coords;
			};

			getHeap = function getHeap(height, width) {

				if (height < 0) {
					height = 0;
				}

				return 'M0 0 C ' + width / 4 + ' 0, ' + width / 4 + ' ' + -height + ', ' + width / 2 + ' ' + -height + ', S ' + width * 0.75 + ' 0, ' + width + ' 0';
			};

			drawMap = function drawMap(svgEl) {
				var svg = d3.select(svgEl);

				var margin = 0;

				var height = h;
				var width = svgEl.clientWidth || svgEl.getBoundingClientRect().width;

				d3.select('#map-container').style('height', height + 'px');

				svg.append('image').attr('xlink:href', '/files/interactive/christmas/out.png').attr('width', width).attr('height', height);

				var mercator = d3.geoMercator().fitSize([width, height], bbox);

				var geoPath = d3.geoPath().projection(mercator);
			};

			drawLines = function drawLines(svgEl) {

				var svg = d3.select(svgEl);

				var height = 400;
				var width = svgEl.clientWidth || svgEl.getBoundingClientRect().width;
				var margin = 16;

				var data = stations;

				var xScale = d3.scaleLinear().domain([0, 65]).range([margin, width - margin]);

				var yScale = d3.scaleLinear().domain([0, 200]).range([height - margin, margin]);

				var lineGen = d3.line().x(function (d, i) {
					return xScale(i);
				}).y(function (d) {
					return yScale(d);
				}).defined(function (d) {
					return d >= 0;
				});

				var avg = data[0].snow.map(function (year, i) {
					var avg = data.reduce(function (avg, cur, j, arr) {

						if (parseSnow(cur.snow[i]) >= 0) {
							var l = arr.map(function (s) {
								return s.snow[i];
							}).filter(function (s) {
								return parseSnow(s) >= 0;
							}).length;
							return avg + parseSnow(cur.snow[i]) / l;
						}
						return avg;
					}, 0);

					return avg;
				});

				var grid = svg.selectAll('.grid-line').data([50, 100, 150]).enter();

				grid.append('line').attr('x1', margin).attr('x2', width - margin).attr('y1', function (d) {
					return yScale(d);
				}).attr('y2', function (d) {
					return yScale(d);
				}).attr('class', 'grid-line');

				grid.append('text').attr('x', margin + 4).attr('y', function (d) {
					return yScale(d) - 4;
				}).text(function (d) {
					return d + ' cm';
				}).attr('class', 'height-label');

				var axisLabels = svg.selectAll('.year-label').data([0, 10, 20, 30, 40, 50, 60]).enter().append('text').attr('x', function (d) {
					return xScale(d);
				}).attr('y', height - margin + 16).text(function (d) {
					return 1950 + d;
				}).attr('class', 'snow-label year-label');

				var lines = svg.selectAll('.snow-line').data(data).enter().append('path').attr('d', function (d) {
					return lineGen(d.snow.map(function (s) {
						return parseSnow(s);
					}));
				}).attr('class', 'snow-line');

				var avgLine = svg.append('path').attr('d', function (d) {
					return lineGen(avg);
				}).attr('class', 'snow-line snow-avg');

				var schneedecke = svg.append('text').attr('x', margin + 4).attr('y', yScale(200)).text('Schneedecke am 24.12.').attr('class', 'snow-label snow-label-italic');

				var avgLabel = svg.append('text').attr('x', xScale(32)).attr('y', yScale(40)).text('Durchschnitt (84 Stationen)').attr('class', 'snow-label snow-label-bold');
			};

			getNearest = function getNearest(coords) {
				var min = 99999;
				var sel = stations[0];
				stations.forEach(function (s) {
					var dist = Math.sqrt(Math.pow(s.long - coords.longitude, 2) + Math.pow(s.lat - coords.latitude, 2));
					if (dist <= min) {
						min = dist;
						sel = s;
					}
				});
				return sel;
			};

			updateHeaps = function updateHeaps(groups, station, heapScale, width) {

				$('#snow-stats').innerHTML = buildStr(station);

				var t = d3.transition().duration(600);

				var snow = groups.selectAll('.snow-heap').data(function (d) {
					return [parseSnow(station.snow[d])];
				});

				// ENTER
				snow.enter().append('path').attr('d', function (d) {
					return getHeap(heapScale(d), width / 30);
				}).attr('class', 'snow-heap');

				// UPDATE
				snow.transition(t).attr('d', function (d) {
					return getHeap(heapScale(d), width / 30);
				}).attr('class', 'snow-heap');

				// EXIT
				snow.exit().remove();
			};

			drawHeaps = function drawHeaps(svgEl) {

				var svg = d3.select(svgEl);
				var height = 300;
				var width = svgEl.clientWidth || svgEl.getBoundingClientRect().width;
				var margins = {
					top: 24,
					left: 24,
					bottom: 24,
					right: 24
				};
				var data = stations;

				var barWidth = Math.floor((width - margins.left) / 65);

				var yScale = d3.scaleLinear().domain([0, 150]).range([height - margins.bottom, margins.top]);

				var xScale = d3.scaleLinear().domain([0, 65]).range([margins.left, width - margins.right]);

				var heapScale = d3.scaleLinear().domain([0, 150]).range([0, height - 2 * margins.top]);

				var bg = svg.append('rect').attr('x', 0).attr('y', 0).attr('width', width).attr('height', height).attr('rx', 0).attr('ry', 0).attr('class', 'heap-bg');

				var grid = svg.selectAll('.grid-line').data([50, 100, 150]).enter();

				grid.append('line').attr('x1', margins.left).attr('x2', width - margins.right).attr('y1', function (d) {
					return yScale(d);
				}).attr('y2', function (d) {
					return yScale(d);
				}).attr('class', 'grid-line grid-line-inv');

				grid.append('text').attr('x', margins.left + 4).attr('y', function (d) {
					return yScale(d) - 4;
				}).text(function (d) {
					return d + ' cm';
				}).attr('class', 'height-label label-inv');

				var axisLabels = svg.selectAll('.year-label').data([0, 10, 20, 30, 40, 50, 60]).enter().append('text').attr('x', function (d) {
					return xScale(d);
				}).attr('y', height - margins.bottom + 16).text(function (d) {
					return 1950 + d;
				}).attr('class', 'snow-label snow-label-inv year-label');

				var xAxis = svg.append('line').attr('x1', margins.left).attr('x2', width - margins.right).attr('y1', height - margins.bottom).attr('y2', height - margins.bottom).attr('class', 'snow-axis');

				var groups = svg.selectAll('.snow-group').data(Array(66).fill().map(function (d, i) {
					return i;
				})).enter().append('g').attr('transform', function (d, i) {
					return 'translate(' + (margins.left + i * barWidth) + ',' + (height - margins.bottom) + ')';
				});

				d3.select('#js-location-select').on('change', function () {
					var v = this.options[this.selectedIndex].value;
					var s = stations.find(function (s) {
						return s.code === v;
					});

					$('#js-select-info').innerHTML = 'Sie betrachten Daten für\n\t\t\t\t <strong>' + s.name + '.</strong>';

					updateHeaps(groups, s, heapScale, width);
				});

				d3.select('#js-location-button').on('click', function () {
					navigator.geolocation.getCurrentPosition(function (pos) {
						var nearest = getNearest(pos.coords);
						select.selectedIndex = _Array$from(select.options).findIndex(function (o) {
							return o.value === nearest.code;
						});

						$('#js-select-info').innerHTML = 'Die nächstgelegene Wetterstation in unserem Datensatz ist\n\t\t\t\t <strong>' + nearest.name + '</strong>.';

						updateHeaps(groups, nearest, heapScale, width);
					});
				});

				updateHeaps(groups, stations[0], heapScale, width);
				$('#js-select-info').innerHTML = 'Sie betrachten Daten für\n\t\t<strong>' + stations[0].name + '.</strong>';
			};

			buildStr = function buildStr(s) {

				var last = s.snow.slice().reverse().findIndex(function (snow) {
					return snow >= 1;
				});
				var lastStr = last >= 0 ? last === 0 ? 'zuletzt vor einem Jahr' : 'zuletzt vor ' + (last + 1) + ' Jahren' : 'noch nie seit 1950';
				var avgComp = Math.abs(s.avg - avg) < 7.5 ? 'ähnlich viel Schnee wie im österreichweiten Schnitt' : s.avg > avg ? 'mehr Schnee als im österreichweiten Schnitt' : 'weniger Schnee als im österreichweiten Schnitt';

				return '<strong>' + s.name + '</strong> (Seehöhe <strong>' + s.height + ' m</strong>) verzeichnete\n\t <strong>' + lastStr + '</strong> weiße Weihnachten (Schneehöhe >= 1cm).\n\t Im Allgemeinen liegt hier zu Heiligabend <strong>' + avgComp + '</strong>.\n\t Die größte Schneemenge zu Weihnachten wurde im Jahr <strong>' + s.max.year + '</strong> mit <strong>' + s.max.value + ' cm</strong> verzeichnet.';
			};

			drawEverything = function drawEverything() {

				w = $('#map').clientWidth || $('#map').getBoundingClientRect().width;
				h = parseInt(w / 850 * 500);

				canvas.setAttribute('height', h);
				canvas.setAttribute('width', w);
				ctx = canvas.getContext('2d');
				last = canvas.cloneNode(true).getContext('2d');

				var ps = Array(66).fill().map(function (d, i) {
					return '/files/interactive/christmas/renderer/snow_' + (1950 + i) + '.png';
				}).map(function (url) {
					return new _Promise(function (resolve, reject) {
						var img = new Image();
						img.onload = function () {
							return resolve(img);
						};
						img.src = url;
					});
				});

				_Promise.all(ps).then(function (arr) {
					imgs = arr;
					play(arr);
				});

				drawMap($('#map'));
				drawLines($('#lines'));
				drawHeaps($('#steps'));
			};

			button = $('#js-location-button');

			document.addEventListener('DOMContentLoaded', function (e) {

				var s4 = $("#s4");
				if (s4) {
					s4.parentNode().removeChild(s4);
				}
				var noprint = $(".noprint");
				if (noprint) {
					s4.parentNode().removeChild(noprint);
				}
				var at = $("#articletext");
				if (at) {
					at.style.width = '850px';
				}

				drawEverything();
			});
		}
	};
});

})
(function(factory) {
  factory();
});
