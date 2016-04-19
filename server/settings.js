if (Blog.find().count() === 0) {
  Blog.insert({
    _storeName: 'info',
    name: 'KIRK SEFCHIK',
    title: 'Kirk\'s Code Corner',
    subtitle: 'Gonna ride historic on the full stack road',
    copyright: 'Kirk P. Sefchik 2016'
  });
  Blog.insert({
    _storeName: 'stats',
    newUsers: 20,
    newComments: 40,
    newLogins: 22,
    returningUsers: 14,
  });
  Blog.insert({
    _storeName: 'menuItems',
    menu: [{
      item: 'Home',
      route: 'postsList',
    }, {
      item: 'Code',
      route: 'tag',
      params: 'code',
    }, {
      item: 'Design',
      route: 'tag',
      params: 'design',
    }, {
      item: 'Lifestyle',
      route: 'tag',
      params: 'lifestyle',
    },],
  });
  Blog.insert({
    _storeName: 'social',
    facebook: 'http://www.facebook.com/kirkdev.io',
    github: 'http://www.github.com/deathgaze',
    twitter: 'http://www.twitter.com/ksefchik',
  });
}
