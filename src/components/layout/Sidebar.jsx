import React from 'react';

const Sidebar = ({ className = "", activeTab, setActiveTab, onCommunityClick, communities = [] }) => {
    return (
        <aside className={`hidden lg:block space-y-6 ios-glass ios-glass-border ios-glass-shadow p-6 rounded-xl h-fit sticky top-24 ${className}`}>
            <nav className="space-y-2">
                <button
                    onClick={() => setActiveTab('feed')}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${activeTab === 'feed' ? 'ios-hover-active text-primary font-bold' : 'ios-hover'
                        }`}
                >
                    <span className="material-symbols-rounded">dynamic_feed</span>
                    <span>Feed</span>
                </button>
                <button
                    onClick={() => setActiveTab('trending')}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${activeTab === 'trending' ? 'ios-hover-active text-primary font-bold' : 'ios-hover'
                        }`}
                >
                    <span className="material-symbols-rounded">local_fire_department</span>
                    <span>Trending</span>
                </button>
                <button
                    onClick={() => setActiveTab('communities')}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${activeTab === 'communities' ? 'ios-hover-active text-primary font-bold' : 'ios-hover'
                        }`}
                >
                    <span className="material-symbols-rounded">groups_2</span>
                    <span>Communities</span>
                </button>
            </nav>
            <div className="pt-4 border-t border-white/40 dark:border-primary/20">
                <h3 className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 mt-2">My Communities</h3>
                <div className="space-y-2">
                    {communities.slice(0, 3).map(comm => (
                        <button
                            key={comm.id}
                            onClick={() => onCommunityClick(comm)}
                            className="w-full flex items-center gap-3 p-2 rounded-lg ios-hover transition-colors text-sm text-left"
                        >
                            <span className={`w-8 h-8 rounded ${comm.color} flex items-center justify-center text-sm font-bold shrink-0 shadow-sm`}>
                                {comm.id.split('/')[1][0]}
                            </span>
                            <span className="truncate">{comm.id}</span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
