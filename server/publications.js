Meteor.publish('posts', function () {
  return Posts.find({}, { sort: {created: -1}});
});

Meteor.publish('settings', function() {
  return Blog.find();
})
