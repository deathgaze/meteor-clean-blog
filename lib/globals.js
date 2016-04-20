getPostsPerPage = function (tag) {
  return getBlogSetting('display', 'postsPerPage');
};

getBlogSetting = function (store, key) {
  const cursor = Blog.findOne({ _storeName: store }, { _storeName: false });
  if (cursor) {
    const data = cursor[key];
    if (data) {
      return data;
    }
    return;
  }
  return;
};
