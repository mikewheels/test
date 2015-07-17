Template.month.rendered = function() {
    var fview = FView.from(this);
    fview.modifier.setOpacity(0);
    fview.modifier.setOpacity(1, {duration : 500});
}

Template.monthHeader.helpers({
	monthName: function(){
		return FlowRouter.getParam('monthName');
	}
});

Template.month.helpers({
	isReady: function(sub) {
	    if(sub) {
	      return FlowRouter.subsReady(sub);
	    } else {
	      return FlowRouter.subsReady();
	    }
	},
	posts: function() {
		if (!Meteor.userId()) {
  		  throw new Meteor.Error("not-authorized");
  		}
		
		console.log('getting posts');
    	
		var date = FlowRouter.getParam('date'),
			group_id = Meteor.user().profile.group_id,
		    date_splitted = date.split('-'),
		    start_date = date + '-01',
		    original_month = date_splitted[1],
		    month = parseInt(original_month.indexOf('0') == 0 ? date_splitted[1].slice(1) : date_splitted[1]),
		    year = parseInt(date_splitted[0]);
		if(month == 12) {
			year++;
			original_month = "01";
		} else {
			month++;
			if(month < 10){
				original_month = "0" + month;
			} else {
				original_month = month;
			}
		}
		console.log(start_date + " " + year + "-" + original_month + "-01");
	 	var posts = Posts.find({
			date: {
				$gte: new Date(new Date(start_date).toISOString()),
				$lt: new Date(new Date(year + "-" + original_month + "-01").toISOString())
			},
		    $or: [
		      { group_id: group_id },
		      { owner: this.userId }
		    ]
		}, {sort: {date: -1}}), postsArray = [];
	 	
	 	console.log("got posts");
	 	
    	posts.forEach(function (post) {
    		postsArray.push({
    			title: post.title,
    			tags: post.tags,
    			image: post.image._id
    		});
		});
    	return postsArray;
	}
});