"use strict";(self.webpackChunkportafolio_dev=self.webpackChunkportafolio_dev||[]).push([[95],{95:(bn,mt,d)=>{d.d(mt,{Fj:()=>S,qu:()=>Vn,NI:()=>M,u:()=>ie,cw:()=>A,sg:()=>R,u5:()=>Dn,Fd:()=>ae,qQ:()=>le,JJ:()=>Pe,JL:()=>Te,F:()=>j,wV:()=>ee,UX:()=>An,kI:()=>Gt,_Y:()=>Xe});var s=d(4946),de=d(6814),_t=d(7715),yt=d(5592),vt=d(7453),Ct=d(4829),Vt=d(4564),Dt=d(8251),At=d(7400),Mt=d(2714),Et=d(7398);let he=(()=>{var n;class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(s.Qsj),s.Y36(s.SBq))},n.\u0275dir=s.lG2({type:n}),e})(),y=(()=>{var n;class e extends he{}return(n=e).\u0275fac=function(){let r;return function(i){return(r||(r=s.n5z(n)))(i||n)}}(),n.\u0275dir=s.lG2({type:n,features:[s.qOj]}),e})();const f=new s.OlP("NgValueAccessor"),Ft={provide:f,useExisting:(0,s.Gpc)(()=>S),multi:!0},St=new s.OlP("CompositionEventMode");let S=(()=>{var n;class e extends he{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ot(){const n=(0,de.q)()?(0,de.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(s.Qsj),s.Y36(s.SBq),s.Y36(St,8))},n.\u0275dir=s.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,i){1&t&&s.NdJ("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},features:[s._Bn([Ft]),s.qOj]}),e})();function p(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function pe(n){return null!=n&&"number"==typeof n.length}const u=new s.OlP("NgValidators"),g=new s.OlP("NgAsyncValidators"),Nt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Gt{static min(e){return ge(e)}static max(e){return me(e)}static required(e){return function _e(n){return p(n.value)?{required:!0}:null}(e)}static requiredTrue(e){return function ye(n){return!0===n.value?null:{required:!0}}(e)}static email(e){return function ve(n){return p(n.value)||Nt.test(n.value)?null:{email:!0}}(e)}static minLength(e){return function Ce(n){return e=>p(e.value)||!pe(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function Ve(n){return e=>pe(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return function De(n){if(!n)return N;let e,r;return"string"==typeof n?(r="","^"!==n.charAt(0)&&(r+="^"),r+=n,"$"!==n.charAt(n.length-1)&&(r+="$"),e=new RegExp(r)):(r=n.toString(),e=n),t=>{if(p(t.value))return null;const i=t.value;return e.test(i)?null:{pattern:{requiredPattern:r,actualValue:i}}}}(e)}static nullValidator(e){return null}static compose(e){return Fe(e)}static composeAsync(e){return Oe(e)}}function ge(n){return e=>{if(p(e.value)||p(n))return null;const r=parseFloat(e.value);return!isNaN(r)&&r<n?{min:{min:n,actual:e.value}}:null}}function me(n){return e=>{if(p(e.value)||p(n))return null;const r=parseFloat(e.value);return!isNaN(r)&&r>n?{max:{max:n,actual:e.value}}:null}}function N(n){return null}function Ae(n){return null!=n}function Me(n){return(0,s.QGY)(n)?(0,_t.D)(n):n}function be(n){let e={};return n.forEach(r=>{e=null!=r?{...e,...r}:e}),0===Object.keys(e).length?null:e}function Ee(n,e){return e.map(r=>r(n))}function we(n){return n.map(e=>function xt(n){return!n.validate}(e)?e:r=>e.validate(r))}function Fe(n){if(!n)return null;const e=n.filter(Ae);return 0==e.length?null:function(r){return be(Ee(r,e))}}function L(n){return null!=n?Fe(we(n)):null}function Oe(n){if(!n)return null;const e=n.filter(Ae);return 0==e.length?null:function(r){return function bt(...n){const e=(0,Vt.jO)(n),{args:r,keys:t}=(0,vt.D)(n),i=new yt.y(o=>{const{length:a}=r;if(!a)return void o.complete();const l=new Array(a);let h=a,V=a;for(let _=0;_<a;_++){let ce=!1;(0,Ct.Xf)(r[_]).subscribe((0,Dt.x)(o,Mn=>{ce||(ce=!0,V--),l[_]=Mn},()=>h--,void 0,()=>{(!h||!ce)&&(V||o.next(t?(0,Mt.n)(t,l):l),o.complete())}))}});return e?i.pipe((0,At.Z)(e)):i}(Ee(r,e).map(Me)).pipe((0,Et.U)(be))}}function Y(n){return null!=n?Oe(we(n)):null}function Se(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Ne(n){return n._rawValidators}function Ge(n){return n._rawAsyncValidators}function q(n){return n?Array.isArray(n)?n:[n]:[]}function G(n,e){return Array.isArray(n)?n.includes(e):n===e}function xe(n,e){const r=q(e);return q(n).forEach(i=>{G(r,i)||r.push(i)}),r}function Be(n,e){return q(e).filter(r=>!G(n,r))}class Ie{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=L(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Y(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return!!this.control&&this.control.hasError(e,r)}getError(e,r){return this.control?this.control.getError(e,r):null}}class c extends Ie{get formDirective(){return null}get path(){return null}}class m extends Ie{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class ke{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Pe=(()=>{var n;class e extends ke{constructor(t){super(t)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(m,2))},n.\u0275dir=s.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){2&t&&s.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},features:[s.qOj]}),e})(),Te=(()=>{var n;class e extends ke{constructor(t){super(t)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(c,10))},n.\u0275dir=s.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,i){2&t&&s.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},features:[s.qOj]}),e})();const b="VALID",B="INVALID",D="PENDING",E="DISABLED";function z(n){return(I(n)?n.validators:n)||null}function J(n,e){return(I(e)?e.asyncValidators:n)||null}function I(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function Ue(n,e,r){const t=n.controls;if(!(e?Object.keys(t):t).length)throw new s.vHH(1e3,"");if(!t[r])throw new s.vHH(1001,"")}function je(n,e,r){n._forEachChild((t,i)=>{if(void 0===r[i])throw new s.vHH(1002,"")})}class k{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===B}get pending(){return this.status==D}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(xe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const r=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(t=>{t.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:r}),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){const r=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(t=>{t.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:r}),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===D)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;const r=Me(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(!1!==r.emitEvent)}get(e){let r=e;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((t,i)=>t&&t._find(i),this)}getError(e,r){const t=r?this.get(r):this;return t&&t.errors?t.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new s.vpe,this.statusChanges=new s.vpe}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(B)?B:b}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){I(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function Pt(n){return Array.isArray(n)?L(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function Tt(n){return Array.isArray(n)?Y(n):n||null}(this._rawAsyncValidators)}}class A extends k{constructor(e,r,t){super(z(r),J(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,r){return this.controls[e]?this.controls[e]:(this.controls[e]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(e,r,t={}){this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(e,r,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],r&&this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,r={}){je(this,0,e),Object.keys(e).forEach(t=>{Ue(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){null!=e&&(Object.keys(e).forEach(t=>{const i=this.controls[t];i&&i.patchValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e={},r={}){this._forEachChild((t,i)=>{t.reset(e[i],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(e,r,t)=>(e[t]=r.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(r,t)=>!!t._syncPendingControls()||r);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(r=>{const t=this.controls[r];t&&e(t,r)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[r,t]of Object.entries(this.controls))if(this.contains(r)&&e(t))return!0;return!1}_reduceValue(){return this._reduceChildren({},(r,t,i)=>((t.enabled||this.disabled)&&(r[i]=t.value),r))}_reduceChildren(e,r){let t=e;return this._forEachChild((i,o)=>{t=r(t,i,o)}),t}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}class Re extends A{}const v=new s.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>w}),w="always";function F(n,e,r=w){Q(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===r)&&e.valueAccessor.setDisabledState?.(n.disabled),function Ut(n,e){e.valueAccessor.registerOnChange(r=>{n._pendingValue=r,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Le(n,e)})}(n,e),function Rt(n,e){const r=(t,i)=>{e.valueAccessor.writeValue(t),i&&e.viewToModelUpdate(t)};n.registerOnChange(r),e._registerOnDestroy(()=>{n._unregisterOnChange(r)})}(n,e),function jt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Le(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Ht(n,e){if(e.valueAccessor.setDisabledState){const r=t=>{e.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(r),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(r)})}}(n,e)}function T(n,e,r=!0){const t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),U(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function H(n,e){n.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function Q(n,e){const r=Ne(n);null!==e.validator?n.setValidators(Se(r,e.validator)):"function"==typeof r&&n.setValidators([r]);const t=Ge(n);null!==e.asyncValidator?n.setAsyncValidators(Se(t,e.asyncValidator)):"function"==typeof t&&n.setAsyncValidators([t]);const i=()=>n.updateValueAndValidity();H(e._rawValidators,i),H(e._rawAsyncValidators,i)}function U(n,e){let r=!1;if(null!==n){if(null!==e.validator){const i=Ne(n);if(Array.isArray(i)&&i.length>0){const o=i.filter(a=>a!==e.validator);o.length!==i.length&&(r=!0,n.setValidators(o))}}if(null!==e.asyncValidator){const i=Ge(n);if(Array.isArray(i)&&i.length>0){const o=i.filter(a=>a!==e.asyncValidator);o.length!==i.length&&(r=!0,n.setAsyncValidators(o))}}}const t=()=>{};return H(e._rawValidators,t),H(e._rawAsyncValidators,t),r}function Le(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ye(n,e){Q(n,e)}function qe(n,e){n._syncPendingControls(),e.forEach(r=>{const t=r.control;"submit"===t.updateOn&&t._pendingChange&&(r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}const $t={provide:c,useExisting:(0,s.Gpc)(()=>j)},O=(()=>Promise.resolve())();let j=(()=>{var n;class e extends c{constructor(t,i,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new s.vpe,this.form=new A({},L(t),Y(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){O.then(()=>{const i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),F(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){O.then(()=>{const i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){O.then(()=>{const i=this._findContainer(t.path),o=new A({});Ye(o,t),i.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){O.then(()=>{const i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){O.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,qe(this.form,this._directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(u,10),s.Y36(g,10),s.Y36(v,8))},n.\u0275dir=s.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,i){1&t&&s.NdJ("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s._Bn([$t]),s.qOj]}),e})();function We(n,e){const r=n.indexOf(e);r>-1&&n.splice(r,1)}function $e(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const M=class extends k{constructor(e=null,r,t){super(z(r),J(t,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=$e(e)?e.value:e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){We(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){We(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){$e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};let Xe=(()=>{var n;class e{}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275dir=s.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})();const Zt={provide:f,useExisting:(0,s.Gpc)(()=>ee),multi:!0};let ee=(()=>{var n;class e extends y{writeValue(t){this.setProperty("value",t??"")}registerOnChange(t){this.onChange=i=>{t(""==i?null:parseFloat(i))}}}return(n=e).\u0275fac=function(){let r;return function(i){return(r||(r=s.n5z(n)))(i||n)}}(),n.\u0275dir=s.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,i){1&t&&s.NdJ("input",function(a){return i.onChange(a.target.value)})("blur",function(){return i.onTouched()})},features:[s._Bn([Zt]),s.qOj]}),e})(),Ke=(()=>{var n;class e{}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({}),e})();const te=new s.OlP("NgModelWithFormControlWarning"),nn={provide:c,useExisting:(0,s.Gpc)(()=>R)};let R=(()=>{var n;class e extends c{constructor(t,i,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new s.vpe,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(U(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const i=this.form.get(t.path);return F(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){T(t.control||null,t,!1),function Wt(n,e){const r=n.indexOf(e);r>-1&&n.splice(r,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this.submitted=!0,qe(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const i=t.control,o=this.form.get(t.path);i!==o&&(T(i||null,t),(n=>n instanceof M)(o)&&(F(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const i=this.form.get(t.path);Ye(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const i=this.form.get(t.path);i&&function Lt(n,e){return U(n,e)}(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Q(this.form,this),this._oldForm&&U(this._oldForm,this)}_checkFormPresent(){}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(u,10),s.Y36(g,10),s.Y36(v,8))},n.\u0275dir=s.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,i){1&t&&s.NdJ("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s._Bn([nn]),s.qOj,s.TTD]}),e})();const on={provide:m,useExisting:(0,s.Gpc)(()=>ie)};let ie=(()=>{var n;class e extends m{set isDisabled(t){}constructor(t,i,o,a,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new s.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=function K(n,e){if(!e)return null;let r,t,i;return Array.isArray(e),e.forEach(o=>{o.constructor===S?r=o:function qt(n){return Object.getPrototypeOf(n.constructor)===y}(o)?t=o:i=o}),i||t||r||null}(0,a)}ngOnChanges(t){this._added||this._setUpControl(),function X(n,e){if(!n.hasOwnProperty("model"))return!1;const r=n.model;return!!r.isFirstChange()||!Object.is(e,r.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function P(n,e){return[...e.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return(n=e)._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(s.Y36(c,13),s.Y36(u,10),s.Y36(g,10),s.Y36(f,10),s.Y36(te,8))},n.\u0275dir=s.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[s._Bn([on]),s.qOj,s.TTD]}),e})();function at(n){return"number"==typeof n?n:parseFloat(n)}let C=(()=>{var n;class e{constructor(){this._validator=N}ngOnChanges(t){if(this.inputName in t){const i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):N,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return null!=t}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275dir=s.lG2({type:n,features:[s.TTD]}),e})();const fn={provide:u,useExisting:(0,s.Gpc)(()=>ae),multi:!0};let ae=(()=>{var n;class e extends C{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=t=>at(t),this.createValidator=t=>me(t)}}return(n=e).\u0275fac=function(){let r;return function(i){return(r||(r=s.n5z(n)))(i||n)}}(),n.\u0275dir=s.lG2({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,i){2&t&&s.uIk("max",i._enabled?i.max:null)},inputs:{max:"max"},features:[s._Bn([fn]),s.qOj]}),e})();const pn={provide:u,useExisting:(0,s.Gpc)(()=>le),multi:!0};let le=(()=>{var n;class e extends C{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=t=>at(t),this.createValidator=t=>ge(t)}}return(n=e).\u0275fac=function(){let r;return function(i){return(r||(r=s.n5z(n)))(i||n)}}(),n.\u0275dir=s.lG2({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,i){2&t&&s.uIk("min",i._enabled?i.min:null)},inputs:{min:"min"},features:[s._Bn([pn]),s.qOj]}),e})(),ft=(()=>{var n;class e{}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[Ke]}),e})();class pt extends k{constructor(e,r,t){super(z(r),J(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,r={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}insert(e,r,t={}){this.controls.splice(e,0,r),this._registerControl(r),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,r={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:r.emitEvent})}setControl(e,r,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),r&&(this.controls.splice(i,0,r),this._registerControl(r)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,r={}){je(this,0,e),e.forEach((t,i)=>{Ue(this,!1,i),this.at(i).setValue(t,{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){null!=e&&(e.forEach((t,i)=>{this.at(i)&&this.at(i).patchValue(t,{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e=[],r={}){this._forEachChild((t,i)=>{t.reset(e[i],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(r=>r._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((r,t)=>!!t._syncPendingControls()||r,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((r,t)=>{e(r,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(r=>r.enabled&&e(r))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}}function gt(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}let Vn=(()=>{var n;class e{constructor(){this.useNonNullable=!1}get nonNullable(){const t=new e;return t.useNonNullable=!0,t}group(t,i=null){const o=this._reduceControls(t);let a={};return gt(i)?a=i:null!==i&&(a.validators=i.validator,a.asyncValidators=i.asyncValidator),new A(o,a)}record(t,i=null){const o=this._reduceControls(t);return new Re(o,i)}control(t,i,o){let a={};return this.useNonNullable?(gt(i)?a=i:(a.validators=i,a.asyncValidators=o),new M(t,{...a,nonNullable:!0})):new M(t,i,o)}array(t,i,o){const a=t.map(l=>this._createControl(l));return new pt(a,i,o)}_reduceControls(t){const i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){return t instanceof M||t instanceof k?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),e})(),Dn=(()=>{var n;class e{static withConfig(t){return{ngModule:e,providers:[{provide:v,useValue:t.callSetDisabledState??w}]}}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[ft]}),e})(),An=(()=>{var n;class e{static withConfig(t){return{ngModule:e,providers:[{provide:te,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:v,useValue:t.callSetDisabledState??w}]}}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[ft]}),e})()}}]);