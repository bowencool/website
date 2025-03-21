/* eslint-disable import/prefer-default-export */
import Rss from 'rss';

import { CHANGELOG_BASE_PATH } from 'constants/docs';
import { CHANGELOG_DIR_PATH, getAllChangelogPosts, getPostBySlug } from 'utils/api-docs';
import getChangelogDateFromSlug from 'utils/get-changelog-date-from-slug';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;

export async function GET() {
  const allChangelogPosts = await getAllChangelogPosts();

  const feed = new Rss({
    id: CHANGELOG_BASE_PATH,
    language: 'en',
    title: `Changelog — Neon Docs`,
    description: 'The latest product updates from Neon',
    feed_url: `${SITE_URL}${CHANGELOG_BASE_PATH}rss.xml`,
    site_url: SITE_URL,
  });

  allChangelogPosts.forEach((post) => {
    const { slug } = post;
    const { data, content } = getPostBySlug(slug, CHANGELOG_DIR_PATH);

    const heading = content.match(/# (.*)/)?.[1];

    const description =
      data.description ||
      `${heading} and more. Check out the full list of changes for this release note.`;

    const url = `${SITE_URL}${CHANGELOG_BASE_PATH}${slug}`;
    const category = slug.slice(slug.lastIndexOf('-') + 1);
    const capitalisedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    const { label, datetime } = getChangelogDateFromSlug(slug);

    feed.item({
      id: url,
      title: `${capitalisedCategory} release - ${label}`,
      url,
      guid: url,
      date: new Date(datetime),
      categories: [category],
      description,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
