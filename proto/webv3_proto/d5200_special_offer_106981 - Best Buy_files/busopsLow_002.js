busopsLow=(typeof(busopsLow)!=="undefined"?busopsLow:{});busopsLow.ExternalContent=(typeof(busopsLow.ExternalContent)!=="undefined"?busopsLow.ExternalContent:{});busopsLow.ExternalContent.SOFTWAREDOWNLOAD=function(){this.apiKey="tfuyteqkrnxfp3ye6kvpvk5e";var b=[];var a=function(d){var f=-1;if(b!==null&&b.length>0){e:for(var e=0,g=b.length;e<g;e++){if(b[e][busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.SKU]==d){f=e;break e;}}}return f;};this.setCNData=function(d,c){var e=a(d);e=(e==-1?b.length:e);if(e>-1){b[e]={};b[e][busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.SKU]=d;b[e][busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.DSKU]=c;}};this.getCNData=function(c){var d=a(c);var e=null;if(d>-1){e=b[d];}return e;};this.getAllMatches=function(){return b;};};var CNPrototype=busopsLow.ExternalContent.SOFTWAREDOWNLOAD.prototype;CNPrototype.__buildnumber="2307";CNPrototype.__builddate="20110420";CNPrototype.__version="1.0.1";CNPrototype.retData=function(g){if(g!==null&&typeof(g[busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.R_PRD])!="undefined"&&g[busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.R_PRD]!==null){if(g[busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.R_PRD].constructor==Array){var a=g[busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.R_PRD];for(var e=0,h=a.length;e<h;e++){var d=a[e];var f=d[busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.R_PSKU];var b=d[busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys.R_DSKU];if(b!==null){this.setCNData(f,b);}}}this.doDOM();}};CNPrototype.loadData=function(e,g,d){if(typeof(e)!=="undefined"&&e!=""){var f=((typeof(g)!=="undefined"&&g!=="")?g:this.apiKey);var i=(typeof(d)!=="undefined"?d:"");var c='products(digitalSku>""&sku in('+e+"))?dsku=true&show=sku,digitalSku";var h="SDSTATIC";var a=this;window[h]=function(b){a.retData(b);};busopsLow.REMIX.loadRemixQuery(c,h,f,i);}};CNPrototype.download=function(b){var a=imgServer+"en_US/images/global/inno/softwareinstaller/download.html?digitalsku="+b;var c=window.open(a,"win","width=200,height=200");c.focus();};busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Name="ExternalContent.SOFTWAREDOWNLOAD";busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Keys={DSKU:"D",SKU:"S",R_DSKU:"digitalSku",R_PSKU:"sku",R_PRD:"products"};CNPrototype.doDOM=function(){};CNPrototype=null;if(typeof(busopsLow.dependencyLoadedCallback)!="undefined"){busopsLow.dependencyLoadedCallback(busopsLow.ExternalContent.SOFTWAREDOWNLOAD.Name);}