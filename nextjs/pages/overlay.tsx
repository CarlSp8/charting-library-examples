import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Cpu, TrendingUp, Activity, DollarSign } from "lucide-react";
import clsx from "clsx";
import { useRouter } from 'next/router';

const Overlay: NextPage = () => {
    const router = useRouter();
    const isTransparent = router.query.transparent === 'true';

    // Mock Live Data
    const [pnl, setPnl] = useState(12450.50);
    const [confidence, setConfidence] = useState(98);
    const [tickerOffset, setTickerOffset] = useState(0);

    // Simulation Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setPnl(prev => prev + (Math.random() - 0.4) * 50);
            setConfidence(prev => Math.min(100, Math.max(80, prev + (Math.random() - 0.5) * 5)));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Ticker Animation
    useEffect(() => {
        let frameId: number;
        const animate = () => {
            setTickerOffset(prev => (prev - 1) % 1000); // Reset after some distance
            frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    const TICKER_ITEMS = [
        { sym: "SPX", val: "4,780.25", change: "+0.45%" },
        { sym: "NDX", val: "16,832.10", change: "+0.12%" },
        { sym: "BTC", val: "46,250.00", change: "+1.20%" },
        { sym: "ETH", val: "2,450.00", change: "+0.85%" },
        { sym: "XAU", val: "2,045.10", change: "-0.15%" },
        { sym: "EUR/USD", val: "1.0950", change: "+0.05%" },
        { sym: "NVDA", val: "485.20", change: "+2.40%" },
        { sym: "TSLA", val: "245.30", change: "-1.10%" },
    ];

    return (
        <div className={clsx(
            "min-h-screen font-sans overflow-hidden relative flex flex-col justify-between p-8",
            isTransparent ? "bg-transparent" : "bg-slate-950"
        )}>
            <Head>
                <title>ApSciOS | Broadcast Overlay</title>
            </Head>

            {/* Top Right: PnL HUD */}
            <div className="absolute top-8 right-8 flex flex-col items-end space-y-2">
                <div className="bg-slate-900/90 border border-slate-700 backdrop-blur-md p-4 rounded-xl shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-right duration-700">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 animate-pulse">
                        <DollarSign size={24} />
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Total PnL</p>
                        <p className={clsx("text-2xl font-mono font-bold", pnl >= 0 ? "text-emerald-400" : "text-red-400")}>
                            ${pnl.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                    </div>
                </div>
            </div>

            {/* Top Left: AI Status */}
            <div className="absolute top-8 left-8">
                 <div className="bg-slate-900/90 border border-slate-700 backdrop-blur-md p-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-left duration-700">
                    <Cpu size={20} className="text-blue-400" />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-200">ApSciOS AI</span>
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        </div>
                        <div className="w-32 bg-slate-800 rounded-full h-1 mt-1">
                            <div className="bg-blue-500 h-1 rounded-full transition-all duration-1000" style={{ width: `${confidence}%` }}></div>
                        </div>
                        <p className="text-[10px] text-blue-400 mt-0.5 text-right">{confidence.toFixed(0)}% Conf</p>
                    </div>
                 </div>
            </div>

            {/* Center: Open Trades (Optional, kept minimal) */}
            {/* ... */}

            {/* Bottom: Ticker Tape */}
            <div className="absolute bottom-8 left-0 right-0 overflow-hidden bg-slate-900/80 border-y border-slate-700 backdrop-blur-md h-12 flex items-center">
                <div className="flex items-center whitespace-nowrap" style={{ transform: `translateX(${tickerOffset}px)` }}>
                    {/* Duplicate items for infinite scroll illusion */}
                    {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2 px-6 border-r border-slate-700/50">
                            <span className="font-bold text-slate-200">{item.sym}</span>
                            <span className="font-mono text-slate-300">{item.val}</span>
                            <span className={clsx("text-xs font-medium", item.change.startsWith('+') ? "text-emerald-400" : "text-red-400")}>
                                {item.change}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* OBS Instructions (Only visible if not transparent, assuming transparent = OBS mode) */}
            {!isTransparent && (
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="text-center">
                        <h1 className="text-6xl font-black text-slate-800 uppercase tracking-tighter">OBS Overlay</h1>
                        <p className="text-xl text-slate-700 mt-2">Add ?transparent=true to URL</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Overlay;
