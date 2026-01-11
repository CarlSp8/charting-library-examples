import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Activity, LayoutDashboard, Settings, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

interface DashboardLayoutProps {
  children: ReactNode;
}

const SidebarItem = ({ icon: Icon, label, href, active }: { icon: any, label: string, href: string, active?: boolean }) => {
  return (
    <Link href={href} className={clsx(
      "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
      active
        ? "bg-slate-800 text-blue-400 border-r-4 border-blue-500"
        : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
    )}>
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      <Head>
        <title>ApSciOS | Quant Station</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
          <div className="p-6 border-b border-slate-800">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              ApSciOS
            </h1>
            <p className="text-xs text-slate-500 mt-1 tracking-widest uppercase">Quant Station v1.0</p>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 space-y-2 px-3">
            <div className="px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Platform</div>
            <SidebarItem icon={LayoutDashboard} label="Dashboard" href="/" active />
            <SidebarItem icon={TrendingUp} label="Trading Terminal" href="/terminal" />
            <SidebarItem icon={Activity} label="Market Analysis" href="/analysis" />

            <div className="px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 mt-8">AI & Auto</div>
            <SidebarItem icon={Cpu} label="Money8GG AI" href="/money8gg" />
            <SidebarItem icon={ShieldCheck} label="Risk Management" href="/risk" />

            <div className="px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 mt-8">Admin</div>
            <SidebarItem icon={Settings} label="Strategy Builder" href="/strategy" />
            <SidebarItem icon={ShieldCheck} label="Back Office" href="/admin/backoffice" />
          </nav>

          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">System Online</p>
                <p className="text-xs text-slate-500">Latency: 12ms</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
            {/* Top Header */}
            <header className="h-16 bg-slate-900/50 border-b border-slate-800 backdrop-blur-sm flex items-center justify-between px-6 z-10">
                <div className="flex items-center space-x-4">
                    <span className="text-slate-400 text-sm">Global Markets</span>
                    <span className="text-emerald-400 text-sm font-mono">SPX +0.45%</span>
                    <span className="text-red-400 text-sm font-mono">NDX -0.12%</span>
                    <span className="text-emerald-400 text-sm font-mono">BTC +1.2%</span>
                </div>
                <div className="flex items-center space-x-4">
                     <button className="px-3 py-1.5 text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/50 rounded hover:bg-blue-600/30 transition-colors">
                        CONNECT WALLET
                     </button>
                </div>
            </header>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-slate-950 p-6">
                {children}
            </div>
        </main>
      </div>
    </div>
  );
}
