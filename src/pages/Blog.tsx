import React from 'react';
import { formatDate } from '../utils/formatDate';

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
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;