Template.Challenge.rendered = function () {

};
Template.Challenge.events({
    "click .tg-btn":function(event,template){
      $(event.target).toggle(
        function () { $(vent.target).addClass("press");
      }, 
        function () {
          $(event.target).removeClass("press");
        });
  }
});


  

