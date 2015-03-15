/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/

Template.GameSingle.events({
	"click .ans-btns": function(event, template) {
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/

Template.GameSingle.helpers({
  
  qTemplate: "qImage",
  questionsCount: "1",
  pregunta: "0",
  time: "0:00",
  ans1: "Uno",
  ans2: "Dos",
  ans3: "Text",
  ans4: "Cuatro",
});
Template.qImage.helpers({
  question:"the cuestion",
  img: "btn-red.png"
});
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.GameSingle.created = function () {
  
  
};

Template.GameSingle.rendered = function () {
   
};

Template.GameSingle.destroyed = function () {
};