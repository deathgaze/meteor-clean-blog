Template.postsList.helpers({
  posts: () => {
    return Posts.find();
  },
  newerPosts: () => {
    let page = FlowRouter.getParam('page');
    if (page !== undefined || page < 0) {
      page = 0;
    }
    if (page > 1) {
      return true;
    }
  },
  olderPosts: () => {
    return Meteor.call('postCount', function(err, count) {
      if (err) {
        return false;
      }
      console.log("count: ", count);
      return count > 0;
    });
  },
});

Template.postsList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var page = FlowRouter.getParam('page');
    if (page == undefined || page < 0) {
      page = 0;
    }

    self.subscribe('postPreviews', page);
  });
});
