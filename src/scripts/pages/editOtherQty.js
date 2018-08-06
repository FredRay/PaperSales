function editOtherQtyPageLoad() {
	$("#newOtherQty").val(_others[_selectedPaper].sales);
}

function commitOtherQtyEdit() {
	var newValue = $("#newOtherQty").val();
	if (newValue == "") {
		return false;
	}
	updateOtherSales(_selectedPaper, Number(newValue));
	$(":mobile-pagecontainer").pagecontainer("change","#otherSales");
}

$("#editOtherQty").on("pagebeforeshow",editOtherQtyPageLoad);
