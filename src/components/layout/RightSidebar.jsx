import React from 'react';

const RightSidebar = ({ className = "", onCommunityClick, communities = [] }) => {
    return (
        <aside className={`hidden lg:block space-y-6 ${className}`}>
            {/* Popular Communities */}
            <div className="ios-glass ios-glass-border ios-glass-shadow rounded-xl overflow-hidden">
                <div className="p-4 border-b border-white/40 dark:border-primary/20 bg-primary/5 text-center">
                    <h3 className="font-bold text-sm">Trending Communities</h3>
                </div>
                <div className="p-2">
                    {communities.slice(3, 6).map((comm, index) => (
                        <div
                            key={comm.id}
                            onClick={() => onCommunityClick(comm)}
                            className="flex items-center justify-between p-2 ios-hover rounded-lg cursor-pointer transition-colors"
                        >
                            <div className="flex items-center gap-3 overflow-hidden">
                                <span className="font-bold text-slate-400 shrink-0 w-4">{index + 1}</span>
                                <div className={`w-8 h-8 rounded-full ${comm.color} shrink-0`}></div>
                                <div className="overflow-hidden">
                                    <p className="text-xs font-bold truncate">{comm.id}</p>
                                    <p className="text-[9px] text-slate-500">{comm.posts} hives today</p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); }}
                                className="bg-primary text-background-dark text-[10px] font-black px-3 py-1.5 rounded-full shrink-0 ml-4 hover:scale-110 transition-transform"
                            >
                                JOIN
                            </button>
                        </div>
                    ))}
                </div>
                <div className="p-3 text-center">
                    <button className="text-xs font-bold text-primary hover:underline">View All</button>
                </div>
            </div>

            {/* Community Rules / Info */}
            <div className="ios-glass ios-glass-border ios-glass-shadow rounded-xl p-4 flex flex-col items-center text-center">
                <h3 className="font-bold mb-4">DevHive Community</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    The hive for Moroccan developers. Share knowledge, find opportunities, and connect with peers across the Kingdom. 🇲🇦
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4 w-full">
                    <div>
                        <p className="text-lg font-bold">45.2k</p>
                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Members</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold">128</p>
                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Online</p>
                    </div>
                </div>
                <button className="w-full bg-primary text-background-dark font-bold py-2 rounded-full mb-2">Create Post</button>
            </div>

            {/* Footer Links */}
            <div className="px-4 text-[11px] text-slate-500 space-y-1 flex flex-col items-center text-center">
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                    <a className="hover:underline" href="#">User Agreement</a>
                    <a className="hover:underline" href="#">Privacy Policy</a>
                    <a className="hover:underline" href="#">Content Policy</a>
                    <a className="hover:underline" href="#">Moderator Code</a>
                </div>
                <p className="pt-2">DevHive Inc © 2026. All rights reserved.</p>
            </div>
        </aside>
    );
};

export default RightSidebar;
