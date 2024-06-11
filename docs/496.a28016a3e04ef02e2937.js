"use strict";(self.webpackChunkmapas_app=self.webpackChunkmapas_app||[]).push([[496],{496:(A,m,s)=>{s.r(m),s.d(m,{MapasModule:()=>T});var p=s(583),d=s(353),c=s(958),o=s(639);let g=(()=>{class t{constructor(){}ngOnInit(){new c.Map({container:"mapa",style:"mapbox://styles/mapbox/streets-v11",center:[-74.19496522352912,4.625526607040665],zoom:16})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-full-screen"]],decls:1,vars:0,consts:[["id","mapa"]],template:function(e,a){1&e&&o._UZ(0,"div",0)},styles:["#mapa[_ngcontent-%COMP%]{width:100%;height:100%}"]}),t})();const u=["mapa"];let f=(()=>{class t{constructor(){this.zoomLevel=15,this.center=[-74.19496522352912,4.625526607040665]}ngOnDestroy(){this.mapa.off("zoom",()=>{}),this.mapa.off("zoomend",()=>{}),this.mapa.off("move",()=>{})}ngAfterViewInit(){this.mapa=new c.Map({container:this.divMapa.nativeElement,style:"mapbox://styles/mapbox/streets-v11",center:this.center,zoom:this.zoomLevel}),this.mapa.on("zoom",()=>{this.zoomLevel=this.mapa.getZoom()}),this.mapa.on("zoomend",()=>{this.mapa.getZoom()>18&&this.mapa.zoomTo(18)}),this.mapa.on("move",e=>{const a=e.target,{lng:r,lat:i}=a.getCenter();this.center=[r,i]})}zoomOut(){this.mapa.zoomOut()}zoomIn(){this.mapa.zoomIn()}zoomCambio(e){this.mapa.zoomTo(Number(e))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-zoom-range"]],viewQuery:function(e,a){if(1&e&&o.Gf(u,5),2&e){let r;o.iGM(r=o.CRH())&&(a.divMapa=r.first)}},decls:16,vars:13,consts:[[1,"mapa-container"],["mapa",""],[1,"row"],[1,"col-12"],[1,"form-label"],["type","range","min","0","max","18",1,"form-range",3,"value","input"],["zoomInput",""],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary","float-end",3,"click"]],template:function(e,a){if(1&e){const r=o.EpF();o._UZ(0,"div",0,1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"label",4),o._uU(5),o.ALo(6,"number"),o.ALo(7,"number"),o.ALo(8,"number"),o.qZA(),o.TgZ(9,"input",5,6),o.NdJ("input",function(){o.CHM(r);const l=o.MAs(10);return a.zoomCambio(l.value)}),o.qZA(),o.qZA(),o.TgZ(11,"div",3),o.TgZ(12,"button",7),o.NdJ("click",function(){return a.zoomOut()}),o._uU(13," - "),o.qZA(),o.TgZ(14,"button",8),o.NdJ("click",function(){return a.zoomIn()}),o._uU(15," + "),o.qZA(),o.qZA(),o.qZA()}2&e&&(o.xp6(5),o.lnq(" Zoom: ",o.xi3(6,4,a.zoomLevel,"2.0-2")," - Lng, Lat: [",o.xi3(7,7,a.center[0],"2.4-4"),", ",o.xi3(8,10,a.center[1],"2.4-4"),"] "),o.xp6(4),o.Q6J("value",a.zoomLevel))},pipes:[p.JJ],styles:[".mapa-container[_ngcontent-%COMP%]{width:100%;height:100%}.row[_ngcontent-%COMP%]{width:400px;background-color:#fff;border-radius:5px;position:fixed;bottom:50px;left:50px;padding:10px;z-index:999}"]}),t})();const h=["mapa"],_=function(t){return{"background-color":t}};function M(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"li",5),o.NdJ("click",function(){const i=o.CHM(e).$implicit;return o.oxw().irMarcador(i.marker)}),o._uU(1),o.TgZ(2,"span",6),o.NdJ("click",function(){const i=o.CHM(e).index;return o.oxw().borrarMarcador(i)}),o._UZ(3,"i",7),o.qZA(),o.qZA()}if(2&t){const a=n.index;o.Q6J("ngStyle",o.VKq(2,_,n.$implicit.color)),o.xp6(1),o.hij(" Marker ",a+1," ")}}let v=(()=>{class t{constructor(){this.zoomLevel=14,this.center=[-74.19496522352912,4.625526607040665],this.marcadores=[]}ngAfterViewInit(){this.mapa=new c.Map({container:this.divMapa.nativeElement,style:"mapbox://styles/mapbox/streets-v11",center:this.center,zoom:this.zoomLevel}),this.leerLocalStorage()}agregarMarcador(){const e="#xxxxxx".replace(/x/g,r=>(16*Math.random()|0).toString(16)),a=new c.Marker({draggable:!0,color:e}).setLngLat(this.center).addTo(this.mapa);this.marcadores.push({color:e,marker:a}),this.guardarMarcadoresLocalStorage(),a.on("dragend",()=>{this.guardarMarcadoresLocalStorage()})}irMarcador(e){const{lng:a,lat:r}=e.getLngLat();this.mapa.flyTo({center:[a,r],zoom:16})}guardarMarcadoresLocalStorage(){const e=[];this.marcadores.forEach(a=>{const r=a.color,{lng:i,lat:l}=a.marker.getLngLat();e.push({color:r,centro:[i,l]})}),localStorage.setItem("marcadores",JSON.stringify(e))}leerLocalStorage(){localStorage.getItem("marcadores")&&JSON.parse(localStorage.getItem("marcadores")).forEach(a=>{const r=new c.Marker({color:a.color,draggable:!0}).setLngLat(a.centro).addTo(this.mapa);this.marcadores.push({color:a.color,marker:r}),r.on("dragend",()=>{this.guardarMarcadoresLocalStorage()})})}borrarMarcador(e){var a;null===(a=this.marcadores[e].marker)||void 0===a||a.remove(),this.marcadores.splice(e,1),this.guardarMarcadoresLocalStorage()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-marcadores"]],viewQuery:function(e,a){if(1&e&&o.Gf(h,5),2&e){let r;o.iGM(r=o.CRH())&&(a.divMapa=r.first)}},decls:6,vars:1,consts:[[1,"list-group"],[1,"list-group-item","list-group-item-info",3,"click"],["class","list-group-item list-group-item-info",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"mapa-container"],["mapa",""],[1,"list-group-item","list-group-item-info",3,"ngStyle","click"],[1,"badge","bg-danger","rounded-pill","ms-3",3,"click"],[1,"far","fa-trash-alt","delete-icon"]],template:function(e,a){1&e&&(o.TgZ(0,"ul",0),o.TgZ(1,"li",1),o.NdJ("click",function(){return a.agregarMarcador()}),o._uU(2," + Agregar "),o.qZA(),o.YNc(3,M,4,4,"li",2),o.qZA(),o._UZ(4,"div",3,4)),2&e&&(o.xp6(3),o.Q6J("ngForOf",a.marcadores))},directives:[p.sg,p.PC],styles:[".mapa-container[_ngcontent-%COMP%]{width:100%;height:100%}.list-group[_ngcontent-%COMP%]{position:fixed;top:20px;right:20px;z-index:99}li[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();const Z=["mapa"];let C=(()=>{class t{constructor(){this.lngLat=[0,0]}ngAfterViewInit(){const e=new c.Map({container:this.divMapa.nativeElement,style:"mapbox://styles/mapbox/streets-v11",center:this.lngLat,zoom:14,interactive:!1});(new c.Marker).setLngLat(this.lngLat).addTo(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-mini-mapa"]],viewQuery:function(e,a){if(1&e&&o.Gf(Z,5),2&e){let r;o.iGM(r=o.CRH())&&(a.divMapa=r.first)}},inputs:{lngLat:"lngLat"},decls:2,vars:0,consts:[["mapa",""]],template:function(e,a){1&e&&o._UZ(0,"div",null,0)},styles:["div[_ngcontent-%COMP%]{width:100%;height:150px;margin:0}"]}),t})();function x(t,n){if(1&t&&(o.TgZ(0,"div",6),o.TgZ(1,"div",7),o._UZ(2,"app-mini-mapa",8),o.TgZ(3,"div",9),o.TgZ(4,"h5",10),o._uU(5),o.qZA(),o.TgZ(6,"p",11),o._uU(7),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t){const e=n.$implicit;o.xp6(2),o.Q6J("lngLat",e.lngLat),o.xp6(3),o.Oqu(e.titulo),o.xp6(2),o.Oqu(e.descripcion)}}const L=[{path:"",children:[{path:"fullscreen",component:g},{path:"zoom-range",component:f},{path:"marcadores",component:v},{path:"propiedades",component:(()=>{class t{constructor(){this.propiedades=[{titulo:"Casa residencial, Canad\xe1",descripcion:"Bella propiedad en Katana, Canad\xe1",lngLat:[-75.92722289474008,45.280015511264466]},{titulo:"Casa de playa, M\xe9xico",descripcion:"Hermosa casa de playa en Acapulco, M\xe9xico",lngLat:[-99.91287720907991,16.828940930185748]},{titulo:"Apartamento, Argentina",descripcion:"Lujoso apartamento en el coraz\xf3n de Buenos Aires, Argentina",lngLat:[-58.430166677283445,-34.57150108832866]},{titulo:"Local comercial, Espa\xf1a",descripcion:"Local comercial disponible en Madrid, Espa\xf1a, cerca de El Jard\xedn Secreto.",lngLat:[-3.7112735618380177,40.42567285425766]}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-propiedades"]],decls:11,vars:1,consts:[[1,"row","mt-3"],[1,"col-2"],[1,"col"],[1,"row","container"],[1,"row"],["class","col-4 mb-2",4,"ngFor","ngForOf"],[1,"col-4","mb-2"],[1,"card"],[1,"card-img-top",3,"lngLat"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0),o._UZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h1"),o._uU(4,"Lista de propiedades"),o.qZA(),o._UZ(5,"hr"),o.qZA(),o.qZA(),o.TgZ(6,"div",3),o._UZ(7,"div",1),o.TgZ(8,"div",2),o.TgZ(9,"div",4),o.YNc(10,x,8,3,"div",5),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(10),o.Q6J("ngForOf",a.propiedades))},directives:[p.sg,C],encapsulation:2}),t})()},{path:"**",redirectTo:"fullscreen"}]}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[d.Bz.forChild(L)],d.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[p.ez,y]]}),t})()}}]);