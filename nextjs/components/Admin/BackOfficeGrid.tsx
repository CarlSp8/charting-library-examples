import React, { useState } from 'react';
import { Download, Search, Filter, MoreHorizontal, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

// Mock Data representing the Back Office Sheet
const MOCK_USERS = [
    { id: 'USR-001', name: 'John Doe', email: 'john@example.com', balance: 15420.50, status: 'Active', bots: 3, pnl: 12.5, lastLogin: '2025-01-11 10:42' },
    { id: 'USR-002', name: 'Jane Smith', email: 'jane@example.com', balance: 5000.00, status: 'Pending', bots: 0, pnl: 0.0, lastLogin: '2025-01-10 14:20' },
    { id: 'USR-003', name: 'Robert Fox', email: 'robert@example.com', balance: 250000.00, status: 'Active', bots: 12, pnl: 45.2, lastLogin: '2025-01-11 09:15' },
    { id: 'USR-004', name: 'Emily Davis', email: 'emily@example.com', balance: 1200.00, status: 'Suspended', bots: 1, pnl: -15.0, lastLogin: '2024-12-28 11:00' },
    { id: 'USR-005', name: 'Michael Brown', email: 'michael@example.com', balance: 8750.00, status: 'Active', bots: 2, pnl: 5.8, lastLogin: '2025-01-11 11:30' },
];

export default function BackOfficeGrid() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = MOCK_USERS.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleExport = () => {
        // Mock Export
        alert("Exporting data to CSV...");
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[600px]">
            {/* Toolbar */}
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:ring-1 focus:ring-blue-500 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-3">
                    <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium flex items-center gap-2 border border-slate-700">
                        <Filter size={16} /> Filter
                    </button>
                    <button onClick={handleExport} className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg shadow-emerald-900/20">
                        <Download size={16} /> Export CSV
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-auto">
                <table className="w-full text-left text-sm text-slate-400">
                    <thead className="bg-slate-950 text-xs uppercase text-slate-500 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 font-semibold tracking-wider">User ID</th>
                            <th className="px-6 py-3 font-semibold tracking-wider">User</th>
                            <th className="px-6 py-3 font-semibold tracking-wider text-right">Balance</th>
                            <th className="px-6 py-3 font-semibold tracking-wider text-center">Status</th>
                            <th className="px-6 py-3 font-semibold tracking-wider text-center">Active Bots</th>
                            <th className="px-6 py-3 font-semibold tracking-wider text-right">PnL %</th>
                            <th className="px-6 py-3 font-semibold tracking-wider">Last Login</th>
                            <th className="px-6 py-3 font-semibold tracking-wider text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4 font-mono text-slate-500">{user.id}</td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-slate-200">{user.name}</div>
                                        <div className="text-xs text-slate-500">{user.email}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right font-mono text-slate-200">
                                    ${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={clsx(
                                        "px-2 py-1 rounded-full text-xs font-medium border",
                                        user.status === 'Active' && "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                                        user.status === 'Pending' && "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
                                        user.status === 'Suspended' && "bg-red-500/10 text-red-400 border-red-500/20",
                                    )}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center text-slate-300">
                                    {user.bots}
                                </td>
                                <td className={clsx("px-6 py-4 text-right font-mono", user.pnl >= 0 ? "text-emerald-400" : "text-red-400")}>
                                    {user.pnl > 0 ? '+' : ''}{user.pnl}%
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    {user.lastLogin}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="p-1 hover:bg-slate-700 rounded text-slate-500 hover:text-slate-300 transition-colors">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

             <div className="p-4 border-t border-slate-800 bg-slate-950/50 text-xs text-slate-500 flex justify-between">
                <span>Showing {filteredUsers.length} users</span>
                <span>Data synced from Google Sheets (ReadOnly)</span>
            </div>
        </div>
    );
}
