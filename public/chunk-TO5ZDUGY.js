import{a as V}from"./chunk-ARS5TLYU.js";import"./chunk-AUO5UMOM.js";import{b as H}from"./chunk-IFIRZPDV.js";import"./chunk-4VCNPSG4.js";import{$ as o,A,Ca as j,F as u,G as d,M as _,N as l,O as S,S as h,T as I,U as v,W as f,X as C,Y as w,Z as b,_ as i,aa as k,ba as x,ca as p,da as s,ea as y,g as T,ga as c,ha as g,na as E}from"./chunk-YW5HSTP4.js";function B(e,n){if(e&1){let t=x();i(0,"div",11),k(1,"img",12),i(2,"p",13),c(3),o()(),i(4,"button",14),p("click",function(){u(t);let r=s();return d(r.redirectTo("login"))}),c(5,"Salir"),o()}if(e&2){let t=s();l(3),g(t.email)}}function J(e,n){if(e&1){let t=x();i(0,"button",15),p("click",function(){u(t);let r=s();return d(r.redirectTo("login"))}),c(1,"Ingresar"),o(),i(2,"button",16),p("click",function(){u(t);let r=s();return d(r.redirectTo("register"))}),c(3,"Registrarse"),o()}}function F(e,n){if(e&1&&(i(0,"a",19)(1,"div",22)(2,"div",23)(3,"p",24),c(4),o()()()()),e&2){let t=n.$implicit;y("href",t.pathJuego,_),l(),v("background-image","url("+t.pathImagen+")"),l(3),g(t.title)}}function z(e,n){if(e&1){let t=x();i(0,"div",17)(1,"div",18),w(2,F,5,4,"a",19,C),o()(),i(4,"div",20)(5,"app-chat",21),p("isActiveChange",function(r){u(t);let m=s(2);return d(m.receiveChatOutput(r))}),o()()}if(e&2){let t=s(2);l(2),b(t.juegos),l(3),I("isActive",t.isChatActive)}}function O(e,n){if(e&1&&(i(0,"a",19)(1,"div",22)(2,"div",23)(3,"p",24),c(4),o()()()()),e&2){let t=n.$implicit;y("href",t.pathJuego,_),l(),v("background-image","url("+t.pathImagen+")"),l(3),g(t.title)}}function P(e,n){if(e&1&&(i(0,"div",25)(1,"div",18),w(2,O,5,4,"a",19,C),o()()),e&2){let t=s(2);l(2),b(t.juegos)}}function U(e,n){if(e&1&&h(0,z,6,1)(1,P,4,0),e&2){let t=s();f(0,t.isChatActive?0:1)}}function $(e,n){if(e&1&&(i(0,"a",28)(1,"div",29)(2,"p",24),c(3),o()()()),e&2){let t=n.$implicit;y("href",t.pathJuego,_),l(),v("background-image","url("+t.pathImagen+")"),l(2),g(t.title)}}function D(e,n){if(e&1&&(i(0,"div",26)(1,"div",27),w(2,$,4,4,"a",28,C),o()()),e&2){let t=s();l(2),b(t.juegos)}}function M(e,n){if(e&1){let t=x();i(0,"div",10)(1,"img",30),p("click",function(){u(t);let r=s();return d(r.isChatActive=!r.isChatActive)}),o()()}}var N=(()=>{let n=class n{constructor(a,r){this.auth=a,this.router=r,this.email="",this.isAuthenticated=!1,this.isChatActive=!1,this.userSubscription=new T,this.juegos=[{title:"Ahorcado",img:"",pathImagen:"/assets/home/ahorcado.jpg",pathJuego:"/ahorcado"},{title:"\xBFMayor o menor?",img:"",pathImagen:"/assets/home/mayormenor.jpg",pathJuego:"/mayormenor"},{title:"Evitaminas ContraReloj",img:"",pathImagen:"/assets/home/buscaminas.jpeg",pathJuego:"/buscaminas"},{title:"Preguntados",img:"",pathImagen:"/assets/home/preguntados.png",pathJuego:"/preguntados_pokemon"}]}receiveChatOutput(a){this.isChatActive=a}redirectTo(a){a==="login"&&this.auth.logout(),this.router.navigateByUrl(a)}ngOnInit(){this.isAuthenticated=this.auth.isAuthenticated(),this.userSubscription=this.auth.userActual$.subscribe(a=>{this.isAuthenticated=!!a,this.email=a?.email})}ngOnDestroy(){this.userSubscription.unsubscribe()}};n.\u0275fac=function(r){return new(r||n)(S(H),S(j))},n.\u0275cmp=A({type:n,selectors:[["app-home"]],standalone:!0,features:[E],decls:18,vars:3,consts:[[1,"w-screen","h-screen","flex","flex-col","overflow-x-hidden"],[1,"w-full","h-16","min-h-16","bg-zinc-900","flex","flex-row","justify-between","px-7"],[1,"flex","items-center","flex-row","gap-3"],["src","/assets/joystick.png","alt","","height","32px","width","32px"],[1,"text-2xl","text-slate-100","font-bold"],[1,"w-full","h-full","flex","flex-row","bg-cover","bg-[url('/assets/home/fondo.jpg')]"],[1,"group","flex","flex-row","gap-3"],["src","/assets/home/quien.png","alt","","height","120px","width","120px",1,"absolute","left-0","bottom-0","h-[60px]","w-[60px]","m-3","cursor-pointer","hover:scale-90","transition-all",3,"click"],[1,"hidden","absolute","w-fit","left-20","bottom-5","bg-white","p-1","rounded-lg","group-hover:flex","transition-all","duration-300"],[1,"text-2xl","font-black","text-yellow-500"],[1,""],[1,"flex","flex-row","rounded-md","py-1","px-4","gap-2","bg-white"],["src","/assets/home/user.png","alt","","height","25px","width","25px",1,""],[1,"text-zinc-900"],[1,"bg-red-600","rounded-md","py-1","px-4","text-white","font-medium","hover:bg-red-800","transition-all",3,"click"],[1,"bg-customBlue","rounded-md","py-1","px-3","text-slate-100","font-medium","hover:bg-[url('/assets/home/fondo.jpg')]","transition-all","duration-300",3,"click"],[1,"bg-slate-100","rounded-md","py-1","px-3","text-customBlue","font-medium","hover:bg-[url('/assets/home/fondo.jpg')]","hover:text-slate-100","hover:bg-left","transition-colors","duration-300",3,"click"],[1,"h-full","w-3/4","flex"],[1,"w-full","h-full","p-6","grid","grid-cols-2","grid-rows-2","gap-10"],[1,"w-full","h-full",3,"href"],[1,"h-full","w-1/4"],[3,"isActiveChange","isActive"],[1,"group","w-full","h-full","rounded-2xl","p-3","flex","justify-center","bg-cover","bg-center","hover:scale-95","transition-all"],[1,"w-full","h-12","flex","justify-center","items-center","bg-white/55","rounded-3xl","group-hover:bg-white/95","transition-all"],[1,"text-customBlue","font-black","text-xl"],[1,"h-full","w-full","flex"],[1,"h-full","w-full"],[1,"w-full","h-full","p-6","flex","flex-row","gap-10"],[1,"w-full","h-1/3",3,"href"],[1,"w-full","h-full","rounded-2xl","p-3","flex","justify-center","bg-cover","bg-center","hover:scale-95","transition-all"],["src","/assets/home/chat.png","alt","","height","120px","width","120px",1,"absolute","right-0","bottom-0","h-[60px]","w-[60px]","m-4","cursor-pointer","hover:scale-90","transition-all",3,"click"]],template:function(r,m){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),k(3,"img",3),i(4,"p",4),c(5,"Sala de Juegos"),o()(),i(6,"div",2),h(7,B,6,1)(8,J,4,0),o()(),i(9,"div",5),h(10,U,2,1)(11,D,4,0),o(),i(12,"div",6)(13,"img",7),p("click",function(){return m.redirectTo("quiensoy")}),o(),i(14,"div",8)(15,"p",9),c(16,"\xBFQui\xE9n soy?"),o()()(),h(17,M,2,0,"div",10),o()),r&2&&(l(7),f(7,m.isAuthenticated?7:8),l(3),f(10,m.isAuthenticated?10:11),l(7),f(17,!m.isChatActive&&m.isAuthenticated?17:-1))},dependencies:[V]});let e=n;return e})();export{N as HomeComponent};