Meteor.publish("months", function () {
	var group_id = Meteor.users.findOne({_id: this.userId}).profile.group_id;
	var posts = Posts.find({
	    $or: [
	      { group_id: group_id },
	      { owner: this.userId }
	    ]
	}, {sort: {date: -1}});
	var images = Images.find({
        $query: {'metadata.owner': this.userId},
        $orderby: {uploadedAt: -1}
	});
	return [posts, images];
});

Meteor.publish("posts", function (date) {
	console.log(date);
	var group_id = Meteor.users.findOne({_id: this.userId}).profile.group_id,
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
 	var posts = Posts.find({
		date: {
			$gte: new Date(new Date(start_date).toISOString()),
			$lt: new Date(new Date(year + "-" + original_month + "-01").toISOString())
		},
	    $or: [
	      { group_id: group_id },
	      { owner: this.userId }
	    ]
	}, {sort: {date: -1}});
	var images = Images.find({
        $query: {'metadata.owner': this.userId},
        $orderby: {uploadedAt: -1}
	});
	return [posts, images];
});