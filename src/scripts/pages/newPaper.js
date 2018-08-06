function newPaperPageLoad() {
	$("#newPaperInput").val("Issue "+getNextPaperId());
}

function getNextPaperId() {
	for (var i = _papers.length - 1; i >= 0 ; i--) {
		var title = _papers[i].name.split(" ");
		var lastword = title[title.length - 1];
		if (!isNaN(lastword)) {
			return Number(lastword) + 1;
		}
	}
	return 1;
}

function commitNewPaper() {
	var newValue = $("#newPaperInput").val();
	newPaper(newValue);
	$(":mobile-pagecontainer").pagecontainer("change","#paperList");
}

$("#newPaper").on("pagebeforeshow",newPaperPageLoad);
