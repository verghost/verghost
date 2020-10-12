// JS for verghost.com
// This is a bodged static content generator
var dq = (s) => {
	return document.querySelector(s);
};

var verghostjs = {};
var testlist = ["a", "b", "c", "d"];
verghostjs.vgsidebar = {
	"": null,
	"vlc-lua-docs": {
		"_": [
			["m", "Module List"],
			["t", "Type List"]
		],
		"m": [
			["config", "Configuration"],
			["dialog", "Dialog"],
			["equalizer", "Equalizer"],
			["gettext", "GetText"],
			["errno", "Errno"],
			["httpd", "HTTPd"],
			["io", "I/O"],
			["msg", "Messages"],
			["misc", "Miscellaneous"],
			["net", "Network"],
			["object", "Object"],
			["osd", "OSD"],
			["player", "Player"],
			["playlist", "Playlist"],
			["rand", "Random"],
			["rd", "Renderer Discover"],
			["sd", "Services Discovery"],
			["stream", "Stream"],
			["strings", "Strings"],
			["var", "Variables"],
			["video", "Video"],
			["vlm", "VLM"],
			["volume", "Volume"],
			["win", "Windows"],
			["xml", "XML"]
		],
		"t": []
	}
};

var style_bodge = (e) => {
	let p_class = dq("code > span.p");
	for(let i = 0; i < p_class.length; i++) {
		let el = p_class[i];
		if(el.innerText === "(" && el.previousElementSibling && el.previousElementSibling.className === "n") {
			el.className = "pl-c1";
		}
	}
};
window.addEventListener('load', style_bodge);
