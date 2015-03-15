Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  layoutTemplate: 'Footer_Layout',
  name: 'home',
   action:  
   function(){
     this.render('Start');
   },
 
 
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

Router.route('/Challenge2', function(){
  this.render('Challenge2');
});

Router.route('/Start', function(){
  this.render('Start');
});

Router.route('/learning', function(){
  this.render('learning');
});

Router.route('/example', {
  name: 'example',
  where: 'client'
});
