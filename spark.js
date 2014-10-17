var makeAjaxCall = function() {
	TinderAjax.getJSON("http://ironhack-meet-me-api.herokuapp.com/locations.json", function(data) {
    ajaxButton.after("<span> Success!</span>");
    locationData = data.locations_list;
  });
};

var locationData = [];

q = new TinderQuery();
var ajaxButton = q.querySelector('#ajax');
ajaxButton.on('click', makeAjaxCall);



var saveToStorage = function(){
	if (locationData.length === 0){
		throw new Error("No location data to save.")
	};
	var arrayLength = locationData.length;
	for (var i = 0; i < arrayLength; i++){
		var key = locationData[i].name;
		var locationInfo = Object.create(locationData[0]);
		delete locationInfo["name"];
		storageData.create(key, locationInfo);
	};
	saveButton.after("<span> Success!</span>");
};


var storageData = TinderStorage.getInstance();
var saveButton = q.querySelector('#save');
saveButton.on('click', saveToStorage);

var populateList = function(){
	if (locationData.length === 0){
		throw new Error("No data in local Storage.");
	};
	var arrayLength = locationData.length;
	for (var i = 0; i < arrayLength; i++){
		locationList.append("<li>" + locationData[i].name + ": " + locationData[i].description + " " + "</li>");
	};

};
var locationList = q.querySelector('#list');
var populateButton = q.querySelector('#populate');
populateButton.on('click', populateList);




