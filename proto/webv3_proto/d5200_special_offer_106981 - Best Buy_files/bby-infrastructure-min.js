/* UI BUILD: Thursday, May 16 2013 at  1:15:23 PM -- BUILD ID: BRANCH_NAME: release VERSION: 13.09.93 */
/* MD5: bc0d781c804642b7abd1a9c6a55d36d3 */

function fnchooseState(t,i,s,e,r,o){popUp("olspage.jsp?id="+o+"&type=page&pspPrdId="+t+"&pspSkuId="+i+"&cItemId="+s+"&ppId="+e+"&pSkuId="+r+"&pageType=PDPPage","PSP","4","0")}function fnchooseStateExpressLane(t,i,s,e,r,o){var n=t+"&pspPrdId="+i+"&pspSkuId="+s+"&cItemId="+e+"&ppId="+r+"&pSkuId="+o+"&pageType=PDPPage";window.open(n,"CheckDelivery","scrollbars=yes,width=600,height=625")}var bby;bby||(bby={}),bby.infrastructure={analytics:{},decorators:{},operations:{},services:{},forms:{},widgets:{tooltip:{strategies:{}}}},bby.infrastructure.analytics.abstractTracker=function(t,i){var s=t;this.$trackEvent=function(){return s.instance()},this.$trackObjects=i},bby.infrastructure.analytics.abstractTracker.prototype.track=function(t,i){try{return this[t](i)}catch(s){}},bby.infrastructure.decorators.empty=function(){},bby.infrastructure.decorators.empty.prototype.decorate=function(t){return t},bby.infrastructure.forms.abstractField=function(){bby.infrastructure.forms.abstractField.base.call(this),this._onValueChanged=$.observer(),this._onIsValid=$.observer(),this._onInvalid=$.observer(),this.isRequired(!1)},bby.infrastructure.forms.abstractField.prototype={$isValid:function(){return!0},$value:function(t){return this.property("value",t)},isRequired:function(t){return this.property("isRequired",t)},form:function(t){return this.property("form",t)},value:function(t){return $.exists(t)&&this._onValueChanged.notify(),this.$value(t)},$isEmpty:function(){var t=this.$value();return $.isNullOrEmpty(t)||$.isUndefined(t)},isEmpty:function(){return this.$isEmpty()},isValid:function(){var t=this.$isValid(),i=this._isRequired?t:this.isEmpty()||t,s=i?this._onIsValid:this._onInvalid;return s.notify(),i},onValueChanged:function(t,i){return this._onValueChanged.add(t,i)},onIsValid:function(t,i){return this._onIsValid.add(t,i)},onInvalid:function(t,i){return this._onInvalid.add(t,i)}},$.ext(bby.infrastructure.forms.abstractField,$.Class),bby.infrastructure.forms.abstractForm=function(){bby.infrastructure.forms.abstractForm.base.call(this),this._onSubmit=$.observer(),this._fields=$.hash(),this.isRequired(!0)},bby.infrastructure.forms.abstractForm.prototype={$submit:function(){},$isValid:function(){var t=!0;return this._fields.listValues().each(function(i){i.isValid()||(t=!1)}),this._isRequired?t:this.isEmpty()||t},$isEmpty:function(){var t=!0;return this._fields.listValues().each(function(i){i.isEmpty()||(t=!1)}),t},submit:function(){this.isValid()&&(this._onSubmit.notify(),this.$submit())},read:function(){var t=$.hash();return this._fields.each(function(i){t.add(i.key,i.value.value())},this),t.toObject()},write:function(t){var i=$.hash(t);i.each(function(t){var i=this._fields.find(t.key);i.value(t.value)},this)},onSubmit:function(t,i){this._onSubmit.add(t,i)},add:function(t,i){return this._fields.add(t,i.form(this)),this},remove:function(t){return this._fields.remove(t),this},find:function(t){return this._fields.find(t)}},$.ext(bby.infrastructure.forms.abstractForm,bby.infrastructure.forms.abstractField),bby.infrastructure.forms.field=function(t){if(bby.infrastructure.forms.field.base.call(this),!t)throw new Error("bby.infrastructure.forms.field requires a valid dom");this.dom=t},bby.infrastructure.forms.field.prototype={$value:function(t){return $.exists(t)?(this.dom.value=t,this):this.dom.value}},$.ext(bby.infrastructure.forms.field,bby.infrastructure.forms.abstractField),bby.infrastructure.forms.form=function(){bby.infrastructure.forms.form.base.call(this)},$.ext(bby.infrastructure.forms.form,bby.infrastructure.forms.abstractForm),bby.infrastructure.operations.entity=function(t){this.set("id",t)},bby.infrastructure.operations.entity.prototype={id:function(){return this.get("id")}},$.ext(bby.infrastructure.operations.entity,$.Class),bby.infrastructure.services.abstractService=function(t,i,s,e){bby.infrastructure.services.abstractService.base.call(this),this.verb(t),this.uri(i),this.returnType(s),this.contentType(e),this.$onComplete=$.observer(),this.$onSuccess=$.observer(),this.$onError=$.observer()},bby.infrastructure.services.abstractService.prototype={$call:function(){},id:function(t){return this.property("id",t)},verb:function(t){return this.property("verb",t)},uri:function(t){return this.property("uri",t)},returnType:function(t){return this.property("returnType",t)},contentType:function(t){return this.property("contentType",t)},onComplete:function(t,i){return this.$onComplete.add(t,i),this},onSuccess:function(t,i){return this.$onSuccess.add(t,i),this},onError:function(t,i){return this.$onError.add(t,i),this},call:function(t){return this.$call(t),this}},$.ext(bby.infrastructure.services.abstractService,$.Class),bby.infrastructure.services.restService=function(t,i,s,e){bby.infrastructure.services.restService.base.call(this,t,i,s,e)},bby.infrastructure.services.restService.prototype={$call:function(t){$.ajax({type:this._verb,url:this._uri,data:t&&t.toObject?t.toObject():t,dataType:this._returnType,contentType:this._contentType,success:function(){this.$onSuccess.notify.apply(this.$onSuccess,arguments),this.$onComplete.notify.apply(this.$onComplete,arguments)},error:function(){this.$onError.notify.apply(this.$onError,arguments),this.$onComplete.notify.apply(this.$onComplete,arguments)},context:this})}},$.ext(bby.infrastructure.services.restService,bby.infrastructure.services.abstractService),bby.infrastructure.services.service=function(t,i,s){bby.infrastructure.services.service.base.call(this,t,i,s)},bby.infrastructure.services.service.prototype={$call:function(t){$.ajax({type:this._verb,url:this._uri,data:t&&t.toObject?t.toObject():t,dataType:this._returnType,success:function(){this.$onSuccess.notify.apply(this.$onSuccess,arguments),this.$onComplete.notify.apply(this.$onComplete,arguments)},error:function(){this.$onError.notify.apply(this.$onError,arguments),this.$onComplete.notify.apply(this.$onComplete,arguments)},context:this})}},$.ext(bby.infrastructure.services.service,bby.infrastructure.services.abstractService),bby.infrastructure.widgets.asyncContent=function(t){this._dom=t,this._service=$.service().onSuccess(function(t){$(this._dom).html(t)},this).onError(function(){this.onError()},this)},bby.infrastructure.widgets.asyncContent.prototype={load:function(t,i){this._service.uri(t).call(i)},onSuccess:function(t,i){this._service.onSuccess(t,i)},onError:function(t,i){this._service.onError(t,i)}},$.ext(bby.infrastructure.widgets.asyncContent,$.Class),bby.infrastructure.widgets.collapsiblePanel=function(t,i,s){bby.infrastructure.widgets.collapsiblePanel.base.call(this),this._activator=t,this._panel=i,this.onActive(function(){this.open()},this),this.onInactive(function(){this.close()},this),$.evt.add(this._activator,"click",this.invoke,this),this.isActive(s)},bby.infrastructure.widgets.collapsiblePanel.prototype={open:function(){var t="css-open",i="css-closed",s=this;return $(this._panel).addClass(t).removeClass(i).animate({height:"show"},300,function(){s.redraw()}),$(this._activator).addClass(t).removeClass(i),this},close:function(){var t="css-open",i="css-closed",s=this;return $(this._panel).addClass(i).removeClass(t).animate({height:"hide"},300,function(){s.redraw()}),$(this._activator).addClass(i).removeClass(t),this},redraw:function(){var t=this._panel,i=this._panel.style.display;return t.style.display="none",t.offsetHeight,t.style.display=i,this}},$.ext(bby.infrastructure.widgets.collapsiblePanel,$.toggle.Class),bby.infrastructure.widgets.file=function(t,i,s){bby.infrastructure.widgets.file.base.call(this),this._tab=t,this._content=i;var e="css-active";this.onActive(function(){$(this._tab).addClass(e),$(this._content).addClass(e)},this),this.onInactive(function(){$(this._tab).removeClass(e),$(this._content).removeClass(e)},this),$.evt.add(t,"mouseup",this.invoke,this),t.toggle=this,this.isActive(s)},$.ext(bby.infrastructure.widgets.file,$.toggle.Class),bby.infrastructure.widgets.fileCabinet=function(){bby.infrastructure.widgets.fileCabinet.base.call(this),this.mutuallyExclusive()},$.ext(bby.infrastructure.widgets.fileCabinet,$.toggleset.Class),bby.infrastructure.widgets.tablessFile=function(t,i){bby.infrastructure.widgets.tablessFile.base.call(this),this._content=t;var s="css-active",e="css-hide";this.onActive(function(){$(this._content).addClass(s),$(this._content).removeClass(e)},this),this.onInactive(function(){$(this._content).removeClass(s),$(this._content).addClass(e)},this),this.isActive(i)},$.ext(bby.infrastructure.widgets.tablessFile,$.toggle.Class),bby.infrastructure.widgets.lightbox=function(){},bby.infrastructure.widgets.lightbox.prototype={open:function(t){var i=$.isObject(t)?t:{html:t,overlayClose:!1,scrolling:!0,fixed:!1,opacity:.9,iframe:!1};return $.colorbox(i),this},close:function(){return $.colorbox.close(),this},sizeTo:function(t,i){var s=t||$.colorbox.width,e=i||$.colorbox.height;return $.colorbox.resize({innerWidth:s,innerHeight:e}),this}},bby.infrastructure.widgets.pos=function(t){this._v=0,this._t=t||0},bby.infrastructure.widgets.pos.prototype={add:function(t){var i=parseFloat(t);return isNaN(i)?this:(this._v+=i,this)},subtract:function(t){var i=parseFloat(t);return isNaN(i)?this:(this._v-=i,this)},subtotal:function(){return $.money(this._v)},tax:function(){return $.money(this._v).multiply(this._t)},total:function(){return this.subtotal().add(this.tax())},clear:function(){this._v=0}},bby.infrastructure.widgets.smartImage=function(t){this.dom=t},bby.infrastructure.widgets.smartImage.fitTo=function(t,i,s){var e=s?s:document;return $(e).find(".bby-smartImage").each(function(){new bby.infrastructure.widgets.smartImage(this).fitTo(t,i)}),this},bby.infrastructure.widgets.smartImage.prototype.fitTo=function(t,i){this._fitTo(t,i),this._fitTo(t,i)},bby.infrastructure.widgets.smartImage.prototype._fitTo=function(t,i){var s,e,r=this.dom,o=parseInt(r.height),n=parseInt(r.width),a=0==n?1:o/n,u=0==t?1:i/t,c=a>u,h=u>a,f=a==u,d=$.coord(t,i).toPixel(),l=0,b=0;return h&&($.ku.style.set(r,{width:d.x(),height:"auto",margin:"auto"}),l=t,b=t*a),c&&($.ku.style.set(r,{width:"auto",height:d.y(),margin:"auto"}),l=i/a,b=i),f&&($.ku.style.set(r,{width:d.x(),height:d.y(),margin:"auto"}),l=t,b=i),s=l>t,e=b>i,s&&$.ku.style.set(r,{width:d.x(),height:"auto",margin:"auto"}),e&&$.ku.style.set(r,{width:"auto",height:d.y(),margin:"auto"}),this},bby.infrastructure.widgets.statefulElement=function(t){this.dom=t,this._states=$.hash()},bby.infrastructure.widgets.statefulElement.prototype={add:function(t,i){return this._states.add(t,i),this},remove:function(t){return this._states.remove(t),this},state:function(t){var i,s=this._states.findValue(t),e=this.dom,r=$(e),o=this.__className;o&&r.removeClass(o),r.addClass(s.className),this.__className=s.className;for(i in s)try{if(/classname/i.test(i))continue;e[i]=s[i]}catch(n){continue}return this}},bby.infrastructure.widgets.tooltip.anchorTip=function(t,i){bby.infrastructure.widgets.tooltip.anchorTip.base.call(this),this.dom(t),this._tip=(new bby.infrastructure.widgets.tooltip.pointing).overlap(5).center().tooltipTemplate(i),this._place="rightOf",this._isHoverAnchor=!1,this._isHoverTip=!1,$.evt.add(t,"click",function(){this.toggle()},this),$.evt.add(i,"click",function(){this.toggle()},this)},bby.infrastructure.widgets.tooltip.anchorTip.prototype={dom:function(t){return this.property("dom",t)},anchorStrategy:function(t){return this.set("anchorStrategy",t)},pointerStrategy:function(t){return this.set("pointerStrategy",t)},tipStrategy:function(t){return this.set("tipStrategy",t)},timeoutid:function(t){return this.property("timeoutid",t)},onActive:function(t,i){return this._tip.onActive(t,i),this},onInactive:function(t,i){return this._tip.onInactive(t,i),this},above:function(){return this._place="above",this},below:function(){return this._place="below",this},leftOf:function(){return this._place="leftOf",this},rightOf:function(){return this._place="rightOf",this},show:function(){return this._tip.show()[this._place](this.dom()),this._isActive=!0,this},hide:function(){return this._tip.hide(),this._isActive=!1,this},toggle:function(){return this._isActive?this.hide():this.show()},hoverAnchor:function(){return this._isHoverAnchor?this:(this._isHoverAnchor=!0,this.anchorStrategy(new bby.infrastructure.widgets.tooltip.strategies.hover(this.dom(),this)))},clickAnchor:function(){return $.exists(this._anchorStrategy)?(this._anchorStrategy.clear(),this._isHoverAnchor=!1,this):this},hoverTip:function(){return this._isHoverTip?this:(this._isHoverTip=!0,this.pointerStrategy(new bby.infrastructure.widgets.tooltip.strategies.hover(this._tip.pointer().dom(),this)),this.tipStrategy(new bby.infrastructure.widgets.tooltip.strategies.hover(this._tip.tooltip().dom(),this)),this)},clickTip:function(){return!$.exists(this._pointerStrategy)||$.exists(this._tipStrategy)?this:(this._pointerStrategy.clear(),this._tipStrategy.clear(),this._isHoverTip=!1,this)}},$.ext(bby.infrastructure.widgets.tooltip.anchorTip,$.Class),bby.infrastructure.widgets.tooltip.context=function(t){bby.infrastructure.widgets.tooltip.context.base.call(this),this.dom(t)},bby.infrastructure.widgets.tooltip.context.prototype={dom:function(t){return this.property("dom",t)},height:function(){return $.coord(0,this.dims().y())},width:function(){return $.coord(this.dims().x(),0)},dims:function(){return $.coord.parse($.findOuterDims(this._dom))},offset:function(){return $.coord.parse($.findOffset(this._dom))},bottomRight:function(){return this.offset().add(this.dims())}},$.ext(bby.infrastructure.widgets.tooltip.context,$.Class),bby.infrastructure.widgets.tooltip.basic=function(t){var i=t||$.create({div:{"class":"bby-tooltip mod-helptip",style:"position:absolute;"}});this._pinner=$.pinner(i),this._onActive=$.observer(),this._onInactive=$.observer(),this.hide(),document.body.appendChild(i),bby.infrastructure.widgets.tooltip.basic.base.call(this,i)},bby.infrastructure.widgets.tooltip.basic.prototype={template:function(t){return $(t).css({position:"absolute",display:"none"}),document.body.removeChild(this.dom()),document.body.appendChild(this.dom(t).dom()),this._pinner=$.pinner(t),this},onActive:function(t,i){return this._onActive.add(t,i),this},onInactive:function(t,i){return this._onInactive.add(t,i),this},show:function(t){return $(this.dom()).show().html(t),this._onActive.notify(),this},hide:function(){return $(this.dom()).hide(),this._onInactive.notify(),this},to:function(t){return this._pinner.to(t),this},destroy:function(){return document.body.removeChild(this.$dom),null}},$.ext(bby.infrastructure.widgets.tooltip.basic,bby.infrastructure.widgets.tooltip.context),bby.infrastructure.widgets.tooltip.pointing=function(t,i){bby.infrastructure.widgets.tooltip.pointing.base.call(this);var s=t||(new bby.infrastructure.widgets.tooltip.basic).template($.create({div:{"class":"bby-tooltip-pointer mod-helptip-pointer",style:"position:absolute;"}})).hide(),e=i||(new bby.infrastructure.widgets.tooltip.basic).hide();this.pointer(s).tooltip(e).overlap(0).leftJustify()},bby.infrastructure.widgets.tooltip.pointing.prototype={pointer:function(t){return this.property("pointer",t)},tooltip:function(t){return this.property("tooltip",t)},context:function(t){var i=$.exists(t)?new bby.infrastructure.widgets.tooltip.context(t):t;return this.property("context",i)},onActive:function(t,i){return this._tooltip.onActive(t,i),this},onInactive:function(t,i){return this._tooltip.onInactive(t,i),this},overlap:function(t){return this.property("overlap",t)},strategy:function(t){return this.property("strategy",t)},pointerTemplate:function(t){return $(t).addClass("bby-tooltip-pointer mod-tooltip-pointer"),this.pointer().template(t),this},tooltipTemplate:function(t){return $(t).addClass("bby-tooltip css-tooltip"),this.tooltip().template(t),this},center:function(){return this.strategy(new bby.infrastructure.widgets.tooltip.strategies.center(this))},leftJustify:function(){return this.strategy(new bby.infrastructure.widgets.tooltip.strategies.leftJustify(this))},rightJustify:function(){return this.strategy(new bby.infrastructure.widgets.tooltip.strategies.rightJustify(this))},show:function(t){return this._pointer.show(),this._tooltip.show(t),this},hide:function(){return this._pointer.hide(),this._tooltip.hide(),this},above:function(t){return this.strategy().above(t),this._setClass("above"),this},below:function(t){return this.strategy().below(t),this._setClass("below"),this},leftOf:function(t){return this.strategy().leftOf(t),this._setClass("leftOf"),this},rightOf:function(t){return this.strategy().rightOf(t),this._setClass("rightOf"),this},_setClass:function(t){var i,s="css-{0}",e=["above","below","leftOf","rightOf"],r=$(this._pointer.dom());for(i in e)r.removeClass($.str.format(s,e[i]));r.addClass($.str.format(s,t))},destroy:function(){return this.pointer.destroy(),this.tooltip.destroy(),null}},$.ext(bby.infrastructure.widgets.tooltip.pointing,$.Class),bby.infrastructure.widgets.tooltip.strategies.abstractStrategy=function(t,i){this.$offset=0,this.$multiplier=i,this._tooltip=t},bby.infrastructure.widgets.tooltip.strategies.abstractStrategy.prototype={$above:function(){},$below:function(){},$leftOf:function(){},$rightOf:function(){},above:function(t){var i=this._tooltip,s=i.context(t).context(),e=i.pointer(),r=i.tooltip();return this.$offset=i.overlap(),this.$above(s,e,r),this},below:function(t){var i=this._tooltip,s=i.context(t).context(),e=i.pointer(),r=i.tooltip();return this.$offset=i.overlap(),this.$below(s,e,r),this},leftOf:function(t){var i=this._tooltip,s=i.context(t).context(),e=i.pointer(),r=i.tooltip();return this.$offset=i.overlap(),this.$leftOf(s,e,r),this},rightOf:function(t){var i=this._tooltip,s=i.context(t).context(),e=i.pointer(),r=i.tooltip();return this.$offset=i.overlap(),this.$rightOf(s,e,r),this}},$.ext(bby.infrastructure.widgets.tooltip.strategies.abstractStrategy,$.Class),bby.infrastructure.widgets.tooltip.strategies.center=function(t){bby.infrastructure.widgets.tooltip.strategies.center.base.call(this,t,.5)},bby.infrastructure.widgets.tooltip.strategies.center.prototype={$above:function(t,i,s){return i.to(t.offset().subtract(i.height()).add($.coord(t.dims().subtract(i.dims()).x()*this.$multiplier,0))),s.to(i.offset().subtract(s.height()).add($.coord(0,this.$offset)).add($.coord(i.dims().subtract(s.dims()).x()*this.$multiplier,0))),this},$below:function(t,i,s){return i.to(t.offset().add(t.height()).add($.coord(t.dims().subtract(i.dims()).x()*this.$multiplier,0))),s.to(i.offset().add(i.height()).subtract($.coord(0,this.$offset)).add($.coord(i.dims().subtract(s.dims()).x()*this.$multiplier,0))),this},$leftOf:function(t,i,s){return i.to(t.offset().subtract(i.width()).add($.coord(0,t.dims().subtract(i.dims()).y()*this.$multiplier))),s.to(i.offset().subtract(s.width()).add($.coord(this.$offset,0)).add($.coord(0,i.dims().subtract(s.dims()).y()*this.$multiplier))),this},$rightOf:function(t,i,s){return i.to(t.offset().add(t.width()).add($.coord(0,t.dims().subtract(i.dims()).y()*this.$multiplier))),s.to(i.offset().add(i.width()).subtract($.coord(this.$offset,0)).add($.coord(0,i.dims().subtract(s.dims()).y()*this.$multiplier))),this}},$.ext(bby.infrastructure.widgets.tooltip.strategies.center,bby.infrastructure.widgets.tooltip.strategies.abstractStrategy),bby.infrastructure.widgets.tooltip.strategies.hover=function(t,i){this._mouseOver=$.evt.add(t,"mouseover",function(){$.exists(i.timeoutid())&&clearTimeout(i.timeoutid()),i.show()},this),this._mouseOut=$.evt.add(t,"mouseout",function(){i.timeoutid(setTimeout(function(){i.hide()},500))},this)},bby.infrastructure.widgets.tooltip.strategies.hover.prototype={clear:function(){$.evt.remove(this._mouseOver),$.evt.remove(this._mouseOut)}},bby.infrastructure.widgets.tooltip.strategies.leftJustify=function(t){bby.infrastructure.widgets.tooltip.strategies.leftJustify.base.call(this,t,0)},bby.infrastructure.widgets.tooltip.strategies.leftJustify.prototype={$above:function(t,i,s){return i.to(t.offset().subtract(i.height()).add($.coord(this.$offset,0)).add($.coord(t.dims().subtract(i.dims()).x()*this.$multiplier,0))),s.to(i.offset().subtract(s.height()).add($.coord(-this.$offset,this.$offset)).add($.coord(i.dims().subtract(s.dims()).x()*this.$multiplier,0))),this},$below:function(t,i,s){return i.to(t.offset().add(t.height()).add($.coord(this.$offset,0)).add($.coord(t.dims().subtract(i.dims()).x()*this.$multiplier,0))),s.to(i.offset().add(i.height()).subtract($.coord(this.$offset,this.$offset)).add($.coord(i.dims().subtract(s.dims()).x()*this.$multiplier,0))),this},$leftOf:function(t,i,s){return i.to(t.offset().subtract(i.width()).add($.coord(0,this.$offset)).add($.coord(0,t.dims().subtract(i.dims()).y()*this.$multiplier))),s.to(i.offset().subtract(s.width()).add($.coord(this.$offset,-this.$offset)).add($.coord(0,i.dims().subtract(s.dims()).y()*this.$multiplier))),this},$rightOf:function(t,i,s){return i.to(t.offset().add(t.width()).add($.coord(0,this.$offset)).add($.coord(0,t.dims().subtract(i.dims()).y()*this.$multiplier))),s.to(i.offset().add(i.width()).subtract($.coord(this.$offset,this.$offset)).add($.coord(0,i.dims().subtract(s.dims()).y()*this.$multiplier))),this}},$.ext(bby.infrastructure.widgets.tooltip.strategies.leftJustify,bby.infrastructure.widgets.tooltip.strategies.abstractStrategy),bby.infrastructure.widgets.tooltip.strategies.rightJustify=function(t){bby.infrastructure.widgets.tooltip.strategies.rightJustify.base.call(this,t,1)},bby.infrastructure.widgets.tooltip.strategies.rightJustify.prototype={$above:function(t,i,s){return i.to(t.offset().subtract(i.height()).add($.coord(-this.$offset,0)).add($.coord(t.dims().subtract(i.dims()).x()*this.$multiplier,0))),s.to(i.offset().subtract(s.height()).add($.coord(this.$offset,this.$offset)).add($.coord(i.dims().subtract(s.dims()).x()*this.$multiplier,0))),this},$below:function(t,i,s){return i.to(t.offset().add(t.height()).add($.coord(-this.$offset,0)).add($.coord(t.dims().subtract(i.dims()).x()*this.$multiplier,0))),s.to(i.offset().add(i.height()).add($.coord(this.$offset,-this.$offset)).add($.coord(i.dims().subtract(s.dims()).x()*this.$multiplier,0))),this},$leftOf:function(t,i,s){return i.to(t.offset().subtract(i.width()).add($.coord(0,-this.$offset)).add($.coord(0,t.dims().subtract(i.dims()).y()*this.$multiplier))),s.to(i.offset().subtract(s.width()).add($.coord(this.$offset,this.$offset)).add($.coord(0,i.dims().subtract(s.dims()).y()*this.$multiplier))),this},$rightOf:function(t,i,s){return i.to(t.offset().add(t.width()).add($.coord(0,-this.$offset)).add($.coord(0,t.dims().subtract(i.dims()).y()*this.$multiplier))),s.to(i.offset().add(i.width()).add($.coord(-this.$offset,this.$offset)).add($.coord(0,i.dims().subtract(s.dims()).y()*this.$multiplier))),this}},$.ext(bby.infrastructure.widgets.tooltip.strategies.rightJustify,bby.infrastructure.widgets.tooltip.strategies.abstractStrategy);