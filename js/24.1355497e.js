(self["webpackChunkwebwares"]=self["webpackChunkwebwares"]||[]).push([[24],{7441:function(e,i,t){"use strict";t.d(i,{A:function(){return g}});var o=t(641),r=t(33);function n(e,i,t,n,l,a){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("button",null,(0,r.v_)(t.label),1)])}var l=t(3751);const a={props:{label:String,bcolor:String,hcolor:String}},d=()=>{(0,l.$9)((e=>({"3a577f09":e.bcolor,"449492c3":e.hcolor})))},s=a.setup;a.setup=s?(e,i)=>(d(),s(e,i)):d;var u=a,p=t(6262);const c=(0,p.A)(u,[["render",n],["__scopeId","data-v-e05e590c"]]);var g=c},7024:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return j}});var o=t(641),r=t(3751),n=t(33);const l={id:"addCategoryModal",class:"modal"},a={class:"modal-content"},d={id:"addModal",class:"modal"},s={class:"modal-content"},u={class:"body",style:{"overflow-x":"auto"}},p=["src","alt"],c=["onClick"],g={id:"editModal",class:"modal"},m={class:"modal-content"},b={class:"edit-form"};function k(e,i,k,L,f,h){const x=(0,o.g2)("ButtonComponent");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bo)((0,o.Lk)("div",l,[(0,o.Lk)("div",a,[(0,o.Lk)("span",{class:"close",onClick:i[0]||(i[0]=e=>h.closeAddCategoryModal())},"X"),i[23]||(i[23]=(0,o.Lk)("h2",null,"Ajouter une Catégorie",-1)),(0,o.Lk)("form",{onSubmit:i[2]||(i[2]=(0,r.D$)(((...e)=>h.addCategory&&h.addCategory(...e)),["prevent"]))},[i[19]||(i[19]=(0,o.Lk)("label",{for:"categoryName"},"Nom de la Catégorie:",-1)),i[20]||(i[20]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"categoryName","onUpdate:modelValue":i[1]||(i[1]=e=>f.newCategory.name=e)},null,512),[[r.Jo,f.newCategory.name]]),i[21]||(i[21]=(0,o.Lk)("br",null,null,-1)),i[22]||(i[22]=(0,o.Lk)("br",null,null,-1)),(0,o.bF)(x,{label:"Enregistrer",bcolor:"#4280b8",hcolor:"#3f4666",onClick:h.addCategory},null,8,["onClick"])],32)])],512),[[r.aG,f.isAddCategoryVisible]]),(0,o.bo)((0,o.Lk)("div",d,[(0,o.Lk)("div",s,[(0,o.Lk)("span",{class:"close",onClick:i[3]||(i[3]=e=>h.closeAddModal())},"X"),i[42]||(i[42]=(0,o.Lk)("h2",null,"Ajouter un produit",-1)),(0,o.Lk)("form",{onSubmit:i[9]||(i[9]=(0,r.D$)(((...e)=>h.addProd&&h.addProd(...e)),["prevent"]))},[i[25]||(i[25]=(0,o.Lk)("label",{for:"addName"},"Titre produit",-1)),i[26]||(i[26]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"titre",name:"titre","onUpdate:modelValue":i[4]||(i[4]=e=>f.newProd.titre=e)},null,512),[[r.Jo,f.newProd.titre]]),i[27]||(i[27]=(0,o.Lk)("br",null,null,-1)),i[28]||(i[28]=(0,o.Lk)("label",{for:"addDescription"},"Description produit",-1)),i[29]||(i[29]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("textarea",{id:"description",name:"description","onUpdate:modelValue":i[5]||(i[5]=e=>f.newProd.description=e)},null,512),[[r.Jo,f.newProd.description]]),i[30]||(i[30]=(0,o.Lk)("br",null,null,-1)),i[31]||(i[31]=(0,o.Lk)("label",{for:"addPrice"},"Prix produit",-1)),i[32]||(i[32]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"string",id:"prix",name:"prix",size:"8","onUpdate:modelValue":i[6]||(i[6]=e=>f.newProd.prix=e)},null,512),[[r.Jo,f.newProd.prix]]),i[33]||(i[33]=(0,o.Lk)("br",null,null,-1)),i[34]||(i[34]=(0,o.Lk)("label",{for:"addMoq"},"MOQ produit",-1)),i[35]||(i[35]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"moq",name:"moq",size:"4","onUpdate:modelValue":i[7]||(i[7]=e=>f.newProd.moq=e)},null,512),[[r.Jo,f.newProd.moq]]),i[36]||(i[36]=(0,o.Lk)("br",null,null,-1)),i[37]||(i[37]=(0,o.Lk)("label",{for:"category"},"Catégorie produit",-1)),i[38]||(i[38]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("select",{id:"category",name:"category","onUpdate:modelValue":i[8]||(i[8]=e=>f.newProd.categorieId=e)},i[24]||(i[24]=[(0,o.Lk)("option",{value:"1"},"Mobilier",-1),(0,o.Lk)("option",{value:"2"},"Luminaires",-1),(0,o.Lk)("option",{value:"3"},"Tapis",-1),(0,o.Lk)("option",{value:"4"},"Deco",-1)]),512),[[r.u1,f.newProd.categorieId]]),i[39]||(i[39]=(0,o.Lk)("br",null,null,-1)),i[40]||(i[40]=(0,o.Lk)("br",null,null,-1)),i[41]||(i[41]=(0,o.Lk)("br",null,null,-1)),(0,o.bF)(x,{label:"Enregistrer",bcolor:"#3F4666",hcolor:"#4280b8",onClick:h.addProd},null,8,["onClick"])],32)])],512),[[r.aG,f.isAddVisible]]),(0,o.bF)(x,{label:"Ajouter un Produit",bcolor:"#4280b8",hcolor:"#748284",onClick:i[10]||(i[10]=e=>h.showAdd())}),(0,o.bF)(x,{label:"Ajouter une Categorie",bcolor:"#4280b8",hcolor:"#748284",onClick:i[11]||(i[11]=e=>h.showAddCategory())}),(0,o.Lk)("div",u,[i[44]||(i[44]=(0,o.Lk)("h1",null,"Liste des produits",-1)),(0,o.Lk)("table",null,[i[43]||(i[43]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Image produit"),(0,o.Lk)("th",null,"Image nom"),(0,o.Lk)("th",null,"Titre produit"),(0,o.Lk)("th",null,"Description produit"),(0,o.Lk)("th",null,"Prix produit"),(0,o.Lk)("th",null,"MOQ produit"),(0,o.Lk)("th",null,"CatégorieId"),(0,o.Lk)("th",null,"Actions")])],-1)),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(f.productList,((e,i)=>((0,o.uX)(),(0,o.CE)("tr",{key:i},[(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:t(290)(`./${e.image}`),alt:e.titre,class:"produit-image"},null,8,p)]),(0,o.Lk)("td",null,(0,n.v_)(e.image),1),(0,o.Lk)("td",null,(0,n.v_)(e.titre),1),(0,o.Lk)("td",null,(0,n.v_)(e.description),1),(0,o.Lk)("td",null,(0,n.v_)(e.prix),1),(0,o.Lk)("td",null,(0,n.v_)(e.moq),1),(0,o.Lk)("td",null,(0,n.v_)(e.categorieId),1),(0,o.Lk)("td",null,[(0,o.bF)(x,{label:"Edit",bcolor:"#3F4666",hcolor:"#4280b8",onClick:e=>h.showMod(i)},null,8,["onClick"]),(0,o.Lk)("button",{type:"button",class:"delete-btn",onClick:e=>h.supProd(i)}," X ",8,c)])])))),128))])])]),(0,o.bo)((0,o.Lk)("div",g,[(0,o.Lk)("div",m,[(0,o.Lk)("span",{class:"close",onClick:i[12]||(i[12]=e=>h.closeModal())},"X"),i[63]||(i[63]=(0,o.Lk)("h2",null,"Modifier le produit :",-1)),(0,o.Lk)("form",b,[i[46]||(i[46]=(0,o.Lk)("label",{for:"editName"},"Titre produit",-1)),i[47]||(i[47]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"editName",size:"30","onUpdate:modelValue":i[13]||(i[13]=e=>f.editProd.titre=e)},null,512),[[r.Jo,f.editProd.titre]]),i[48]||(i[48]=(0,o.Lk)("br",null,null,-1)),i[49]||(i[49]=(0,o.Lk)("label",{for:"editDescription"},"Description produit",-1)),i[50]||(i[50]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("textarea",{id:"description",name:"description","onUpdate:modelValue":i[14]||(i[14]=e=>f.editProd.description=e)},null,512),[[r.Jo,f.editProd.description]]),i[51]||(i[51]=(0,o.Lk)("br",null,null,-1)),i[52]||(i[52]=(0,o.Lk)("label",{for:"editPrice"},"Prix produit",-1)),i[53]||(i[53]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"string",id:"editPrice",size:"10","onUpdate:modelValue":i[15]||(i[15]=e=>f.editProd.prix=e)},null,512),[[r.Jo,f.editProd.prix]]),i[54]||(i[54]=(0,o.Lk)("br",null,null,-1)),i[55]||(i[55]=(0,o.Lk)("label",{for:"editMoq"},"MOQ produit",-1)),i[56]||(i[56]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"editMoq",size:"5","onUpdate:modelValue":i[16]||(i[16]=e=>f.editProd.moq=e)},null,512),[[r.Jo,f.editProd.moq]]),i[57]||(i[57]=(0,o.Lk)("br",null,null,-1)),i[58]||(i[58]=(0,o.Lk)("label",{for:"category"},"Catégorie Id produit",-1)),i[59]||(i[59]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("select",{id:"category",name:"category","onUpdate:modelValue":i[17]||(i[17]=e=>f.editProd.categorieId=e)},i[45]||(i[45]=[(0,o.Lk)("option",{value:"1"},"Mobilier",-1),(0,o.Lk)("option",{value:"2"},"Luminaires",-1),(0,o.Lk)("option",{value:"3"},"Tapis",-1),(0,o.Lk)("option",{value:"4"},"Deco",-1)]),512),[[r.u1,f.editProd.categorieId]]),i[60]||(i[60]=(0,o.Lk)("br",null,null,-1)),i[61]||(i[61]=(0,o.Lk)("br",null,null,-1)),i[62]||(i[62]=(0,o.Lk)("br",null,null,-1)),(0,o.bF)(x,{label:"Enregistrer",bcolor:"#3F4666",hcolor:"#4280b8",onClick:i[18]||(i[18]=e=>h.saveMod())})])])],512),[[r.aG,f.isVisible]])])}t(4114);var L=t(7441),f={name:"GestionProduits",components:{ButtonComponent:L.A},data(){return{productList:[{id:1,image:"mobilier-5.jpg",titre:"Table à manger en bois",description:"Table à manger en bois massif avec finition élégante.",prix:259.99,moq:5,count:5,categorieId:1},{id:2,image:"luminaire-1.jpg",titre:"Lampe moderne",description:"Lampe avec un design moderne et éclairage ajustable.",prix:129.99,moq:10,count:10,categorieId:2},{id:3,image:"tapis-2.jpg",titre:"Tapis en laine",description:"Tapis doux en laine avec motif géométrique.",prix:89.99,moq:20,count:20,categorieId:3},{id:4,image:"deco-3.jpg",titre:"Vase éthnique en argile",description:"Vase éthnique en argile avec motifs gravés à la main.",prix:49.99,moq:20,count:20,categorieId:4},{id:5,image:"luminaire-3.jpg",titre:"Suspension en jute",description:"Suspension esthétique avec abat-jour en jute finition naturelle.",prix:69.99,moq:20,count:20,categorieId:2},{id:6,image:"tapis-5.jpg",titre:"Tapis poils longs",description:"Tapis poils longs tellement doux et durable. Tissé à la main, 100% polyester recylcé!",prix:129.99,moq:10,count:10,categorieId:3},{id:7,image:"deco-1.jpg",titre:" Vase en bois",description:"Vase en bois d'acacia.",prix:29.99,moq:20,count:20,categorieId:4},{id:8,image:"mobilier-3.jpg",titre:"Canapé en cuir 3 places",description:"Canapé en cuir à la teinte riche et chaleureuse. Silhouette minimaliste et design indémodable.",prix:599.99,moq:2,count:2,categorieId:1},{id:9,image:"tapis-3.jpg",titre:"Tapis oriental tissé",description:"Tapis motif ethnique type Poils ras. Antistatique, antiacarien et il ne blanchit pas avec le temps.",prix:119.99,moq:10,count:10,categorieId:3},{id:10,image:"luminaire-5.jpg",titre:"Applique en frêne",description:"Applique murale en bois. Design durable et éco-responsable.",prix:59.99,moq:20,count:20,categorieId:2},{id:11,image:"deco-4.jpg",titre:"Vase ceramique",description:"Vase decoratif en ceramique. A la fois majestueux et raffiné ce vase peut s'intégrer dans tout style d'intérieur.",prix:79.99,moq:20,count:20,categorieId:4},{id:12,image:"mobilier-1.jpg",titre:"Table de chevet",description:"Ses lignes d'inspiration scandinave apportent une touche originale et unique, très agréable à vivre au quotidien.",prix:59.99,moq:20,count:20,categorieId:1},{id:13,image:"luminaire-4.jpg",titre:"Suspension forme dôme",description:"Suspension forme dôme en métal noir. Cette suspension opte pour un style résolument industriel et vintage",prix:39.99,moq:20,count:20,categorieId:2},{id:14,image:"tapis-1.jpg",titre:"Tapis imitation fourrure",description:"Tapis imitation fourrure couleur gris. Très doux et confortable, il apporte une touche déco à la chambre ou au salon.",prix:109.99,moq:15,count:15,categorieId:3},{id:15,image:"mobilier-4.jpg",titre:"Canapé convertible express 3 places en velours",description:"Avec son revêtement en velours composé d'un support 91% polyester - 9% coton et d'une surface 100% polyester à la finition passepoilée, il joue la carte de l'élégance.",prix:349.99,moq:5,count:5,categorieId:1},{id:16,image:"deco-2.jpg",titre:"Vase céramique bleu",description:"Ce vase en céramique est un véritable chef-d'œuvre de design moderne",prix:49.99,moq:20,count:20,categorieId:4},{id:17,image:"tapis-4.jpg",titre:"Tapis crocheté téte d'éléphant",description:"Tapis crocheté à main en forme d'éléphant, 100% laine recyclée",prix:89.99,moq:20,count:20,categorieId:3},{id:18,image:"luminaire-2.jpg",titre:"Suspension en béton clair et bois",description:"Une suspension en béton clair qui s'intègre parfaitement dans une décoration industrielle ou dans un intérieur loft.",prix:49.99,moq:20,count:20,categorieId:2},{id:19,image:"deco-5.jpg",titre:"Vase en céramique raku, turquoise",description:"Vase en céramique raku, couleur turquoise. Ce vase prendra naturellement sa place dans votre intérieur.",prix:69.99,moq:20,count:20,categorieId:4},{id:20,image:"mobilier-2.jpg",titre:"Etagère murale en pin",description:"Etagère murale en pin. Ideale pour un design moderne.",prix:49.99,moq:20,count:20,categorieId:1}],categories:[{id:1,name:"Mobilier"},{id:2,name:"Luminaires"},{id:3,name:"Tapis"},{id:4,name:"Deco"}],newCategory:{name:""},newProd:{image:"no-image.png",titre:"",description:"",prix:"",moq:"",categorieId:""},isVisible:!1,isAddVisible:!1,isAddCategoryVisible:!1,editProd:{},indexModal:-1}},methods:{addCategory(){if(this.newCategory.name){const e=this.categories.reduce(((e,i)=>i.id>e?i.id:e),0);this.categories.push({id:e+1,name:this.newCategory.name}),this.newCategory.name="",this.closeAddCategoryModal()}},showAddCategory(){this.isAddCategoryVisible=!0},closeAddCategoryModal(){this.isAddCategoryVisible=!1},addProd(){if(!this.newProd.prix||parseFloat(this.newProd.prix)<=0)alert("Produit Ajouté.");else if(this.newProd.titre&&this.newProd.description&&this.newProd.moq>0&&this.newProd.categorieId){const e=this.productList.reduce(((e,i)=>i.id>e?i.id:e),0);this.newProd.id=e+1,this.newProd.prix=parseFloat(this.newProd.prix),this.productList.push({...this.newProd}),this.newProd={titre:"",description:"",prix:"",moq:"",categorieId:""},this.closeAddModal()}},showAdd(){this.isAddVisible=!0},closeAddModal(){this.isAddVisible=!1},showMod(e){this.isVisible=!0,this.editProd={...this.productList[e]},this.indexModal=e},saveMod(){this.editProd.image&&this.editProd.titre&&this.editProd.description&&this.editProd.prix&&this.editProd.moq>0&&this.editProd.categorieId&&(this.productList[this.indexModal]={...this.editProd},this.closeModal())},supProd(e){confirm("Vous etes sur?")&&this.productList.splice(e,1)},closeModal(){this.isVisible=!1},saveToLocalStorage(){localStorage.setItem("products",JSON.stringify(this.productList))}},watch:{productList:{deep:!0,handler(){this.saveToLocalStorage()}}},created(){let e=localStorage.getItem("products");e&&(this.productList=JSON.parse(e))}},h=t(6262);const x=(0,h.A)(f,[["render",k],["__scopeId","data-v-f6ea260c"]]);var j=x},290:function(e,i,t){var o={"./X.png":4682,"./deco-1.jpg":5717,"./deco-2.jpg":3114,"./deco-3.jpg":7575,"./deco-4.jpg":9580,"./deco-5.jpg":4953,"./facebook.png":5260,"./insta.png":5383,"./luminaire-1.jpg":1186,"./luminaire-2.jpg":8989,"./luminaire-3.jpg":7248,"./luminaire-4.jpg":1059,"./luminaire-5.jpg":2646,"./mobilier-1.jpg":5825,"./mobilier-2.jpg":3622,"./mobilier-3.jpg":3731,"./mobilier-4.jpg":8576,"./mobilier-5.jpg":9821,"./no-image.png":1537,"./panier.png":9219,"./profil.png":5666,"./tapis-1.jpg":9535,"./tapis-2.jpg":2896,"./tapis-3.jpg":2109,"./tapis-4.jpg":1590,"./tapis-5.jpg":6851,"./webwares.png":2232,"./wewa.mp4":6788};function r(e){var i=n(e);return t(i)}function n(e){if(!t.o(o,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=n,e.exports=r,r.id=290},5717:function(e,i,t){"use strict";e.exports=t.p+"img/deco-1.ee71527f.jpg"},3114:function(e,i,t){"use strict";e.exports=t.p+"img/deco-2.874478b3.jpg"},7575:function(e,i,t){"use strict";e.exports=t.p+"img/deco-3.aed36d20.jpg"},9580:function(e,i,t){"use strict";e.exports=t.p+"img/deco-4.04674c61.jpg"},4953:function(e,i,t){"use strict";e.exports=t.p+"img/deco-5.e707fdca.jpg"},1186:function(e,i,t){"use strict";e.exports=t.p+"img/luminaire-1.910e11ab.jpg"},8989:function(e,i,t){"use strict";e.exports=t.p+"img/luminaire-2.7d9defc3.jpg"},7248:function(e,i,t){"use strict";e.exports=t.p+"img/luminaire-3.d4f5cc69.jpg"},1059:function(e,i,t){"use strict";e.exports=t.p+"img/luminaire-4.458a8aa0.jpg"},2646:function(e,i,t){"use strict";e.exports=t.p+"img/luminaire-5.f7ab0c2b.jpg"},5825:function(e,i,t){"use strict";e.exports=t.p+"img/mobilier-1.eba0c725.jpg"},3622:function(e,i,t){"use strict";e.exports=t.p+"img/mobilier-2.e66000fa.jpg"},3731:function(e,i,t){"use strict";e.exports=t.p+"img/mobilier-3.16818ac7.jpg"},8576:function(e,i,t){"use strict";e.exports=t.p+"img/mobilier-4.e02a2115.jpg"},9821:function(e,i,t){"use strict";e.exports=t.p+"img/mobilier-5.445f0e73.jpg"},1537:function(e,i,t){"use strict";e.exports=t.p+"img/no-image.e59fc782.png"},9535:function(e,i,t){"use strict";e.exports=t.p+"img/tapis-1.bcfc66f4.jpg"},2896:function(e,i,t){"use strict";e.exports=t.p+"img/tapis-2.5e61dd30.jpg"},2109:function(e,i,t){"use strict";e.exports=t.p+"img/tapis-3.1ab196a0.jpg"},1590:function(e,i,t){"use strict";e.exports=t.p+"img/tapis-4.85c5d6bb.jpg"},6851:function(e,i,t){"use strict";e.exports=t.p+"img/tapis-5.8d9f05df.jpg"}}]);
//# sourceMappingURL=24.1355497e.js.map