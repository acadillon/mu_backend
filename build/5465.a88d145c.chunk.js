(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5465],{87826:(E,j)=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0}),j.default=i;function i(e,o){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var D in o)Object.prototype.hasOwnProperty.call(o,D)&&(e[D]=o[D]);return e}E.exports=j.default},21871:(E,j,i)=>{"use strict";var e=i(90448).default;Object.defineProperty(j,"__esModule",{value:!0}),j.default=D;var o=e(i(87826));function D(_){return(0,o.default)({},_)}E.exports=j.default},18724:(E,j)=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0}),j.default=i;function i(e){var o=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return o.setUTCFullYear(e.getFullYear()),e.getTime()-o.getTime()}E.exports=j.default},34316:(E,j)=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0}),j.default=i;function i(e){if(e===null||e===!0||e===!1)return NaN;var o=Number(e);return isNaN(o)?o:o<0?Math.ceil(o):Math.floor(o)}E.exports=j.default},90448:E=>{function j(i){return i&&i.__esModule?i:{default:i}}E.exports=j,E.exports.__esModule=!0,E.exports.default=E.exports},5465:(E,j,i)=>{"use strict";i.d(j,{App:()=>qt});var e=i(92132),o=i(32474),D=i(17703),_=i(71389),g=i(22785),W=i(21272),me=i(40427),Be=i(50642),Ue=i(6479),y=i(57842),He=i(53900),v=i(43242),We=i(81926),V=i(44370),Fe=i(12050),Ze=i(68),Ge=i(17666),Xe=i(32161),K=i(69564),Qe=i(71262),Ke=i(37373),Je=i(17840),Ve=i(57564),ke=i(68065),ee=i(74738),qe=i(11739),k=i(55794),pe=i(43121),X=i(32559),_e=i(15926),te=i(44622),et=i(24122),ae=i(83724),se=i(27026),tt=i(42035),at=i(80980),st=i(19106),xe=i(19448),nt=i(34508),Q=i(21270),ve=i(29974),q=i(93223),rt=i(68658),lt=i(28312),it=i(31127),ot=i(31708),dt=i(39423),ct=i(10085),je=i(70689),ut=i(95065),gt=i(83016),ye=i(6103),ht=i(21871),ft=i(34316),De=i(18724);function mt(t,a){var s=jt(a);return s.formatToParts?xt(s,t):vt(s,t)}var pt={year:0,month:1,day:2,hour:3,minute:4,second:5};function xt(t,a){try{for(var s=t.formatToParts(a),n=[],r=0;r<s.length;r++){var l=pt[s[r].type];l>=0&&(n[l]=parseInt(s[r].value,10))}return n}catch(d){if(d instanceof RangeError)return[NaN];throw d}}function vt(t,a){var s=t.format(a).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(s);return[n[3],n[1],n[2],n[4],n[5],n[6]]}var ne={};function jt(t){if(!ne[t]){var a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),s=a==="06/25/2014, 00:00:00"||a==="\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";ne[t]=s?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return ne[t]}function re(t,a,s,n,r,l,d){var u=new Date(0);return u.setUTCFullYear(t,a,s),u.setUTCHours(n,r,l,d),u}var Me=36e5,yt=6e4,le={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-]\d{2}):?(\d{2})$/};function ie(t,a,s){var n,r;if(!t||(n=le.timezoneZ.exec(t),n))return 0;var l;if(n=le.timezoneHH.exec(t),n)return l=parseInt(n[1],10),be(l)?-(l*Me):NaN;if(n=le.timezoneHHMM.exec(t),n){l=parseInt(n[1],10);var d=parseInt(n[2],10);return be(l,d)?(r=Math.abs(l)*Me+d*yt,l>0?-r:r):NaN}if(bt(t)){a=new Date(a||Date.now());var u=s?a:Dt(a),f=oe(u,t),x=s?f:Mt(a,f,t);return-x}return NaN}function Dt(t){return re(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function oe(t,a){var s=mt(t,a),n=re(s[0],s[1]-1,s[2],s[3]%24,s[4],s[5],0).getTime(),r=t.getTime(),l=r%1e3;return r-=l>=0?l:1e3+l,n-r}function Mt(t,a,s){var n=t.getTime(),r=n-a,l=oe(new Date(r),s);if(a===l)return a;r-=l-a;var d=oe(new Date(r),s);return l===d?l:Math.max(l,d)}function be(t,a){return-23<=t&&t<=23&&(a==null||0<=a&&a<=59)}var Te={};function bt(t){if(Te[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),Te[t]=!0,!0}catch{return!1}}var Tt=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;const Ce=Tt;var de=36e5,Ie=6e4,Ct=2,I={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:Ce};function ce(t,a){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var s=a||{},n=s.additionalDigits==null?Ct:ft(s.additionalDigits);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var r=It(t),l=Rt(r.date,n),d=l.year,u=l.restDateString,f=At(u,d);if(isNaN(f))return new Date(NaN);if(f){var x=f.getTime(),T=0,c;if(r.time&&(T=Nt(r.time),isNaN(T)))return new Date(NaN);if(r.timeZone||s.timeZone){if(c=ie(r.timeZone||s.timeZone,new Date(x+T)),isNaN(c))return new Date(NaN)}else c=De(new Date(x+T)),c=De(new Date(x+T+c));return new Date(x+T+c)}else return new Date(NaN)}function It(t){var a={},s=I.dateTimePattern.exec(t),n;if(s?(a.date=s[1],n=s[3]):(s=I.datePattern.exec(t),s?(a.date=s[1],n=s[2]):(a.date=null,n=t)),n){var r=I.timeZone.exec(n);r?(a.time=n.replace(r[1],""),a.timeZone=r[1].trim()):a.time=n}return a}function Rt(t,a){var s=I.YYY[a],n=I.YYYYY[a],r;if(r=I.YYYY.exec(t)||n.exec(t),r){var l=r[1];return{year:parseInt(l,10),restDateString:t.slice(l.length)}}if(r=I.YY.exec(t)||s.exec(t),r){var d=r[1];return{year:parseInt(d,10)*100,restDateString:t.slice(d.length)}}return{year:null}}function At(t,a){if(a===null)return null;var s,n,r,l;if(t.length===0)return n=new Date(0),n.setUTCFullYear(a),n;if(s=I.MM.exec(t),s)return n=new Date(0),r=parseInt(s[1],10)-1,Ne(a,r)?(n.setUTCFullYear(a,r),n):new Date(NaN);if(s=I.DDD.exec(t),s){n=new Date(0);var d=parseInt(s[1],10);return zt(a,d)?(n.setUTCFullYear(a,0,d),n):new Date(NaN)}if(s=I.MMDD.exec(t),s){n=new Date(0),r=parseInt(s[1],10)-1;var u=parseInt(s[2],10);return Ne(a,r,u)?(n.setUTCFullYear(a,r,u),n):new Date(NaN)}if(s=I.Www.exec(t),s)return l=parseInt(s[1],10)-1,Se(a,l)?Re(a,l):new Date(NaN);if(s=I.WwwD.exec(t),s){l=parseInt(s[1],10)-1;var f=parseInt(s[2],10)-1;return Se(a,l,f)?Re(a,l,f):new Date(NaN)}return null}function Nt(t){var a,s,n;if(a=I.HH.exec(t),a)return s=parseFloat(a[1].replace(",",".")),ue(s)?s%24*de:NaN;if(a=I.HHMM.exec(t),a)return s=parseInt(a[1],10),n=parseFloat(a[2].replace(",",".")),ue(s,n)?s%24*de+n*Ie:NaN;if(a=I.HHMMSS.exec(t),a){s=parseInt(a[1],10),n=parseInt(a[2],10);var r=parseFloat(a[3].replace(",","."));return ue(s,n,r)?s%24*de+n*Ie+r*1e3:NaN}return null}function Re(t,a,s){a=a||0,s=s||0;var n=new Date(0);n.setUTCFullYear(t,0,4);var r=n.getUTCDay()||7,l=a*7+s+1-r;return n.setUTCDate(n.getUTCDate()+l),n}var St=[31,28,31,30,31,30,31,31,30,31,30,31],Et=[31,29,31,30,31,30,31,31,30,31,30,31];function Ae(t){return t%400===0||t%4===0&&t%100!==0}function Ne(t,a,s){if(a<0||a>11)return!1;if(s!=null){if(s<1)return!1;var n=Ae(t);if(n&&s>Et[a]||!n&&s>St[a])return!1}return!0}function zt(t,a){if(a<1)return!1;var s=Ae(t);return!(s&&a>366||!s&&a>365)}function Se(t,a,s){return!(a<0||a>52||s!=null&&(s<0||s>6))}function ue(t,a,s){return!(t!=null&&(t<0||t>=25)||a!=null&&(a<0||a>=60)||s!=null&&(s<0||s>=60))}function wt(t,a,s){if(typeof t=="string"&&!t.match(Ce)){var n=ht(s);return n.timeZone=a,ce(t,n)}var r=ce(t,s),l=re(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()).getTime(),d=ie(a,new Date(l));return new Date(l+d)}function Ee(t,a,s){var n=ce(t,s),r=ie(a,n,!0),l=new Date(n.getTime()-r),d=new Date(0);return d.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),d.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),d}var F=i(54894),Z=i(63891),Yt=i(50958),ge=i(76885),z=i(12083),ea=i(82437);const Lt=z.Ik().shape({name:z.Yj().trim().required(),scheduledAt:z.Yj().nullable(),isScheduled:z.zM().optional(),time:z.Yj().when("isScheduled",{is:!0,then:z.Yj().trim().required(),otherwise:z.Yj().nullable()}),timezone:z.Yj().when("isScheduled",{is:!0,then:z.Yj().required().nullable(),otherwise:z.Yj().nullable()}),date:z.Yj().when("isScheduled",{is:!0,then:z.Yj().required().nullable(),otherwise:z.Yj().nullable()})}).required().noUnknown(),ze=({handleClose:t,handleSubmit:a,initialValues:s,isLoading:n=!1})=>{const{formatMessage:r}=(0,F.A)(),{pathname:l}=(0,D.zy)(),d=l===`/plugins/${g.p}`,{timezoneList:u,systemTimezone:f={value:"UTC+00:00-Africa/Abidjan "}}=we(s.scheduledAt?new Date(s.scheduledAt):new Date),x=c=>{const{date:C,time:R,timezone:p}=c;if(!C||!R||!p)return null;const M=p.split("&")[1];return wt(`${C} ${R}`,M)},T=()=>u.find(C=>C.value.split("&")[1]===s.timezone)?.value||f.value;return(0,e.jsxs)(Be.k,{onClose:t,labelledBy:"title",children:[(0,e.jsx)(Ue.r,{children:(0,e.jsx)(y.o,{id:"title",fontWeight:"bold",textColor:"neutral800",children:r({id:"content-releases.modal.title",defaultMessage:"{isCreatingRelease, select, true {New release} other {Edit release}}"},{isCreatingRelease:d})})}),(0,e.jsx)(ge.l1,{onSubmit:c=>{a({...c,timezone:c.timezone?c.timezone.split("&")[1]:null,scheduledAt:c.isScheduled?x(c):null})},initialValues:{...s,timezone:s.timezone?T():f.value},validationSchema:Lt,validateOnChange:!1,children:({values:c,errors:C,handleChange:R,setFieldValue:p})=>(0,e.jsxs)(ge.lV,{children:[(0,e.jsx)(He.c,{children:(0,e.jsxs)(v.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsx)(We.k,{label:r({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"}),name:"name",value:c.name,error:C.name,onChange:R,required:!0}),(0,e.jsx)(V.a,{width:"max-content",children:(0,e.jsx)(Fe.S,{name:"isScheduled",value:c.isScheduled,onChange:M=>{p("isScheduled",M.target.checked),M.target.checked?(p("date",s.date),p("time",s.time),p("timezone",s.timezone??f?.value)):(p("date",null),p("time",""),p("timezone",null))},children:(0,e.jsx)(y.o,{textColor:c.isScheduled?"primary600":"neutral800",fontWeight:c.isScheduled?"semiBold":"regular",children:r({id:"modal.form.input.label.schedule-release",defaultMessage:"Schedule release"})})})}),c.isScheduled&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(v.s,{gap:4,alignItems:"start",children:[(0,e.jsx)(V.a,{width:"100%",children:(0,e.jsx)(Ze.l,{label:r({id:"content-releases.modal.form.input.label.date",defaultMessage:"Date"}),name:"date",error:C.date,onChange:M=>{const w=M?(0,Yt.A)(M,{representation:"date"}):null;p("date",w)},clearLabel:r({id:"content-releases.modal.form.input.clearLabel",defaultMessage:"Clear"}),onClear:()=>{p("date",null)},selectedDate:c.date||void 0,required:!0,minDate:Ee(new Date,c.timezone.split("&")[1])})}),(0,e.jsx)(V.a,{width:"100%",children:(0,e.jsx)(Ge.A,{label:r({id:"content-releases.modal.form.input.label.time",defaultMessage:"Time"}),name:"time",error:C.time,onChange:M=>{p("time",M)},clearLabel:r({id:"content-releases.modal.form.input.clearLabel",defaultMessage:"Clear"}),onClear:()=>{p("time","")},value:c.time||void 0,required:!0})})]}),(0,e.jsx)(Ot,{timezoneOptions:u})]})]})}),(0,e.jsx)(Xe.j,{startActions:(0,e.jsx)(K.$,{onClick:t,variant:"tertiary",name:"cancel",children:r({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(K.$,{name:"submit",loading:n,type:"submit",children:r({id:"content-releases.modal.form.button.submit",defaultMessage:"{isCreatingRelease, select, true {Continue} other {Save}}"},{isCreatingRelease:d})})})]})})]})},we=t=>{const a=Intl.supportedValuesOf("timeZone").map(n=>{const r=(0,g.g)(n,t);return{offset:r,value:`${r}&${n}`}}),s=a.find(n=>n.value.split("&")[1]===Intl.DateTimeFormat().resolvedOptions().timeZone);return{timezoneList:a,systemTimezone:s}},Ot=({timezoneOptions:t})=>{const{values:a,errors:s,setFieldValue:n}=(0,ge.j7)(),{formatMessage:r}=(0,F.A)(),[l,d]=W.useState(t);return W.useEffect(()=>{if(a.date){const{timezoneList:u}=we(new Date(a.date));d(u);const f=a.timezone&&u.find(x=>x.value.split("&")[1]===a.timezone.split("&")[1]);f&&n("timezone",f.value)}},[n,a.date,a.timezone]),(0,e.jsx)(Qe.G3,{label:r({id:"content-releases.modal.form.input.label.timezone",defaultMessage:"Timezone"}),autocomplete:{type:"list",filter:"contains"},name:"timezone",value:a.timezone||void 0,textValue:a.timezone?a.timezone.replace(/&/," "):void 0,onChange:u=>{n("timezone",u)},onTextValueChange:u=>{n("timezone",u)},onClear:()=>{n("timezone","")},error:s.timezone,required:!0,children:l.map(u=>(0,e.jsx)(Ke.j,{value:u.value,children:u.value.replace(/&/," ")},u.value))})},$t=(0,Z.default)(ve.N)`
  display: block;
`,Pt=(0,Z.default)(o.sR)`
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`,Ye=t=>{let a;switch(t){case"ready":a="success";break;case"blocked":a="warning";break;case"failed":a="danger";break;case"done":a="primary";break;case"empty":default:a="neutral"}return{textColor:`${a}600`,backgroundColor:`${a}100`,borderColor:`${a}200`}},Le=({sectionTitle:t,releases:a=[],isError:s=!1})=>{const{formatMessage:n}=(0,F.A)();return s?(0,e.jsx)(o.hH,{}):a?.length===0?(0,e.jsx)(Je.p,{content:n({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:t}),icon:(0,e.jsx)(lt.A,{width:"10rem"})}):(0,e.jsx)(Ve.x,{gap:4,children:a.map(({id:r,name:l,scheduledAt:d,status:u})=>(0,e.jsx)(ke.E,{col:3,s:6,xs:12,children:(0,e.jsx)($t,{href:`content-releases/${r}`,isExternal:!1,children:(0,e.jsxs)(v.s,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:4,children:[(0,e.jsxs)(v.s,{direction:"column",alignItems:"start",gap:1,children:[(0,e.jsx)(y.o,{as:"h3",variant:"delta",fontWeight:"bold",children:l}),(0,e.jsx)(y.o,{variant:"pi",textColor:"neutral600",children:d?(0,e.jsx)(Pt,{timestamp:new Date(d)}):n({id:"content-releases.pages.Releases.not-scheduled",defaultMessage:"Not scheduled"})})]}),(0,e.jsx)(ee.E,{...Ye(u),children:u})]})})},r))})},Bt=(0,Z.default)(qe.F)`
  button {
    display: none;
  }
  p + div {
    margin-left: auto;
  }
`,Ut={name:"",date:null,time:"",isScheduled:!0,scheduledAt:null,timezone:null},Ht=()=>{const t=W.useRef(null),a=(0,D.zy)(),[s,n]=W.useState(!1),r=(0,o.hN)(),{formatMessage:l}=(0,F.A)(),{push:d,replace:u}=(0,D.W6)(),{formatAPIError:f}=(0,o.wq)(),[{query:x},T]=(0,o.sq)(),c=(0,g.u)(x),[C,{isLoading:R}]=(0,g.a)(),{getFeature:p}=(0,me.bO)(),{maximumReleases:M=3}=p("cms-content-releases"),{trackUsage:w}=(0,o.z1)(),{isLoading:O,isSuccess:B,isError:h}=c,U=c?.currentData?.meta?.activeTab||"pending",S=["pending","done"].indexOf(U);W.useEffect(()=>{a?.state?.errors&&(r({type:"warning",title:l({id:"content-releases.pages.Releases.notification.error.title",defaultMessage:"Your request could not be processed."}),message:l({id:"content-releases.pages.Releases.notification.error.message",defaultMessage:"Please try again or open another release."})}),u({state:null}))},[l,a?.state?.errors,u,r]),W.useEffect(()=>{t.current&&t.current._handlers.setSelectedTabIndex(S)},[S]);const H=()=>{n(L=>!L)};if(O)return(0,e.jsx)(k.g,{"aria-busy":O,children:(0,e.jsx)(o.Bl,{})});const Y=B&&c.currentData?.meta?.pendingReleasesCount||0,$=Y>=M,G=L=>{T({...x,page:1,pageSize:c?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:L!==0}}})},b=async({name:L,scheduledAt:m,timezone:A})=>{const N=await C({name:L,scheduledAt:m,timezone:A});"data"in N?(r({type:"success",message:l({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),w("didCreateRelease"),d(`/plugins/content-releases/${N.data.data.id}`)):(0,g.i)(N.error)?r({type:"warning",message:f(N.error)}):r({type:"warning",message:l({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(k.g,{"aria-busy":O,children:[(0,e.jsx)(pe.Q,{title:l({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:l({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"Create and manage content updates"}),primaryAction:(0,e.jsx)(o.d4,{permissions:g.P.create,children:(0,e.jsx)(K.$,{startIcon:(0,e.jsx)(it.A,{}),onClick:H,disabled:$,children:l({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})})})}),(0,e.jsx)(X.s,{children:(0,e.jsxs)(e.Fragment,{children:[$&&(0,e.jsx)(Bt,{marginBottom:6,action:(0,e.jsx)(ve.N,{href:"https://strapi.io/pricing-cloud",isExternal:!0,children:l({id:"content-releases.pages.Releases.max-limit-reached.action",defaultMessage:"Explore plans"})}),title:l({id:"content-releases.pages.Releases.max-limit-reached.title",defaultMessage:"You have reached the {number} pending {number, plural, one {release} other {releases}} limit."},{number:M}),onClose:()=>{},closeLabel:"",children:l({id:"content-releases.pages.Releases.max-limit-reached.message",defaultMessage:"Upgrade to manage an unlimited number of releases."})}),(0,e.jsxs)(_e.f,{label:l({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),variant:"simple",initialSelectedTabIndex:S,onTabChange:G,ref:t,children:[(0,e.jsxs)(V.a,{paddingBottom:8,children:[(0,e.jsxs)(te.t,{children:[(0,e.jsx)(te.o,{children:l({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending ({count})"},{count:Y})}),(0,e.jsx)(te.o,{children:l({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]}),(0,e.jsx)(et.c,{})]}),(0,e.jsxs)(ae.T,{children:[(0,e.jsx)(ae.K,{children:(0,e.jsx)(Le,{sectionTitle:"pending",releases:c?.currentData?.data,isError:h})}),(0,e.jsx)(ae.K,{children:(0,e.jsx)(Le,{sectionTitle:"done",releases:c?.currentData?.data,isError:h})})]})]}),c.currentData?.meta?.pagination?.total?(0,e.jsxs)(v.s,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(o._u,{options:["8","16","32","64"],defaultValue:c?.currentData?.meta?.pagination?.pageSize.toString()}),(0,e.jsx)(o.W7,{pagination:{pageCount:c?.currentData?.meta?.pagination?.pageCount||0}})]}):null]})}),s&&(0,e.jsx)(ze,{handleClose:H,handleSubmit:b,isLoading:R,initialValues:Ut})]})},Wt=(0,Z.default)(v.s)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:t})=>t.borderRadius};
  border-bottom-left-radius: ${({theme:t})=>t.borderRadius};
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,Oe=(0,Z.default)(q.q7)`
  svg path {
    fill: ${({theme:t,disabled:a})=>a&&t.colors.neutral500};
  }
  span {
    color: ${({theme:t,disabled:a})=>a&&t.colors.neutral500};
  }

  &:hover {
    background: ${({theme:t,variant:a="neutral"})=>t.colors[`${a}100`]};
  }
`,Ft=(0,Z.default)(ot.A)`
  width: ${({theme:t})=>t.spaces[3]};
  height: ${({theme:t})=>t.spaces[3]};
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,Zt=(0,Z.default)(dt.A)`
  width: ${({theme:t})=>t.spaces[3]};
  height: ${({theme:t})=>t.spaces[3]};
  path {
    fill: ${({theme:t})=>t.colors.danger600};
  }
`,Gt=(0,Z.default)(y.o)`
  max-width: 300px;
`,Xt=({action:t,schema:a,components:s,entry:n})=>{const{formatMessage:r}=(0,F.A)(),{validate:l}=(0,me.CQ)(),{errors:d}=l(n,{contentType:a,components:s,isCreatingEntry:!1});if(Object.keys(d).length>0){const u=Object.entries(d).map(([f,x])=>r({id:`${x.id}.withField`,defaultMessage:x.defaultMessage},{field:f})).join(" ");return(0,e.jsxs)(v.s,{gap:2,children:[(0,e.jsx)(se.I,{color:"danger600",as:ct.A}),(0,e.jsx)(tt.m,{description:u,children:(0,e.jsx)(Gt,{textColor:"danger600",variant:"omega",fontWeight:"semiBold",ellipsis:!0,children:u})})]})}return t=="publish"?(0,e.jsxs)(v.s,{gap:2,children:[(0,e.jsx)(se.I,{color:"success600",as:je.A}),n.publishedAt?(0,e.jsx)(y.o,{textColor:"success600",fontWeight:"bold",children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.already-published",defaultMessage:"Already published"})}):(0,e.jsx)(y.o,{children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-publish",defaultMessage:"Ready to publish"})})]}):(0,e.jsxs)(v.s,{gap:2,children:[(0,e.jsx)(se.I,{color:"success600",as:je.A}),n.publishedAt?(0,e.jsx)(y.o,{children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-unpublish",defaultMessage:"Ready to unpublish"})}):(0,e.jsx)(y.o,{textColor:"success600",fontWeight:"bold",children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.already-unpublished",defaultMessage:"Already unpublished"})})]})},$e=({toggleEditReleaseModal:t,toggleWarningSubmit:a,children:s})=>{const{formatMessage:n,formatDate:r,formatTime:l}=(0,F.A)(),{releaseId:d}=(0,D.g)(),{data:u,isLoading:f,isError:x,error:T}=(0,g.b)({id:d}),[c,{isLoading:C}]=(0,g.e)(),R=(0,o.hN)(),{formatAPIError:p}=(0,o.wq)(),{allowedActions:{canUpdate:M,canDelete:w}}=(0,o.ec)(g.P),O=(0,g.f)(),{trackUsage:B}=(0,o.z1)(),h=u?.data,U=async()=>{const m=await c({id:d});if("data"in m){R({type:"success",message:n({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})});const{totalEntries:A,totalPublishedEntries:N,totalUnpublishedEntries:P}=m.data.meta;B("didPublishRelease",{totalEntries:A,totalPublishedEntries:N,totalUnpublishedEntries:P})}else(0,g.i)(m.error)?R({type:"warning",message:p(m.error)}):R({type:"warning",message:n({id:"notification.error",defaultMessage:"An error occurred"})})},S=()=>{O(g.r.util.invalidateTags([{type:"ReleaseAction",id:"LIST"},{type:"Release",id:d}]))},H=()=>h?.createdBy?h.createdBy.username?h.createdBy.username:h.createdBy.firstname?`${h.createdBy.firstname} ${h.createdBy.lastname||""}`.trim():h.createdBy.email:null;if(f)return(0,e.jsx)(k.g,{"aria-busy":f,children:(0,e.jsx)(o.Bl,{})});if(x||!h)return(0,e.jsx)(D.rd,{to:{pathname:"/plugins/content-releases",state:{errors:[{code:T?.code}]}}});const Y=h.actions.meta.count||0,$=Boolean(H()),G=h.scheduledAt&&h.timezone,b=n({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:Y}),L=G?n({id:"content-releases.pages.ReleaseDetails.header-subtitle.scheduled",defaultMessage:"Scheduled for {date} at {time} ({offset})"},{date:r(new Date(h.scheduledAt),{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:h.timezone}),time:l(new Date(h.scheduledAt),{timeZone:h.timezone,hourCycle:"h23"}),offset:(0,g.g)(h.timezone,new Date(h.scheduledAt))}):"";return(0,e.jsxs)(k.g,{"aria-busy":f,children:[(0,e.jsx)(pe.Q,{title:h.name,subtitle:(0,e.jsxs)(v.s,{gap:2,lineHeight:6,children:[(0,e.jsx)(y.o,{textColor:"neutral600",variant:"epsilon",children:b+(G?` - ${L}`:"")}),(0,e.jsx)(ee.E,{...Ye(h.status),children:h.status})]}),navigationAction:(0,e.jsx)(at.N,{startIcon:(0,e.jsx)(ut.A,{}),to:"/plugins/content-releases",children:n({id:"global.back",defaultMessage:"Back"})}),primaryAction:!h.releasedAt&&(0,e.jsxs)(v.s,{gap:2,children:[(0,e.jsxs)(q.bL,{children:[(0,e.jsx)(q.l9,{as:st.K,paddingLeft:2,paddingRight:2,"aria-label":n({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release edit and delete menu"}),icon:(0,e.jsx)(gt.A,{}),variant:"tertiary"}),(0,e.jsxs)(q.UC,{top:1,popoverPlacement:"bottom-end",children:[(0,e.jsxs)(v.s,{alignItems:"center",justifyContent:"center",direction:"column",padding:1,width:"100%",children:[(0,e.jsx)(Oe,{disabled:!M,onSelect:t,children:(0,e.jsxs)(v.s,{alignItems:"center",gap:2,hasRadius:!0,width:"100%",children:[(0,e.jsx)(Ft,{}),(0,e.jsx)(y.o,{ellipsis:!0,children:n({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]})}),(0,e.jsx)(Oe,{disabled:!w,onSelect:a,variant:"danger",children:(0,e.jsxs)(v.s,{alignItems:"center",gap:2,hasRadius:!0,width:"100%",children:[(0,e.jsx)(Zt,{}),(0,e.jsx)(y.o,{ellipsis:!0,textColor:"danger600",children:n({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})})]}),(0,e.jsxs)(Wt,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:5,children:[(0,e.jsx)(y.o,{variant:"pi",fontWeight:"bold",children:n({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),(0,e.jsxs)(y.o,{variant:"pi",color:"neutral300",children:[(0,e.jsx)(o.sR,{timestamp:new Date(h.createdAt)}),n({id:"content-releases.header.actions.created.description",defaultMessage:"{hasCreatedByUser, select, true { by {createdBy}} other { by deleted user}}"},{createdBy:H(),hasCreatedByUser:$})]})]})]})]}),(0,e.jsx)(K.$,{size:"S",variant:"tertiary",onClick:S,children:n({id:"content-releases.header.actions.refresh",defaultMessage:"Refresh"})}),(0,e.jsx)(o.d4,{permissions:g.P.publish,children:(0,e.jsx)(K.$,{size:"S",variant:"default",onClick:U,loading:C,disabled:h.actions.meta.count===0,children:n({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})})})]})}),s]})},Qt=["contentType","locale","action"],Kt=["contentType","action"],Pe=t=>t==="locale"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.locales",defaultMessage:"Locales"}:t==="action"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.actions",defaultMessage:"Actions"}:{id:"content-releases.pages.ReleaseDetails.groupBy.option.content-type",defaultMessage:"Content-Types"},Jt=[{key:"__name__",fieldSchema:{type:"string"},metadatas:{label:{id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"},searchable:!1,sortable:!1},name:"name"}],Vt=()=>{const{formatMessage:t}=(0,F.A)(),{releaseId:a}=(0,D.g)(),[{query:s},n]=(0,o.sq)(),r=(0,o.hN)(),{formatAPIError:l}=(0,o.wq)(),{data:d,isLoading:u,isError:f,error:x}=(0,g.b)({id:a}),{allowedActions:{canUpdate:T}}=(0,o.ec)(g.P),{runHookWaterfall:c}=(0,o.vD)(),{displayedHeaders:C,hasI18nEnabled:R}=c("ContentReleases/pages/ReleaseDetails/add-locale-in-releases",{displayedHeaders:Jt,hasI18nEnabled:!1}),p=d?.data,M=s?.groupBy||"contentType",{isLoading:w,isFetching:O,isError:B,data:h,error:U}=(0,g.h)({...s,releaseId:a}),[S]=(0,g.j)(),H=async(m,A,N)=>{const P=await S({params:{releaseId:a,actionId:A},body:{type:m.target.value},query:s,actionPath:N});"error"in P&&((0,g.i)(P.error)?r({type:"warning",message:l(P.error)}):r({type:"warning",message:t({id:"notification.error",defaultMessage:"An error occurred"})}))};if(w||u)return(0,e.jsx)(X.s,{children:(0,e.jsx)(o.Bl,{})});const Y=h?.data,$=h?.meta,G=$?.contentTypes||{},b=$?.components||{};if(f||!p){const m=[];return x&&m.push({code:x.code}),U&&m.push({code:U.code}),(0,e.jsx)(D.rd,{to:{pathname:"/plugins/content-releases",state:{errors:m}}})}if(B||!Y)return(0,e.jsx)(X.s,{children:(0,e.jsx)(o.hH,{})});if(Object.keys(Y).length===0)return(0,e.jsx)(X.s,{children:(0,e.jsx)(o.R1,{content:{id:"content-releases.pages.Details.tab.emptyEntries",defaultMessage:"This release is empty. Open the Content Manager, select an entry and add it to the release."},action:(0,e.jsx)(rt.z,{as:_.N_,to:{pathname:"/content-manager"},style:{textDecoration:"none"},variant:"secondary",children:t({id:"content-releases.page.Details.button.openContentManager",defaultMessage:"Open the Content Manager"})})})});const L=R?Qt:Kt;return(0,e.jsx)(X.s,{children:(0,e.jsxs)(v.s,{gap:8,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(v.s,{children:(0,e.jsx)(xe.Z,{"aria-label":t({id:"content-releases.pages.ReleaseDetails.groupBy.aria-label",defaultMessage:"Group by"}),customizeContent:m=>t({id:"content-releases.pages.ReleaseDetails.groupBy.label",defaultMessage:"Group by {groupBy}"},{groupBy:m}),value:t(Pe(M)),onChange:m=>n({groupBy:m}),children:L.map(m=>(0,e.jsx)(xe.eY,{value:m,children:t(Pe(m))},m))})}),Object.keys(Y).map(m=>(0,e.jsxs)(v.s,{gap:4,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(v.s,{role:"separator","aria-label":m,children:(0,e.jsx)(ee.E,{children:m})}),(0,e.jsx)(o.XI.Root,{rows:Y[m].map(A=>({...A,id:Number(A.entry.id)})),colCount:Y[m].length,isLoading:w,isFetching:O,children:(0,e.jsxs)(o.XI.Content,{children:[(0,e.jsxs)(o.XI.Head,{children:[C.map(({key:A,fieldSchema:N,metadatas:P,name:J})=>(0,e.jsx)(o.XI.HeaderCell,{fieldSchemaType:N.type,label:t(P.label),name:J},A)),(0,e.jsx)(o.XI.HeaderCell,{fieldSchemaType:"string",label:t({id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"}),name:"content-type"}),(0,e.jsx)(o.XI.HeaderCell,{fieldSchemaType:"string",label:t({id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"}),name:"action"}),!p.releasedAt&&(0,e.jsx)(o.XI.HeaderCell,{fieldSchemaType:"string",label:t({id:"content-releases.page.ReleaseDetails.table.header.label.status",defaultMessage:"status"}),name:"status"})]}),(0,e.jsx)(o.XI.LoadingBody,{}),(0,e.jsx)(o.XI.Body,{children:Y[m].map(({id:A,contentType:N,locale:P,type:J,entry:he},_t)=>(0,e.jsxs)(nt.Tr,{children:[(0,e.jsx)(Q.Td,{width:"25%",maxWidth:"200px",children:(0,e.jsx)(y.o,{ellipsis:!0,children:`${N.mainFieldValue||he.id}`})}),R&&(0,e.jsx)(Q.Td,{width:"10%",children:(0,e.jsx)(y.o,{children:`${P?.name?P.name:"-"}`})}),(0,e.jsx)(Q.Td,{width:"10%",children:(0,e.jsx)(y.o,{children:N.displayName||""})}),(0,e.jsx)(Q.Td,{width:"20%",children:p.releasedAt?(0,e.jsx)(y.o,{children:t({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:J==="publish",b:fe=>(0,e.jsx)(y.o,{fontWeight:"bold",children:fe})})}):(0,e.jsx)(g.R,{selected:J,handleChange:fe=>H(fe,A,[m,_t]),name:`release-action-${A}-type`,disabled:!T})}),!p.releasedAt&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Q.Td,{width:"20%",minWidth:"200px",children:(0,e.jsx)(Xt,{action:J,schema:G?.[N.uid],components:b,entry:he})}),(0,e.jsx)(Q.Td,{children:(0,e.jsx)(v.s,{justifyContent:"flex-end",children:(0,e.jsxs)(g.k.Root,{children:[(0,e.jsx)(g.k.ReleaseActionEntryLinkItem,{contentTypeUid:N.uid,entryId:he.id,locale:P?.code}),(0,e.jsx)(g.k.DeleteReleaseActionItem,{releaseId:p.id,actionId:A})]})})})]})]},A))})]})})]},`releases-group-${m}`)),(0,e.jsxs)(v.s,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(o._u,{defaultValue:$?.pagination?.pageSize.toString()}),(0,e.jsx)(o.W7,{pagination:{pageCount:$?.pagination?.pageCount||0}})]})]})})},kt=()=>{const{formatMessage:t}=(0,F.A)(),{releaseId:a}=(0,D.g)(),s=(0,o.hN)(),{formatAPIError:n}=(0,o.wq)(),{replace:r}=(0,D.W6)(),[l,d]=W.useState(!1),[u,f]=W.useState(!1),{isLoading:x,data:T,isSuccess:c}=(0,g.b)({id:a}),[C,{isLoading:R}]=(0,g.c)(),[p,{isLoading:M}]=(0,g.d)(),w=()=>{d(b=>!b)},O=()=>f(b=>!b);if(x)return(0,e.jsx)($e,{toggleEditReleaseModal:w,toggleWarningSubmit:O,children:(0,e.jsx)(X.s,{children:(0,e.jsx)(o.Bl,{})})});const B=c&&T?.data||null,h=B?.name||"",U=B?.timezone??null,S=B?.scheduledAt&&U?Ee(B.scheduledAt,U):null,H=S?(0,ye.A)(S,"yyyy-MM-dd"):null,Y=S?(0,ye.A)(S,"HH:mm"):"",$=async b=>{const L=await C({id:a,name:b.name,scheduledAt:b.scheduledAt,timezone:b.timezone});"data"in L?(s({type:"success",message:t({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}),w()):(0,g.i)(L.error)?s({type:"warning",message:n(L.error)}):s({type:"warning",message:t({id:"notification.error",defaultMessage:"An error occurred"})})},G=async()=>{const b=await p({id:a});"data"in b?r("/plugins/content-releases"):(0,g.i)(b.error)?s({type:"warning",message:n(b.error)}):s({type:"warning",message:t({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)($e,{toggleEditReleaseModal:w,toggleWarningSubmit:O,children:[(0,e.jsx)(Vt,{}),l&&(0,e.jsx)(ze,{handleClose:w,handleSubmit:$,isLoading:x||R,initialValues:{name:h||"",scheduledAt:S,date:H,time:Y,isScheduled:Boolean(S),timezone:U}}),(0,e.jsx)(o.TM,{bodyText:{id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"},isOpen:u,isConfirmButtonLoading:M,onToggleDialog:O,onConfirm:G})]})},qt=()=>(0,e.jsx)(o.kz,{permissions:g.P.main,children:(0,e.jsxs)(D.dO,{children:[(0,e.jsx)(D.qh,{exact:!0,path:`/plugins/${g.p}`,component:Ht}),(0,e.jsx)(D.qh,{exact:!0,path:`/plugins/${g.p}/:releaseId`,component:kt})]})})}}]);
