(function(t){function a(a){for(var s,n,i=a[0],l=a[1],c=a[2],u=0,d=[];u<i.length;u++)n=i[u],r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);v&&v(a);while(d.length)d.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(s=!1)}s&&(o.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},o=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var v=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2b56":function(t,a,e){"use strict";var s=e("9906"),r=e.n(s);r.a},"43cf":function(t,a,e){"use strict";var s=e("bddd"),r=e.n(s);r.a},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),r=e("bb71");e("da64");s["a"].use(r["a"],{iconfont:"md",theme:{primary:"#9652ff",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70"}});var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticClass:"grey lighten-4"},[e("Navbar"),e("v-content",{staticClass:"mx-4 mb-4"},[e("router-view")],1)],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("v-snackbar",{attrs:{timeout:4e3,top:"",color:"success"},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[e("span",[t._v("Awesome! You added a new project.")]),e("v-btn",{attrs:{color:"white",flat:""},on:{click:function(a){t.snackbar=!1}}},[t._v("Close")])],1),e("v-toolbar",{attrs:{flat:"",app:""}},[e("v-toolbar-side-icon",{staticClass:"grey--text",on:{click:function(a){t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[e("span",{staticClass:"font-weight-light"},[t._v("Todo")]),e("span",[t._v("Ninja")])]),e("v-spacer"),e("v-menu",{attrs:{"offset-y":""}},[e("v-btn",{attrs:{slot:"activator",flat:"",color:"grey"},slot:"activator"},[e("v-icon",{attrs:{left:""}},[t._v("expand_more")]),e("span",[t._v("Menu")])],1),e("v-list",t._l(t.links,function(a){return e("v-list-tile",{key:a.text,attrs:{router:"",to:a.route}},[e("v-list-tile-title",[t._v(t._s(a.text))])],1)}))],1),e("v-btn",{attrs:{flat:"",color:"grey"}},[e("span",[t._v("Sign Out")]),e("v-icon",{attrs:{right:""}},[t._v("exit_to_app")])],1),e("v-btn",{attrs:{flat:"",color:"grey"}},[e("span",[t._v("Language")]),e("v-icon",{attrs:{right:""}},[t._v("Language")])],1)],1),e("v-navigation-drawer",{staticClass:"primary",attrs:{app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-layout",{attrs:{column:"","align-center":""}},[e("v-flex",{staticClass:"mt-5"},[e("v-avatar",{attrs:{size:"100"}},[e("img",{staticClass:"text-lg-center",attrs:{src:"/avatar-1.png"}})]),e("p",{staticClass:"white--text subheading mt-1"},[t._v("The Net Ninja")])],1),e("v-flex",{staticClass:"mt-4 mb-3"},[e("Popup",{on:{projectAdded:function(a){t.snackbar=!0}}})],1)],1),e("v-list",t._l(t.links,function(a){return e("v-list-tile",{key:a.text,attrs:{router:"",to:a.route}},[e("v-list-tile-action",[e("v-icon",{staticClass:"white--text"},[t._v(t._s(a.icon))])],1),e("v-list-tile-content",[e("v-list-tile-title",{staticClass:"white--text"},[t._v(t._s(a.text))])],1)],1)}))],1)],1)},l=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-btn",{staticClass:"success",attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Add New Project")]),e("v-card",[e("v-card-title",[e("h2",[t._v("Add a New Project")])]),e("v-card-text",[e("v-form",{ref:"form",staticClass:"px-3"},[e("v-text-field",{attrs:{label:"Title","prepend-icon":"folder",rules:t.inputRules},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}}),e("v-textarea",{attrs:{label:"Information","prepend-icon":"edit",rules:t.inputRules},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}}),e("v-menu",{attrs:{"close-on-content-click":!1},model:{value:t.menu,callback:function(a){t.menu=a},expression:"menu"}},[e("v-text-field",{attrs:{slot:"activator",rules:t.inputRules,value:t.formattedDate,clearable:"",label:"Due date","prepend-icon":"date_range"},slot:"activator"}),e("v-date-picker",{on:{change:function(a){t.menu=!1}},model:{value:t.due,callback:function(a){t.due=a},expression:"due"}})],1),e("v-spacer"),e("v-btn",{staticClass:"success mx-0 mt-3",attrs:{flat:"",loading:t.loading},on:{click:t.submit}},[t._v("Add Project")])],1)],1)],1)],1)},v=[],u=e("70f2"),d=e.n(u),p=e("59ca"),f=e.n(p),m=(e("e71f"),{apiKey:"AIzaSyCERxFwjCImu2tzg-vL4DpFZiodnrmcr7A",authDomain:"sammour.firebaseapp.com",databaseURL:"https://sammour.firebaseio.com",projectId:"sammour",storageBucket:"sammour.appspot.com",messagingSenderId:"618283269575",appId:"1:618283269575:web:f9a447051b82f4af2dede2"});f.a.initializeApp(m);const h=f.a.firestore();h.settings({timestampsInSnapshots:!0});var b=h,_={data(){return{title:"",content:"",due:null,menu:!1,inputRules:[t=>!!t||"This field is required",t=>t.length>=3||"Minimum length is 3 characters"],loading:!1,dialog:!1}},methods:{submit(){if(this.$refs.form.validate()){this.loading=!0;const t={title:this.title,content:this.content,due:d()(this.due,"Do MMM YYYY"),person:"The Net Ninja",status:"ongoing"};b.collection("projects").add(t).then(()=>{this.loading=!1,this.dialog=!1,this.$emit("projectAdded")})}}},computed:{formattedDate(){return console.log(this.due),this.due?d()(this.due,"Do MMM YYYY"):""}}},x=_,g=e("2877"),y=e("6544"),C=e.n(y),j=e("8336"),V=e("b0af"),w=e("99d9"),k=e("12b2"),T=e("2e4b"),S=e("169a"),P=e("4bd4"),D=e("e449"),O=e("9910"),A=e("2677"),B=e("a844"),M=Object(g["a"])(x,c,v,!1,null,null,null);M.options.__file="Popup.vue";var L=M.exports;C()(M,{VBtn:j["a"],VCard:V["a"],VCardText:w["b"],VCardTitle:k["a"],VDatePicker:T["a"],VDialog:S["a"],VForm:P["a"],VMenu:D["a"],VSpacer:O["a"],VTextField:A["a"],VTextarea:B["a"]});var N={components:{Popup:L},data(){return{drawer:!1,links:[{icon:"dashboard",text:"Dashboard",route:"/"},{icon:"folder",text:"My Projects",route:"/projects"},{icon:"person",text:"Team",route:"/team"},{icon:"search",text:"Search",route:"/search"}],snackbar:!1}}},E=N,$=(e("5dfc"),e("8212")),I=e("0e8f"),F=e("132d"),Y=e("a722"),R=e("8860"),z=e("ba95"),G=e("40fe"),J=e("5d23"),W=e("f774"),q=e("2db4"),K=e("71d9"),U=e("706c"),Z=e("2a7f"),H=Object(g["a"])(E,i,l,!1,null,null,null);H.options.__file="Navbar.vue";var Q=H.exports;C()(H,{VAvatar:$["a"],VBtn:j["a"],VFlex:I["a"],VIcon:F["a"],VLayout:Y["a"],VList:R["a"],VListTile:z["a"],VListTileAction:G["a"],VListTileContent:J["a"],VListTileTitle:J["b"],VMenu:D["a"],VNavigationDrawer:W["a"],VSnackbar:q["a"],VSpacer:O["a"],VToolbar:K["a"],VToolbarSideIcon:U["a"],VToolbarTitle:Z["a"]});var X={components:{Navbar:Q},name:"App",data(){return{}},methods:{changeRTL(){this.$vuetify.rtl=!0},created(){this.$vuetify.rtl=!0}}},tt=X,at=e("7496"),et=e("549c"),st=Object(g["a"])(tt,o,n,!1,null,null,null);st.options.__file="App.vue";var rt=st.exports;C()(st,{VApp:at["a"],VContent:et["a"]});var ot=e("8c4f"),nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard"},[e("h1",{staticClass:"subheading grey--text"},[t._v("Dashboard")]),e("v-container",{staticClass:"my-5"},[e("v-layout",{staticClass:"mb-3",attrs:{row:"","justify-start":""}},[e("v-tooltip",{attrs:{top:""}},[e("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(a){t.sortBy("title")}},slot:"activator"},[e("v-icon",{attrs:{small:"",left:""}},[t._v("folder")]),e("span",{staticClass:"caption text-lowercase"},[t._v("By project name")])],1),e("span",[t._v("Sort by project name")])],1),e("v-tooltip",{attrs:{top:""}},[e("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(a){t.sortBy("person")}},slot:"activator"},[e("v-icon",{attrs:{small:"",left:""}},[t._v("person")]),e("span",{staticClass:"caption text-lowercase"},[t._v("By Person")])],1),e("span",[t._v("Sort by project author")])],1)],1),t._l(t.projects,function(a){return e("v-card",{key:a.title,attrs:{flat:""}},[e("v-layout",{class:"pa-3 project "+a.status,attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",md4:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Project title")]),e("div",[t._v(t._s(a.title))])]),e("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Person")]),e("div",[t._v(t._s(a.person))])]),e("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Due by")]),e("div",[t._v(t._s(a.due))])]),e("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[e("div",{staticClass:"right"},[e("v-chip",{class:a.status+" white--text my-2 caption",attrs:{small:""}},[t._v(t._s(a.status))])],1)]),e("v-flex",[e("v-btn",{staticClass:"red lighten-1 white--text"},[t._v(" delete ")])],1)],1),e("v-divider")],1)})],2)],1)},it=[],lt={data(){return{projects:[]}},methods:{sortBy(t){this.projects.sort((a,e)=>a[t]<e[t]?-1:1)}},created(){b.collection("projects").onSnapshot(t=>{const a=t.docChanges();a.forEach(t=>{"added"===t.type&&this.projects.push({...t.doc.data(),id:t.doc.id})})})}},ct=lt,vt=(e("2b56"),e("cc20")),ut=e("a523"),dt=e("ce7e"),pt=e("3a2f"),ft=Object(g["a"])(ct,nt,it,!1,null,null,null);ft.options.__file="Dashboard.vue";var mt=ft.exports;C()(ft,{VBtn:j["a"],VCard:V["a"],VChip:vt["a"],VContainer:ut["a"],VDivider:dt["a"],VFlex:I["a"],VIcon:F["a"],VLayout:Y["a"],VTooltip:pt["a"]});var ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"projects"},[e("h1",{staticClass:"subheading grey--text"},[t._v("Projects")]),e("v-container",{staticClass:"my-5"},[e("v-expansion-panel",t._l(t.myProjects,function(a){return e("v-expansion-panel-content",{key:a.title},[e("div",{staticClass:"py-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(a.title))]),e("v-card",[e("v-card-text",{staticClass:"px-4 grey--text"},[e("div",{staticClass:"font-weight-bold"},[t._v("Due by "+t._s(a.due))]),e("div",[t._v(t._s(a.content))])])],1)],1)}))],1)],1)},bt=[],_t={data(){return{projects:[]}},computed:{myProjects(){return this.projects.filter(t=>{return"The Net Ninja"===t.person&&"complete"!=t.status})}},created(){b.collection("projects").onSnapshot(t=>{const a=t.docChanges();a.forEach(t=>{"added"===t.type&&this.projects.push({...t.doc.data(),id:t.doc.id})})})}},xt=_t,gt=e("cd55"),yt=e("49e2"),Ct=Object(g["a"])(xt,ht,bt,!1,null,null,null);Ct.options.__file="Projects.vue";var jt=Ct.exports;C()(Ct,{VCard:V["a"],VCardText:w["b"],VContainer:ut["a"],VExpansionPanel:gt["a"],VExpansionPanelContent:yt["a"]});var Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"team"},[e("h1",{staticClass:"subheading grey--text"},[t._v("Team")]),e("v-container",{staticClass:"my-5"},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.team,function(a){return e("v-flex",{key:a.name,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[e("v-card",{staticClass:"text-xs-center ma-3",attrs:{flat:""}},[e("v-responsive",{staticClass:"pt-4"},[e("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[e("img",{attrs:{src:a.avatar}})])],1),e("v-card-text",[e("div",{staticClass:"subheading"},[t._v(t._s(a.name))]),e("div",{staticClass:"grey--text"},[t._v(t._s(a.role))])]),e("v-card-actions",[e("v-btn",{attrs:{flat:"",color:"grey"}},[e("v-icon",{attrs:{small:"",left:""}},[t._v("message")]),e("span",{},[t._v("Message")])],1)],1)],1)],1)}))],1)],1)},wt=[],kt={data(){return{team:[{name:"The Net Ninja",role:"Web developer",avatar:"/avatar-1.png"},{name:"Ryu",role:"Graphic designer",avatar:"/avatar-2.png"},{name:"Chun Li",role:"Web developer",avatar:"/avatar-3.png"},{name:"Gouken",role:"Social media maverick",avatar:"/avatar-4.png"},{name:"Yoshi",role:"Sales guru",avatar:"/avatar-5.png"}]}}},Tt=kt,St=e("6b53"),Pt=Object(g["a"])(Tt,Vt,wt,!1,null,null,null);Pt.options.__file="Team.vue";var Dt=Pt.exports;C()(Pt,{VAvatar:$["a"],VBtn:j["a"],VCard:V["a"],VCardActions:w["a"],VCardText:w["b"],VContainer:ut["a"],VFlex:I["a"],VIcon:F["a"],VLayout:Y["a"],VResponsive:St["a"]});var Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Search"},[e("h1",{staticClass:"subheading grey--text"},[t._v("Search")]),e("v-container",{staticClass:"my-5"},[e("v-layout",{staticClass:"mb-3",attrs:{row:"","justify-start":""}},[e("v-tooltip",{attrs:{top:""}},[e("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(a){t.sortBy("title")}},slot:"activator"},[e("v-icon",{attrs:{small:"",left:""}},[t._v("folder")]),e("span",{staticClass:"caption text-lowercase"},[t._v("By project name")])],1),e("span",[t._v("Sort by project name")])],1),e("v-tooltip",{attrs:{top:""}},[e("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(a){t.sortBy("person")}},slot:"activator"},[e("v-icon",{attrs:{small:"",left:""}},[t._v("person")]),e("span",{staticClass:"caption text-lowercase"},[t._v("By Person")])],1),e("span",[t._v("Sort by project author")])],1),e("v-flex",[e("v-text-field",{attrs:{clearable:"",label:"seach","prepend-icon":"search"}})],1),e("v-flex",[e("v-btn",{on:{click:t.doSearch}},[t._v("do search")])],1)],1),t._l(t.projects,function(a){return e("v-card",{key:a.title,attrs:{flat:""}},[e("v-layout",{class:"pa-3 project "+a.status,attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",md4:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Project title")]),e("div",[t._v(t._s(a.title))])]),e("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Person")]),e("div",[t._v(t._s(a.person))])]),e("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Due by")]),e("div",[t._v(t._s(a.due))])]),e("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[e("div",{staticClass:"right"},[e("v-chip",{class:a.status+" white--text my-2 caption",attrs:{small:""}},[t._v(t._s(a.status))])],1)]),e("v-flex",[e("v-btn",{staticClass:"red lighten-1 white--text"},[t._v(" delete ")])],1)],1),e("v-divider")],1)})],2)],1)},At=[],Bt={data(){return{projects:[{}]}},methods:{sortBy(t){this.projects.sort((a,e)=>a[t]<e[t]?-1:1)},doSearch(){b.collection("projects").where("title","==","Sammour").get().then(t=>{t.forEach(t=>{let a=t.data();console.log(`Found document at ${t.ref.path}`),console.log(a),this.projects.push({data:a}),console.log(this.projects)})})}}},Mt=Bt,Lt=(e("43cf"),Object(g["a"])(Mt,Ot,At,!1,null,null,null));Lt.options.__file="Search.vue";var Nt=Lt.exports;C()(Lt,{VBtn:j["a"],VCard:V["a"],VChip:vt["a"],VContainer:ut["a"],VDivider:dt["a"],VFlex:I["a"],VIcon:F["a"],VLayout:Y["a"],VTextField:A["a"],VTooltip:pt["a"]}),s["a"].use(ot["a"]);var Et=new ot["a"]({mode:"history",base:"/",routes:[{path:"/",name:"dashboard",component:mt},{path:"/projects",name:"projects",component:jt},{path:"/team",name:"team",component:Dt},{path:"/search",name:"search",component:Nt}]});s["a"].use(r["a"],{rtl:!0}),s["a"].config.productionTip=!1,new s["a"]({router:Et,render:t=>t(rt)}).$mount("#app")},"5dfc":function(t,a,e){"use strict";var s=e("72ec"),r=e.n(s);r.a},"72ec":function(t,a,e){},9906:function(t,a,e){},bddd:function(t,a,e){}});
//# sourceMappingURL=app.4e62908b.js.map