/* UI BUILD: Thursday, May 30 2013 at  2:30:45 PM */
/* MD5: eb3fbdd3f4cb066bfa64f1788a3c079d */

bby.requires(["bby.page"],function(){var t={build:{date:"@build.date@",number:"@build.number@"},cDate:bby.sysdate,enable:{thank_you_placebo:true,fs_on_list:true,small_app_cp_redirect:true,gsp_cpdp_tab:true,dod_ep_r2:true,cpdp_acc_service_discovery:!1||/cpdp_acc_service_discovery=yes/.test(window.location.search),uber_gift_links_removal:!1||/uber_gift_links_removal=yes/.test(window.location.search),services_lightbox_tab_movement:true,techSupportBanners:true,techSupportBannerTablets:true,chatID:!1||/chatID=yes/.test(window.location.search),tvCatPagePMLearningContent:true,dodsignup:!1||/dodsignup=yes/.test(window.location.search),pdpPriceBlock:true,footerLinks:true},initFired:!1,globalBlocks:function(){return/kiosk/.test(window.location.href)?!0:"undefined"!=typeof catid&&"pcmcat152200050035"==catid?!0:!1},runTests:function(){var t,e,a,s,i,o,n,r,c,p,l,b,d;if(this.enable.thank_you_placebo&&this.cDate>=new Date("5/29/2013")&&this.cDate<=new Date("6/03/2013")&&"undefined"!=typeof track&&"undefined"!=typeof track.catId&&"pcat17014"===track.catId&&bby.testCookies.getTestVersion({cookie:"testVersion2-2",trackKey:"abTest68",trackValue:"20130529-20130607 Thank You Placebo"}),this.enable.fs_on_list&&bby.testCookies.inGroup(["1","2","3","4","5","6","7","8","9","10"])&&this.cDate>=new Date("5/28/2013")&&this.cDate<=new Date("6/07/2013")&&bby.page.isList&&"undefined"!=typeof track&&"undefined"!=typeof track.parentCatId&&(t=new Array("abcat0101000","abcat0102000","abcat0204000","pcmcat209000050006","abcat0201000"),$.inArray(track.parentCatId,t)>-1&&(e=bby.testCookies.getTestVersion({cookie:"testVersion4-2",trackKey:"abTest67",trackValue:"20130528-20130610 FS on List"}),null!=e&&"a"!=e&&bby.requires("bby.abt.freeShippingOnList",function(){bby.abt.freeShippingOnList.init(e)}))),this.enable.small_app_cp_redirect&&bby.testCookies.inGroup(["1","2","3","4","5","6","7","8","9","10"])&&this.cDate>=new Date("5/24/2013")&&this.cDate<=new Date("6/07/2013")&&("http://www.bestbuy.com/site/Home-Appliances/Small-Appliances/abcat0912000.c?id=abcat0912000"===window.location.href||/small_app_cp_redirect/.test(window.location.search)||"small_app_cp_redirect"===bby.parseUrl.abtest)&&(a=bby.testCookies.getTestVersion({cookie:"testVersion3-1",trackKey:"abTest66",trackValue:"20130523-20130607 Small app cat page redirect"}),"small_app_cp_redirect"!=bby.parseUrl.abtest))switch(a){case"a":break;case"b":window.location="http://www.bestbuy.com/site/Electronics/Small-Appliance/pcmcat303600050016.c?id=pcmcat303600050016&abtest=small_app_cp_redirect";break;case"c":window.location="http://www.bestbuy.com/site/Electronics/Small-Appliances/pcmcat303600050018.c?id=pcmcat303600050018&abtest=small_app_cp_redirect"}if(this.enable.gsp_cpdp_tab&&bby.testCookies.inGroup(["15","16"])&&this.cDate>=new Date("5/30/2013")&&this.cDate<=new Date("6/12/2013")&&bby.page.isCloud&&(s=[{dept:"2",subClass:["478","479","276"]},{dept:"4",subClass:["203","205","106"]},{dept:"5",subClass:["363","53"]},{dept:"6",subClass:["140","85","160","403","88","84"]},{dept:"9",subClass:["96"]},{dept:"11",subClass:["11"]}],bby.inDepartment(s))){switch(i=bby.testCookies.getTestVersion({cookie:"testVersion4-2",trackKey:"abTest66",trackValue:"20130530-20130612 GSP add tab cloud PDP"}),o=$(".bbytabs"),n=o.children("ul").children("li").length+1,r='<div id="protection-tab" class="ui-tabs-panel ui-widget-content ui-corner-bottom" aria-live="polite" aria-labelledby="ui-id-'+n+'" role="tabpanel" aria-expanded="false" style="position:relative;"><img src="http://images.bestbuy.com/BestBuy_US/en_US/images/test/2013/05/gsp_cloud_tab/tab_content.jpg"><a href="http://www.bestbuy.com/site/Electronics/Geek-Squad/pcmcat138100050018.c?id=pcmcat138100050018" data-lid="gsp_cpdp_tab_'+i+'" style=" width: 240px; height: 25px; display: block; position: absolute; bottom:0px; right:75px; background:url(/no-img.png) no-repeat;">&nbsp;</a></div>',i){case"a":break;case"b":c='<li role="tab" tabindex="-1" aria-controls="ui-tabs-'+n+'" aria-labelledby="ui-id-'+n+'" aria-selected="false" class="ui-state-default"><a href="#protection-tab" data-fragment-id="protection-tab"  title="protection-tab" class="ui-tabs-anchor" role="presentation" tabindex="-1" data-lid="gsp_cpdp_tabB" id="ui-id-'+n+'">Protection Plans</a></li>',o.children("ul").append(c),o.append(r);break;case"c":c='<li role="tab" tabindex="-1" aria-controls="ui-tabs-'+n+'" aria-labelledby="ui-id-'+n+'" aria-selected="false" class="ui-state-default"><a href="#protection-tab" data-fragment-id="protection-tab"  title="protection-tab" class="ui-tabs-anchor" role="presentation" tabindex="-1" data-lid="gsp_cpdp_tabC" id="ui-id-'+n+'">Protection &amp; Services</a></li>',o.children("ul").append(c),o.append(r);break;case"d":c='<li role="tab" tabindex="-1" aria-controls="ui-tabs-'+n+'" aria-labelledby="ui-id-'+n+'" aria-selected="false" class="ui-state-default"><a href="#protection-tab" data-fragment-id="protection-tab" title="protection-tab" class="ui-tabs-anchor" role="presentation" tabindex="-1" data-lid="gsp_cpdp_tabD" id="ui-id-'+n+'">Geek Squad Services</a></li>',o.children("ul").append(c),o.append(r)}o.tabs("refresh"),o.tabs("load",n.toString()),p="#ui-id-"+n,$(p).on("click",function(){$.bbq.pushState({tab:"protection"})}),"#tab=protection"===window.location.hash&&o.tabs("option","active",n-1)}if(this.enable.uber_gift_links_removal&&(l=bby.testCookies.getTestVersion({cookie:"testVersion",trackKey:"abTest",trackValue:""}),"b"===l&&$("#nav").find('[data-lid="ubr_gft"]').next().find('li:not(:has("h4"))').remove()),this.enable.cpdp_acc_service_discovery&&bby.testCookies.inGroup(["11","12"])&&this.cDate>=new Date("5/29/2013")&&this.cDate<=new Date("6/11/2013"))try{o=$(".bbytabs"),b="#"+$(".bbytabs").find("a:contains('Accessories')").parent().attr("aria-controls"),track.isCloud&&/^PD/.test(templateName)&&"-1"!=$("#analytics-data[data-suggested-accessories-ep]").length&&(d=bby.testCookies.getTestVersion({cookie:"testVersion2-2",trackKey:"abTest66",trackValue:"20130529-20130611 Cloud PDP accessories tab service discovery"}),trackEvent.api.trackABTestView({abTest66:"20130529-20130611 Cloud PDP accessories tab service discovery -"+d}),"b"===d&&0===$("#suggested-accessories-ep").length?o.tabs({load:function(t,e){e.panel.selector===b&&($("#suggested-accessories-ep").show(),$("#suggested-accessories").hide())}}):"b"===d&&1===$("#suggested-accessories-ep").length&&($("#suggested-accessories-ep").show(),$("#suggested-accessories").hide()))}catch(u){bby.logError("If the error is undefined not a problem, simply means race condition, or the element didn't match our test :"+u)}},browserFilteredTests:function(){function t(t){$("#dod-ghp").prev().remove(),$.get("//www.bestbuy.com/5500/snippets/DOD_ep_R2/NewDOD-v"+t+".html",function(t,e,a){if("error"==e){var s="Sorry but there was an error: ";bby.logError(s+a.status+" "+a.statusText)}else $("#dod-ghp").empty().replaceWith(t.toString()),$("#dart-container-300x250").css({width:"298px"})})}var e,a,s,i,o,n,r,c,p,l,b,d,u,m,h,y;if(bby.supportedBrowser.isSupported()){if(this.enable.dod_ep_r2&&/^cat00000$/.test(bby.page.catId)&&bby.testCookies.inGroup(["17","18","19","20"])&&this.cDate>=new Date("5/30/2013")&&this.cDate<=new Date("6/04/2013"))switch($("#dod-ghp").hide(),e=bby.testCookies.getTestVersion({cookie:"testVersion6-2",trackKey:"abTest66",trackValue:"20130530-20130604 DOD GHP Entry Point R2"})){case"a":$("#dod-ghp").show();break;case"b":t("Ar2");break;case"c":t("Br1");break;case"d":t("Br2");break;case"e":t("Cr1");break;case"f":t("Cr2")}if(this.enable.services_lightbox_tab_movement&&(track.isCloud?!0:!1)&&(templateName?/^PD/.test(templateName):!1)&&this.cDate>=new Date("4/25/2013")&&this.cDate<=new Date("5/09/2013")&&bby.testCookies.inGroup(["11","12","13","14"])&&(a=[{dept:"2",subClass:["276","478","479"]},{dept:"4",subClass:["203","205"]},{dept:"5",subClass:["53"]},{dept:"6",subClass:["140","403","160"]}],bby.inDepartment(a)&&(s=bby.testCookies.getTestVersion({cookie:"testVersion3-2",trackKey:"abTest68",trackValue:"20130425-201300509 lightbox services tab movement"}),"a"!=s&&bby.requires("bby.abt.lightbox.moveTab",function(){bby.abt.lightbox.moveTab.init({version:s,category:"protectit"})}))),this.enable.techSupportBannerTablets&&/pcmcat209000050008/.test(track.catId)&&this.cDate>=new Date("04/22/2013")&&this.cDate<=new Date("5/07/2013")&&bby.testCookies.inGroup(["8","9"])&&(i=bby.testCookies.getTestVersion({cookie:"testVersion3-2",trackKey:"abTest67",trackValue:"20130422-20130507 tech support banners - tablets - R2"}),"a"!==i&&($("#primary-wrapper").replaceWith('<div id="techSupportBannerTestHolder" />'),$("#techSupportBannerTestHolder").load("//www.bestbuy.com/5500/snippets/20130327_20130404_techSupportBannerTablets_snippet.html",function(t,e,a){if("error"==e){var s="Sorry but there was an error: ";bby.logError(s+a.status+" "+a.statusText)}else $(".spotlight").css("border","none"),"b"===i?$("#techSupportTestB").show():"c"===i&&$("#techSupportTestC").show()}))),this.enable.techSupportBanners&&$.inArray(track.catId,["pcmcat138500050001","pcmcat247400050000","pcmcat247400050001","pcmcat143400050013"])>-1&&this.cDate>=new Date("4/22/2013")&&this.cDate<=new Date("5/07/2013")&&bby.testCookies.inGroup(["8","9"])&&(o=bby.testCookies.getTestVersion({cookie:"testVersion3-2",trackKey:"abTest67",trackValue:"20130422-20130507 tech support banners - R2"}),"a"!==o&&($("#searchlistcontent").append('<div id="techSupportBannerTestHolder" />'),$("#techSupportBannerTestHolder").load("//www.bestbuy.com/5500/snippets/20130327_20130404_techSupportBanner_snippet.html",function(t,e,a){if("error"==e){var s="Sorry but there was an error: ";bby.logError(s+a.status+" "+a.statusText)}else $(".spotlight").css("border","none"),"b"===o?$("#techSupportTestB").show():"c"===o&&$("#techSupportTestC").show()}))),this.enable.chatID&&"undefined"!=typeof track.catId&&"pcmcat145500050036"===track.catId&&(n='<script type="text/javascript">var cid = document.createElement("script"); cid.type = "text/javascript"; cid.async = true;cid.src = "http://s3.amazonaws.com/chatid-mojo-private/staging/w/demo/bestbuy_1367265642_os/bby_demo.js?" + +new Date;(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(cid);</script>',r='<div data-cidw-btype="solo"></div>',$(".narrow:eq(0)").append(n).append(r)),this.enable.footerLinks&&!/espanol/.test(window.location.href)&&this.cDate>=new Date("3/22/2013")&&this.cDate<=new Date("4/04/2013")&&bby.testCookies.inGroup(["1","2"])&&(c=bby.testCookies.getTestVersion({cookie:"testVersion4-2",trackKey:"abTest67",trackValue:"20130322-20130404 New Footer Links test, R2"}),null!=c&&"a"!=c&&bby.requires(["bby.abt.footerLinks"],function(){bby.abt.footerLinks.init(c)})),this.enable.tvCatPagePMLearningContent&&(/abcat0101000/.test(track.catId)||/abcat0101000/.test(catid))&&this.cDate>=new Date("4/01/2013")&&this.cDate<=new Date("4/22/2013")&&bby.testCookies.inGroup(["11","12"]))switch(p=bby.testCookies.getTestVersion({cookie:"testVersion5-2",trackKey:"abTest67",trackValue:" 20130401-20130415 TV Learn Content, R3"}),l=$($(".primary-panel").get(0)),p){case"b":l.html('<class="image-panel-header"> <h2>Shop Televisions by Size</h2><!--Learning content piece--> <div style=" position: absolute; width: 190px; top: 10px; height: 55px; right: 80px; z-index: 2000; padding-top: 15px; padding-left: 15px; background-color: #F1F2F2; "> <span class="icon help_icon icon_15" style=" position: absolute; left: -10px; top: 25px; "></span> <span style="font:bold 15px/20px Arial,Helvetica,sans-serif !important; color:#49494A; padding-bottom:5px; ">Should I choose</span><br /> <a style="color:#085EB9 !important; text-decoration:none !important; width:160px !important; font:16px/20px Arial, Verdana, sans-serif !important;" href="http://www.bestbuy.com/site/Electronics-Promotions/HDTV-Basics/pcmcat197600050000.c?id=pcmcat197600050000" data-lid="tv_cat_learning_content_pm_test-b"> Plasma, LED or LCD?</a> </div> <!--End learning content piece --> <div class="tooltip-wrapper" data-tooltip-pos="bottom" data-tooltip-xpos="-6" data-tooltip-ypos="10"> <div class="tooltip-contents"><p>At Best Buy you\'ll find the TV you\'re looking for, in the size that\'s perfect for any room. We have a full selection of televisions, featuring all the latest and greatest technologies, in a wide variety of screen sizes. </p></div> </div> </h2> <div class="clearer"></div> <ul class="primary-images-list primary-image-4"> <li> <a href="/site/olstemplatemapper.jsp?id=pcat17080&type=page&qp=cabcat0100000~~cabcat0101000~~nf1154||312671756f743b202d2032302671756f743b&list=y&nrp=15&sc=TVVideoSP&sp=-bestsellingsort+skuid&usc=abcat0100000" name="&lid=PM_Panel_1-20_TVs_64244"> <img src="http://images.bestbuy.com/BestBuy_US/en_US/images/abn/2012/tvv/pcon/pm_tv_1_20_120909.jpg" alt="TV" title="TV"/> 20" and Smaller TVs </a></li> <li> <a href="/site/olstemplatemapper.jsp?id=pcat17080&type=page&qp=cabcat0100000~~cabcat0101000~~nf1154||32312671756f743b202d2033392671756f743b&list=y&nrp=15&sc=TVVideoSP&sp=-bestsellingsort+skuid&usc=abcat0100000" name="&lid=PM_Panel_21_-39_TVs_64244"> <img src="http://images.bestbuy.com/BestBuy_US/en_US/images/abn/2012/tvv/pcon/pm_tv_21_39_120909.jpg" alt="TV" title="TV"/> 21"-39" TVs </a></li> <li> <a href="/site/olstemplatemapper.jsp?id=pcat17080&type=page&qp=cabcat0100000~~cabcat0101000~~nf1154||34302671756f743b202d2035392671756f743b&list=y&nrp=15&sc=TVVideoSP&sp=-bestsellingsort+skuid&usc=abcat0100000" name="&lid=PM_Panel_40-59_TVs_64244"> <img src="http://images.bestbuy.com/BestBuy_US/en_US/images/abn/2012/tvv/pcon/pm_tv_41_59_120909.jpg" alt="TV" title="TV"/> 40"-59" TVs </a></li> <li> <a href="/site/olstemplatemapper.jsp?id=pcat17080&type=page&qp=cabcat0100000~~cabcat0101000~~nf1154||36302671756f743b20616e64205570&list=y&nrp=15&sc=TVVideoSP&sp=-bestsellingsort+skuid&usc=abcat0100000" name="&lid=PM_Panel_60_TVs_64244"> <img src="http://images.bestbuy.com/BestBuy_US/en_US/images/abn/2012/tvv/pcon/pm_tv_60_up_120909.jpg" alt="TV" title="TV"/> 60" and Larger TVs </a></li> </ul> <div class="clearer"></div>');break;case"c":$('a[name="&lid=PM_Tab_ShopbySize_64244"]').html($('a[name="&lid=PM_Tab_ShopbySize_64244"]').html().replace("Size","Type")),$("#searchstate").append('<!--Learning content piece--> <div style=" position: absolute; width: 190px; top: 10px; height: 55px; right: 0px; z-index: 2000; padding-top: 15px; padding-left: 15px; background-color: #F1F2F2; "> <span class="icon help_icon icon_15" style=" position: absolute; left: -10px; top: 25px; "></span> <span style="font:bold 17px Arial,Helvetica,sans-serif !important; color:#49494A; margin: 0px 0 -7px !important; display: block; line-height: 1em !important; ">Should I choose</span><br /> <a style="color:#085EB9 !important; text-decoration:none !important; width:160px !important; font:16px/20px Arial, Verdana, sans-serif !important;" href="http://www.bestbuy.com/site/Electronics-Promotions/HDTV-Basics/pcmcat197600050000.c?id=pcmcat197600050000"  data-lid="tv_cat_learning_content_pm_test-c">Plasma, LED or LCD?</a> </div> <!--End learning content piece -->');break;case"d":$.browser.msie&&"7.0"==$.browser.version||(b=$("#primary-tabs").first().children().first().find("li:eq(1)").first().find("a").first(),b.attr({name:""}),b.css({position:"relative"}),b.html('<img src="http://images.bestbuy.com/BestBuy_US/en_US/images/test/2013/02/tvCatPMLearningContent/ICN-TAB.png" style="margin-left:-6px" alt="LearnContent title="Learn Content" width="60" height="40" /><span style="font:12px/12px; position:absolute; right:10px; top:10px;">Should I Choose<br/>Plasma, LED or LCD?</span>'),b.bind("click",function(){trackEvent.event("event.link",{lid:"tv_cat_learning_content_pm_test-d_tab"})}),d=$(".primary-panel:eq(1)"),$(d).find(".primary-main-media").first().children().first().attr({name:"",href:"http://www.bestbuy.com/site/Electronics-Promotions/HDTV-Basics/pcmcat197600050000.c?id=pcmcat197600050000"}).html('<img src="http://images.bestbuy.com/BestBuy_US/en_US/images/test/2013/02/tvCatPMLearningContent/ICN-Panel.png">'),$(d).find(".primary-main-text").html("<h2>Should I choose Plasma, LED or LCD?</h2><p><a href='http://www.bestbuy.com/site/Electronics-Promotions/HDTV-Basics/pcmcat197600050000.c?id=pcmcat197600050000' data-lid='tv_cat_learning_content_pm_test-d_link'>See which HDTV is right for you &rsaquo;</a>"));break;case"e":$("#center").prepend('<div style="border: 1px solid #C3C4C4; padding-left: 15px; padding-top: 11px; overflow: hidden; width: 423px;"><img style="float:left; margin: -12px 12px 0 0;" src="http://images.bestbuy.com/BestBuy_US/en_US/images/test/2013/02/tvCatPMLearningContent/ICN-SPOT.png"> <span style="font:bold 18px Arial,Helvetica,sans-serif !important; color:#49494A; padding:6px 0 0 !important; float:left; ">Should I choose</span><br /> <a style="-moz-font-feature-settings: normal !important;-moz-font-language-override: normal !important;color: #085EB9 !important;font-family: Arial,Verdana,sans-serif !important;font-size: 16px !important;font-size-adjust: none !important;font-stretch: normal !important;font-style: normal !important;font-variant: normal !important;font-weight: normal !important;line-height: 1.7em;text-decoration: none !important;width: 160px !important; float:left !important;" href="http://www.bestbuy.com/site/Electronics-Promotions/HDTV-Basics/pcmcat197600050000.c?id=pcmcat197600050000"  data-lid="tv_cat_learning_content_pm_test-e">Plasma, LED or LCD?</a> </div>')}this.enable.dodsignup&&"string"==typeof catid&&/pcmcat248000050016/.test(catid)&&this.cDate>=new Date("02/02/2012")&&bby.requires("bby.abt.lightbox.dodSignup"),this.enable.pdpPriceBlock&&this.cDate>=new Date("5/24/2013")&&this.cDate<=new Date("6/11/2013")&&bby.page.isCloud&&$.inArray(bby.page.templateName,["PDG","PDH","PDMO","PDMU","PDS"])>-1&&bby.testCookies.inGroup(["13","14"])&&(u=$("div#price div.priceblock"),m=u.find("div.sale-puck"),h=u.find("div.free-shipping-message"),m.length>0&&h.length>0&&(y=bby.testCookies.getTestVersion({cookie:"testVersion4-2",trackKey:"abTest66",trackValue:"20130529-20130611 PDP Price Block Test Round 2"}),null!=y&&"a"!=y&&bby.requires("bby.abt.pdp.priceBlock",function(){bby.abt.pdp.priceBlock.init(y)})))}},executeDelayedTests:function(){},init:function(){try{if(t.initFired)return;if(t.initFired=!0,t.globalBlocks())return;t.runTests(),t.browserFilteredTests(),bby.event.on("bby.page.ready",t.executeTests())}catch(e){bby.logError(e)}}};t.init(),bby.initNS("bby.abt",t)});