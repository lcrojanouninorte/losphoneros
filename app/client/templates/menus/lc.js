Template.Challenge.rendered = function() {


};
Template.Challenge.events({
	"click #btn-multi": function(event, template) {
			$("#btn-multi").addClass("press");
			$("#btn-multi div p").removeClass("press");
		setTimeout(function() {
			Router.go('Challenge2');
		}, 100);

	},
	"click #btn-multi div p": function(event, template) {
		$("#btn-multi").addClass('press');
		$("#btn-multi div p").removeClass( "press" )

		setTimeout(function() {
		Router.go('Challenge2');
	}, 100);

},
	"click #btn-single div p": function(event, template) {
		$("#btn-single").addClass('press');
		$("#btn-single div p").removeClass( "press" )

		setTimeout(function() {
		Router.go('GameSingle');
	}, 100);

},
	"click #btn-sinlge": function(event, template) {
			$("#btn-single ").addClass("press");
			$("#btn-single div p").removeClass("press");
		setTimeout(function() {
			Router.go('GameSingle');
		}, 100);

	},
});

