import React from 'react';

const Sidebar = ({ className = "" }) => {
    return (
        <aside className={`hidden lg:block space-y-6 ios-glass ios-glass-border ios-glass-shadow p-6 rounded-xl h-fit sticky top-24 ${className}`}>
            <nav className="space-y-2">
                <a className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 text-primary font-bold" href="#">
                    <span className="material-symbols-rounded">dynamic_feed</span>
                    <span>Feed</span>
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/5 transition-colors" href="#">
                    <span className="material-symbols-rounded">local_fire_department</span>
                    <span>Trending</span>
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/5 transition-colors" href="#">
                    <span className="material-symbols-rounded">groups_2</span>
                    <span>Communities</span>
                </a>
            </nav>
            <div className="pt-4 border-t border-white/40 dark:border-primary/20">
                <h3 className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 mt-2">My Communities</h3>
                <div className="space-y-2">
                    <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/5 text-sm" href="#">
                        <span className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-sm font-bold shrink-0">W</span>
                        <span className="truncate">ma/WebDev_MA</span>
                    </a>
                    <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/5 text-sm" href="#">
                        <span className="w-8 h-8 rounded bg-orange-500/20 text-orange-500 flex items-center justify-center text-sm font-bold shrink-0">A</span>
                        <span className="truncate">ma/AI_Morocco</span>
                    </a>
                    <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-primary/5 text-sm" href="#">
                        <span className="w-8 h-8 rounded bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm font-bold shrink-0">J</span>
                        <span className="truncate">ma/JobHunting</span>
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
