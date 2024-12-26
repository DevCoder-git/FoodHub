import React from 'react';
import BlogCard from './components/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Food Delivery',
    excerpt: 'Exploring how technology is shaping the future of food delivery services.',
    image: 'https://images.unsplash.com/photo-1551975620-797a4d70c430?auto=format&fit=crop&q=80',
    date: '2024-03-01',
    author: 'John Smith'
  },
  {
    id: 2,
    title: 'Supporting Local Restaurants',
    excerpt: 'How food delivery platforms are helping local restaurants thrive.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80',
    date: '2024-02-28',
    author: 'Sarah Johnson'
  }
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;