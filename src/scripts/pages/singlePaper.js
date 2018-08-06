function singlePaperPageLoad() {
	$("#singlePaperHeader").html(_papers[_selectedPaper].name);
	$("#spff").html(displayCurrency(_papers[_selectedPaper].ff));
	$("#spsubs").html(displayCurrency(_papers[_selectedPaper].subs));
	$("#spsales").html(displayCurrency(_papers[_selectedPaper].sales));
}

function incrementPaperSales(type) {
	updatePaperAttr(_selectedPaper, type, Number(_papers[_selectedPaper][type]) + Number(_settings[type+"increment"]));
	$("#sp"+type).html(displayCurrency(_papers[_selectedPaper][type]));
}

function editPaperSales(type) {
	_editMode = type;
	$(":mobile-pagecontainer").pagecontainer("change","#editQty");
}

$("#singlePaper").on("pagebeforeshow",singlePaperPageLoad);
