Template.uploadForm.helpers({
  'imageId': function() {
      return FlowRouter.getParam('id');
  }
});

Template.uploadForm.events({
    "submit .new-listing": function (event) {
	    var date = event.target.date.value,
	        title = event.target.title.value,
	        tags = event.target.tags.value,
	        imageId = FlowRouter.getParam('id');
	    
	    if(!date){
	    	alert("Date is required");
	    	return false;
	    }
	    if(!title){
	    	alert("Title is required");
	    	return false;
	    }
	    if(!tags){
	    	alert("Tags are required");
	    	return false;
	    }
	
	    Meteor.call("addPost", new Date(date), title, tags, imageId);
	
		event.target.date.value = "";
		event.target.title.value = "";
		event.target.tags.value = "";
		
		FlowRouter.withReplaceState(function() {
		    FlowRouter.go('/');
		});
	
		return false;
	}
});