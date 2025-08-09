'use client';

import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../lib/api/blogs';
import { HydrationBoundary } from '@tanstack/react-query';
import FeaturedPost from '../components/FeaturedPost';
import RecentPost from '../components/RecentPost';
export default function BlogList({ dehydratedState }) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <InnerBlogList />
    </HydrationBoundary>
  );
}

function InnerBlogList() {
  const isClient = typeof window !== 'undefined'
  const { data, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
    staleTime:0,
    refetchInterval: isClient ? 6000 : false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select:(data)=>data.sort((a,b)=>(new Date(b.createdAt)-new Date(a.createdAt)))
  });

  if (isLoading) return <p className='text-center'>Loading...</p>;
   const mainpost = [data[0]]

   const featurePosts = data.slice(data.length-5,data.length-1);
   
  const recentposts = data.slice(1,4)

  return (
  <>
  <FeaturedPost Mainpost={mainpost} featurePost={featurePosts}/>
  <RecentPost posts={recentposts}/>
  </>
  );
}
