"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6744,286],{56744:(V,B,s)=>{s.d(B,{ProtectedCreateView:()=>Y});var t=s(92132),P=s(32474),m=s(82437),v=s(52185),C=s(60286),g=s(21272),c=s(55151),D=s(79077),_=s(37025),O=s(15126),d=s(63299),a=s(67014),N=s(59080),z=s(79275),y=s(14718),j=s(76885),A=s(5790),U=s(12083),x=s(35223),L=s(5409),l=s(74930),Q=s(2600),Z=s(48940),X=s(41286),w=s(56336),b=s(13426),q=s(84624),ss=s(77965),ts=s(54257),_s=s(71210),ns=s(51187),as=s(39404),Es=s(58692),os=s(501),rs=s(57646),es=s(23120),ds=s(44414),is=s(25962),Ms=s(14664),Ps=s(42588),Ds=s(90325),Os=s(62785),ls=s(87443),Ts=s(41032),ms=s(22957),vs=s(93179),Cs=s(73055),As=s(15747),Ls=s(85306),Rs=s(26509),fs=s(32058),Is=s(81185),Bs=s(82261),Us=s(29749),Ws=s(8183);const Y=()=>{const $=(0,m.d4)(v.s);return(0,t.jsx)(P.kz,{permissions:$.settings?.["transfer-tokens"].create,children:(0,t.jsx)(C.w,{})})}},60286:(V,B,s)=>{s.d(B,{ProtectedEditView:()=>hs,w:()=>k});var t=s(92132),P=s(21272),m=s(55794),v=s(32559),C=s(43242),g=s(44370),c=s(57842),D=s(57564),_=s(68065),O=s(43121),d=s(69564),a=s(32474),N=s(13333),z=s(76885),y=s(54894),j=s(17703),A=s(12083),U=s(37025),x=s(29749),L=s(99831),l=s(8183),Q=s(15126),Z=s(63299),X=s(67014),w=s(59080),b=s(79275),q=s(14718),ss=s(82437),ts=s(5790),_s=s(35223),ns=s(5409),as=s(74930),Es=s(2600),os=s(48940),rs=s(41286),es=s(56336),ds=s(13426),is=s(84624),Ms=s(77965),Ps=s(54257),Ds=s(71210),Os=s(51187),ls=s(39404),Ts=s(58692),ms=s(501),vs=s(57646),Cs=s(23120),As=s(44414),Ls=s(25962),Rs=s(14664),fs=s(42588),Is=s(90325),Bs=s(62785),Us=s(87443),Ws=s(41032),Y=s(22957),$=s(93179),Ns=s(73055),zs=s(15747),Ys=s(85306),$s=s(26509),ks=s(32058),Hs=s(81185),Gs=s(82261);const Ks=A.Ik().shape({name:A.Yj().max(100).required(a.iW.required),description:A.Yj().nullable(),lifespan:A.ai().integer().min(0).nullable().defined(a.iW.required),permissions:A.Yj().required(a.iW.required)}),k=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:r,unlockApp:W}=(0,a.MA)(),i=(0,a.hN)(),R=(0,j.W6)(),{state:K}=(0,j.zy)(),[E,f]=P.useState(K&&"accessKey"in K.transferToken?{...K.transferToken}:null),{trackUsage:T}=(0,a.z1)(),{setCurrentStep:ys}=(0,a.Cx)(),js=(0,U.j)(e=>e.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:xs,canUpdate:ps,canRegenerate:us}}=(0,a.ec)(js),p=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,M=p==="create",{_unstableFormatAPIError:u,_unstableFormatValidationErrors:H}=(0,a.wq)();P.useEffect(()=>{T(M?"didAddTokenFromList":"didEditTokenFromList",{tokenType:L.T})},[M,T]);const{data:S,error:F}=(0,x.u)(p,{skip:M||E!==null||!p});P.useEffect(()=>{F&&i({type:"warning",message:u(F)})},[F,u,i]),P.useEffect(()=>{S&&f(S)},[S]);const[Ss]=(0,x.a)(),[Fs]=(0,x.b)(),Vs=async(e,I)=>{T(M?"willCreateToken":"willEditToken",{tokenType:L.T}),r();const h=e.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(h))try{if(M){const n=await Ss({...e,lifespan:e?.lifespan||null,permissions:h});if("error"in n){(0,U.x)(n.error)&&n.error.name==="ValidationError"?I.setErrors(H(n.error)):i({type:"warning",message:u(n.error)});return}f(n.data),i({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:L.T}),R.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),ys("transferTokens.success")}else{const n=await Fs({id:p,name:e.name,description:e.description,permissions:h});if("error"in n){(0,U.x)(n.error)&&n.error.name==="ValidationError"?I.setErrors(H(n.error)):i({type:"warning",message:u(n.error)});return}f(n.data),i({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:L.T})}}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{W()}},G=ps&&!M||xs&&M;return!M&&!E?(0,t.jsx)(cs,{}):(0,t.jsxs)(m.g,{children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(z.l1,{validationSchema:Ks,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan||null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(e,I)=>Vs(e,I),children:({errors:e,handleChange:I,isSubmitting:h,values:J})=>(0,t.jsxs)(a.lV,{children:[(0,t.jsx)(l.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:f,canEditInputs:G,canRegenerate:us,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(v.s,{children:(0,t.jsxs)(C.s,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,t.jsx)(l.c,{token:E.accessKey,tokenType:L.T}),(0,t.jsx)(gs,{errors:e,onChange:I,canEditInputs:G,isCreating:M,values:J,transferToken:E})]})})]})})]})},hs=()=>{const o=(0,U.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(a.kz,{permissions:o,children:(0,t.jsx)(k,{})})},gs=({errors:o={},onChange:r,canEditInputs:W,isCreating:i,values:R,transferToken:K={}})=>{const{formatMessage:E}=(0,y.A)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(C.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(c.o,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(D.x,{gap:5,children:[(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.T,{error:o.name,value:R.name,canEditInputs:W,onChange:r})},"name"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.a,{error:o.description,value:R.description,canEditInputs:W,onChange:r})},"description"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.L,{isCreating:i,error:o.lifespan,value:R.lifespan,onChange:r,token:K})},"lifespan"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.b,{name:"permissions",value:R.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:f,canEditInputs:W})},"permissions")]})]})})},cs=({transferTokenName:o})=>{const{formatMessage:r}=(0,y.A)();return(0,a.L4)(),(0,t.jsxs)(m.g,{"aria-busy":"true",children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(O.Q,{primaryAction:(0,t.jsx)(d.$,{disabled:!0,startIcon:(0,t.jsx)(N.A,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(v.s,{children:(0,t.jsx)(a.Bl,{})})]})}},29749:(V,B,s)=>{s.d(B,{a:()=>C,b:()=>c,c:()=>m,d:()=>g,u:()=>v});var t=s(37025);const P=t.n.injectEndpoints({endpoints:D=>({getTransferTokens:D.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:_=>_.data,providesTags:(_,O)=>[..._?.map(({id:d})=>({type:"TransferToken",id:d}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:D.query({query:_=>`/admin/transfer/tokens/${_}`,transformResponse:_=>_.data,providesTags:(_,O,d)=>[{type:"TransferToken",id:d}]}),createTransferToken:D.mutation({query:_=>({url:"/admin/transfer/tokens",method:"POST",data:_}),transformResponse:_=>_.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:D.mutation({query:_=>({url:`/admin/transfer/tokens/${_}`,method:"DELETE"}),transformResponse:_=>_.data,invalidatesTags:(_,O,d)=>[{type:"TransferToken",id:d}]}),updateTransferToken:D.mutation({query:({id:_,...O})=>({url:`/admin/transfer/tokens/${_}`,method:"PUT",data:O}),transformResponse:_=>_.data,invalidatesTags:(_,O,{id:d})=>[{type:"TransferToken",id:d}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:v,useCreateTransferTokenMutation:C,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:c}=P}}]);
