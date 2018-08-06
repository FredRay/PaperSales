function otherSalesPageLoad() {
	$("#othersArray").empty();
	for (var i = 0; i < _others.length ; i++) {
		$("#othersArray").append('<li><a href="#" onclick="selectOther('+i+')">'+_others[i].name+'<div class="sp_moneyamount">'+displayCurrency(_others[i].sales)+'</div></a></li>')
	}
	$("#othersArray").append('<li data-icon="plus"><a href="#newOther">Add New</a></li>');
	$("#othersArray").listview().listview("refresh");
}

function selectOther(id) {
	//Should have called this _selectedItem
	//Live and learn...
	_selectedPaper = id;
	$(":mobile-pagecontainer").pagecontainer("change","#editOtherQty");
}

$("#otherSales").on("pagebeforeshow",otherSalesPageLoad);
