import type { NextPage } from "next";
import DashboardLayout from "../layouts/DashboardLayout";
import dynamic from 'next/dynamic';
import Head from "next/head";
import { useState } from "react";
import { Settings, Code, BookOpen } from "lucide-react";
import clsx from "clsx";

// Dynamic imports
const StrategyBuilder = dynamic(() => import('../components/Admin/StrategyBuilder'), { ssr: false, loading: () => <p className="text-slate-500">Loading Visual Builder...</p> });
const OpenSourceStrategyBuilder = dynamic(() => import('../components/Admin/OpenSourceStrategyBuilder'), { ssr: false, loading: () => <p className="text-slate-500">Loading Open Source Builder...</p> });
const WealthScriptEducation = dynamic(() => import('../components/Admin/WealthScriptEducation'), { ssr: false, loading: () => <p className="text-slate-500">Loading Education...</p> });

const StrategyPage: NextPage = () => {
    const [builderType, setBuilderType] = useState<'standard' | 'wealthlab' | 'education'>('standard');

    return (
        <DashboardLayout>
            <Head>
                <title>ApSciOS | Strategy Lab</title>
            </Head>

            <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-200">Strategy Lab</h1>
                        <p className="text-slate-500 text-sm mt-1">Design, backtest, and deploy algorithmic strategies.</p>
                    </div>

                    <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-800">
                        <button
                            onClick={() => setBuilderType('standard')}
                            className={clsx(
                                "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                                builderType === 'standard'
                                    ? "bg-slate-800 text-blue-400 shadow-sm border border-slate-700/50"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                            )}
                        >
                            <Settings size={16} />
                            Standard
                        </button>
                        <button
                            onClick={() => setBuilderType('wealthlab')}
                            className={clsx(
                                "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                                builderType === 'wealthlab'
                                    ? "bg-slate-800 text-emerald-400 shadow-sm border border-slate-700/50"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                            )}
                        >
                            <Code size={16} />
                            Code / WealthLab
                        </button>
                        <button
                            onClick={() => setBuilderType('education')}
                            className={clsx(
                                "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                                builderType === 'education'
                                    ? "bg-slate-800 text-purple-400 shadow-sm border border-slate-700/50"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                            )}
                        >
                            <BookOpen size={16} />
                            Learn
                        </button>
                    </div>
                </div>

                <div className="animate-in fade-in duration-500">
                    {builderType === 'standard' && <StrategyBuilder />}
                    {builderType === 'wealthlab' && <OpenSourceStrategyBuilder />}
                    {builderType === 'education' && <WealthScriptEducation />}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                     <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                        <h4 className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Backtest Engine</h4>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                            <span className="text-slate-200 text-sm">Ready - 4 Cores Available</span>
                        </div>
                     </div>
                     <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                        <h4 className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Data Feed</h4>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                            <span className="text-slate-200 text-sm">Connected (Tick-Data)</span>
                        </div>
                     </div>
                     <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                        <h4 className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Deployment</h4>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <span className="text-slate-200 text-sm">Paper Trading Environment</span>
                        </div>
                     </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default StrategyPage;
