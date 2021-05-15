(this["webpackJsonptfjs-web-app"]=this["webpackJsonptfjs-web-app"]||[]).push([[0],{308:function(e,t,a){},312:function(e,t,a){},319:function(e,t){},320:function(e,t){},328:function(e,t){},331:function(e,t){},332:function(e,t){},333:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},341:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(9),i=a(13),o=a(14),c=a(10),r=a(159),l=a.n(r),d=a(125),h=(a(307),a(308),a(50)),p=a(346),b=a(349),u=a(299),j=a(350),f=a(21),m=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.props.show?Object(f.jsxs)(j.a,{variant:this.props.variant||"danger",onClose:this.props.onClose,dismissible:!0,children:[this.props.title&&Object(f.jsx)("h5",{children:Object(f.jsx)("strong",{children:this.props.title})}),Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:this.props.message}})]}):null}}]),a}(c.Component),x=(a(312),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"About container",children:[Object(f.jsx)("h1",{children:"About"}),Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:"Our Product"})}),Object(f.jsxs)("p",{children:["EWH Portable Microscopy Software for Parasitic Infection Diagnosis This is a TensorFlow.js web application where users can classify images selected locally or taken with their device's camera. The app uses TensorFlow.js and a pre-trained model converted to the TensorFlow.js format to provide the inference capabilities. This model is saved locally in the browser using IndexedDB. A service worker is also used to provide offline capabilities.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"The Portable Microscopy team of Engineering World Health (EWH) UCSD Chapter 2020-2021 developed and trained a convolutional neural network to identify soil transmitted helminths in fecal samples. Soil transmitted helminth infections affect nearly 1 billion people globally, and are typically treated through mass drug administration without diagnosis. Through this webpage, you can upload images of fecal samples and our network will check for Soil Transmitted Helminths and output a diagnosis.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]}),Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:"Our Team"})}),Object(f.jsx)("p",{children:"The Portable Microscopy team of Engineering World Health (EWH) UCSD Chapter 2020-2021"}),Object(f.jsx)("h1",{children:"Contact Us for Suggestions"}),Object(f.jsxs)("p",{children:["If you\u2019d like to contact us for any clarifications, questions, or suggestions to this webpage and/or convolutional neural network, please contact us at",Object(f.jsx)("br",{}),"* rkunowsk@ucsd.edu",Object(f.jsx)("br",{}),"* s2pai@ucsd.edu",Object(f.jsx)("br",{}),"Or fill out this google form:",Object(f.jsx)("a",{children:" https://forms.gle/5vp3nQWbFB64kzQR9 "})]})]})}}]),a}(c.Component)),g=a(4),O=a.n(g),w=a(12),v=a(345),y=a(344),k=a(297),S=a(351),C=a(347),U=a(348),A=a(352),T=a(228),N=a(300),I=a(277),M=a.n(I),W=a(67),L=a(233),F=a(301),P=function(e){var t=e.isLoading,a=e.text,n=e.loadingText,s=e.className,i=void 0===s?"":s,o=e.disabled,c=void 0!==o&&o,r=Object(F.a)(e,["isLoading","text","loadingText","className","disabled"]);return Object(f.jsxs)(y.a,Object(L.a)(Object(L.a)({className:"LoadButton ".concat(i),disabled:c||t},r),{},{children:[t&&Object(f.jsx)(v.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",t?n:a]}))},D={0:"Negative for STH",1:"Hookwork",2:"Ascaris",3:"Trichuris",4:"Positive for STH",5:"Inconclusive: Please run again"},H="http://localhost:5000/api",B=(a(333),a(334),"/model/model.json"),z=100,E=224,R="model_info_store",K="web-model",_=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).initWebcam=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.b.webcam(s.refs.webcam,{resizeWidth:E,resizeHeight:E,facingMode:"environment"});case 3:s.webcam=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s.refs.noWebcam.style.display="block";case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),s.startWebcam=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.webcam&&s.webcam.start();case 1:case"end":return e.stop()}}),e)}))),s.stopWebcam=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.webcam&&s.webcam.stop();case 1:case"end":return e.stop()}}),e)}))),s.getModelInfo=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"/model_info"),{method:"GET"}).then(function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json().then((function(e){s.modelLastUpdated=e.last_updated})).catch((function(e){console.log("Unable to get parse model info.")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Unable to get model info")}));case 2:case"end":return e.stop()}}),e)}))),s.updateModel=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Updating the model: web-model"),s.setState({isDownloadingModel:!0}),e.next=4,W.d(B);case 4:return s.model=e.sent,e.next=7,s.model.save("indexeddb://web-model");case 7:s.setState({isDownloadingModel:!1,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!0});case 8:case"end":return e.stop()}}),e)}))),s.classifyLocalImage=Object(w.a)(O.a.mark((function e(){var t,a,n,i,o,c,r,l,d,h,p;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({isClassifying:!0}),t=s.refs.cropper.getCroppedCanvas(),a=W.e((function(){return W.a.fromPixels(t).toFloat()})),e.next=5,s.processImage(a);case 5:return n=e.sent,i=W.c.resizeBilinear(n,[z,z]),o=s.model.predict(i),e.next=10,o.data();case 10:return c=e.sent,e.next=13,s.getTopKClasses(c,1);case 13:r=e.sent,s.setState({predictions:r,isClassifying:!1,photoSettingsOpen:!s.state.photoSettingsOpen}),l=s.refs.canvas.getContext("2d"),d=E/t.width,h=E/t.height,p=Math.min(d,h),l.clearRect(0,0,E,E),l.drawImage(t,0,0,t.width*p,t.height*p),a.dispose(),n.dispose(),i.dispose(),o.dispose();case 25:case"end":return e.stop()}}),e)}))),s.classifyWebcamImage=Object(w.a)(O.a.mark((function e(){var t,a,n,i,o,c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({isClassifying:!0}),e.next=3,s.webcam.capture();case 3:return t=e.sent,a=W.c.resizeBilinear(t,[z,z]),e.next=7,s.processImage(a);case 7:return n=e.sent,i=s.model.predict(n),e.next=11,i.data();case 11:return o=e.sent,e.next=14,s.getTopKClasses(o,1);case 14:return c=e.sent,s.setState({predictions:c,isClassifying:!1,photoSettingsOpen:!s.state.photoSettingsOpen}),r=W.e((function(){return t.toFloat().div(255)})),e.next=19,W.a.toPixels(r,s.refs.canvas);case 19:a.dispose(),t.dispose(),n.dispose(),i.dispose(),r.dispose();case 24:case"end":return e.stop()}}),e)}))),s.processImage=function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.e((function(){return t.expandDims(0).toFloat()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.getTopKClasses=function(){var e=Object(w.a)(O.a.mark((function e(t,a){var n,s,i,o,c,r,l,d,h,p;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],t.length>1){for(s=[],i=0;i<t.length;i++)s.push({value:t[i],index:i});for(s.sort((function(e,t){return t.value-e.value})),o=new Float32Array(a),c=new Int32Array(a),r=0;r<a;r++)o[r]=s[r].value,c[r]=s[r].index;for(l=[],d=0;d<c.length;d++)l.push({className:D[c[d]],probability:o[d].toFixed(5)})}else h=t[0],p=5,h<.5?(p=0,h=100*(1-h)):h>.5&&(p=4,h*=100),n.push({className:D[p],probability:h.toFixed(2)});return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),s.handlePanelClick=function(e){s.setState({photoSettingsOpen:!s.state.photoSettingsOpen})},s.handleFileChange=function(e){e.target.files&&e.target.files.length>0&&s.setState({file:URL.createObjectURL(e.target.files[0]),filename:e.target.files[0].name})},s.handleTabSelect=function(e){switch(e){case"camera":s.startWebcam();break;case"localfile":s.setState({filename:null,file:null}),s.stopWebcam()}},s.webcam=null,s.model=null,s.modelLastUpdated=null,s.state={modelLoaded:!1,filename:"",isModelLoading:!1,isClassifying:!1,predictions:[],photoSettingsOpen:!0,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!1,isDownloadingModel:!1},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(O.a.mark((function e(){var t,a,n,s=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("indexedDB"in window)){e.next=36;break}return e.prev=1,e.next=4,W.d("indexeddb://web-model");case 4:return this.model=e.sent,e.prev=5,e.next=8,Object(N.a)("tensorflowjs",1);case 8:return t=e.sent,e.next=11,t.transaction(R).objectStore(R).get(K);case 11:return a=e.sent,n=new Date(a.modelArtifactsInfo.dateSaved),e.next=15,this.getModelInfo();case 15:console.log(this.modelLastUpdated),!this.modelLastUpdated||n>=new Date(this.modelLastUpdated).getTime()?console.log("Using saved model"):this.setState({modelUpdateAvailable:!0,showModelUpdateAlert:!0}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),console.warn(e.t0),console.warn("Could not retrieve when model was saved.");case 23:e.next=34;break;case 25:return e.prev=25,e.t1=e.catch(1),console.log("Not found in IndexedDB. Loading and saving..."),console.log(e.t1),e.next=31,W.d(B);case 31:return this.model=e.sent,e.next=34,this.model.save("indexeddb://web-model");case 34:e.next=40;break;case 36:return console.warn("IndexedDB not supported."),e.next=39,W.d(B);case 39:this.model=e.sent;case 40:this.setState({modelLoaded:!0}),this.initWebcam(),W.e((function(){return s.model.predict(W.f([1,z,z,3]))})).dispose();case 44:case"end":return e.stop()}}),e,this,[[1,25],[5,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.webcam&&this.webcam.stop();try{this.model.dispose()}catch(t){}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"Classify container",children:[!this.state.modelLoaded&&Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)(v.a,{animation:"border",role:"status",children:Object(f.jsx)("span",{className:"sr-only",children:"Loading..."})})," ",Object(f.jsx)("span",{className:"loading-model-text",children:"Loading Model"})]}),this.state.modelLoaded&&Object(f.jsxs)(c.Fragment,{children:[Object(f.jsxs)(y.a,{onClick:this.handlePanelClick,className:"classify-panel-header","aria-controls":"photo-selection-pane","aria-expanded":this.state.photoSettingsOpen,children:["Take or Select a Photo to Classify",Object(f.jsx)("span",{className:"panel-arrow",children:this.state.photoSettingsOpen?Object(f.jsx)(T.b,{}):Object(f.jsx)(T.c,{})})]}),Object(f.jsx)(k.a,{in:this.state.photoSettingsOpen,children:Object(f.jsxs)("div",{id:"photo-selection-pane",children:[this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert&&Object(f.jsx)(p.a,{children:Object(f.jsxs)(j.a,{variant:"info",show:this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert,onClose:function(){return e.setState({showModelUpdateAlert:!1})},dismissible:!0,children:["An update for the ",Object(f.jsx)("strong",{children:this.state.modelType})," model is available.",Object(f.jsxs)("div",{className:"d-flex justify-content-center pt-1",children:[!this.state.isDownloadingModel&&Object(f.jsx)(y.a,{onClick:this.updateModel,variant:"outline-info",children:"Update"}),this.state.isDownloadingModel&&Object(f.jsxs)("div",{children:[Object(f.jsx)(v.a,{animation:"border",role:"status",size:"sm",children:Object(f.jsx)("span",{className:"sr-only",children:"Downloading..."})})," ",Object(f.jsx)("strong",{children:"Downloading..."})]})]})]})}),this.state.showModelUpdateSuccess&&Object(f.jsx)(p.a,{children:Object(f.jsxs)(j.a,{variant:"success",onClose:function(){return e.setState({showModelUpdateSuccess:!1})},dismissible:!0,children:["The ",Object(f.jsx)("strong",{children:this.state.modelType})," model has been updated!"]})}),Object(f.jsxs)(S.a,{defaultActiveKey:"camera",id:"input-options",onSelect:this.handleTabSelect,className:"justify-content-center",children:[Object(f.jsxs)(C.a,{eventKey:"camera",title:"Take Photo",children:[Object(f.jsxs)("div",{id:"no-webcam",ref:"noWebcam",children:[Object(f.jsx)("span",{className:"camera-icon",children:Object(f.jsx)(T.a,{})}),"No camera found. ",Object(f.jsx)("br",{}),"Please use a device with a camera, or upload an image instead."]}),Object(f.jsx)("div",{className:"webcam-box-outer",children:Object(f.jsx)("div",{className:"webcam-box-inner",children:Object(f.jsx)("video",{ref:"webcam",autoPlay:!0,playsInline:!0,muted:!0,id:"webcam",width:"448",height:"448"})})}),Object(f.jsx)("div",{className:"button-container",children:Object(f.jsx)(P,{variant:"primary",size:"lg",onClick:this.classifyWebcamImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."})})]}),Object(f.jsxs)(C.a,{eventKey:"localfile",title:"Select Local File",children:[Object(f.jsxs)(U.a.Group,{controlId:"file",children:[Object(f.jsx)(U.a.Label,{children:"Select Image File"}),Object(f.jsx)("br",{}),Object(f.jsx)(U.a.Label,{className:"imagelabel",children:this.state.filename?this.state.filename:"Browse..."}),Object(f.jsx)(U.a.Control,{onChange:this.handleFileChange,type:"file",accept:"image/*",className:"imagefile"})]}),this.state.file&&Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)("div",{id:"local-image",children:Object(f.jsx)(M.a,{ref:"cropper",src:this.state.file,style:{height:400,width:"100%"},guides:!0,aspectRatio:1,viewMode:2})}),Object(f.jsx)("div",{className:"button-container",children:Object(f.jsx)(P,{variant:"primary",size:"lg",disabled:!this.state.filename,onClick:this.classifyLocalImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."})})]})]})]})]})}),this.state.predictions.length>0&&Object(f.jsxs)("div",{className:"classification-results",children:[Object(f.jsx)("h3",{children:"Predictions"}),Object(f.jsx)("canvas",{ref:"canvas",width:E,height:E}),Object(f.jsx)("br",{}),Object(f.jsx)(A.a,{children:this.state.predictions.map((function(e){return Object(f.jsxs)(A.a.Item,{children:[Object(f.jsx)("strong",{children:e.className})," ",e.probability,"%"]},e.className)}))})]})]})]})}}]),a}(c.Component),G=(a(337),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"Instructions container",children:[Object(f.jsx)("h1",{children:"Instructions"}),Object(f.jsxs)("p",{children:["Steps to upload fecal sample image for STH diagnosis:",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),'1. Go to the "Classify" page',Object(f.jsx)("br",{}),'2. Click on "Select Local File"',Object(f.jsx)("br",{}),'3. Click on "Browse" under Select Image File.',Object(f.jsx)("br",{}),"4. Select the image file you want to process.",Object(f.jsx)("br",{}),'5. Click on "Classify"',Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"The webpage will now output an STH diagnosis."]}),Object(f.jsx)("h1",{children:" FAQS "}),Object(f.jsxs)("p",{children:["* How does this work?",Object(f.jsx)("br",{}),"* How to save this webpage in my browser?",Object(f.jsx)("br",{}),"* How accurate is the diagnosis?",Object(f.jsx)("br",{}),"* Why do we need diagnosis when mass drug administration exists?",Object(f.jsx)("br",{}),"* What are the effects of Soil Transmitted Helminth infections?",Object(f.jsx)("br",{}),"* Where can I learn more about Soil Transmitted Helminths?",Object(f.jsx)("br",{}),"* https://www.neglecteddiseases.gov/usaid-targeted-diseases/ soil-transmitted-helminths/",Object(f.jsx)("br",{}),"* https://www.who.int/news-room/fact-sheets/detail/soil- transmitted-helminth-infections"]})]})}}]),a}(c.Component)),Q=(a(338),function(){return Object(f.jsxs)("div",{className:"NotFound",children:[Object(f.jsx)("h1",{children:"404"}),Object(f.jsx)("h3",{children:"The page you were looking for is not here."}),Object(f.jsx)("a",{href:"/",children:"Go Home"})]})}),J=function(e){var t=e.childProps;return Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{path:"/classify",exact:!0,component:_,props:t}),Object(f.jsx)(h.a,{path:"/",exact:!0,component:G,props:t}),Object(f.jsx)(h.a,{path:"/about",exact:!0,component:x,props:t}),Object(f.jsx)(h.a,{component:Q})]})},q=(a(341),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;Object(n.a)(this,a),(s=t.call(this,e)).dismissUpdateAlert=function(e){s.setState({showUpdateAlert:!1})};return s.state={showUpdateAlert:!0,reloadMsg:"\n      New content is available.<br />\n      Please <a href='javascript:location.reload();'>reload</a>.<br />\n      <small>If reloading doesn't work, close all tabs/windows of this web application,\n      and then reopen the application.</small>\n    "},s}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)(p.a,{children:[Object(f.jsxs)(b.a,{collapseOnSelect:!0,className:"app-nav-bar",variant:"dark",expand:"lg",children:[Object(f.jsx)(b.a.Brand,{href:"/",children:"WebClassify"}),Object(f.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(u.a,{className:"",children:[Object(f.jsx)(d.b,{className:"nav-link",to:"/classify",children:"Classify"}),Object(f.jsx)(d.b,{className:"nav-link",to:"/",children:"Instructions"}),Object(f.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"})]})})]}),this.props.updateAvailable&&this.state.showUpdateAlert&&Object(f.jsx)("div",{style:{paddingTop:"10px"},children:Object(f.jsx)(m,{title:"",variant:"info",message:this.state.reloadMsg,show:this.props.updateAvailable&&this.state.showUpdateAlert,onClose:this.dismissUpdateAlert})})]}),Object(f.jsx)(p.a,{children:Object(f.jsx)(J,{})})]})}}]),a}(c.Component)),$=Object(h.f)(q),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e){if("serviceWorker"in navigator){if(new URL("/ewh-portable-microscopy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ewh-portable-microscopy","/service-worker.js");V?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}function Y(e,t){navigator.serviceWorker.register(e).then((function(e){function a(a){console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA2-PWA."),t&&t.onUpdate&&t.onUpdate(e,a)}e.waiting&&e.active&&a(e.waiting),e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?a(n):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Z=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={contentCached:!1,updateAvailable:!1},e.handleUpdate=function(t){var a=t.waiting;a&&a.postMessage({type:"SKIP_WAITING"}),e.setState({updateAvailable:!0})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){X({onUpdate:this.handleUpdate})}},{key:"render",value:function(){return Object(f.jsx)(d.a,{children:Object(f.jsx)($,{updateAvailable:this.state.updateAvailable})})}}]),a}(c.Component);l.a.render(Object(f.jsx)(Z,{}),document.getElementById("root"))}},[[342,1,2]]]);
//# sourceMappingURL=main.12a0d4d5.chunk.js.map