import React from 'react';
import { Shield, TrendingUp, TrendingDown } from 'lucide-react';

export default function AccountHealth() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col space-y-4">
      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Shield size={16} className="text-purple-400" />
            PropFirm Risk Monitor
      </h3>

      <div className="grid grid-cols-2 gap-3">
         <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <p className="text-xs text-slate-500 uppercase">Daily Loss Limit</p>
            <div className="flex items-end justify-between mt-1">
                <span className="text-lg font-bold text-slate-200">$2,340</span>
                <span className="text-xs text-slate-500 mb-1">/ $5,000</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1 mt-2">
                <div className="bg-yellow-500 h-1 rounded-full w-[46%]"></div>
            </div>
         </div>
         <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <p className="text-xs text-slate-500 uppercase">Max Drawdown</p>
            <div className="flex items-end justify-between mt-1">
                <span className="text-lg font-bold text-slate-200">$4,100</span>
                <span className="text-xs text-slate-500 mb-1">/ $10,000</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1 mt-2">
                <div className="bg-purple-500 h-1 rounded-full w-[41%]"></div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2">
         <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded text-center">
            <p className="text-[10px] text-emerald-400 uppercase">Win Rate</p>
            <p className="text-lg font-bold text-emerald-300">68%</p>
         </div>
          <div className="bg-blue-500/10 border border-blue-500/20 p-2 rounded text-center">
            <p className="text-[10px] text-blue-400 uppercase">Profit Factor</p>
            <p className="text-lg font-bold text-blue-300">2.4</p>
         </div>
          <div className="bg-slate-800/50 border border-slate-700/50 p-2 rounded text-center">
            <p className="text-[10px] text-slate-400 uppercase">Trades</p>
            <p className="text-lg font-bold text-slate-300">42</p>
         </div>
      </div>
    </div>
  );
}
