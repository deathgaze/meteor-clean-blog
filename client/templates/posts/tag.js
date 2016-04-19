let getTag = function () {
  return FlowRouter.getParam('tag');
}

Template.tag.helpers({
  tag: function () {
    return getTag();
  },
  posts: function () {
    let tag = getTag();
    return Posts.find({ tags: tag }, { sort: { created: -1 }})
  }
});
