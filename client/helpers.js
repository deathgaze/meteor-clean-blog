// TODO this function only works on plain routes and tag routes
// write a generalized function.
Template.registerHelper('pathToRoute', (templateName, param) => {
  if (param && templateName === 'tag') {
    return FlowRouter.path(templateName, { tag: param });
  } else {
    return FlowRouter.path(templateName);
  }
});

Template.registerHelper('pathToUserId', (userId) => {
  return FlowRouter.path('userId', { userId: userId });
});

Template.registerHelper('pathToUsername', (username) => {
  return FlowRouter.path('user', { username: username });
});

Template.registerHelper('pathToTag', (tag) => {
  return FlowRouter.path('tag', { tag: tag });
});

Template.registerHelper('pathToPost', (postId) => {
  return FlowRouter.path('post', { postId: postId });
});

Template.registerHelper('dateFormat', (date) => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  return `${months[date.getMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
});

Template.registerHelper('blogSettings', (store, key) => {
  const data = getBlogSetting(store, key);
  return (data !== undefined) ? data : undefined;
});

Template.registerHelper('postCount', (tag) => {
  return Meteor.call('postCount', tag);
});
