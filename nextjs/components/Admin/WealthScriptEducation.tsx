import React, { useState } from 'react';
import { Play, FileText, ChevronRight, Video, BookOpen, Code } from 'lucide-react';
import clsx from 'clsx';

export default function WealthScriptEducation() {
  const [activeTab, setActiveTab] = useState<'tutorials' | 'docs' | 'examples'>('tutorials');

  const TUTORIALS = [
      { id: 1, title: "WealthScript Basics 101", duration: "12:45", thumbColor: "bg-blue-600", views: "1.2k" },
      { id: 2, title: "Building Your First Strategy", duration: "18:20", thumbColor: "bg-emerald-600", views: "850" },
      { id: 3, title: "Indicator Logic & Custom Indicators", duration: "15:10", thumbColor: "bg-purple-600", views: "2.1k" },
      { id: 4, title: "Advanced Position Sizing", duration: "22:00", thumbColor: "bg-orange-600", views: "500" },
  ];

  const DOCS = [
      { title: "BarHistory Object", desc: "The core data structure containing Open, High, Low, Close, and Volume data series." },
      { title: "Indicators Class", desc: "Access library of 100+ technical indicators (RSI, SMA, MACD, etc.)." },
      { title: "Signal Generation", desc: "How to trigger Buy/Sell signals using PlaceTrade() methods." },
      { title: "ChartPane & Plotting", desc: "Visualizing indicators and debugging strategies on the chart." },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[600px]">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-900/50">
            <h2 className="text-xl font-bold text-slate-200 flex items-center gap-3">
                <BookOpen className="text-emerald-400" />
                WealthScript Learning Center
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-2xl">
                Master algorithmic trading with our comprehensive guides, video tutorials, and reference documentation for the WealthScript C# API and its Python/JS variants.
            </p>
        </div>

        {/* Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/50">
            <button
                onClick={() => setActiveTab('tutorials')}
                className={clsx("px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2", activeTab === 'tutorials' ? "border-blue-500 text-blue-400 bg-slate-800/50" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30")}
            >
                <Video size={16} /> Video Tutorials
            </button>
            <button
                onClick={() => setActiveTab('docs')}
                className={clsx("px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2", activeTab === 'docs' ? "border-blue-500 text-blue-400 bg-slate-800/50" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30")}
            >
                <BookOpen size={16} /> Documentation
            </button>
             <button
                onClick={() => setActiveTab('examples')}
                className={clsx("px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2", activeTab === 'examples' ? "border-blue-500 text-blue-400 bg-slate-800/50" : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30")}
            >
                <Code size={16} /> Strategy Examples
            </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-950">

            {/* Tutorials Tab */}
            {activeTab === 'tutorials' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TUTORIALS.map(vid => (
                        <div key={vid.id} className="group cursor-pointer">
                            <div className={`aspect-video rounded-lg ${vid.thumbColor} relative overflow-hidden flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-all`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                <div className="h-12 w-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play size={24} className="text-white fill-white ml-1" />
                                </div>
                                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 rounded text-[10px] text-white font-medium">{vid.duration}</span>
                            </div>
                            <h3 className="mt-3 font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{vid.title}</h3>
                            <p className="text-xs text-slate-500 mt-1">{vid.views} views • WealthLab Academy</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Documentation Tab */}
            {activeTab === 'docs' && (
                <div className="space-y-4 max-w-4xl">
                    {DOCS.map((doc, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-colors">
                            <h4 className="text-base font-semibold text-blue-400 flex items-center gap-2">
                                <ChevronRight size={16} /> {doc.title}
                            </h4>
                            <p className="text-slate-400 text-sm mt-2 ml-6">{doc.desc}</p>
                        </div>
                    ))}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 mt-8">
                         <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Quick Reference: Buy at Market</h4>
                         <pre className="bg-slate-950 p-4 rounded text-xs font-mono text-emerald-400 overflow-x-auto">
{`// C#
if (rsi[idx] < 30)
    PlaceTrade(bars, TransactionType.Buy, TransactionType.Market, 0, 0, "Signal Name");

// Python
if self.rsi[idx] < 30:
    self.buy_market(label="Signal Name")`}
                         </pre>
                    </div>
                </div>
            )}

            {/* Examples Tab */}
             {activeTab === 'examples' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-slate-200">Golden Cross (SMA)</h4>
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">Trend Following</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">A classic strategy that buys when the fast moving average (SMA 50) crosses above the slow moving average (SMA 200).</p>
                        <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-sm font-medium transition-colors border border-slate-700 flex items-center justify-center gap-2">
                            <FileText size={14} /> View Source Code
                        </button>
                    </div>

                     <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-slate-200">RSI 2-Period Reversion</h4>
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">Mean Reversion</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">Aggressive short-term strategy. Buys when 2-period RSI drops below 10, sells when it rises above 90.</p>
                        <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-sm font-medium transition-colors border border-slate-700 flex items-center justify-center gap-2">
                            <FileText size={14} /> View Source Code
                        </button>
                    </div>
                </div>
            )}

        </div>
    </div>
  );
}
