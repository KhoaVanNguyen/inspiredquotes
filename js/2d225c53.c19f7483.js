(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d225c53"],{e68d:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-list",[a("q-item-label",{attrs:{header:""}},[a("div",{staticClass:"col-12 row items-center"},[a("div",{staticClass:"col-6"},[a("span",[e._v("Billionaires "),a("span",[a("q-btn",{on:{click:e.addNew}},[e._v("Add new")])],1)])]),a("div",{staticClass:"col-6"},[a("q-input",{staticClass:"col-3",attrs:{outlined:"",label:"Search"},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}})],1)])]),a("q-item-section",e._l(e.filtered,(function(t){return a("q-item",{key:t.uid},[a("div",{staticClass:"col-12 row items-center"},[a("div",{staticClass:"col-2 q-pa-sm"},[a("q-input",{attrs:{label:"Name"},on:{change:e.submitChanges},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"object.name"}})],1),a("div",{staticClass:"col-2 q-pa-sm"},[a("q-input",{attrs:{label:"Avatar"},on:{change:e.submitChanges},model:{value:t.avatar,callback:function(a){e.$set(t,"avatar",a)},expression:"object.avatar"}})],1),a("div",{staticClass:"col-3 q-pa-sm"},[a("q-input",{attrs:{type:"textarea",label:"Description"},on:{change:e.submitChanges},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"object.description"}})],1),a("div",{staticClass:"col-3 q-pa-sm"},[a("q-input",{attrs:{type:"textarea",label:"Ref URLs"},on:{change:e.submitChanges},model:{value:t.refUrls,callback:function(a){e.$set(t,"refUrls",a)},expression:"object.refUrls"}})],1),a("div",{staticClass:"col-2 row justify-center"},[a("q-btn",{attrs:{color:"red"},on:{click:function(a){return e.remove(t.uid)}}},[e._v("Remove")])],1)])])})),1)],1)},s=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),r=a.n(n),c=a("1732"),o=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={name:"billionaires",computed:u({},Object(o["c"])("app",["baseBooks","baseCategories","baseBillionaires"]),{filtered:function(){var e=this;return this.baseBillionaires.filter((function(t){return-1!==JSON.stringify(t).toLowerCase().indexOf(e.searchTerm.toLowerCase())}))}}),data:function(){return{searchTerm:""}},mounted:function(){window.dashboard=this},methods:u({},Object(o["d"])("app",["setBillionaires"]),{constructNew:function(){return{uid:Object(c["a"])(),name:"",avatar:"",description:"",refUrls:"",timestamp:new Date}},submitChanges:function(){this.setBillionaires(this.baseBillionaires.slice())},addNew:function(){var e=this.constructNew();this.setBillionaires(this.baseBillionaires.concat([e]))},remove:function(e){var t=this.baseBillionaires.map((function(e){return e.uid})).indexOf(e);this.baseBillionaires.splice(t,1),this.setBillionaires(this.baseBillionaires.slice())}})},d=b,p=a("2877"),f=a("eebe"),m=a.n(f),h=a("1c1c"),v=a("0170"),w=a("9c40"),O=a("27f9"),j=a("4074"),g=a("66e5"),C=Object(p["a"])(d,i,s,!1,null,"29ab70d7",null);t["default"]=C.exports;m()(C,"components",{QList:h["a"],QItemLabel:v["a"],QBtn:w["a"],QInput:O["a"],QItemSection:j["a"],QItem:g["a"]})}}]);