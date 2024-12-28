import React, { useState, useEffect } from 'react';

const Discussion = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ author: '', content: '' });

  useEffect(() => {
    const storedPosts = localStorage.getItem('forumPosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('forumPosts', JSON.stringify(posts));
  }, [posts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.author && newPost.content) {
      const post = {
        id: Date.now(),
        author: newPost.author,
        content: newPost.content,
        timestamp: new Date().toLocaleString(),
      };
      setPosts(prev => [post, ...prev]);
      setNewPost({ author: '', content: '' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newPost.author}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Post
        </button>
      </form>

      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{post.author}</h2>
              <span className="text-sm text-gray-500">{post.timestamp}</span>
            </div>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
