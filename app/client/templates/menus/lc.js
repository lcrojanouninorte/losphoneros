Template.Challenge.rendered = function() {

};
Template.Challenge.events({
	"click .image-btn": function(event, template) {
			$(".image-btn").addClass("press");
			$(".image-btn div p").removeClass("press");
		setTimeout(function() {
			Router.go('Challenge2');
		}, 1000);

	},
	"click .image-btn div p": function(event, template) {
		$(".image-btn").addClass('press');
		$(".image-btn div p").removeClass( "press" )

		setTimeout(function() {
		Router.go('Challenge2');
	}, 1000);

}
});

