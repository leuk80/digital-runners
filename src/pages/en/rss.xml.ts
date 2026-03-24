import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'en' && !data.draft);
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'Digital Runners Blog',
    description: 'News and expertise on UniFi, networking and IT infrastructure in Switzerland.',
    site: context.site!.toString(),
    items: sortedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/en/blog/${post.slug.replace(/^en\//, '')}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en</language>',
  });
}
