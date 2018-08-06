var _selectedPaper = 0;
var _editMode = "";
var _papers = [];
var _others = [];
var _settings = {};

//This feels messy.
var _defaultSettings = {
	currency: "£",
	ffincrement: 1,
	subsincrement: 1,
	salesincrement: 1
};

function displayCurrency(amount) {
	//TODO possible issue here with numeric currency symbol
	//Use string.concat() but first tostring cause otherwise
	//might not have the method =/
	if (Math.floor(amount) == amount) {
		return _settings.currency + amount;
	} else {
		return _settings.currency + amount.toFixed(2);
	}
}

function loadData() {
	var papers = localStorage.getItem("paperSales");
	if (papers !== null) {
		_papers = JSON.parse(papers);
	}
	others = localStorage.getItem("otherSales");
	if (others !== null) {
		_others = JSON.parse(others);
	}
	settings = localStorage.getItem("settings");
	if (settings !== null) {
		_settings = JSON.parse(settings);
	} else {
		_settings = _defaultSettings
	}
}

function pageload() {
	//Load existing paper data if it exists
	loadData();
	//Load JS for each page
	//This is a little bit messy cause it generates a whole lot of
	//requests to the server, maybe like put them all into one file
	//in a build process?
	//Not a huge problem though because these will be local files when
	//packaged as an app
	$("body").children("div[data-role='page']").each(setupPage);
}

function setupPage() {
	var id = $(this).attr("id");
	loadScript("scripts/pages/"+id+".js");
}

function updateOtherSales(paperId, value) {
	_others[paperId].sales = value;
	saveData();
}

function updatePaperAttr(paperId, attr, value) {
	_papers[paperId][attr] = value;
	saveData();
}

function updateSetting(attr, value) {
	_settings[attr] = value;
	saveSettings();
}

function newOther(title) {
	_others.push({
		name: title,
		sales: 0
	});
	saveData();
}

function newPaper(title) {
	_papers.push({
		name: title,
		sales: 0,
		ff: 0,
		subs: 0
	});
	saveData();
}

function saveData() {
	//This should maybe be split for Papers / Others
	//Would probably be noticably faster for big data
	
	localStorage.setItem("paperSales",JSON.stringify(_papers));
	localStorage.setItem("otherSales",JSON.stringify(_others)); 
}

function saveSettings() {
	localStorage.setItem("settings",JSON.stringify(_settings));
}

function clearData() {
	//Right now the clear button calls this directly
	//It should instead call a function that gets
	//confirmation from the user as this is a pretty
	//big deal.
	
	//The "confirm" here is a stopgap
	if (confirm("Are you sure?")) {
		localStorage.removeItem("paperSales");
		localStorage.removeItem("otherSales");
		_papers = [];
		_others = [];
	}
}

function loadScript(path) {
	var tag = document.createElement("script");
	tag.setAttribute("src", path);
	document.head.appendChild(tag);
}
$(document).ready(pageload);
