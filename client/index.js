Template.mainLayout.helpers({
	getInitialSize: function(){
		return [window.innerWidth, window.innerHeight ];
	},
});

Template.headerSearch.famousEvents({
  'click': function(event, fview) {
	  FlowRouter.go('/search');
  }
});

Template.headerBack.famousEvents({
  'click': function(event, fview) {
	  FlowRouter.withReplaceState(function() {
		  FlowRouter.go('/');
  	  });
  }
});

Template.footerUpload.famousEvents({
  'click': function(event, fview) {
	  try{
		  if(device.platform.toLowerCase() === 'android' && device.version.indexOf( '4.4' ) === 0 ) {
			  filechooser.open({}, function(data) {
				  FlowRouter.go('/loading');
				  window.resolveLocalFileSystemURL('file://' + data.filepath, function(fileEntry) {
				      fileEntry.file(function(file){
				    	  Images.insert(file, function (err, fileObj) {
						      FlowRouter.go('/upload/' + fileObj._id);
						  });
				      });
				  }, function(e) {
					  console.dir(e);
				  });
			  });
		  }
	  } catch(e) {
	  }
  }
});

Template.footerUpload.events({
  'change #file-upload': function(event, template) {
	  FS.Utility.eachFile(event, function(file) {
		  Images.insert(file, function (err, fileObj) {
		      FlowRouter.go('/upload/' + fileObj._id);
		  });
	  });
  }
});

Template.headerBack.helpers({
  'iOS': function() {
    return /iPad|iPhone|iPod/.test( navigator.userAgent );
  }
});

