"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(b,n){
var v=require('@stdlib/blas-ext-base-gapxsumkbn/dist').ndarray;function x(e,r,a,u,q){return v(e,r,a,u,q)}n.exports=x
});var o=s(function(k,i){
var c=require('@stdlib/strided-base-stride2offset/dist'),d=t();function y(e,r,a,u){return d(e,r,a,u,c(e,u))}i.exports=y
});var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),m=t();f(p,"ndarray",m);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
