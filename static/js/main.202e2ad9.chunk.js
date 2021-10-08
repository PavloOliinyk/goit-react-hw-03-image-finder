(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem___0XxI",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2M892"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1ufC8",Modal:"Modal_Modal__28Cf7"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2XpU3"}},18:function(e,t,a){e.exports={Button:"Button_Button__joN9t"}},24:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),s=(a(24),a(25),a(14)),l=a(3),i=a(4),u=a(6),h=a(5),m=a(15),d=a.n(m),p=a(8),g=a(52),b=a(11),j=a.n(b),f=a(1),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.modalImage,r=e.description;return Object(f.jsx)("li",{className:j.a.ImageGalleryItem,onClick:this.props.onModalClick,children:Object(f.jsx)("img",{src:t,"data-src":a,alt:r,className:j.a.ImageGalleryItemImage})})}}]),a}(r.Component),y=O,v=a(16),I=a.n(v),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsx)("ul",{className:I.a.ImageGallery,children:this.props.images.map((function(t){var a=t.id,r=t.webformatURL,n=t.largeImageURL,o=t.tags;return Object(f.jsx)(y,{onModalClick:e.props.onModalClick,image:r,modalImage:n,description:o.split(",")[0]},"".concat(a,"-").concat(Object(g.a)()))}))})}}]),a}(r.Component),S=x,_=a(17),k=a(7),w=a.n(k),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChahge=function(t){var a=t.target,r=a.name,n=a.value;e.setState(Object(_.a)({},r,n.toLowerCase()))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:w.a.Searchbar,children:Object(f.jsxs)("form",{className:w.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:w.a.SearchFormButton,children:Object(f.jsx)("span",{className:w.a.SearchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:w.a.SearchFormInput,type:"text",autoComplete:"off",name:"query",value:this.state.query,placeholder:"Search images and photos",onChange:this.handleChahge})]})})}}]),a}(r.Component),C=M,B=a(18),F=a.n(B),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)("button",{type:"button",className:F.a.Button,onClick:this.props.onSearch,children:"Load more"})}}]),a}(r.Component),N=L,G=a(12),T=a.n(G),q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).closeModalByEsc=function(t){"Escape"===t.code&&e.props.onModalClick()},e.closeModalByBackdropClick=function(t){t.currentTarget===t.target&&e.props.onModalClick()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalByEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalByEsc)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:T.a.Overlay,onClick:this.closeModalByBackdropClick,children:Object(f.jsx)("div",{className:T.a.Modal,children:Object(f.jsx)("img",{src:this.props.modalImage,alt:this.props.modalAltText})})})}}]),a}(r.Component),A=q,P=a(13),E=a.n(P),D=a(19),U=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"fetchImageOrPhoto",value:function(){var e=Object(D.a)(E.a.mark((function e(t,a){var r,n,o,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(a,"&key=").concat("22797563-ef7ac6a65cc3c0715a95e250f","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,o=n.hits,c=n.totalHits,e.abrupt("return",{hits:o,totalHits:c});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),H=U,J=(a(48),a(49),new H),R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:"",images:[],currentPage:1,totalImages:null,showModal:!1,modalImage:"",modalAltText:"",showLoader:!1,error:null},e.modalToggle=function(t){e.setState((function(e){var a=e.showModal;return{showModal:!a,modalImage:a?"":t.target.dataset.src,modalAltText:a?"":t.target.alt}}))},e.handleSumbit=function(t){e.setState({query:t,images:[],currentPage:1})},e.loadMoreImages=function(t){t.preventDefault(),e.state.images.length!==e.state.totalImages?e.setState((function(e){return{currentPage:e.currentPage+1}})):p.b.error("There is no more images to show",{theme:"colored"})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.query===this.state.query&&t.currentPage===this.state.currentPage||(this.setState({showLoader:!0}),J.fetchImageOrPhoto(this.state.query,this.state.currentPage).then((function(e){var t=e.hits,r=e.totalHits;t.length||p.b.error("Enter proper query",{theme:"colored"}),a.setState((function(e){var a=e.images;return{images:[].concat(Object(s.a)(a),Object(s.a)(t)),totalImages:r}}))})).catch((function(e){a.setState({error:e}),p.b.error(a.state.error.message,{theme:"colored"})})).finally((function(){t.images.length>11&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),a.setState({showLoader:!1})})))}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(C,{onSubmit:this.handleSumbit}),this.state.images.length>1&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(S,{images:this.state.images,onModalClick:this.modalToggle}),!this.state.showLoader&&Object(f.jsx)(N,{onSearch:this.loadMoreImages})]}),this.state.showLoader&&Object(f.jsx)(d.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3,style:{textAlign:"center"}}),this.state.showModal&&Object(f.jsx)(A,{modalImage:this.state.modalImage,modalAltText:this.state.modalAltText,onModalClick:this.modalToggle})]}),Object(f.jsx)(p.a,{autoClose:3e3,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1})]})}}]),a}(r.Component),X=R;c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(X,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__22JPt",SearchForm:"Searchbar_SearchForm__2RKUO",SearchFormButton:"Searchbar_SearchFormButton__3edbn",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__hkM1O",SearchFormInput:"Searchbar_SearchFormInput__1Dkcm"}}},[[50,1,2]]]);
//# sourceMappingURL=main.202e2ad9.chunk.js.map