import"./chunk-Y72YGTUY.js";import"./chunk-QI6LW5TE.js";import"./chunk-B7SD6EBQ.js";import{a as I}from"./chunk-T4QXP26G.js";import{d as F}from"./chunk-PJNPD6IF.js";import{$a as m,Aa as c,Ba as y,Ka as p,Oa as f,Pa as x,Qa as u,Ra as h,Sa as n,Ta as a,Ua as A,Va as g,Wa as _,Xa as l,Za as E,_a as d,ab as S,d as $,da as w,fb as j,ma as C,na as v,ya as T}from"./chunk-G4DX45GQ.js";var b=$(I());function B(e,i){if(e&1&&(n(0,"p",17),d(1,"Fallos restantes:"),a(),n(2,"p",18),d(3),a()),e&2){let t=l();c(3),m(6-t.fallosCometidos)}}function z(e,i){if(e&1&&(n(0,"p",17),d(1),a()),e&2){let t=l();c(),S("Fallos restantes: ",6-t.fallosCometidos,"")}}function D(e,i){if(e&1&&(n(0,"div",13)(1,"p",19),d(2),a()()),e&2){let t=i.$implicit;c(2),m(t.toUpperCase())}}function P(e,i){if(e&1&&(n(0,"div",20)(1,"p"),d(2),a()()),e&2){let t=l(3).$implicit;c(2),m(t.letra)}}function L(e,i){if(e&1&&(n(0,"div",21)(1,"p"),d(2),a()()),e&2){let t=l(3).$implicit;c(2),m(t.letra)}}function U(e,i){if(e&1&&p(0,P,3,1,"div",20)(1,L,3,1),e&2){let t=l(2).$implicit,o=l();f(0,o.letrasAcertadas.includes(t.letra)?0:1)}}function V(e,i){if(e&1){let t=g();n(0,"div",22),_("click",function(){C(t);let r=l(2).$implicit,s=l();return v(s.letraPulsada(r.letra))}),n(1,"p"),d(2),a()()}if(e&2){let t=l(2).$implicit;c(2),m(t.letra)}}function M(e,i){if(e&1&&p(0,U,2,1)(1,V,3,1),e&2){let t=l().$implicit;f(0,t.pulsado?0:1)}}function R(e,i){if(e&1&&p(0,M,2,1),e&2){let t=i.$index;f(0,t<14?0:-1)}}function H(e,i){if(e&1&&(n(0,"div",20)(1,"p"),d(2),a()()),e&2){let t=l(3).$implicit;c(2),m(t.letra)}}function O(e,i){if(e&1&&(n(0,"div",21)(1,"p"),d(2),a()()),e&2){let t=l(3).$implicit;c(2),m(t.letra)}}function q(e,i){if(e&1&&p(0,H,3,1,"div",20)(1,O,3,1),e&2){let t=l(2).$implicit,o=l();f(0,o.letrasAcertadas.includes(t.letra)?0:1)}}function J(e,i){if(e&1){let t=g();n(0,"div",22),_("click",function(){C(t);let r=l(2).$implicit,s=l();return v(s.letraPulsada(r.letra))}),n(1,"p"),d(2),a()()}if(e&2){let t=l(2).$implicit;c(2),m(t.letra)}}function K(e,i){if(e&1&&p(0,q,2,1)(1,J,3,1),e&2){let t=l().$implicit;f(0,t.pulsado?0:1)}}function G(e,i){if(e&1&&p(0,K,2,1),e&2){let t=i.$index;f(0,t>13?0:-1)}}var Y=(()=>{let i=class i{constructor(o){this.router=o,this.palabras=["hola","mundo","angular","javascript","typescript","programacion","computadora","teclado","mouse","monitor","escritorio","cama","silla","mesa","ventana","puerta","pared","techo","piso","casa","edificio","ciudad","pais","continente","planeta","sistema","galaxia","universo","vida","muerte","nacimiento","crecimiento","desarrollo","evolucion","revolucion","involucion"],this.abecedario="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),this.letras=this.abecedario.map(r=>({letra:r,pulsado:!1})),this.palabraElegida="",this.letrasAcertadas=[],this.fallosCometidos=0,this.fallosPosibles=6}seleccionarPalabraRandom(){let o=Math.floor(Math.random()*this.palabras.length),r=this.palabras[o];this.palabraElegida=r}redirectTo(o){this.router.navigateByUrl(o)}inicializarLetrasAcertadas(){this.letrasAcertadas=Array(this.palabraElegida.length).fill("_")}verificarTriunfo(){this.letrasAcertadas.join("").toLowerCase()==this.palabraElegida&&b.default.fire({title:"Felicitaciones!",text:"Has ganado! La palabra era: "+this.palabraElegida.toUpperCase(),icon:"success",heightAuto:!1,showDenyButton:!0,confirmButtonText:"Jugar de nuevo",denyButtonText:"Salir",allowOutsideClick:!1,allowEscapeKey:!1}).then(o=>{o.isConfirmed?window.location.href="/ahorcado":o.isDenied&&this.redirectTo("home")})}verificarDerrota(){this.fallosCometidos==this.fallosPosibles&&b.default.fire({title:"Has perdido!",text:"Te quedaste sin intentos :( La palabra era: "+this.palabraElegida.toUpperCase(),icon:"error",heightAuto:!1,showDenyButton:!0,confirmButtonText:"Jugar de nuevo",denyButtonText:"Salir",allowOutsideClick:!1,allowEscapeKey:!1}).then(o=>{o.isConfirmed?window.location.href="/ahorcado":o.isDenied&&this.redirectTo("home")})}letraPulsada(o){this.letras.forEach(r=>{r.letra===o&&(r.pulsado=!0)}),this.palabraElegida.includes(o.toLowerCase())?this.palabraElegida.split("").forEach((r,s)=>{r==o.toLowerCase()&&(this.letrasAcertadas[s]=o)}):this.fallosCometidos++,console.log("Acertadas: "+this.letrasAcertadas.join("")),console.log("Palabra: "+this.palabraElegida),this.verificarDerrota(),this.verificarTriunfo()}ngOnInit(){this.seleccionarPalabraRandom(),this.inicializarLetrasAcertadas(),console.log(this.palabraElegida)}};i.\u0275fac=function(r){return new(r||i)(y(F))},i.\u0275cmp=w({type:i,selectors:[["app-ahorcado"]],standalone:!0,features:[j],decls:27,vars:3,consts:[[1,"w-screen","h-screen","flex","flex-col","overflow-x-","bg-cover","bg-center","bg-[url('/assets/home/fondo.jpg')]"],[1,"w-full","h-16","min-h-16","bg-zinc-900","flex","flex-row","justify-between"],[1,"flex","items-center","flex-row","gap-3","ml-7","z-50"],["src","/assets/joystick.png","alt","","height","32px","width","32px",1,"cursor-pointer",3,"click"],[1,"text-2xl","text-slate-100","font-bold"],[1,"absolute","h-16","w-screen","flex","justify-center","items-center","flex-row","gap-1","z-20"],[1,"flex","items-center","flex-row","gap-3","mr-7","z-50"],[1,"bg-slate-100","rounded-md","py-1","px-3","text-customBlue","font-medium","hover:bg-[url('/assets/home/fondo.jpg')]","hover:text-slate-100","hover:bg-left","transition-colors","duration-300",3,"click"],[1,"h-2/3","w-full","flex","justify-center","flex-col"],[1,"w-full","h-full","flex","justify-center","items-center","bg-cover"],[1,"h-full","w-full","flex","justify-center","items-center","bg-cover","bg-center"],["alt","",1,"w-72","h-72","object-cover",3,"src"],[1,"flex","justify-center","items-center","gap-2","mt-auto"],[1,"flex","flex-col","justify-center","items-center"],[1,"flex","justify-center","items-center","h-1/3","w-full"],[1,"w-3/4","flex","flex-col","gap-3"],[1,"flex","flex-row","gap-3","justify-center"],[1,"text-xl","text-slate-100","font-bold"],[1,"text-xl","text-red-600","font-bold"],[1,"text-white","font-medium","text-[45px]"],[1,"py-2","px-4","bg-green-600","text-white","scale-90","font-bold","text-lg","rounded-xl","flex","items-center","justify-center"],[1,"py-2","px-4","bg-zinc-600","text-white","scale-90","font-bold","text-lg","rounded-xl","flex","items-center","justify-center"],[1,"py-2","px-4","bg-white","text-customBlue","font-bold","text-lg","rounded-xl","flex","items-center","justify-center","hover:scale-90","hover:bg-customBlue","hover:text-white","transition-all","cursor-pointer",3,"click"]],template:function(r,s){r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"img",3),_("click",function(){return s.redirectTo("home")}),a(),n(4,"p",4),d(5,"Ahorcado"),a()(),n(6,"div",5),p(7,B,4,1)(8,z,2,1),a(),n(9,"div",6)(10,"button",7),_("click",function(){return s.redirectTo("home")}),d(11,"Home"),a()()(),n(12,"div",8)(13,"div",9)(14,"div",10),A(15,"img",11),a()(),n(16,"div",12),u(17,D,3,1,"div",13,x),a()(),n(19,"div",14)(20,"div",15)(21,"div",16),u(22,R,1,1,null,null,x),a(),n(24,"div",16),u(25,G,1,1,null,null,x),a()()()()),r&2&&(c(7),f(7,6-s.fallosCometidos==1?7:8),c(8),E("src","/assets/ahorcado/",s.fallosCometidos,".png",T),c(2),h(s.letrasAcertadas),c(5),h(s.letras),c(3),h(s.letras))}});let e=i;return e})();export{Y as AhorcadoComponent};