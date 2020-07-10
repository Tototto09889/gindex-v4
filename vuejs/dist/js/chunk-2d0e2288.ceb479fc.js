(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2288"],{"7e04":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content mt-3"},[t("h1",{staticClass:"title has-text-centered has-text-weight-bold has-text-white"},[e._v("Manage Spam Users")]),t("div",{staticClass:"loading"},[t("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(s){e.loading=s}}})],1),t("div",{staticClass:"columns has-text-centered is-multiline is-centered is-vcentered"},[t("div",{staticClass:"column is-full"},[t("label",{staticClass:"subtitle has-text-white"},[e._v(" Add / Remove Spam Users")]),t("div",{staticClass:"control mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"is-checkradio is-small is-success",attrs:{id:"addradio",type:"radio",name:"type",value:"add"},domProps:{checked:e._q(e.type,"add")},on:{change:function(s){e.type="add"}}}),t("label",{staticClass:"subtitle has-text-weight-bold has-text-white",attrs:{for:"addradio"}},[e._v("Add")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"is-checkradio is-small is-success",attrs:{id:"removeradio",type:"radio",name:"type",value:"remove"},domProps:{checked:e._q(e.type,"remove")},on:{change:function(s){e.type="remove"}}}),t("label",{staticClass:"subtitle has-text-weight-bold has-text-white",attrs:{for:"removeradio"}},[e._v("Remove")])])]),"add"==e.type?t("div",{staticClass:"column is-half"},[t("p",{staticClass:"subtitle is-small has-text-white"},[e._v("Add Users to Spam List")]),t("form",{on:{submit:function(s){return s.preventDefault(),e.handleAddSpam(s)}}},[t("label",{staticClass:"subtitle has-text-white"},[e._v("Select User's Role First")]),t("div",{staticClass:"control mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.addrole,expression:"addrole"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"userradio",type:"radio",name:"addrole",checked:"",value:"user",disabled:e.roledisabled},domProps:{checked:e._q(e.addrole,"user")},on:{change:function(s){e.addrole="user"}}}),t("label",{staticClass:"has-text-white",attrs:{for:"userradio"}},[e._v("User")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addrole,expression:"addrole"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"adminradio",type:"radio",name:"addrole",value:"admin",disabled:e.roledisabled},domProps:{checked:e._q(e.addrole,"admin")},on:{change:function(s){e.addrole="admin"}}}),t("label",{staticClass:"has-text-white",attrs:{for:"adminradio"}},[e._v(" Admin")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addrole,expression:"addrole"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"superadminradio",type:"radio",name:"addrole",value:"superadmin",disabled:e.roledisabled},domProps:{checked:e._q(e.addrole,"superadmin")},on:{change:function(s){e.addrole="superadmin"}}}),t("label",{staticClass:"has-text-white",attrs:{for:"superadminradio"}},[e._v("Superadmin")])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label has-text-white"},[e._v("Select the User")]),t("div",{staticClass:"control"},[t("div",{staticClass:"select is-fullwidth"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.addUserEmail,expression:"addUserEmail"}],attrs:{id:"addemail"},on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.addUserEmail=s.target.multiple?t:t[0]}}},e._l(e.users,(function(s,a){return t("option",{key:a},[e._v(e._s(s.email))])})),0)])])]),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.addpassword,expression:"addpassword"}],staticClass:"input is-rounded",attrs:{id:"addpassword",type:"password",placeholder:"Password",required:""},domProps:{value:e.addpassword},on:{input:function(s){s.target.composing||(e.addpassword=s.target.value)}}}),e._m(0)])]),t("button",{class:e.loading?"button is-rounded is-loading is-danger is-medium":"button is-rounded is-medium is-danger"},[e._m(1),t("span",[e._v("Add to Spam")])])])]):e._e()])])},i=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-lock"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-medium"},[t("i",{staticClass:"fas fa-user-minus"})])}],d=(t("d81d"),t("d3b7"),t("25f0"),t("9062")),r=t.n(d),o={components:{Loading:r.a},data:function(){return{user:{},admin:!1,superadmin:!1,roledisabled:!0,loading:!1,addrole:"",addpassword:"",removerole:"",users:[],getUserApi:"",postAddSpam:"",getSpamApi:"",addUserEmail:"",fullpage:!0,type:"",gds:[],currgd:{}}},methods:{getUsers:function(){var e=this;this.loading=!0,this.getUserApi.length>0?this.$http.post(this.getUserApi,{email:this.user.email}).then((function(s){s.data.auth&&s.data.registered?(e.loading=!1,e.users=s.data.users):(e.users=[],e.loading=!1)})):(this.loading=!1,console.log("Not Possible"))},handleAddSpam:function(){this.addUserEmail.length>0&&this.addpassword.length>0&&this.$http.post(this.postAddSpam,{email:this.addUserEmail,adminuseremail:this.user.email,adminpass:this.addpassword}).then((function(e){console.log(e)}))}},beforeMount:function(){this.loading=!0;var e=localStorage.getItem("userdata"),s=localStorage.getItem("tokendata");if(e&&s){var t=JSON.parse(this.$hash.AES.decrypt(e,this.$pass).toString(this.$hash.enc.Utf8));this.user=t,this.loading=!1}else this.user=null,this.loading=!1},mounted:function(){this.loading=!0,this.user.admin&&this.user.superadmin?(this.admin=!0,this.superadmin=!0,this.roledisabled=!1,this.loading=!1,this.addrole="user",this.getUserApi=window.apiRoutes.getUsers,this.postAddSpam=window.apiRoutes.addSpamUser,this.getSpamApi=window.apiRoutes.getSpamUsers,this.getUsers()):this.user.admin&&!this.user.superadmin?(this.admin=!0,this.superadmin=!1,this.loading=!1,this.addrole="user",this.getUserApi=window.apiRoutes.getUsers,this.postAddSpam=window.apiRoutes.addSpamUser,this.getSpamApi=window.apiRoutes.getSpamUsers,this.getUsers()):(this.loading=!1,this.$router.push({name:"results",params:{id:this.currgd.id,cmd:"result",success:!1,data:"UnAuthorized Route. Not Allowed.",redirectUrl:"/",tocmd:"home"}}))},created:function(){if(window.gds){this.gds=window.gds.map((function(e,s){return{name:e,id:s}}));var e=this.$route.params.id;this.gds&&(this.currgd=this.gds[e])}},watch:{addrole:function(){"user"==this.addrole?(this.getUserApi=window.apiRoutes.getUsers,this.postAddSpam=window.apiRoutes.addSpamUser,this.getUsers()):"admin"==this.addrole?(this.getUserApi=window.apiRoutes.getAdmins,this.postAddSpam=window.apiRoutes.addSpamAdmin,this.getUsers()):"superadmin"==this.addrole&&(this.getUserApi=window.apiRoutes.getSuperAdmins,this.postAddSpam=window.apiRoutes.addSpamSuperAdmin,this.getUsers())},removerole:function(){"user"==this.removerole?this.getSpamApi=window.apiRoutes.getSpamUsers:"admin"==this.removerole?this.getSpamApi=window.apiRoutes.getSpamAdmins:"superadmin"==this.removerole&&(this.getSpamApi=window.apiRoutes.getSpamSuperadmins)}}},l=o,n=t("2877"),m=Object(n["a"])(l,a,i,!1,null,null,null);s["default"]=m.exports}}]);