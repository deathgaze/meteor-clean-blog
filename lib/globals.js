getPostsPerPage = function (tag) {
  return getBlogSetting('display', 'postsPerPage');
};

getBlogSetting = function (store, key) {
  const cursor = Blog.findOne({ _storeName: store }, { _storeName: false });
  if (cursor) {
    var data = undefined;
    try {
      data = cursor[key];
    } catch (e) {
      return;
    }
    if (data) {
      return data;
    }
    return undefined;
  }
  return undefined;
};

if (Meteor.isClient) {
  Session.set('postsPerPage', getPostsPerPage());
}
