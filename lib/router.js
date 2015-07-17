var homeSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});

FlowRouter.route('/login', {
    action: function(params) {
    	FlowLayout.render('loginLayout', {main: 'login'});
    }
});

FlowRouter.route('/', {
	subscriptions: function(params) {
		this.register('months', homeSubs.subscribe('months'));
	},
    action: function(params) {
    	console.log('rendering home');
    	FlowLayout.render('mainLayout', {main: 'home', headerText: 'mainHeader', headerIcon: 'headerIconMenu'});
    	console.log('rendered home');
    }
});

FlowRouter.route('/search', {
    action: function(params) {
    	FlowLayout.render('mainLayout', {headerText: 'searchHeader', headerIcon: 'headerIconBack'});
    }
});

FlowRouter.route('/upload/:id', {
    action: function(params) {
    	FlowLayout.render('mainLayout', {main: 'upload', headerText: 'uploadHeader', headerIcon: 'headerIconBack'});
    }
});

FlowRouter.route('/month/:date/:monthName', {
	subscriptions: function(params) {
		this.register('posts', Meteor.subscribe('posts', params.date));
	},
    action: function(params) {
    	FlowLayout.render('mainLayout', {main: 'month', headerText: 'monthHeader', headerIcon: 'headerIconBack'});
    }
});

FlowRouter.route('/loading', {
    action: function(params) {
    	FlowLayout.render('mainLayout', {main: 'loading'});
    }
});

function checkLogin(context, redirect) {
    if(Meteor.userId() == null){
    	FlowRouter.withReplaceState(function() {
    	    redirect('/login');
    	});
    }
}