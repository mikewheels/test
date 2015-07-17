Images = new FS.Collection("images", {
	filter: {
		maxSize: 1048576, // in bytes
	    allow: {
	      contentTypes: ['image/*'],
	    },
	    onInvalid: function (message) {
		    if (Meteor.isClient) {
		      alert(message);
		    } else {
		      console.log(message);
		    }
		}
	},
    stores: [new FS.Store.FileSystem("images")]
});