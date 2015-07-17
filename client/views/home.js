Template.listItemHome.famousEvents({
  'click': function(event, fview) {
      FlowRouter.go('/month/' + this.data.date + '/' + this.month);
  }
});

Template.home.rendered = function() {
    var fview = FView.from(this);
    fview.modifier.setOpacity(0);
    fview.modifier.setOpacity(1, {duration : 500});
}

Template.home.helpers({
	tester: function() {
		console.log(this);
	},
	isReady: function(sub) {
		console.log('calling isReady');
	    if(sub) {
	      return FlowRouter.subsReady(sub);
	    } else {
	      return FlowRouter.subsReady();
	    }
	},
	years: function() {
//		if (!Meteor.userId()) {
//  		  throw new Meteor.Error("not-authorized");
//  		}
		
		console.log('getting months');
    	
//    	var group_id = Meteor.user().profile.group_id,
//    	    posts = Posts.find({
//	    	    $or: [
//	    	      { group_id: group_id },
//	    	      { owner: this.userId }
//	    	    ]
//	    	}, {sort: {date: -1}}),
//	    	years = {},
//	    	yearsArray = [],
//	    	monthMapping = {
//    		    "01": "January",
//    		    "02": "February",
//    		    "03": "March",
//    		    "04": "April",
//    		    "05": "May",
//    		    "06": "June",
//    		    "07": "July",
//    		    "08": "August",
//    		    "09": "September",
//    		    "10": "October",
//    		    "11": "November",
//    		    "12": "December"
//    		};
//    	posts.forEach(function (post) {
//    		var month = parseInt(post.date.getMonth()) + 1;
//    		if(month < 10){
//    			month = '0' + month;
//    		}
//		    var date = post.date.getFullYear() + "-" + month,
//		    post_date_splitted = date.split('-'),
//	        year = post_date_splitted[0],
//	        month = monthMapping[post_date_splitted[1]];
//    		console.log(date);
//		    if (year in years){
//		    	if (month in years[year]){
//		    		years[year][month].posts++;
//		    	} else {
//		    		years[year][month] = {posts: 1, image: post.image._id, date: post_date_splitted[0] + "-" + post_date_splitted[1]};
//		    	}
//		    } else {
//		    	years[year] = {};
//		    	years[year][month] = {posts: 1, image: post.image._id, date: post_date_splitted[0] + "-" + post_date_splitted[1]};
//		    }
//		});
//    	for (var key in years) {
//    		var obj = {
//    			year: key,
//    			months: []
//    		};
//    		for (var monthKey in years[key]){
//    			obj.months.push({
//    				month: monthKey,
//    				data: years[key][monthKey]
//    			});
//    		}
//    		yearsArray.push(obj);
//    	}
//    	console.log(yearsArray);
		var yearsArray = [{
			year: "2015",
			months: [{
				month: "1",
				data: {
					posts: 1,
					date: "2015-01"
				}
			},
			{
				month: "2",
				data: {
					posts: 1,
					date: "2015-02"
				}
			},
			{
				month: "3",
				data: {
					posts: 1,
					date: "2015-03"
				}
			},
			{
				month: "4",
				data: {
					posts: 1,
					date: "2015-04"
				}
			},
			{
				month: "5",
				data: {
					posts: 1,
					date: "2015-05"
				}
			}]
		}];
		
		return Tracker.nonreactive(function() {
	    	return yearsArray;
		});
	}
});