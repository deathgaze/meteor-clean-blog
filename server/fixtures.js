const tags = ['code', 'design', 'lifestyle'];
const now = new Date();


if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'The big easy',
    subtitle: 'is it that easy?',
    author: 'Kirk',
    authorId: 1,
    created: new Date(now - 10000),
    updated: null,
    markdownContent: '# It was a dark and stormy night\n\nBut unfortunately there\'s more to this post\n',
    tags: [ 'code' ]
  });
  Posts.insert({
    title: 'The second post',
    subtitle: 'will he post again?',
    author: 'Kirk',
    authorId: 1,
    created: new Date(now - 20000),
    updated: null,
    markdownContent: '# Programmers are really lazy\n\nTrue story, they just pretend\n',
    tags: [ 'design' ],
  });
  Posts.insert({
    title: 'The final post',
    subtitle: 'this is the end...',
    author: 'Kirk',
    authorId: 1,
    created: new Date(now - 30000),
    updated: null,
    markdownContent: '# This is really it\n\nShit just got realz\n',
    tags: [ 'lifestyle' ],
  });
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'This is test post #' + i,
      subtitle: 'only a test',
      author: 'Kirk',
      authorId: 1,
      created: new Date(now - i * 3600 * 1000),
      updated: null,
      markdownContent: '# This should be an h1 \n\n ## This should be an h2 \n\nThis should be a regular paragraph\n\nThis is test post # ' + 1,
      tags: [Random.choice(tags)],
    });
  }
}
