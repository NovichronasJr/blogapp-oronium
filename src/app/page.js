import { getBlogs } from '../lib/api/blogs';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '../lib/react-query/queryClient';
import BlogList from './BlogList'; // Client Component

export const dynamic = 'force-dynamic'; // ensures SSR

export default async function HomePage() {
  
  await queryClient.prefetchQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  });

  const dehydratedState = dehydrate(queryClient);

  return <BlogList dehydratedState={dehydratedState} />;
}
