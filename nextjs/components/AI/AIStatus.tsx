import React from 'react';
import { Cpu, Activity, Zap } from 'lucide-react';

export default function AIStatus() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Cpu size={16} className="text-blue-400" />
            AI Core Status
        </h3>
        <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
            <p className="text-xs text-slate-500 uppercase">Current Model</p>
            <p className="text-sm font-mono text-blue-300 mt-1">DeepAlpha v4.2</p>
        </div>
        <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
            <p className="text-xs text-slate-500 uppercase">Uptime</p>
            <p className="text-sm font-mono text-emerald-300 mt-1">48h 12m 04s</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
            <span>Market Scanning</span>
            <span className="text-emerald-400">Active</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-1.5 rounded-full w-3/4 animate-pulse"></div>
        </div>
      </div>
       <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
            <span>Execution Latency</span>
            <span className="text-blue-400">12ms</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-500 h-1.5 rounded-full w-[10%]"></div>
        </div>
      </div>

      <div className="pt-2">
         <button className="w-full py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 text-red-400 text-xs font-bold uppercase rounded transition-colors flex items-center justify-center gap-2">
            <Zap size={14} /> Emergency Halt
         </button>
      </div>
    </div>
  );
}
