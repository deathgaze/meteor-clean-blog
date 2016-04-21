let getTag = function () {
  return FlowRouter.getParam('tag');
}

Template.tag.helpers({
  tag: function () {
    return getTag();
  },
  posts: function () {
    return Template.instance().postPreviews.get();
  },
  postPreviewsReady: function () {
    return Session.get('postPreviewsReady');
  },
  showNewerPostsButton: function () {
    let page = FlowRouter.getParam('page');
    if (page === undefined || page < 0) {
      page = 0;
    }
    return (page > 0);
  },
  showOlderPostsButton: function () {
    Meteor.call('postCount', getTag(), function(err, count) {
      if (err) {
        return false;
      }
      Session.set('postCount', count);
    });
    let postCount = Session.get('postCount');
    if (postCount === undefined) {
      // we can't do anything without a post count so don't display yet
      return false;
    }

    let page = parseInt(FlowRouter.getParam('page'));
    if (page === undefined || isNaN(page)) {
      // assume page 0 if no params
      page = 0;
    }

    let postsPerPage = getPostsPerPage();
    if (postsPerPage === undefined) {
      // assume 3 until server catches up
      postsPerPage = 3;
    }

    let position = page * postsPerPage;
    let highestPosition = position + postsPerPage;

    return (highestPosition < postCount);
  },
});

Template.tag.events({
  'click .nextButton': function (e) {
    let page = parseInt(FlowRouter.getParam('page'));
    if (page === undefined || isNaN(page)) {
      page = 0;
    }
    FlowRouter.setParams({ page: page + 1, tag: getTag() });
  },
  'click .previousButton': function (e) {
    let page = parseInt(FlowRouter.getParam('page'));
    if (page === undefined || isNaN(page) || page < 1) {
      page = 1;
    }
    FlowRouter.setParams({ page: page - 1, tag: getTag() });
  },
});

Template.tag.onCreated(function () {
  var self = this;
  Session.set('postPreviewsReady', false);
  self.autorun(function () {
    var tag = getTag();
    var page = parseInt(FlowRouter.getParam('page'));
    if (page == undefined || page < 0 || isNaN(page)) {
      page = 0;
    }
    Session.set('postPreviewsReady', false);
    self.postPreviews = new ReactiveVar([]);
    Meteor.call('getPostPreviews', page, tag, function (error, result) {
      if (error) {
        Meteor.Error('get-previews-error', err);
        return;
      }
      self.postPreviews.set(result);
      Session.set('postPreviewsReady', true);
    });
  });
});
