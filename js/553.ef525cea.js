"use strict";(self["webpackChunkwebwares"]=self["webpackChunkwebwares"]||[]).push([[553],{7441:function(e,s,r){r.d(s,{A:function(){return h}});var a=r(641),t=r(33);function l(e,s,r,l,o,i){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("button",null,(0,t.v_)(r.label),1)])}var o=r(3751);const i={props:{label:String,bcolor:String,hcolor:String}},n=()=>{(0,o.$9)((e=>({"3a577f09":e.bcolor,"449492c3":e.hcolor})))},d=i.setup;i.setup=d?(e,s)=>(n(),d(e,s)):n;var u=i,m=r(6262);const c=(0,m.A)(u,[["render",l],["__scopeId","data-v-e05e590c"]]);var h=c},3934:function(e,s,r){r.r(s),r.d(s,{default:function(){return U}});var a=r(641),t=r(33);const l={class:"container"},o={class:"container1"},i={key:0,style:{color:"red"}},n={class:"container2"},d={class:"prix"},u={class:"button"},m={key:0,class:"modal"},c={class:"modal-contenu"};function h(e,s,r,h,p,v){const k=(0,a.g2)("UserForm"),b=(0,a.g2)("ButtonComponent");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("div",o,[s[2]||(s[2]=(0,a.Lk)("h4",null,"Informations pour livraison",-1)),(0,a.Lk)("form",null,[(0,a.bF)(k,{user:p.user,onUserdata:s[0]||(s[0]=e=>p.user=e),onValidResults:v.handlerRes},null,8,["user","onValidResults"])]),p.isError?((0,a.uX)(),(0,a.CE)("p",i,(0,t.v_)(p.errorMessage),1)):(0,a.Q3)("",!0),(0,a.bF)(b,{label:"Confirmer les informations",onClick:v.verifier,bcolor:"#3f4666",hcolor:"#4280b8"},null,8,["onClick"])]),(0,a.Lk)("div",n,[(0,a.Lk)("div",d,[(0,a.Lk)("p",null,"HT : "+(0,t.v_)(p.prix.ht)+" €",1),(0,a.Lk)("p",null,"TVA : "+(0,t.v_)(p.prix.tva)+" €",1),(0,a.Lk)("p",null,[s[3]||(s[3]=(0,a.eW)("A payer : ")),(0,a.Lk)("span",null,(0,t.v_)(p.prix.prixTotal),1),s[4]||(s[4]=(0,a.eW)(" €"))])]),(0,a.Lk)("div",u,[p.isDisabled?((0,a.uX)(),(0,a.Wv)(b,{key:0,label:"Commander",onClick:v.commander,bcolor:"green",hcolor:"darkgreen"},null,8,["onClick"])):(0,a.Q3)("",!0)])]),p.showModal?((0,a.uX)(),(0,a.CE)("div",m,[(0,a.Lk)("div",c,[(0,a.Lk)("p",null,(0,t.v_)(this.message),1),(0,a.bF)(b,{label:"Fermer",bcolor:"#3f4666",hcolor:"#4280b8",onClick:s[1]||(s[1]=e=>v.closeCommands(p.user))})])])):(0,a.Q3)("",!0)])}r(4114);var p=r(7441),v=r(3751);const k={key:0,class:"msgError"},b={key:1,class:"msgError"},g={key:2,class:"msgError"},C={key:3,class:"msgError"},L={key:4,class:"msgError"};function f(e,s,r,l,o,i){return(0,a.uX)(),(0,a.CE)("form",null,[s[11]||(s[11]=(0,a.Lk)("label",{for:"name"},"Raison sociale",-1)),(0,a.bo)((0,a.Lk)("input",{name:"name",type:"text",placeholder:"Raison sociale","onUpdate:modelValue":s[0]||(s[0]=e=>i.localUserData.name=e),disabled:""},null,512),[[v.Jo,i.localUserData.name]]),s[12]||(s[12]=(0,a.Lk)("br",null,null,-1)),s[13]||(s[13]=(0,a.Lk)("label",{for:"phone"},"Numéro de téléphone",-1)),(0,a.bo)((0,a.Lk)("input",{name:"phone",type:"text",placeholder:"Numéro de téléphone","onUpdate:modelValue":s[1]||(s[1]=e=>i.localUserData.phone=e),onInput:s[2]||(s[2]=(...e)=>i.validPhone&&i.validPhone(...e))},null,544),[[v.Jo,i.localUserData.phone]]),o.errors.phone?((0,a.uX)(),(0,a.CE)("div",k,(0,t.v_)(o.errors.phone),1)):(0,a.Q3)("",!0),s[14]||(s[14]=(0,a.Lk)("br",null,null,-1)),s[15]||(s[15]=(0,a.Lk)("label",{for:"mail"},"Email",-1)),(0,a.bo)((0,a.Lk)("input",{name:"mail",type:"text",placeholder:"Votre Email","onUpdate:modelValue":s[3]||(s[3]=e=>i.localUserData.username=e),onInput:s[4]||(s[4]=(...e)=>i.validEmail&&i.validEmail(...e))},null,544),[[v.Jo,i.localUserData.username]]),o.errors.mail?((0,a.uX)(),(0,a.CE)("div",b,(0,t.v_)(o.errors.mail),1)):(0,a.Q3)("",!0),s[16]||(s[16]=(0,a.Lk)("br",null,null,-1)),s[17]||(s[17]=(0,a.Lk)("label",{for:"postal"},"Code Postal",-1)),(0,a.bo)((0,a.Lk)("input",{name:"postal",type:"text",placeholder:"Code Postal","onUpdate:modelValue":s[5]||(s[5]=e=>i.localUserData.postal=e),onInput:s[6]||(s[6]=(...e)=>i.validPostal&&i.validPostal(...e))},null,544),[[v.Jo,i.localUserData.postal]]),o.errors.postal?((0,a.uX)(),(0,a.CE)("div",g,(0,t.v_)(o.errors.postal),1)):(0,a.Q3)("",!0),s[18]||(s[18]=(0,a.Lk)("br",null,null,-1)),s[19]||(s[19]=(0,a.Lk)("label",{for:"city"},"Ville",-1)),(0,a.bo)((0,a.Lk)("input",{name:"city",type:"text",placeholder:"Ville","onUpdate:modelValue":s[7]||(s[7]=e=>i.localUserData.city=e),onInput:s[8]||(s[8]=(...e)=>i.validCity&&i.validCity(...e))},null,544),[[v.Jo,i.localUserData.city]]),s[20]||(s[20]=(0,a.Lk)("br",null,null,-1)),o.errors.city?((0,a.uX)(),(0,a.CE)("div",C,(0,t.v_)(o.errors.city),1)):(0,a.Q3)("",!0),s[21]||(s[21]=(0,a.Lk)("br",null,null,-1)),s[22]||(s[22]=(0,a.Lk)("label",{for:"adress"},"Adresse",-1)),(0,a.bo)((0,a.Lk)("input",{name:"adress",type:"text",placeholder:"Adresse","onUpdate:modelValue":s[9]||(s[9]=e=>i.localUserData.adress=e),onInput:s[10]||(s[10]=(...e)=>i.validAdress&&i.validAdress(...e))},null,544),[[v.Jo,i.localUserData.adress]]),s[23]||(s[23]=(0,a.Lk)("br",null,null,-1)),o.errors.adress?((0,a.uX)(),(0,a.CE)("div",L,(0,t.v_)(o.errors.adress),1)):(0,a.Q3)("",!0),s[24]||(s[24]=(0,a.Lk)("br",null,null,-1))])}var E={props:["user"],data(){return{errors:{phone:"",mail:"",postal:"",city:"",adress:""}}},computed:{localUserData:{get(){return this.user},set(e){this.$emit("userData",e)}}},methods:{validPhone(){const e=/^(0[1-9]([-. ]?[0-9]{2}){4}|(\+33|0033)[1-9]([-. ]?[0-9]{2}){4})$/;this.errors.phone=e.test(this.user.phone)?"":"Entrez le numéro valide",this.emitValidation()},validEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.errors.mail=e.test(this.user.username)?"":"Entrez email valide",this.emitValidation()},validPostal(){this.errors.postal=this.user.postal?"":"Entrez code postal",this.emitValidation()},validCity(){this.errors.city=this.user.city?"":"Entrez ville",this.emitValidation()},validAdress(){this.errors.adress=this.user.adress?"":"Entrez adresse",this.emitValidation()},emitValidation(){this.$emit("validResults",this.errors)}},watch:{user:{handler(){this.validPhone(),this.validEmail(),this.validPostal(),this.validCity(),this.validAdress()},deep:!0,immediate:!0}}},y=r(6262);const I=(0,y.A)(E,[["render",f],["__scopeId","data-v-2f2a38f8"]]);var D=I,S={components:{ButtonComponent:p.A,UserForm:D},data(){return{usersData:[],user:{},userCommand:[],userCommands:[],commandsList:[],userId:"",prix:{},errorMessage:"",isError:!1,isDisabled:!1,validationErrors:{},showModal:!1,message:""}},methods:{userData(){let e=this.userId,s=this.usersData.find((s=>s.username===e));s&&(this.user=s)},verifier(){if(this.phoneValid=this.checkPhone(),this.usernameValid=this.checkUsername(),!this.user.name||!this.user.phone||!this.user.postal||!this.user.city||!this.user.adress||this.phoneValid||this.usernameValid)return this.errorMessage="Veuillez remplir tous les champs correctement",void(this.isError=!0);this.isError=!1,this.isDisabled=!0,this.showModal=!0,this.message="Vos informations ont bien été enregistrées !",this.accessAuCommand=!0},handlerRes(e){this.validationErrors=e,this.isError=Object.values(e).some((e=>""!==e))},checkPhone(){const e=/^(0[1-9]([-. ]?[0-9]{2}){4}|(\+33|0033)[1-9]([-. ]?[0-9]{2}){4})$/;return!e.test(this.user.phone)},checkUsername(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return!e.test(this.user.username)},commander(){let e=this.user.name,s=JSON.parse(localStorage.getItem("userCommand"))||[],r={id:s.length+1,status:"nouveau",th:this.prix.ht,tva:this.prix.tva,ttc:this.prix.prixTotal,user:e};s.push(r),localStorage.setItem("userCommand",JSON.stringify(s));let a=JSON.parse(localStorage.getItem("commandDetails"))||[],t=this.userCommand.map((e=>({id:r.id,titre:e.titre,prix:e.prix,count:e.count})));a=[...a,...t],localStorage.setItem("commandDetails",JSON.stringify(a)),localStorage.removeItem("produitsInPanier"),localStorage.removeItem("prix"),this.showModal=!0,this.message="Votre commande a bien été prise en compte !",this.commande=!0},closeCommands(){this.showModal=!1,this.commande&&(window.location.href="/ProductList")}},created(){this.userId=localStorage.getItem("userId"),this.userCommand=JSON.parse(localStorage.getItem("produitsInPanier")),this.prix=JSON.parse(localStorage.getItem("prix"))||this.prix,this.usersData=JSON.parse(localStorage.getItem("accounts"))||[],this.userData(),this.commandList=JSON.parse(localStorage.getItem("commands"))||[],this.userCommands=JSON.parse(localStorage.getItem("userCommand"))||[],this.commandDetails=JSON.parse(localStorage.getItem("commandDetails"))||[]}};const V=(0,y.A)(S,[["render",h],["__scopeId","data-v-ace7a8be"]]);var U=V}}]);
//# sourceMappingURL=553.ef525cea.js.map