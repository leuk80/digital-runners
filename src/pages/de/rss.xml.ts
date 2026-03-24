import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'de' && !data.draft);
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'Digital Runners Blog',
    description: 'Neuigkeiten und Fachwissen rund um UniFi, Netzwerke und IT-Infrastruktur in der Schweiz.',
    site: context.site!.toString(),
    items: sortedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/de/blog/${post.slug.replace(/^de\//, '')}/`,
      categories: post.data.tags,
    })),
    customData: '<language>de-CH</language>',
  });
}
