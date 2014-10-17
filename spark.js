var makeAjaxCall = function() {
	TinderAjax.getJSON("http://ironhack-meet-me-api.herokuapp.com/locations.json", function(data) {
    ajaxButton.after("<span> Success!</span>");
    locationData = data;
  });
};

var locationData = {};

q = new TinderQuery();
var ajaxButton = q.querySelector('#ajax');
ajaxButton.on('click', makeAjaxCall);

