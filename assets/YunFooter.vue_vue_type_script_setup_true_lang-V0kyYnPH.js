import{h as v,m as C,au as w,a6 as F,s as T,O as f,av as i,o as s,j as r,l as e,b as o,t as a,a as l,d as n,F as V,q as h,aw as $,r as B,c as Y}from"./app-RPMEGggf.js";const H={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},N={key:0,class:"beian",m:"y-2"},S={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},j={class:"copyright flex justify-center items-center gap-2",p:"1"},z=["href","title"],D={key:1,class:"powered",m:"2"},I=["innerHTML"],L=["href","title"],M=v({__name:"YunFooter",setup(g){const{t:c}=C(),p=w(),k=F(),t=T(),_=new Date().getFullYear(),y=f(()=>_===t.value.footer.since),b=f(()=>c("footer.powered",[`<a href="${i.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${i.version}`])),u=f(()=>t.value.footer.icon||{url:i.repository.url,name:"i-ri-cloud-line",title:i.name});return(x,q)=>{var m,d;return s(),r("footer",H,[(m=e(t).footer.beian)!=null&&m.enable&&e(t).footer.beian.icp?(s(),r("div",N,[o("a",S,a(e(t).footer.beian.icp),1)])):l("v-if",!0),o("div",j,[o("span",null,[n(" © "),y.value?l("v-if",!0):(s(),r(V,{key:0},[n(a(e(t).footer.since)+" - ",1)],64)),n(" "+a(e(_)),1)]),(d=e(t).footer.icon)!=null&&d.enable?(s(),r("a",{key:0,class:h(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:u.value.url,target:"_blank",title:u.value.title},[o("div",{class:h(u.value.name)},null,2)],10,z)):l("v-if",!0),o("span",null,a(e(k).author.name),1)]),e(t).footer.powered?(s(),r("div",D,[o("span",{innerHTML:b.value},null,8,I),n(" | "),o("span",null,[n(a(e(c)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},a($(e(p).theme)),9,L),n(" v"+a(e(t).pkg.version),1)])])):l("v-if",!0),B(x.$slots,"default")])}}}),O=v({__name:"YunFooter",setup(g){return(c,p)=>(s(),Y(M))}});export{O as _};
