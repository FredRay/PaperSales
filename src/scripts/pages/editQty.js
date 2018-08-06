function editQtyPageLoad() {
	$("#newQty").val(_papers[_selectedPaper][_editMode]);
}

function commitQtyEdit() {
	var newValue = $("#newQty").val();
	if (newValue == "") {
		return false;
	}
	updatePaperAttr(_selectedPaper, _editMode, Number(newValue));
	$(":mobile-pagecontainer").pagecontainer("change","#singlePaper");
}

$("#editQty").on("pagebeforeshow",editQtyPageLoad);
