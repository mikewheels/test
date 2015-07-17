Meteor.methods({
    addPost: function (date, title, tags, imageId) {
		if (!Meteor.userId()) {
		  throw new Meteor.Error("not-authorized");
		}
		
		var insert_data = {
		  date: date,
		  title: title,
		  tags: tags,
		  image: Images.findOne({_id: imageId}),
		  createdAt: new Date(),
		  owner: Meteor.userId(),
		  username: Meteor.user().username,
		};
		try{
			insert_data.group_id = Meteor.user().profile.group_id;
		} catch(e){
			insert_data.group_id = null;
			console.log('User profile not setup');
		}
		Posts.insert(insert_data);
    },
    addGroup: function (name) {
		if (!Meteor.userId()) {
		  throw new Meteor.Error("not-authorized");
		}
		
		Groups.insert({
		  name: name,
		  createdAt: new Date(),
		  owner: Meteor.userId(),
		});
    },
    addUserToGroup: function (groupName) {
		if (!Meteor.userId()) {
		  throw new Meteor.Error("not-authorized");
		}
		
		Meteor.users.update(Meteor.userId(), {
		  $set: {'profile.group_id': Groups.findOne({name: groupName})._id}
		});
    },
});