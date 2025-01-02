

import BlogPost from '@/components/blogPost';
import Hero from '@/components/hero';
import PopularPosts from '@/components/popularPosts';

import React from 'react';

export default function Home  () {
  return (
<div className='mt-16'>
 
 
  
  <Hero/>
      <BlogPost/>
      <PopularPosts/>

</div>
  );
}
