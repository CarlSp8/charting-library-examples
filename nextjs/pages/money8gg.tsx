import type { NextPage } from "next";
import DashboardLayout from "../layouts/DashboardLayout";
import Head from "next/head";
import { CheckCircle, ArrowRight, Zap, TrendingUp, Cpu } from "lucide-react";
import Link from "next/link";

const Money8GG: NextPage = () => {
    return (
        <DashboardLayout>
            <Head>
                <title>Money8GG | AI Trading Platform</title>
                <meta name="description" content="Money8GG is an AI trading platform with powerful automated trading tools and step-by-step bot building guides." />
            </Head>

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700 relative overflow-hidden text-center lg:text-left">
                     {/* Decorative Elements */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                     <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
                        <div className="flex-1 space-y-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wide border border-blue-500/20">
                                Powered by Neural Networks
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
                                Best AI Trading Platform & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Automated Bots</span>
                            </h1>
                            <p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0">
                                Money8GG provides powerful automated trading tools and step-by-step guides. Build your own profitable bots or import proven strategies today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/strategy" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                                    Start Building <ArrowRight size={18} />
                                </Link>
                                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold transition-all border border-slate-700">
                                    Import Bot
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-md">
                            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-200">Alpha Strategy A</h3>
                                            <p className="text-xs text-slate-500">Running for 24h</p>
                                        </div>
                                    </div>
                                    <span className="text-emerald-400 font-mono font-bold">+12.4%</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-24 w-full bg-slate-900/50 rounded-lg border border-slate-800 relative overflow-hidden">
                                        {/* Mock Graph */}
                                        <svg className="absolute bottom-0 left-0 right-0 h-full w-full text-emerald-500/20" preserveAspectRatio="none" viewBox="0 0 100 100">
                                            <path d="M0 100 L0 80 L10 70 L20 85 L30 60 L40 65 L50 40 L60 50 L70 30 L80 35 L90 10 L100 0 L100 100 Z" fill="currentColor" />
                                            <path d="M0 80 L10 70 L20 85 L30 60 L40 65 L50 40 L60 50 L70 30 L80 35 L90 10 L100 0" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-slate-900 p-2 rounded text-center">
                                            <p className="text-[10px] text-slate-500 uppercase">Profit</p>
                                            <p className="text-emerald-400 font-mono">$1,240.50</p>
                                        </div>
                                        <div className="bg-slate-900 p-2 rounded text-center">
                                            <p className="text-[10px] text-slate-500 uppercase">Trades</p>
                                            <p className="text-blue-400 font-mono">42</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "AI-Powered Analysis", icon: Cpu, desc: "Utilize deep learning models to predict market movements with high accuracy." },
                        { title: "Automated Execution", icon: Zap, desc: "Execute trades 24/7 without manual intervention using our cloud infrastructure." },
                        { title: "Backtesting Engine", icon: CheckCircle, desc: "Validate strategies against historical data before risking real capital." }
                    ].map((feature, i) => (
                        <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                            <div className="h-12 w-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-200 mb-2">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Money8GG;
