function paperListPageLoad() {
	$("#papersArray").empty();
	$("#papersArray").append('<li data-icon="plus"><a href="#newPaper">Add New</a></li>');
	for (var i = _papers.length - 1; i >= 0 ; i--) {
		$("#papersArray").append('<li><a href="#singlePaper" onclick="selectPaper('+i+')"><h2>'+_papers[i].name+'</h2><p>'+displayCurrency(_papers[i].sales)+' Sales</p><p>'+displayCurrency(_papers[i].ff)+' Fighting Fund</p><p>'+displayCurrency(_papers[i].subs)+' Cash Subs</p></a></li>')
	}
	$("#papersArray").listview().listview("refresh");
}

function selectPaper(id) {
	_selectedPaper = id;
	$(":mobile-pagecontainer").pagecontainer("change","#singlePaper");
}

$("#paperList").on("pagebeforeshow",paperListPageLoad);
paperListPageLoad();
