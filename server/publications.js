// Meteor.publish('posts', function () {
//   return Posts.find({}, { sort: {created: -1}});
// });

Meteor.publish('settings', function() {
  return Blog.find();
});

Meteor.publish('singlePost', function(id) {
  check(id, String);
  return Posts.find(id);
});

Meteor.publish('postPreviews', function(page, tag, postsPerPage) {
  if (page !== undefined) {
    check(page, Match.Integer);
    if (page < 0) {
      page = 0;
    }
  }

  if (tag !== undefined) {
    check(tag, String);
  }

  if (!postsPerPage) {
    postsPerPage = 3;
  } else {
    check(postsPerPage, Match.Integer);
    if (postsPerPage < 3) {
      // 3 post minimum per page
      postsPerPage = 3;
    }
  }

  const queryObject = (tag) ? { tags: tag } : {};
  const min = page * postsPerPage;
  const max = min + postsPerPage;
  var cursor = Posts.find(queryObject, {
    sort: { created: -1 },
    fields: { markdownContent: false },
    skip: min,
    limit: max,
  });

  return cursor;
});
