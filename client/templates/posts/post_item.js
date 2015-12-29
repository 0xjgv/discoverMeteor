Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  
  domain: function() {
    var a  = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },

});

Template.postItem.events({
  'click .upvote': function(e){
    Meteor.call('upvote', this._id);
    return false; // prevent the button from reloading the page
  }
});
