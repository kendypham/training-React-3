!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n){function e(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=[],i=[],r=[],a=document.getElementById("inputTodo");function c(){localStorage.setItem("items",JSON.stringify(o)),localStorage.setItem("complete",JSON.stringify(i))}function l(t){var n=JSON.parse(localStorage.getItem("items"));null!=n&&(t=e(n)),r=t.map(function(t,n){return'<li class="list-group-item" \n        id="'.concat(t.id,'">').concat(t.value,' \n        <button class="float-right fas fa-trash btn btn-danger ml-2" \n        onclick="removeItem(').concat(t.id,')">\n        </button>\n        <button class="float-right fas fa-pencil-alt btn btn-warning" \n        onclick="editItem(').concat(t.id,')">\n        </button></li>')});var o="";r.forEach(function(t){o+=t}),document.getElementById("list-item").innerHTML=o}l(o),a.addEventListener("keyup",function(t){if("Enter"===t.key){var n={id:o.length,value:a.value};o.push(n),c(),a.value="",l(o)}}),removeItem=function(t){var n=o.find(function(n){if(n.id===t)return n});i.push(n),o.splice(t,1),c(),l(o)},editItem=function(t){var n=o.find(function(n){if(n.id===t)return n});document.getElementById(n.id).innerHTML='<input id="input'.concat(n.id,'" value="').concat(n.value,'"/>\n    <button class="float-right btn btn-success ml-2" \n    onclick="saveEdit(').concat(n.id,')">Save\n    </button>\n    <button class="float-right  btn btn-primary" \n    onclick="cancelSave(').concat(n.id,')">Cancel\n    </button>')},cancelSave=function(t){var n=o.find(function(n){if(n.id===t)return n});document.getElementById(n.id).innerHTML="".concat(n.value,' \n    <button class="float-right fas fa-trash btn btn-danger ml-2" \n    onclick="removeItem(').concat(n.id,')">\n    </button>\n    <button class="float-right fas fa-pencil-alt btn btn-warning" \n    onclick="editItem(').concat(n.id,')">\n    </button>')},saveEdit=function(t){var n=o.find(function(n){if(n.id===t)return n});n.value=document.getElementById("input".concat(n.id)).value,o.splice(t,1,n),c(),document.getElementById(n.id).innerHTML="".concat(n.value,' \n    <button class="float-right fas fa-trash btn btn-danger ml-2" \n    onclick="removeItem(').concat(n.id,')">\n    </button>\n    <button class="float-right fas fa-pencil-alt btn btn-warning" \n    onclick="editItem(').concat(n.id,')">\n    </button>')},showCompleted=function(){console.log(i),l(i)}}]);