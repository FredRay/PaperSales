function newOtherPageLoad() {
	$("#newOtherInput").val("");
}

function commitNewOther() {
	var newValue = $("#newOtherInput").val();
	newOther(newValue);
	$(":mobile-pagecontainer").pagecontainer("change","#otherSales");
}

$("#newOther").on("pagebeforeshow",newOtherPageLoad);
