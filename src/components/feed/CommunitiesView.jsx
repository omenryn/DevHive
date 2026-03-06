import React from 'react';


const CommunitiesView = ({ communities, onCommunityClick }) => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <h2 className="text-3xl font-extrabold tracking-tight">Browse Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communities.map(comm => (
                    <div
                        key={comm.id}
                        onClick={() => onCommunityClick(comm)}
                        className="ios-glass ios-glass-border ios-glass-shadow p-5 rounded-[2rem] flex flex-col gap-4 cursor-pointer ios-hover transition-all group border-transparent hover:border-white/40"
                    >
                        {/* Header Row */}
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className={`w-12 h-12 rounded-2xl ${comm.color} flex items-center justify-center text-xl font-bold shadow-lg shrink-0`}>
                                    {comm.id.split('/')[1][0]}
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="font-bold text-base truncate leading-tight">{comm.id}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Community</p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); }}
                                className="bg-primary hover:bg-primary/90 text-background-dark font-black px-5 py-2 rounded-xl text-[11px] shadow-lg shadow-primary/20 shrink-0 transition-all active:scale-90"
                            >
                                JOIN
                            </button>
                        </div>

                        {/* Stats Row - Centered and clear */}
                        <div className="flex items-center gap-4 bg-white/30 dark:bg-black/20 py-2 px-4 rounded-2xl w-fit">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Hivers</span>
                                <span className="text-sm font-black text-slate-700 dark:text-slate-200">{comm.members}</span>
                            </div>
                            <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">Hives</span>
                                <span className="text-sm font-black text-slate-700 dark:text-slate-200">{comm.posts}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-[13px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed px-1 font-medium italic">
                            {comm.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunitiesView;
