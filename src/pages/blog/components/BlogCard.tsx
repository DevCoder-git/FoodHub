import React from 'react';
import { formatDate } from '../../../utils/formatDate';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
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
  );
};

export default BlogCard;