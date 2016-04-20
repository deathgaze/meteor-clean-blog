Meteor.methods({
  postCount: function (tag) {
    var queryObject = {};
    if (tag) {
      check(tag, String);
      queryObject = { tags: tag };
    }

    return Posts.find(queryObject).count();
  },
});
