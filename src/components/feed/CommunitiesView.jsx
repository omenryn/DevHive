import React from 'react';

const COMMUNITIES = [
    { id: 'ma/WebDev_MA', members: '12.4k', color: 'bg-emerald-500/20 text-emerald-500' },
    { id: 'ma/AI_Morocco', members: '8.2k', color: 'bg-orange-500/20 text-orange-500' },
    { id: 'ma/JobHunting', members: '15.1k', color: 'bg-blue-500/20 text-blue-500' },
    { id: 'ma/Frontend', members: '5.6k', color: 'bg-indigo-500/20 text-indigo-500' },
    { id: 'ma/Python_MA', members: '4.3k', color: 'bg-amber-500/20 text-amber-500' },
    { id: 'ma/OpenSource', members: '2.9k', color: 'bg-emerald-600/20 text-emerald-600' }
];

const CommunitiesView = ({ onCommunityClick }) => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <h2 className="text-3xl font-extrabold tracking-tight">Browse Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COMMUNITIES.map(comm => (
                    <div
                        key={comm.id}
                        onClick={() => onCommunityClick(comm)}
                        className="ios-glass ios-glass-border ios-glass-shadow p-6 rounded-2xl flex items-center justify-between cursor-pointer ios-hover transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl ${comm.color} flex items-center justify-center text-xl font-bold shadow-sm`}>
                                {comm.id.split('/')[1][0]}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{comm.id}</h3>
                                <p className="text-sm text-slate-500">{comm.members} members</p>
                            </div>
                        </div>
                        <button className="bg-primary text-background-dark font-bold px-4 py-2 rounded-full text-sm shadow-lg shadow-primary/20">
                            Join
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunitiesView;
