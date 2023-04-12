"use strict";(self.webpackChunkvelzon=self.webpackChunkvelzon||[]).push([[592],{73:(U,p,n)=>{n.d(p,{O:()=>d});var o=n(5861),c=n(7221),l=n(4850),h=n(1086),_=n(6738),f=n(529),g=n(7083),E=n(1665);let d=(()=>{class u{constructor(t,r,e){this.http=t,this.alertService=r,this.configService=e,this.isAlertOpen=!1,this.api="http://localhost:3000/api/"}ngOnInit(){}auth(t,r){var e=this;return(0,o.Z)(function*(){return new Promise((a,s)=>e.http.post("http://localhost:3000/"+t,r).pipe((0,c.K)(e.handleError),(0,l.U)(e.handleResponse)).subscribe(i=>{if(console.log("response",i),!i.success&&i.message)return e.isAlertOpen?void 0:(e.isAlertOpen=!0,e.alertService.openModal({message:i.message,title:"Message"}));a(i)}))})()}get(t){var r=this;return(0,o.Z)(function*(){return new Promise((e,a)=>r.http.get(r.api+t).pipe((0,c.K)(r.handleError),(0,l.U)(r.handleResponse)).subscribe(s=>{if(console.log(s),!s.success&&"Unauthorized"===s.message||"Unauthorized"===s)return r.configService.clearAppConfig();s&&e(s)}))})()}post(t,r){var e=this;return(0,o.Z)(function*(){return new Promise((a,s)=>e.http.post(e.api+t,r).pipe((0,c.K)(e.handleError),(0,l.U)(e.handleResponse)).subscribe(i=>{if(!i.success&&"Unauthorized"===i.message)return e.configService.clearAppConfig();if("string"==typeof i&&"Unauthorized"===i){if(e.isAlertOpen)return;e.isAlertOpen=!0,e.alertService.openModal({message:"Please Login Again",title:"Unauthorized",closeBtn:"Login",type:"route"})}else a(i)}))})()}put(t,r){var e=this;return(0,o.Z)(function*(){return new Promise((a,s)=>e.http.put(e.api+t,r).pipe((0,c.K)(e.handleError),(0,l.U)(e.handleResponse)).subscribe(i=>{if(!i.success&&"Unauthorized"===i.message||"string"==typeof i&&"Unauthorized"===i)return e.configService.clearAppConfig();i&&a(i)}))})()}delete(t){var r=this;return(0,o.Z)(function*(){return new Promise((e,a)=>r.http.delete(r.api+t).pipe((0,c.K)(r.handleError),(0,l.U)(r.handleResponse)).subscribe(s=>{s&&e(s)}))})()}getPaginate(t){var r=this;return(0,o.Z)(function*(){return new Promise((e,a)=>r.http.get(r.api+t).pipe((0,c.K)(r.handleError),(0,l.U)(r.handleResponse)).subscribe(s=>{if(!s.success&&"Unauthorized"===s.message)return r.configService.clearAppConfig();s&&e(s)}))})()}handleError(t){return console.log("-------------------------------------------------------"),console.log("[SERVER]->[status]->[",t.status,"]"),console.log("[SERVER]->[ERROR]->[",t,"]"),console.log("-------------------------------------------------------"),(0,h.of)(401===t.status?{message:"Unauthorized",success:!1}:0!==t.status||t.ok?t.error:"Unauthorized")}handleResponse(t){return t}}return u.\u0275fac=function(t){return new(t||u)(_.LFG(f.eN),_.LFG(g.c),_.LFG(E.E))},u.\u0275prov=_.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);