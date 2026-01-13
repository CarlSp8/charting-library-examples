import React from 'react';

export const TVChartContainer = () => {
    return (
        <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
             {/* Grid Background Mock */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Chart Content Mock */}
             <div className="z-10 text-center space-y-4">
                <div className="inline-block p-4 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                    <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-200">Institutional Charting Engine</h3>
                    <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
                        High-frequency data feed connection established. <br/>
                        Visualizing order flow and liquidity pools.
                    </p>
                </div>
                <div className="flex gap-2 justify-center mt-4">
                     <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">H1</span>
                     <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">D1</span>
                     <span className="px-2 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/50 rounded text-xs font-mono">M5</span>
                </div>
            </div>

             {/* Mock Candles */}
            <div className="absolute bottom-10 left-0 right-0 h-32 flex items-end justify-around px-10 opacity-30">
                 {[...Array(20)].map((_, i) => (
                    <div key={i} className={`w-3 rounded-t ${Math.random() > 0.5 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${Math.random() * 100}%` }}></div>
                 ))}
            </div>
        </div>
    );
};
