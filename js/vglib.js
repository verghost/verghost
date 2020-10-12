// JS for verghost.com
var dq = (s) => {
	return document.querySelector(s);
}, dqa = (s) => {
	return document.querySelectorAll(s);
};

var verghostjs = {};
verghostjs.vgsidebar = {
	"": null,
	"vlc-lua-docs": []
};

var style_bodge = (e) => {
	let p_class = dqa(".language-lua code > span.p");
	if(!p_class) return;
	for(let i = 0; i < p_class.length; i++) {
		let el = p_class[i];
		if(el.innerText === "(" && el.previousElementSibling && el.previousElementSibling.className === "n") {
			el.previousElementSibling.className = "pl-c1";
		}
	}
};
window.addEventListener('load', style_bodge);
