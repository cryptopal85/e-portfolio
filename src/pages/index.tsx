import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';

import { getAllFilesFrontMatter, getFeatured } from '@/lib/mdx';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';

import Accent from '@/components/Accent';
import BlogCard from '@/components/blog/BlogCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';

export default function IndexPage({
  featuredPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedPosts = useInjectContentMeta('blog', featuredPosts);
  return (
    <Layout>
      <Seo />

      <main>
        <section className='flex flex-col justify-center mb-20 -mt-20 min-h-main'>
          <article className='layout'>
            <h2 className='text-2xl md:text-4xl'>Hi!</h2>
            <h1 className='mt-1 text-3xl md:text-5xl'>
              You can call me <Accent>Clarence</Accent>
            </h1>
            <p className='max-w-4xl mt-2 leading-relaxed text-gray-600 dark:text-gray-300'>
              I'm a fast learner and hardworking Informatics Student at Institut
              Teknologi Sepuluh Nopember.
              <br />
              I'm currently really interested in Frontend Development.{' '}
              <CustomLink href='/about'>Reach me out</CustomLink> to talk more
              about frontend works!
            </p>
          </article>
          <div className='mt-12 layout'>
            <h3>Current Favorite Tech Stack</h3>
            <figure className='mt-2'>
              <TechStack />
            </figure>
          </div>
          <UnstyledLink
            className={clsx(
              'absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2',
              'rounded-md cursor-pointer transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300'
            )}
            href='#intro'
          >
            <IoArrowDownOutline className='w-8 h-8 md:w-10 md:h-10 animate-bounce' />
          </UnstyledLink>
        </section>

        <section className='py-20'>
          <article
            id='intro'
            className='flex flex-col-reverse items-center gap-4 md:justify-start md:flex-row layout min-h-main'
          >
            <div className='w-full h-full'>
              <h2 className='text-4xl md:text-6xl'>
                <Accent>Rebuild your mental model</Accent>
              </h2>
              <p className='mt-4 text-base text-gray-600 dark:text-gray-300 md:text-lg'>
                Learn front-end development and see how they work fundamentally
              </p>
              <ButtonLink className='mt-4' href='#blog'>
                Read blogs
              </ButtonLink>
            </div>
            <div className='w-full h-full'>
              <ul className='relative h-full'>
                <BlogCard
                  className='absolute top-1/2 translate-y-[-55%]  md:translate-y-[-50%] lg:translate-y-[-60%] left-1/2 -translate-x-1/2 lg:translate-x-[-30%] md:translate-x-[-50%] transform-gpu max-w-[350px] rotate-3 md:rotate-6 lg:rotate-12'
                  post={populatedPosts[0]}
                />
                <BlogCard
                  className='mx-auto max-w-[350px]'
                  post={populatedPosts[1]}
                />
              </ul>
            </div>
          </article>
        </section>

        <section className='py-20'>
          <article className='layout min-h-main'>
            <h2 id='blog'>
              <Accent>Featured Posts</Accent>
            </h2>
            <ul className='grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3'>
              {populatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </ul>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllFilesFrontMatter('blog');
  const featuredPosts = getFeatured(blogs, [
    'btb-flex-mental-model',
    'nextjs-fetch-usecase',
    'nextjs-fetch-method',
    'btb-rem-em',
    'btb-ui-fundamental',
    'mindful-commit-message',
  ]);

  return {
    props: { featuredPosts },
  };
}
