import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import RightSidebar from './components/layout/RightSidebar';
import PostCard from './components/feed/PostCard';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  const handleCreatePost = () => {
    if (!newPostTitle.trim()) return;
    setIsSubmitting(true);

    fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newPostTitle,
        tag: 'ma/general'
      })
    })
      .then(res => res.json())
      .then(post => {
        setPosts([post, ...posts]);
        setNewPostTitle("");
      })
      .catch(err => console.error("Error creating post:", err))
      .finally(() => setIsSubmitting(false));
  };
  return (
    <div className="relative min-h-screen">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/60 dark:bg-primary/50 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-blue-500/50 dark:bg-blue-600/40 blur-[140px]"></div>
        <div className="absolute top-[20%] left-[40%] w-[50%] h-[50%] rounded-full bg-purple-500/50 dark:bg-purple-600/40 blur-[120px]"></div>
      </div>

      <Navbar />

      <main className="w-full px-4 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <Sidebar className="lg:col-span-3" />

        <section className="col-span-1 lg:col-span-6 space-y-6">
          {/* Create Post Mock */}
          <div className="bg-white/60 dark:bg-primary/5 backdrop-blur-md border border-white/40 dark:border-primary/20 shadow-sm rounded-xl p-4 flex gap-4 items-center">
            <div className="h-10 w-10 rounded-full bg-primary/20 shrink-0 overflow-hidden">
              <img alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR0r7w9UdEpAkpJVKqyQtMpzy8-rUzsSXJxFs1nc27IfrOh1AvZOogvTBq9MUfbbe40CZxqaj5r4hvBG2qjwDMyUpA3uHog7IANMQ2JRRaT2WZLgdfHeTdqd7CujB0H-cgZFyuNzr9jlqKf2BmgkqJTC9fJ65x0gY9f_bP01yjtYSkh7j3z1ZAu2dJWMQE81B60_v1dr8p8GwZCy2TS3IFJ_vYy-3V9ZEDjOBCDRNVoWqR70ZMNQ2NmTASjxBKtqivUV0-__mV6ls2" />
            </div>
            <input
              className="flex-1 bg-slate-100 dark:bg-primary/10 border-transparent rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
              placeholder="Create a post"
              type="text"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreatePost()}
              disabled={isSubmitting}
            />
            <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/10 text-slate-500">
              <span className="material-symbols-outlined">image</span>
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/10 text-slate-500">
              <span className="material-symbols-outlined">link</span>
            </button>
            <button
              className="px-4 py-2 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              onClick={handleCreatePost}
              disabled={isSubmitting || !newPostTitle.trim()}
            >
              Post
            </button>
          </div>

          {posts.length === 0 ? (
            <div className="text-center text-slate-500 p-8">Loading posts mapping...</div>
          ) : posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>

        <RightSidebar className="lg:col-span-3" />
      </main>
    </div>
  );
}

export default App;
