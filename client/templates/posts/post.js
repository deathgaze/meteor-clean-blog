Template.post.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var postId = FlowRouter.getParam('postId');
    console.dir(postId);
    self.subscribe('singlePost', postId);
  });
});

Template.post.helpers({
  post: () => {
    return Posts.findOne({_id: FlowRouter.getParam("postId")});
  },
});
