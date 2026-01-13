import React, { useState, useEffect } from 'react';
import { Terminal, CheckCircle, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

interface LogEntry {
    id: number;
    timestamp: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
}

export default function LiveLog() {
    const [logs, setLogs] = useState<LogEntry[]>([
        { id: 1, timestamp: '10:42:01', message: 'System initialized. Connecting to liquidity providers...', type: 'info' },
        { id: 2, timestamp: '10:42:05', message: 'Connected to Binance, Kraken, and CME.', type: 'success' },
        { id: 3, timestamp: '10:42:15', message: 'Scanning SPX 500 tickers for volatility spikes.', type: 'info' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const actions = [
                { msg: 'Scanning market depth...', type: 'info' },
                { msg: 'Signal detected: NVDA LONG @ 485.20', type: 'success' },
                { msg: 'Order filled: 150 shares NVDA', type: 'success' },
                { msg: 'Adjusting trailing stop for EUR/USD', type: 'warning' },
                { msg: 'Latency spike detected on feed #2', type: 'error' },
                { msg: 'Analyzing sentiment on social feeds...', type: 'info' },
            ];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];

            const newLog: LogEntry = {
                id: Date.now(),
                timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
                message: randomAction.msg,
                type: randomAction.type as any,
            };

            setLogs(prev => [newLog, ...prev].slice(0, 8));
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col h-[300px]">
             <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Terminal size={16} className="text-emerald-400" />
                Live Execution Log
            </h3>
            <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 overflow-y-auto space-y-2 pr-2 font-mono text-xs">
                    {logs.map((log) => (
                        <div key={log.id} className="flex gap-3 items-start border-l-2 border-slate-800 pl-3 py-1 animate-in fade-in slide-in-from-top-2 duration-300">
                            <span className="text-slate-500 shrink-0">{log.timestamp}</span>
                            <span className={clsx(
                                "break-all",
                                log.type === 'info' && "text-slate-300",
                                log.type === 'success' && "text-emerald-400",
                                log.type === 'warning' && "text-yellow-400",
                                log.type === 'error' && "text-red-400"
                            )}>
                                {log.message}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
