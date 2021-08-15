const showBigPicture = (e) => {
    e.preventDefault();
    appendModalImg(e.currentTarget.href);
};
const appendModalImg = (modalImg) => {
	let modCont = new Array();
	modCont.push( createCustomElement('img',{'class':'img-fluid','alt':'','src':modalImg},[]) );
	modCont.push( createCustomElement('a',{'href':'#','class':'modal_close modal_close_w'},['×']) );
	let mdl = createCustomElement('div',{'class':'modalAllImg'},modCont);
	let blk = createCustomElement('div',{'id':'modalDialog'},[mdl]);
	blk.addEventListener('click', e => {
		if(e.target === blk) {
			removeModal();
		}
	});
	document.body.appendChild(blk);
	document.querySelector('.modal_close').addEventListener('click',removeModal);
};
