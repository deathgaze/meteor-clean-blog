Template.post.helpers({
  post: () => {
    return Posts.findOne({_id: FlowRouter.getParam("postId")});
  },
});
