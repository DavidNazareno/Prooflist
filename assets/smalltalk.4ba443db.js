function u(e,r){for(var l=0;l<r.length;l++){const t=r[l];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const n=Object.getOwnPropertyDescriptor(t,a);n&&Object.defineProperty(e,a,n.get?n:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function d(){if(s)return i;s=1,i=e,e.displayName="smalltalk",e.aliases=[];function e(r){r.languages.smalltalk={comment:/"(?:""|[^"])*"/,string:/'(?:''|[^'])*'/,symbol:/#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,"block-arguments":{pattern:/(\[\s*):[^\[|]*\|/,lookbehind:!0,inside:{variable:/:[\da-z]+/i,punctuation:/\|/}},"temporary-variables":{pattern:/\|[^|]+\|/,inside:{variable:/[\da-z]+/i,punctuation:/\|/}},keyword:/\b(?:nil|true|false|self|super|new)\b/,character:{pattern:/\$./,alias:"string"},number:[/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,/\b\d+(?:\.\d+)?(?:e-?\d+)?/],operator:/[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,punctuation:/[.;:?\[\](){}]/}}return i}var o=d();const c=u({__proto__:null,default:o},[o]);export{c as s};