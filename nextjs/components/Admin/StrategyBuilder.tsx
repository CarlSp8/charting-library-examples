import React from 'react';
import { Settings, Plus, Save } from 'lucide-react';

export default function StrategyBuilder() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
             <h2 className="text-xl font-bold text-slate-200 flex items-center gap-3">
                <Settings className="text-blue-400" />
                Strategy Builder
            </h2>
            <div className="flex gap-3">
                 <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    <Save size={16} /> Save Strategy
                </button>
                 <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    <Plus size={16} /> Add Rule
                </button>
            </div>
        </div>

        <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 border-l-4 border-l-blue-500">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-semibold text-slate-200">RSI Divergence (14)</h4>
                        <p className="text-sm text-slate-500 mt-1">Triggers when RSI dips below 30 and price makes a lower low.</p>
                    </div>
                     <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">Active</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                     <div>
                        <label className="text-xs text-slate-500 uppercase block mb-1">Timeframe</label>
                        <select className="w-full bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded px-3 py-2">
                            <option>1 Minute</option>
                            <option>5 Minutes</option>
                            <option>15 Minutes</option>
                        </select>
                     </div>
                      <div>
                        <label className="text-xs text-slate-500 uppercase block mb-1">RSI Period</label>
                        <input type="number" defaultValue="14" className="w-full bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded px-3 py-2" />
                     </div>
                      <div>
                        <label className="text-xs text-slate-500 uppercase block mb-1">Threshold</label>
                        <input type="number" defaultValue="30" className="w-full bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded px-3 py-2" />
                     </div>
                </div>
            </div>

             <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 border-l-4 border-l-purple-500 opacity-75">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-semibold text-slate-200">MACD Crossover</h4>
                        <p className="text-sm text-slate-500 mt-1">Triggers on bullish crossover of MACD line and Signal line.</p>
                    </div>
                     <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded border border-slate-700">Inactive</span>
                </div>
            </div>
        </div>
    </div>
  );
}
