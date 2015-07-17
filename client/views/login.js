Accounts.onLogin(function(){
	FlowRouter.withReplaceState(function() {
	    FlowRouter.go('/');
	});
});