$(function(){var h="201305221400",g=false,i=document.cookie,n="",d="cbt",e,m,j,c,a="",f,l,k,b;if(i.indexOf(d+"=")>-1){e=i.split(";");for(m=0;m<e.length;m+=1){j=e[m].indexOf(d+"=");if(j>-1){n=e[m].substring(d.length+2);break;}}}if(n==="true"){g=true;}c=document.createElement("script");if(g){f=document.createElement("noscript");l=document.createElement("iframe");k='{site:"LFWj91x"}';b="//s.thebrighttag.com/iframe?c=LFWj91x";l.width="1";l.height="1";l.frameborder="0";l.scrolling="no";l.marginheight="0";l.marginwidth="0";l.src=b;f.appendChild(l);a="//s.btstatic.com/tag.js";c.innerHTML=k;}else{a=imgServer+"js/tracking/liveManager-min.js?v="+h;}c.type="text/javascript";c.src=a;c.async="true";document.body.appendChild(c);if(g){document.body.appendChild(f);}});