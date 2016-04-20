FlowRouter.route('/:page?', {
  name: 'postsList',
  action: () => {
    BlazeLayout.render('layout', {
      content: 'postsList',
    });
  }
});
FlowRouter.route('/post/:postId', {
  name: 'post',
  action: (params) => {
    BlazeLayout.render('layout', {
      content: 'post',
    });
  },
});

FlowRouter.route('/user/id/:userId', {
  name: 'userId',
  action: (params) => {
    BlazeLayout.render('layout', {
      content: 'userProfile',
    })
  },
});
FlowRouter.route('/user/:username', {
  name: 'user',
  action: (params) => {
    BlazeLayout.render('layout', {
      content: 'user',
    })
  },
});

FlowRouter.route('/tag/:tag/:page?', {
  name: 'tag',
  action: (params) => {
    BlazeLayout.render('layout', {
      content: 'tag',
    });
  }
});

FlowRouter.route('/portfolio', {
  name: 'portfolioRedirect',
  action: () => {
    FlowRouter.go('http://www.kirkdev.io/');
  },
});
