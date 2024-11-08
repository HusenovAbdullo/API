(function(){"use strict";var a={252:function(a,t,e){var s=e(5130),n=e(6768);function r(a,t,e,s,r,i){const o=(0,n.g2)("HelloWorld");return(0,n.uX)(),(0,n.Wv)(o,{msg:"Welcome to Your Vue.js App"})}var i=e(4232);const o={class:"task__sectiontop ralt pt-120 pb-120"},l={class:"container"},c={class:"row justify-content-center"},d={class:"col-xxl-6 col-xl-8 col-lg-8"},u={class:"section__title text-center ralt mb-60"},p={action:"#",class:"search__component mb-24 d-flex align-items-center justify-content-between wow fadeInUp"},k={key:0,class:"loading-text"},g={key:1,class:"error-text"},b={key:0,class:"row ralt g-4"},v={class:"title wow fadeInUp mb-24 center",id:"trackingNumberDisplay"},m={key:0,class:"col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown"},f={class:"task__item round16 bgwhite d-flex align-items-center"},h={class:"content"},y={key:0,class:"fz-16 fw-400 inter pra mb-40"},_={id:"senderCountry",class:"textrang"},w={key:1,class:"fz-16 fw-400 inter pra mb-40"},x={id:"senderAddress",class:"textrang"},L={key:2,class:"fz-16 fw-400 inter pra mb-40"},D={id:"senderPostcode",class:"textrang"},C={key:1,class:"col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"},z={class:"task__item round16 bgwhite d-flex align-items-center"},E={class:"content"},T={key:0,class:"fz-16 fw-400 inter pra mb-40"},A={id:"recipientCountry",class:"textrang"},P={key:1,class:"fz-16 fw-400 inter pra mb-40"},M={id:"recipientAddress",class:"textrang"},O={key:2,class:"fz-16 fw-400 inter pra mb-40"},I={id:"recipientPostcode",class:"textrang"},X={class:"col-xl-8 col-lg-8"},j={class:"service__detailswrapper"},N={class:"trending__based mb-40 bgwhite round16 shadow1"},S={class:"based__content border round16 bgwhite"},Q={class:"freelancer__education bborderdash pb-30 mb-30"},W={class:"blog__categories",id:"combinedTracking"},F={href:"#0",class:"d-flex align-items-center"},q={class:"fz-12 fw-500 title inter"},U={class:"cateicon"},K=["src"],H={class:"fz-12 d-block fw-500 inter success2 region-info"},R={class:"fz-12 d-block fw-500 inter success2 region-info"},Y={class:"fz-12 fw-500 inter title d-block"},J={class:"fz-12 d-block fw-500 inter success2"};function V(a,t,e,r,V,Z){return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[29]||(t[29]=(0,n.Fv)('<section class="banner__carousel ralt container"><br><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><a href="https://uz.post" target="_blank"><img src="assets/img/reklama/rek1.png" class="d-block w-100" alt="banner1"></a></div><div class="carousel-item"><a href="https://uz.post" target="_blank"><img src="assets/img/reklama/15.png" class="d-block w-100" alt="banner2"></a></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></section>',1)),(0,n.Lk)("section",o,[(0,n.Lk)("div",l,[(0,n.Lk)("div",c,[(0,n.Lk)("div",d,[(0,n.Lk)("div",u,[(0,n.Lk)("form",p,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>V.trackingNumber=a),id:"trackingNumberInput",placeholder:"CC123456789UZ",class:"faded-placeholder",onKeyup:t[1]||(t[1]=(0,s.jR)(((...a)=>Z.fetchTrackingData&&Z.fetchTrackingData(...a)),["enter"]))},null,544),[[s.Jo,V.trackingNumber]]),(0,n.Lk)("button",{type:"button",class:"cmn--btn d-flex align-items-center",onClick:t[2]||(t[2]=(...a)=>Z.fetchTrackingData&&Z.fetchTrackingData(...a))},t[3]||(t[3]=[(0,n.Lk)("span",null,"Kuzatish",-1),(0,n.Lk)("span",null,[(0,n.Lk)("i",{class:"bi bi-search fz-12"})],-1)]))]),V.loading?((0,n.uX)(),(0,n.CE)("div",k,t[4]||(t[4]=[(0,n.Lk)("span",null,"Ma'lumotlar yuklanmoqda...",-1)]))):(0,n.Q3)("",!0),V.errorMessage?((0,n.uX)(),(0,n.CE)("div",g,[(0,n.Lk)("span",null,(0,i.v_)(V.errorMessage),1)])):(0,n.Q3)("",!0)])])]),V.trackingData?((0,n.uX)(),(0,n.CE)("div",b,[(0,n.Lk)("h2",v,(0,i.v_)(V.trackingData.number),1),V.trackingData.senderCountry?((0,n.uX)(),(0,n.CE)("div",m,[(0,n.Lk)("div",f,[t[15]||(t[15]=(0,n.Lk)("div",{class:"thumb"},[(0,n.Lk)("img",{src:"assets/img/task/tast1.jpg",alt:"img"})],-1)),(0,n.Lk)("div",h,[t[14]||(t[14]=(0,n.Lk)("h3",{class:"inter title2 mb-24"},"Yuboruvchi",-1)),V.trackingData.senderCountry?((0,n.uX)(),(0,n.CE)("p",y,[t[5]||(t[5]=(0,n.Lk)("strong",null,"Mamlakat: ",-1)),t[6]||(t[6]=(0,n.eW)()),t[7]||(t[7]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("span",_,(0,i.v_)(V.trackingData.senderCountry),1)])):(0,n.Q3)("",!0),V.trackingData.senderAddress?((0,n.uX)(),(0,n.CE)("p",w,[t[8]||(t[8]=(0,n.Lk)("strong",null,"Manzil:",-1)),t[9]||(t[9]=(0,n.eW)()),t[10]||(t[10]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("span",x,(0,i.v_)(V.trackingData.senderAddress),1)])):(0,n.Q3)("",!0),V.trackingData.senderPostcode?((0,n.uX)(),(0,n.CE)("p",L,[t[11]||(t[11]=(0,n.Lk)("strong",null,"Pochta indeksi:",-1)),t[12]||(t[12]=(0,n.eW)()),t[13]||(t[13]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("span",D,(0,i.v_)(V.trackingData.senderPostcode),1)])):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0),V.trackingData.recipientCountry?((0,n.uX)(),(0,n.CE)("div",C,[(0,n.Lk)("div",z,[t[26]||(t[26]=(0,n.Lk)("div",{class:"thumb"},[(0,n.Lk)("img",{src:"assets/img/task/tast2.jpg",alt:"img"})],-1)),(0,n.Lk)("div",E,[t[25]||(t[25]=(0,n.Lk)("h3",{class:"inter title2 mb-24"},"Qabul qiluvchi",-1)),V.trackingData.recipientCountry?((0,n.uX)(),(0,n.CE)("p",T,[t[16]||(t[16]=(0,n.Lk)("strong",null,"Mamlakat:",-1)),t[17]||(t[17]=(0,n.eW)()),t[18]||(t[18]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("span",A,(0,i.v_)(V.trackingData.recipientCountry),1)])):(0,n.Q3)("",!0),V.trackingData.recipientAddress?((0,n.uX)(),(0,n.CE)("p",P,[t[19]||(t[19]=(0,n.Lk)("strong",null,"Manzil:",-1)),t[20]||(t[20]=(0,n.eW)()),t[21]||(t[21]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("span",M,(0,i.v_)(V.trackingData.recipientAddress),1)])):(0,n.Q3)("",!0),V.trackingData.recipientPostcode?((0,n.uX)(),(0,n.CE)("p",O,[t[22]||(t[22]=(0,n.Lk)("strong",null,"Pochta indeksi:",-1)),t[23]||(t[23]=(0,n.eW)()),t[24]||(t[24]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("span",I,(0,i.v_)(V.trackingData.recipientPostcode),1)])):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0),(0,n.Lk)("div",X,[(0,n.Lk)("div",j,[(0,n.Lk)("div",N,[(0,n.Lk)("div",S,[(0,n.Lk)("div",Q,[t[27]||(t[27]=(0,n.Lk)("h3",{class:"title2"},"Kuzatuv",-1)),(0,n.Lk)("ul",W,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(V.combinedTracking,((a,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t},[(0,n.Lk)("a",F,[(0,n.Lk)("span",q,(0,i.v_)(a.date.toLocaleString()),1),(0,n.Lk)("span",U,[(0,n.Lk)("img",{src:`assets/img/flags/${a.country_code.toLowerCase()}.svg`,alt:"flag",class:"flag-icon"},null,8,K)]),(0,n.Lk)("span",H,(0,i.v_)(a.region),1),(0,n.Lk)("span",R,(0,i.v_)(a.data),1),(0,n.Lk)("span",Y,(0,i.v_)(a.location),1),(0,n.Lk)("span",J,(0,i.v_)(a.status),1)])])))),128))])])])])])]),t[28]||(t[28]=(0,n.Fv)('<div class="col-xl-4 col-lg-4"><div class="basic__skilled__wrapper"><div class="darrell__profile round16 bgwhite"><div id="adCarousel" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><a href="https://uz.post" target="_blank"><img src="assets/img/reklama/11.png" class="d-block w-100" alt="ad1"></a></div><div class="carousel-item"><a href="https://uz.post" target="_blank"><img src="assets/img/reklama/12.png" class="d-block w-100" alt="ad2"></a></div><div class="carousel-item"><a href="https://uz.post" target="_blank"><img src="assets/img/reklama/13.png" class="d-block w-100" alt="ad2"></a></div></div><button class="carousel-control-prev" type="button" data-bs-target="#adCarousel" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#adCarousel" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></div></div></div>',1))])):(0,n.Q3)("",!0)])]),t[30]||(t[30]=(0,n.Fv)('<footer class="footer__section bgadd"><div class="container"><div class="footer__bottom d-flex align-items-center"><p class="fz-16 fw-400 inter text-white"> Copyright © 2024 <a href="javascript:void(0)" class="hover"></a>   “O‘zbekiston pochtasi” aksiyadorlik jamiyati<a href="https://chiko.uz" class="base3"></a></p><ul class="help__support d-flex align-items-center"><li><a href="https://t.me/shipox_admin/" class="text-white fz-16 fw-400 inter"> Yordam va qo‘llab-quvvatlash </a></li><li><a href="https://t.me/shipox_admin/" class="text-white fz-16 fw-400 inter"> Reklama uchun </a></li><li><a href="javascript:void(0)" class="text-white fz-16 fw-400 inter"> Foydalanish shartlari </a></li></ul></div></div></footer>',1))],64)}e(1454);var Z={data(){return{trackingNumber:"",loading:!1,trackingData:null,combinedTracking:[],errorMessage:null}},methods:{fetchTrackingData(){this.loading=!0,this.trackingData=null,this.combinedTracking=[],this.errorMessage=null;const a=new XMLHttpRequest;a.open("GET",`https://new.pochta.uz/api/v1/public/test/${this.trackingNumber}/`,!0),a.onload=()=>{if(this.loading=!1,a.status>=200&&a.status<300){const t=JSON.parse(a.responseText);if(Array.isArray(t)&&t.length>0&&t[0].OperationalMailitems){const a=t[0].OperationalMailitems.TMailitemInfoFromScanning[0];this.trackingData={number:a.InternationalId,senderCountry:a.OrigCountry.Name||"",senderAddress:a.OrigAddress||"",senderPostcode:a.OrigPostcode||"",recipientCountry:a.DestCountry.Name||"",recipientAddress:a.DestAddress||"",recipientPostcode:a.DestPostcode||""},this.processEvents(a.Events.TMailitemEventScanning,a.DestCountry.Code)}else this.processAlternativeData(t)}else this.errorMessage="Ma'lumot topilmadi"},a.onerror=()=>{this.loading=!1,this.errorMessage="So'rovni yuborishda xatolik yuz berdi"},a.send()},processEvents(a,t){this.combinedTracking=a.map((a=>({date:new Date(a.LocalDateTime),location:a.EventOffice.Name,status:a.IPSEventType.Name,country_code:t}))).sort(((a,t)=>t.date-a.date))},processAlternativeData(a){this.trackingData={number:a.header?.data?.order_number||a.gdeposilka?.data?.tracking_number||"Ma'lumot yo'q",senderCountry:a.header?.data?.locations?.[0]?.address_city||"",senderAddress:a.header?.data?.locations?.[0]?.address||"",senderPostcode:a.header?.data?.locations?.[0]?.postcode||"",recipientCountry:a.header?.data?.locations?.[1]?.address_city||"",recipientAddress:a.header?.data?.locations?.[1]?.address||"",recipientPostcode:a.header?.data?.locations?.[1]?.postcode||""};let t=[],e=[];a.shipox&&a.shipox.data&&a.shipox.data.list&&(t=a.shipox.data.list.map((a=>({date:new Date(a.date),data:a.data||"UzPost",location:a.warehouse?a.warehouse.name:"",status:this.getStatusText(a.status_desc),country_code:"UZ"})))),a.gdeposilka&&a.gdeposilka.data&&a.gdeposilka.data.checkpoints&&(e=a.gdeposilka.data.checkpoints.map((a=>({date:new Date(a.time),location:a.location_translated,region:a.courier.name,status:this.getStatusText(a.status_name),country_code:a.courier.country_code}))));const s=t.sort(((a,t)=>new Date(t.date)-new Date(a.date))),n=e.sort(((a,t)=>new Date(t.date)-new Date(a.date)));this.combinedTracking=new Date(s[0]?.date)>new Date(n[0]?.date)?[...s,...n]:[...n,...s]},getStatusText(a){return a||"Status noaniq"}}},$=e(1241);const G=(0,$.A)(Z,[["render",V]]);var B=G,aa={name:"App",components:{HelloWorld:B}};const ta=(0,$.A)(aa,[["render",r]]);var ea=ta;(0,s.Ef)(ea).mount("#app")}},t={};function e(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return a[s].call(r.exports,r,r.exports,e),r.exports}e.m=a,function(){var a=[];e.O=function(t,s,n,r){if(!s){var i=1/0;for(d=0;d<a.length;d++){s=a[d][0],n=a[d][1],r=a[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(e.O).every((function(a){return e.O[a](s[l])}))?s.splice(l--,1):(o=!1,r<i&&(i=r));if(o){a.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=a.length;d>0&&a[d-1][2]>r;d--)a[d]=a[d-1];a[d]=[s,n,r]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var s in t)e.o(t,s)&&!e.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:t[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,s){var n,r,i=s[0],o=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==a[t]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(l)var d=l(e)}for(t&&t(s);c<i.length;c++)r=i[c],e.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return e.O(d)},s=self["webpackChunkapi"]=self["webpackChunkapi"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=e.O(void 0,[504],(function(){return e(252)}));s=e.O(s)})();
//# sourceMappingURL=app.b1af36f9.js.map