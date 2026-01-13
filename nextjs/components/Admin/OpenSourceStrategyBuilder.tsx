import React, { useState } from 'react';
import { Code, Play, Layers, Save, FolderOpen, Globe } from 'lucide-react';
import clsx from 'clsx';

type Language = 'csharp' | 'python' | 'javascript';

export default function OpenSourceStrategyBuilder() {
  const [mode, setMode] = useState<'block' | 'code'>('block');
  const [language, setLanguage] = useState<Language>('csharp');

  const getBoilerplate = (lang: Language) => {
      switch(lang) {
          case 'python':
              return `import pandas as pd
import talib
from wealthlab.strategy import Strategy

class MyStrategy(Strategy):
    def initialize(self, bars):
        self.rsi = talib.RSI(bars['close'], timeperiod=14)

    def execute(self, bars, idx):
        if not self.has_open_position():
            # Buy Rule
            if self.rsi[idx] < 30:
                self.buy_market(label="RSI Oversold")
        else:
            # Sell Rule
            if self.rsi[idx] > 70:
                self.sell_market(label="RSI Overbought")`;

          case 'javascript':
              return `const { Strategy, Indicators } = require('wealthlab-core');

class MyStrategy extends Strategy {
    initialize(bars) {
        this.rsi = Indicators.RSI(bars.close, 14);
    }

    execute(bars, idx) {
        if (!this.hasOpenPosition()) {
            // Buy Rule
            if (this.rsi[idx] < 30) {
                this.buyMarket({ label: "RSI Oversold" });
            }
        } else {
            // Sell Rule
            if (this.rsi[idx] > 70) {
                this.sellMarket({ label: "RSI Overbought" });
            }
        }
    }
}`;

          default: // csharp
              return `using WealthLab.Backtest;
using System;
using WealthLab.Core;
using WealthLab.Indicators;
using System.Drawing;
using System.Collections.Generic;

namespace WealthLab.Strategies
{
    public class MyStrategy : UserStrategyBase
    {
        //create indicators and other objects here, that is safe to access from multiple threads
        public override void Initialize(BarHistory bars)
        {
            rsi = RSI.Series(bars.Close, 14);
            PlotStopsAndLimits(3);
        }

        //execute the strategy
        public override void Execute(BarHistory bars, int idx)
        {
            if (!HasOpenPosition(bars, idx))
            {
                // Buy Rule
                if (rsi[idx] < 30)
                {
                    PlaceTrade(bars, TransactionType.Buy, TransactionType.Market, 0, 0, "RSI Oversold");
                }
            }
            else
            {
                // Sell Rule
                if (rsi[idx] > 70)
                {
                    PlaceTrade(bars, TransactionType.Sell, TransactionType.Market, 0, 0, "RSI Overbought");
                }
            }
        }

        //declare private variables below
        RSI rsi;
    }
}`;
      }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl flex flex-col h-[600px] overflow-hidden">
      {/* Toolbar */}
      <div className="bg-slate-950 border-b border-slate-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
             <div className="flex bg-slate-800 rounded p-1">
                <button
                    onClick={() => setMode('block')}
                    className={clsx("px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-2", mode === 'block' ? "bg-slate-700 text-white shadow-sm" : "text-slate-400 hover:text-slate-200")}
                >
                    <Layers size={14} /> Building Blocks
                </button>
                <button
                    onClick={() => setMode('code')}
                    className={clsx("px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-2", mode === 'code' ? "bg-slate-700 text-white shadow-sm" : "text-slate-400 hover:text-slate-200")}
                >
                    <Code size={14} /> Code Editor
                </button>
             </div>

             {/* Language Selector (Only visible in Code mode) */}
             {mode === 'code' && (
                 <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2">
                    <span className="text-slate-500 text-xs">Language:</span>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as Language)}
                        className="bg-slate-800 border-none rounded text-xs text-slate-200 py-1 pl-2 pr-8 focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="csharp">C# (WealthScript)</option>
                        <option value="python">Python (Pandas)</option>
                        <option value="javascript">JavaScript (Node.js)</option>
                    </select>
                 </div>
             )}

             <div className="h-6 w-px bg-slate-800"></div>
             <h3 className="text-slate-200 font-semibold text-sm hidden md:block">MIT WealthLab Variant (Open Source)</h3>
        </div>
        <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-medium flex items-center gap-2 border border-slate-700">
                <FolderOpen size={14} /> Open
            </button>
             <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-medium flex items-center gap-2 border border-slate-700">
                <Save size={14} /> Save
            </button>
            <button className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-600/50 rounded text-xs font-medium flex items-center gap-2">
                <Play size={14} /> Run Backtest
            </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Components */}
        <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
            <div className="p-3 border-b border-slate-800 bg-slate-950/50">
                <input type="text" placeholder="Search Components..." className="w-full bg-slate-800 border-none rounded px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {['RSI', 'MACD', 'SMA', 'EMA', 'Bollinger Bands', 'ATR', 'Stochastic', 'Volume', 'Price Action'].map(item => (
                    <div key={item} className="px-3 py-2 text-xs text-slate-400 hover:bg-slate-800 hover:text-slate-200 rounded cursor-pointer flex justify-between items-center group">
                        {item}
                        <PlusIcon className="opacity-0 group-hover:opacity-100 text-slate-500" />
                    </div>
                ))}
            </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 bg-slate-950 p-6 overflow-y-auto">
            {mode === 'block' ? (
                <div className="space-y-4">
                    <div className="bg-slate-900 border border-slate-800 rounded p-4 relative group">
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100">
                             <button className="text-slate-500 hover:text-red-400"><XIcon /></button>
                        </div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Buy Rule</h4>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <span>If</span>
                            <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">RSI(14)</span>
                            <span>crosses below</span>
                            <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">30</span>
                        </div>
                    </div>

                     <div className="bg-slate-900 border border-slate-800 rounded p-4 relative group">
                        <h4 className="text-sm font-semibold text-purple-400 mb-2">Sell Rule</h4>
                         <div className="flex items-center gap-2 text-sm text-slate-300">
                            <span>If</span>
                            <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Price</span>
                            <span>crosses above</span>
                            <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">SMA(200)</span>
                        </div>
                    </div>

                    <div className="border-2 border-dashed border-slate-800 rounded p-8 flex items-center justify-center text-slate-600 text-sm hover:border-slate-700 hover:bg-slate-900/50 cursor-pointer transition-colors">
                        + Drag Building Blocks Here
                    </div>
                </div>
            ) : (
                <div className="h-full font-mono text-xs text-slate-300">
                    <pre className={clsx(
                        "language-" + (language === 'csharp' ? 'csharp' : language === 'python' ? 'python' : 'javascript')
                    )}>
{getBoilerplate(language)}
                    </pre>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

const PlusIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const XIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);
