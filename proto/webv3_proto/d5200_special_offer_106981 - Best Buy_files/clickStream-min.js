try{Lm.clickStream={version:"201304151450",sImageURL:"//<DEV>context.bestbuy.com/_.gif?src=<SRC>&path=<URL>&pageTitle=<PAGETITLE>&action=<EVENT><ITEMTYPE><ACTIONLABEL>&pageName=<PAGENAME>&clientTime=<CLIENTTIME><CAT>&<RAND><ITEMID><ORDERID>",page_url:"",page_title:"",page_name:"",page_skus:"",page_catinfo:null,page_templatename:null,page_atgid:null,page_orderid:null,dev:"",site_src:"Dotcom",_RAND:function(){return Math.floor(Math.random()*100000000);},_RCV:function(d){var c=document.cookie,b=c.indexOf(d+"="),a=0,e=null;if(b>-1){a=c.indexOf(";",b+1);a=(a>0)?a:c.length;e=(a>b+1)?c.substring(b+1+d.length,a):"";}return e;},_SC:function(a,b){document.cookie=a+"="+window.escape(b)+";path=/;domain=."+document.domain;return;},pageView:function(b,a){this.SEND("pageView",b,null,a);},uiClick:function(a){this.SEND("uiClick",null,a);},cartAdd:function(a,b,c){this.SEND("uiClick,cartAdd",a,b,c);},cartAddSuggestedAccessory:function(b,c,a){this.SEND("uiClick,cartAdd",b,c,a);},viewSuggestedAccessory:function(b,a){this.SEND("pageView",b,null,a);},INIT:function(a){this.page_url=encodeURIComponent(document.location);this.page_title=escape(document.title);var c="";c+=((typeof track.uberCatName!=="undefined")?track.uberCatName+": ":"");c+=((typeof track.parentCatName!=="undefined")?track.parentCatName+": ":"");c+=((typeof track.catName!=="undefined")?track.catName:"");c+=((typeof track.catId!=="undefined"&&track.catId==="pdp")?": pdp":"");this.page_name=escape(c);this.dev=((Lm.h.indexOf("www.best")===0||Lm.h.indexOf("www-ssl.best")===0||Lm.h.indexOf("kiosk.")===0||Lm.h.indexOf("kiosk-ssl.")===0||Lm.h.indexOf("espanol.")===0||Lm.h.indexOf("espanol-ssl.")===0||Lm.h.indexOf("stores.")===0||Lm.h.indexOf("m.best")===0||Lm.h.indexOf("m-ssl.best")===0)?"":"pl.");this.page_skus=a.skuList||a.skuId||window.skuId||"";this.atgid=a.atgID||a.profileId||null;if(a.catId.indexOf("pcat17")===-1){this.page_catinfo=a.catId+"["+a.catName+"]";}if(a.catId==="pcat17014"){var b=[];jQuery("div.seller-container span.order-id a").each(function(){b.push(jQuery(this).text());});this.page_orderid=((b.length>0)?b.join(","):a.orderId);}this.page_templatename=a.templateName||null;this.pageView(undefined,this.page_skus);},SEND:function(f,d,e,c){var b,a=new Image();b=Lm.clickStream.sImageURL.replace("<DEV>",Lm.clickStream.dev);b=b.replace("<SRC>",Lm.clickStream.site_src);b=b.replace("<URL>",Lm.clickStream.page_url);b=b.replace("<PAGETITLE>",Lm.clickStream.page_title);b=b.replace("<PAGENAME>",Lm.clickStream.page_name);b=b.replace("<EVENT>",f);if(typeof e!=="undefined"&&e!==null){b=b.replace("<ACTIONLABEL>","&actionLabel="+escape(e));}else{b=b.replace("<ACTIONLABEL>","");}b=b.replace("<CLIENTTIME>",escape(new Date().toString()));if(typeof Lm.clickStream.page_catinfo!=="undefined"&&Lm.clickStream.page_catinfo!==null){b=b.replace("<CAT>","&category="+escape(Lm.clickStream.page_catinfo));}else{b=b.replace("<CAT>","");}if((typeof c!=="undefined"&&c!==null&&c.length>0)||(Lm.clickStream.page_skus.length>0)){if(typeof c!=="undefined"&&c!==null&&c.length>0){b=b.replace("<ITEMID>","&itemId="+escape(c));}else{b=b.replace("<ITEMID>","&itemId="+escape(Lm.clickStream.page_skus));}if(typeof d!=="undefined"&&d!==null&&d.length>0){b=b.replace("<ITEMTYPE>","&itemType="+d);}else{if(track.catId.indexOf("pdp")>-1){b=b.replace("<ITEMTYPE>","&itemType=product");}else{b=b.replace("<ITEMTYPE>","&itemType="+Lm.clickStream.page_templatename);}}}else{b=b.replace("<ITEMID>","");b=b.replace("<ITEMTYPE>","");}b=b.replace("<ORDERID>",((Lm.clickStream.page_orderid!==null)?"&orderId="+Lm.clickStream.page_orderid:""));b=b.replace("<RAND>",Lm.clickStream._RAND());a.src=((document.location.protocol==="https:")?"https:":"http:")+b;}};Lm.LOAD("clickStream");}catch(ex){}