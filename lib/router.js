Router.configure({
  loadingTemplate: 'loading'
});
Router.route('main',{
  path:'/',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('newcollections');
  }/*,
  onBeforeAction: function(){
  	this.next()
  },
  action: function () {
  	console.log(this.params.page + 'asddddddddddddddddddddd');
  	
  }*/
});

Router.route('main2',{
  path:'/:page',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('newcollections');
  },
  data: function () {
  	/*var destination = $('.tovar').offset().top;
		var minus = destination - 60;
		$("body,html").animate({scrollTop: minus }, 800);*/
		/*var destination = $('.tovar').offset().top;
		console.log(destination);*/
  	/*this.render('main');*/
  	var page = this.params.page;
  	console.log(page);
  	if(page === 'tovar' || page === 'advantages' || page === 'reviews' || page === 'views'){
  		var objDowb = {
  			tovar: 708,
  			advantages: 1920,
        views: 2474,
  			reviews: 4850
  		}
  		$("body,html").animate({scrollTop: objDowb[page] }, 800);
  		
  	}
  	
  	
  }/*,
  onBeforeAction: function(){
  	this.next()
  },
  action: function () {
  	console.log(this.params.page + 'asddddddddddddddddddddd');
  	
  }*/
});
/*Router.onBeforeAction('loading', function(){
	this.next();
});*/