function settingsPageLoad() {
	$("#settings").find("input").each(setupSettingsInput);
}

function setupSettingsInput() {
	//This is run for each input on the settings screen, populates it
	//with current settings value and sets up the "onchange" event to
	//update the corresponding setting as defined by "data-controls"
	var controls = $(this).attr("data-controls");
	if (typeof controls == typeof undefined || controls == false) {
		return false
	}
	$(this).val(_settings[controls]);
	$(this).change(updateSettingField);
}

function updateSettingField() {
	var field = $(this).attr("data-controls")
	var newValue = $(this).val();
	updateSetting(field, newValue);
}

$("#settings").on("pagebeforeshow",settingsPageLoad);
