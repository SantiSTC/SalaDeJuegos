import{c as g,e as p,g as y,h as j,i as b,k as w,l as I,m as h,n as v,o as d,q as m,r as l,s as A}from"./chunk-4VCNPSG4.js";import{f as u,i as f,u as n,x as c}from"./chunk-YW5HSTP4.js";var D=(()=>{let i=class i{constructor(t){this.firestore=t}guardar(t,e){let r=h(this.firestore,t);return I(r,e)}traer(t,e,r="asc"){let o=h(this.firestore,t),s;return e?r==="asc"?s=l(o,m(e,"asc")):s=l(o,m(e,"desc")):s=l(o),w(s,{idField:"id"})}actualizar(t,e){return u(this,null,function*(){let r=d(this.firestore,t,e.id);try{return yield A(r,e),"Actualizado correctamente."}catch(o){return o}})}eliminar(t,e){return u(this,null,function*(){let r=d(this.firestore,t,e);try{return yield v(r),"Eliminado correctamente."}catch(o){return o}})}};i.\u0275fac=function(e){return new(e||i)(c(b))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var q=(()=>{let i=class i{constructor(t,e){this.auth=t,this.firestore=e,this.email="",this.userObj=new f(null),this.userActual$=this.userObj.asObservable(),this.auth.onAuthStateChanged(r=>{this.userObj.next(r)})}login(t,e){let r;try{this.email=t,r=y(this.auth,t,e).then(o=>{this.guardarLog()})}catch(o){console.log(o),r=null}return r}logout(){let t;try{t=j(this.auth),this.email=""}catch(e){console.log(e),t=null}return t}register(t,e){let r;try{r=p(this.auth,t,e)}catch(o){console.log(o),r=null}return r}getUser(){return this.userObj.value}isAuthenticated(){return this.email!==""}guardarLog(){let t=new Date,e=t.toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"/"),r=t.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),o=`${e} ${r}`,s={user:this.email,date:o};this.firestore.guardar("logins",s)}};i.\u0275fac=function(e){return new(e||i)(c(g),c(D))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();export{D as a,q as b};