Meteor.methods({
  postCount: function (tag) {
    var queryObject = {};
    if (tag) {
      check(tag, String);
      queryObject = { tags: tag };
    }

    return Posts.find(queryObject).count();
  },
  getPostPreviews: function (page, tag) {
    if (page) {
      check(page, Match.Integer);
    }
    if (tag) {
      check(tag, String);
    }

    const postsPerPage = getBlogSetting('display', 'postsPerPage');
    const queryObject = (tag) ? { tags: tag } : {};
    const min = page * postsPerPage;
    const max = min + postsPerPage;

    var cursor = Posts.find(queryObject, {
      sort: { created: -1 },
      fields: { markdownContent: false },
      skip: min,
      limit: postsPerPage,
    });
    return cursor.fetch();
  },
});
