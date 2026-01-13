import type { NextPage } from "next";
import DashboardLayout from "../layouts/DashboardLayout";
import dynamic from 'next/dynamic';
import Head from "next/head";

// Mock imports for now until we build them
const AIStatus = dynamic(() => import('../components/AI/AIStatus'), { ssr: false, loading: () => <p>Loading AI...</p> });
const AccountHealth = dynamic(() => import('../components/Dashboard/AccountHealth'), { ssr: false });
const LiveLog = dynamic(() => import('../components/AI/LiveLog'), { ssr: false });
// We use a mocked Chart component or the modified one
const TVChartContainer = dynamic(
  () => import("../components/TVChartContainer").then((mod) => mod.TVChartContainer),
  { ssr: false, loading: () => <div className="w-full h-96 bg-slate-900 animate-pulse rounded-lg border border-slate-800"></div> }
);

const Home: NextPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>ApSciOS | Trading Desk</title>
      </Head>

      <div className="grid grid-cols-12 gap-6 h-full">
        {/* Top Row: AI Status & Account Health */}
        <div className="col-span-12 lg:col-span-8 flex flex-col space-y-6">
             <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 overflow-hidden h-[500px] flex flex-col">
                <div className="bg-slate-800/50 px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-400 uppercase">XAU/USD • Gold Spot</span>
                    <span className="text-xs font-mono text-emerald-400">LIVE</span>
                </div>
                <div className="flex-1 relative">
                    <TVChartContainer />
                </div>
             </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col space-y-6">
            <AIStatus />
            <AccountHealth />
        </div>

        {/* Bottom Row: Logs & Open Positions */}
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LiveLog />
             <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 min-h-[300px]">
                <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Open Positions</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="bg-slate-950/50 text-xs uppercase text-slate-500">
                            <tr>
                                <th className="px-4 py-2">Symbol</th>
                                <th className="px-4 py-2">Size</th>
                                <th className="px-4 py-2">Entry</th>
                                <th className="px-4 py-2">PnL</th>
                                <th className="px-4 py-2">AI Conf</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                           <tr className="hover:bg-slate-800/30 transition-colors">
                                <td className="px-4 py-3 font-medium text-slate-200">NVDA</td>
                                <td className="px-4 py-3">150</td>
                                <td className="px-4 py-3">485.20</td>
                                <td className="px-4 py-3 text-emerald-400">+$2,450.00</td>
                                <td className="px-4 py-3 text-blue-400">98%</td>
                           </tr>
                           <tr className="hover:bg-slate-800/30 transition-colors">
                                <td className="px-4 py-3 font-medium text-slate-200">EUR/USD</td>
                                <td className="px-4 py-3">100k</td>
                                <td className="px-4 py-3">1.0920</td>
                                <td className="px-4 py-3 text-red-400">-$120.50</td>
                                <td className="px-4 py-3 text-yellow-400">65%</td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
