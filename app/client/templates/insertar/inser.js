Template.InsertQuestion.events({
	"submit form": function(event) {
    event.preventDefault();
    var preg = event.target.pregunta.value;
    var preg1 = event.target.respuesta1.value;
    var preg2 = event.target.respuesta2.value;
    var preg3 = event.target.respuesta3.value;
    var preg4 = event.target.respuesta4.value;
    var preg5 = event.target.pcorrecta.value;
    
    
    Questions.insert({
        pregunta: preg,
        resuesta1: preg1,
        resuesta2: preg2,
        resuesta3: preg3,
        resuesta4: preg4,
        correcta: preg5
    });
    
    event.target.pregunta.value = "";
     event.target.respuesta1.value = "";
     event.target.respuesta2.value = "";
     event.target.respuesta3.value = "";
     event.target.respuesta4.value = "";
     event.target.pcorrecta.value = "";
    
     
	}
});