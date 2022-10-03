const createBlogPages = require('./create-blog-pages');
const createBlogPosts = require('./create-blog-posts');
const createDocPages = require('./create-doc-pages');
const createReleaseNotePost = require('./create-release-note-post');

// const createStaticPages = require('./create-static-pages');

module.exports = async (options) => {
  await createBlogPages(options);
  await createBlogPosts(options);
  // await createStaticPages(options);
  await createDocPages(options);
  await createReleaseNotePost(options);
};
