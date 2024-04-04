import{C as _,D as C,F as V,G as w,H as ie,J as ne,K as re,L as se,M as I,Q as oe,R as ae,S as le,T as ue,U as B,V as de,Z as U,a as d,b as f,c as X,d as Y,e as K,f as A,g as E,h as J,i as c,j as u,m as y,n as h,o as p,p as F,q as Q,r as T,t as j,u as o,v,w as G,x as g,y as ee,z as te}from"./chunk-KOXK3WEG.js";var ce=(()=>{let e=class e{constructor(i,r){this.elm=i,this.render=r,this.tooltip=null}onMouseEnter(){this.tooltip=this.render.createElement("div"),this.render.addClass(this.tooltip,"tooltip"),this.render.appendChild(this.elm.nativeElement,this.tooltip),this.render.setProperty(this.tooltip,"innerText",this.tooltipText)}onMouseLeave(){this.render.removeChild(this.elm.nativeElement,this.tooltip),this.tooltip=null}};e.\u0275fac=function(r){return new(r||e)(o(y),o(v))},e.\u0275dir=u({type:e,selectors:[["","learnTooltip",""]],hostBindings:function(r,s){r&1&&V("mouseenter",function(){return s.onMouseEnter()})("mouseleave",function(){return s.onMouseLeave()})},inputs:{tooltipText:"tooltipText"},standalone:!0});let t=e;return t})();var _e=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(v),o(y))},e.\u0275dir=u({type:e});let t=e;return t})(),Ce=(()=>{let e=class e extends _e{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=T(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[g]});let t=e;return t})(),$=new p("");var Te={provide:$,useExisting:F(()=>P),multi:!0};function je(){let t=B()?B().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ge=new p(""),P=(()=>{let e=class e extends _e{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!je())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(v),o(y),o(Ge,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&V("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[I([Te]),g]});let t=e;return t})();var Be=new p(""),Ue=new p("");function Ve(t){return t!=null}function De(t){return oe(t)?X(t):t}function be(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Me(t,e){return e.map(n=>n(t))}function Re(t){return!t.validate}function Ae(t){return t.map(e=>Re(e)?e:n=>e.validate(n))}function He(t){if(!t)return null;let e=t.filter(Ve);return e.length==0?null:function(n){return be(Me(n,e))}}function Ee(t){return t!=null?He(Ae(t)):null}function Le(t){if(!t)return null;let e=t.filter(Ve);return e.length==0?null:function(n){let i=Me(n,e).map(De);return K(i).pipe(Y(be))}}function Fe(t){return t!=null?Le(Ae(t)):null}function he(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function We(t){return t._rawValidators}function $e(t){return t._rawAsyncValidators}function R(t){return t?Array.isArray(t)?t:[t]:[]}function O(t,e){return Array.isArray(t)?t.includes(e):t===e}function fe(t,e){let n=R(e);return R(t).forEach(r=>{O(n,r)||n.push(r)}),n}function pe(t,e){return R(e).filter(n=>!O(t,n))}var x=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ee(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Fe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},H=class extends x{get formDirective(){return null}get path(){return null}},M=class extends x{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Pt=f(d({},qe),{"[class.ng-submitted]":"isSubmitted"}),we=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(M,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&te("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[g]});let t=e;return t})();var D="VALID",N="INVALID",m="PENDING",b="DISABLED";function ze(t){return(k(t)?t.validators:t)||null}function Ze(t){return Array.isArray(t)?Ee(t):t||null}function Xe(t,e){return(k(e)?e.asyncValidators:t)||null}function Ye(t){return Array.isArray(t)?Fe(t):t||null}function k(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var W=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===N}get pending(){return this.status==m}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(fe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(fe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(pe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}hasValidator(e){return O(this._rawValidators,e)}hasAsyncValidator(e){return O(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=m,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(i=>{i.disable(f(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(i=>{i.enable(f(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===m)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=m,this._hasOwnPendingAsyncValidator=!0;let n=De(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(m)?m:this._anyControlsHaveStatus(N)?N:D}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){k(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ze(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ye(this._rawAsyncValidators)}};var Ie=new p("CallSetDisabledState",{providedIn:"root",factory:()=>q}),q="always";function Ke(t,e){return[...e.path,t]}function Je(t,e,n=q){et(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),tt(t,e),nt(t,e),it(t,e),Qe(t,e)}function ge(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Qe(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function et(t,e){let n=We(t);e.validator!==null?t.setValidators(he(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=$e(t);e.asyncValidator!==null?t.setAsyncValidators(he(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();ge(e._rawValidators,r),ge(e._rawAsyncValidators,r)}function tt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Se(t,e)})}function it(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Se(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Se(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function nt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function rt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function st(t){return Object.getPrototypeOf(t.constructor)===Ce}function ot(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===P?n=s:st(s)?i=s:r=s}),r||i||n||null}function me(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ye(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var at=class extends W{constructor(e=null,n,i){super(ze(n),Xe(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ye(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){me(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){me(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ye(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var lt={provide:M,useExisting:F(()=>z)},ve=Promise.resolve(),z=(()=>{let e=class e extends M{constructor(i,r,s,l,a,Pe){super(),this._changeDetectorRef=a,this.callSetDisabledState=Pe,this.control=new at,this._registered=!1,this.name="",this.update=new A,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=ot(this,l)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),rt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Je(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ve.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&le(r);ve.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Ke(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(o(H,9),o(Be,10),o(Ue,10),o($,10),o(ae,8),o(Ie,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[E.None,"disabled","isDisabled"],model:[E.None,"ngModel","model"],options:[E.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[I([lt]),g,Q]});let t=e;return t})();var ut={provide:$,useExisting:F(()=>Z),multi:!0},Z=(()=>{let e=class e extends Ce{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=T(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&V("input",function(a){return s.onChange(a.target.value)})("blur",function(){return s.onTouched()})},features:[I([ut]),g]});let t=e;return t})();var dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=h({});let t=e;return t})();var Ne=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Ie,useValue:i.callSetDisabledState??q}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=h({imports:[dt]});let t=e;return t})();var Oe=(()=>{let e=class e{constructor(){this.y=G(0),this.x=G(10),this.z=ue(()=>this.y()&&typeof+this.y()=="number"?this.y()*4:0)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=J({type:e,selectors:[["learn-first"]],decls:7,vars:3,consts:[["learnTooltip","",3,"tooltipText"],["type","number",3,"ngModel","ngModelChange"]],template:function(r,s){r&1&&(_(0,"p",0),w(1,"first works!"),C(),_(2,"input",1),se("ngModelChange",function(a){return re(s.y,a)||(s.y=a),a}),C(),_(3,"h1"),w(4),C(),_(5,"h1"),w(6,"Hello from the other side"),C()),r&2&&(ee("tooltipText","first tooltip learnTooltip first dsd dsds dsdsd"),j(2),ne("ngModel",s.y),j(2),ie(s.z()))},dependencies:[ce,P,Z,we,z],styles:["p[_ngcontent-%COMP%]{position:relative}"]});let t=e;return t})();var ht=[{path:"",component:Oe}],xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=h({imports:[U.forChild(ht),U]});let t=e;return t})();var Yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=h({imports:[de,xe,Ne]});let t=e;return t})();export{Yt as FirstModule};
