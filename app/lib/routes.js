Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  layoutTemplate: 'MasterLayout',
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('Inicio',{
 path: '/Inicio',
 layoutTemplate:'Nonav_Layout',
 action:  
   function(){
     this.render('Inicio');
   }
 
});

Router.route('/Portada', function(){
  this.render('Portada');
});
Router.route('/Challenge', function(){
  this.render('Challenge');
});

Router.route('/Start', function(){
  this.render('Start');
});



Router.route('/example', {
  name: 'example',
  where: 'client'
});
