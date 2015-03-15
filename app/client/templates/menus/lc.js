Template.Challenge.rendered = function() {
};

Template.Start.rendered = function(){
  $('#modal8').openModal({
    });
setTimeout(function(){
    $('#modal8').closeModal();
}, 10000000);
};



Template.lvl1_adjetivos.rendered = function() {
  $('.modal-trigger').leanModal();
};
Template.Challenge.events({
	"click #btn-multi": function(event, template) {
			$("#btn-multi").addClass("press");
			$("#btn-multi div p").removeClass("press");
		setTimeout(function() {
			Router.go('Challenge2');
		}, 1000);

	},
	"click #btn-multi div p": function(event, template) {
		$("#btn-multi").addClass('press');
		$("#btn-multi div p").removeClass( "press" )

		setTimeout(function() {
		Router.go('Challenge2');
	}, 1000);

},
	"click #btn-single div p": function(event, template) {
		$("#btn-single").addClass('press');
		$("#btn-single div p").removeClass( "press" )

		setTimeout(function() {
		Router.go('GameSingle');
	}, 1000);

},
	"click #btn-sinlge": function(event, template) {
			$("#btn-single ").addClass("press");
			$("#btn-single div p").removeClass("press");
		setTimeout(function() {
			Router.go('GameSingle');
		}, 1000);

	},
});

