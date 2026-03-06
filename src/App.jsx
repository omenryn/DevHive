import React, { useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import RightSidebar from './components/layout/RightSidebar';
import PostCard from './components/feed/PostCard';
import LandingPage from './components/auth/LandingPage';
import PostView from './components/feed/PostView';
import CommunitiesView from './components/feed/CommunitiesView';

const MOCK_POSTS = [
  {
    id: 1,
    title: "How to master React in 2026 for the Moroccan market?",
    excerpt: "Salam developers! I've been seeing a lot of questions about which stack to choose for local startups. React remains dominant because of the large pool of talent and mature ecosystem...",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
    author: "yassine_dev",
    tag: "ma/react_js",
    time: "2h ago",
    votes: 342,
    comments: 42
  },
  {
    id: 2,
    title: "Best resources to learn Flutter in Darija?",
    excerpt: "I'm looking for YouTube channels or courses that explain mobile development in our local language. Any recommendations?",
    author: "noura_codes",
    tag: "ma/flutter",
    time: "5h ago",
    votes: 156,
    comments: 28
  },
  {
    id: 3,
    title: "A glimpse into Morocco's growing AI ecosystem",
    excerpt: "From UM6P initiatives to private startups in Casablanca, AI is taking off. Here's what you need to know about current opportunities and research centers...",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    author: "omar_tech",
    tag: "ma/ai_morocco",
    time: "10h ago",
    votes: 890,
    comments: 112
  },
  {
    id: 4,
    title: "Is anyone going to DevFest Casablanca this year?",
    excerpt: "Just got my ticket for DevFest! Looking forward to the sessions on Web3 and Cloud Native. Who else is joining? Let's meet up!",
    author: "saad_cloud",
    tag: "ma/events",
    time: "12h ago",
    votes: 420,
    comments: 65
  },
  {
    id: 5,
    title: "How I landed my first remote job from Morocco paying in USD 🚀",
    excerpt: "Story time! It took me 6 months of applying, countless rejections, and refining my portfolio. Here is the exact strategy I used and the platforms that worked for me...",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop",
    author: "laila_remote",
    tag: "ma/career",
    time: "1d ago",
    votes: 1250,
    comments: 310
  },
  {
    id: 6,
    title: "Next.js vs Remix - What's the best choice for e-commerce?",
    excerpt: "I'm building a new online store for a local client. I've used Next.js extensively but I keep hearing good things about Remix's data loading. Thoughts?",
    author: "ilyas_frontend",
    tag: "ma/webdev",
    time: "1d ago",
    votes: 215,
    comments: 54
  },
  {
    id: 7,
    title: "Starting a new OSS project: Darija NLP toolkit",
    excerpt: "Salam everyone! I'm starting an open-source project to build NLP tools specifically tailored for Moroccan Darija. Looking for contributors who are passionate about Python and Machine Learning.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
    author: "asmaa_data",
    tag: "ma/opensource",
    time: "2d ago",
    votes: 680,
    comments: 89
  },
  {
    id: 8,
    title: "Best co-working spaces in Rabat for software engineers?",
    excerpt: "Working from home is getting a bit lonely. Can anyone recommend some good co-working spaces in Rabat with reliable fiber optics and good coffee?",
    author: "mehdi_backend",
    tag: "ma/networking",
    time: "3d ago",
    votes: 95,
    comments: 21
  }
];

const MOCK_COMMUNITIES = [
  { id: 'ma/WebDev_MA', members: '12.4k', posts: '1.2k', color: 'bg-emerald-500/20 text-emerald-500', description: 'The official home for web developers in Morocco. React, Vue, Node, and more!' },
  { id: 'ma/AI_Morocco', members: '8.2k', posts: '850', color: 'bg-orange-500/20 text-orange-500', description: 'Exploring the future of Artificial Intelligence in the Kingdom. LLMs, Data Science, and ML.' },
  { id: 'ma/JobHunting', members: '15.1k', posts: '3.4k', color: 'bg-blue-500/20 text-blue-500', description: 'Find your next career move. Remote jobs, local startups, and interview tips.' },
  { id: 'ma/Frontend', members: '5.6k', posts: '420', color: 'bg-indigo-500/20 text-indigo-500', description: 'Focusing on the beauty of the web. UI/UX, CSS, and modern framework discussions.' },
  { id: 'ma/Python_MA', members: '4.3k', posts: '310', color: 'bg-amber-500/20 text-amber-500', description: 'The Pythonista community of Morocco. Backend, Automation, and Scripting.' },
  { id: 'ma/OpenSource', members: '2.9k', posts: '150', color: 'bg-emerald-600/20 text-emerald-600', description: 'Building together. Contribute to Moroccan projects and share your own.' }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('feed'); // 'feed', 'trending', 'communities', 'community-detail', 'post-detail'
  const [selectedEntity, setSelectedEntity] = useState(null);

  if (!isLoggedIn) {
    return <LandingPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const getFilteredPosts = () => {
    let posts = [...MOCK_POSTS];
    if (activeTab === 'trending') {
      return posts.sort((a, b) => b.votes - a.votes);
    }
    if (activeTab === 'community-detail' && selectedEntity) {
      return posts.filter(p => p.tag === selectedEntity.id);
    }
    return posts;
  };

  const displayedPosts = getFilteredPosts();

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
        <Sidebar
          className="lg:col-span-3"
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setSelectedEntity(null);
          }}
          onCommunityClick={(comm) => {
            setSelectedEntity(comm);
            setActiveTab('community-detail');
          }}
          communities={MOCK_COMMUNITIES}
        />

        <section className="col-span-1 lg:col-span-6 space-y-6">
          {activeTab === 'feed' && (
            /* Create Post Mock */
            <div className="ios-glass ios-glass-border ios-glass-shadow rounded-xl p-4 flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-primary/20 shrink-0 overflow-hidden">
                <img alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR0r7w9UdEpAkpJVKqyQtMpzy8-rUzsSXJxFs1nc27IfrOh1AvZOogvTBq9MUfbbe40CZxqaj5r4hvBG2qjwDMyUpA3uHog7IANMQ2JRRaT2WZLgdfHeTdqd7CujB0H-cgZFyuNzr9jlqKf2BmgkqJTC9fJ65x0gY9f_bP01yjtYSkh7j3z1ZAu2dJWMQE81B60_v1dr8p8GwZCy2TS3IFJ_vYy-3V9ZEDjOBCDRNVoWqR70ZMNQ2NmTASjxBKtqivUV0-__mV6ls2" />
              </div>
              <input className="flex-1 bg-slate-100 dark:bg-primary/10 border-transparent rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Create a post" type="text" />
              <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/10 text-slate-500">
                <span className="material-symbols-outlined">image</span>
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/10 text-slate-500">
                <span className="material-symbols-outlined">link</span>
              </button>
            </div>
          )}

          {activeTab === 'communities' && (
            <CommunitiesView
              communities={MOCK_COMMUNITIES}
              onCommunityClick={(comm) => {
                setSelectedEntity(comm);
                setActiveTab('community-detail');
              }}
            />
          )}

          {activeTab === 'community-detail' && selectedEntity && (
            <div className="ios-glass ios-glass-border p-8 rounded-[2.5rem] animate-in fade-in duration-500 flex flex-col gap-6">
              {/* Header: Icon & Title */}
              <div className="flex items-center gap-6">
                <div className={`w-24 h-24 rounded-[1.5rem] ${selectedEntity.color} flex items-center justify-center text-4xl font-bold shadow-2xl shrink-0`}>
                  {selectedEntity.id.split('/')[1][0]}
                </div>
                <div>
                  <h2 className="text-4xl font-black tracking-tight leading-none">{selectedEntity.id}</h2>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mt-3 opacity-60">Verified Official Hive</p>
                </div>
              </div>

              {/* Bio */}
              <div className="max-w-3xl pr-4">
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium italic leading-relaxed">
                  "{selectedEntity.description}"
                </p>
              </div>

              {/* Footer Stats & Button Area */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/20 dark:border-white/5">
                <div className="flex items-center gap-10">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest opacity-60">Active Hivers</span>
                    <span className="text-2xl font-black text-slate-800 dark:text-slate-100">{selectedEntity.members}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-primary font-black uppercase tracking-widest">Total Hives</span>
                    <span className="text-2xl font-black text-slate-800 dark:text-slate-100">{selectedEntity.posts}</span>
                  </div>
                </div>

                <button className="bg-primary hover:bg-primary/90 text-background-dark font-black px-12 py-4 rounded-2xl text-base shadow-2xl shadow-primary/30 transition-all active:scale-95 hover:shadow-primary/50">
                  JOIN HIVE
                </button>
              </div>
            </div>
          )}

          {activeTab === 'post-detail' && selectedEntity ? (
            <PostView post={selectedEntity} onBack={() => setActiveTab('feed')} />
          ) : (
            <>
              {['feed', 'trending', 'community-detail'].includes(activeTab) && (
                <div className="space-y-6">
                  {displayedPosts.map(post => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onClick={() => {
                        setSelectedEntity(post);
                        setActiveTab('post-detail');
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        <RightSidebar
          className="lg:col-span-3"
          onCommunityClick={(comm) => {
            setSelectedEntity(comm);
            setActiveTab('community-detail');
          }}
          communities={MOCK_COMMUNITIES}
        />
      </main>
    </div>
  );
}

export default App;
