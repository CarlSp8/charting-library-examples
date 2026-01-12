import type { NextPage } from "next";
import DashboardLayout from "../layouts/DashboardLayout";
import Head from "next/head";
import { Terminal, Copy, Cpu, Server, Code } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

const DaiLabPage: NextPage = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const INSTALL_CMD = "pip install -U transformers accelerate torch triton==3.4 kernels openai-harmony";
    const SERVE_CMD = "transformers serve";
    const CURL_CMD = `curl -X POST http://localhost:8000/v1/responses \\
-H "Content-Type: application/json" \\
-d '{"messages": [{"role": "system", "content": "hello"}], "temperature": 0.9, "max_tokens": 1000, "stream": true, "model": "openai/gpt-oss-20b"}'`;

    return (
        <DashboardLayout>
            <Head>
                <title>ApSciOS | DAI-Lab Index</title>
            </Head>

            <div className="space-y-8 max-w-5xl mx-auto pb-10">
                <div className="border-b border-slate-800 pb-6">
                    <h1 className="text-3xl font-bold text-slate-200 flex items-center gap-3">
                        <Cpu className="text-blue-400" size={32} />
                        DAI-Lab Index
                    </h1>
                    <p className="text-slate-400 mt-2 text-lg">
                        Distributed Artificial Intelligence Laboratory. Setup instructions, inference scripts, and distributed computing configurations for GPT-OSS models.
                    </p>
                </div>

                {/* Installation Section */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                    <div className="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2">
                        <Terminal size={18} className="text-emerald-400" />
                        <h2 className="font-semibold text-slate-200">Environment Setup</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <p className="text-slate-400">It is recommended to create a fresh Python environment. Install transformers, accelerate, and Triton kernels for MXFP4 compatibility.</p>

                        <div className="relative group">
                            <pre className="bg-slate-950 p-4 rounded-lg text-sm font-mono text-emerald-400 overflow-x-auto border border-slate-800/50">
                                {INSTALL_CMD}
                            </pre>
                            <button
                                onClick={() => handleCopy(INSTALL_CMD, 'install')}
                                className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors"
                            >
                                {copied === 'install' ? <span className="text-emerald-400 text-xs font-bold">Copied!</span> : <Copy size={16} />}
                            </button>
                        </div>

                         <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <Cpu className="text-blue-400 shrink-0 mt-1" size={20} />
                            <div>
                                <h3 className="font-semibold text-blue-400 text-sm">Hardware Acceleration</h3>
                                <p className="text-xs text-blue-300/80 mt-1">
                                    If you’re running large models, use Accelerate or torchrun to handle device mapping automatically.
                                    Flash Attention kernels are recommended for optimal inference speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scripts Index */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                        <div className="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2">
                            <Code size={18} className="text-purple-400" />
                            <h2 className="font-semibold text-slate-200">Inference Scripts</h2>
                        </div>
                        <div className="p-0 divide-y divide-slate-800">
                             {[
                                { name: "simple_inference.py", desc: "Quick start using the Transformers pipeline API." },
                                { name: "advanced_inference.py", desc: "Manual control using .generate() and tokenizer." },
                                { name: "chat_template.py", desc: "Structured prompts using built-in chat templates." },
                                { name: "harmony_example.py", desc: "Advanced prompting with openai-harmony library." },
                                { name: "distributed_inference.py", desc: "Multi-GPU setup with Expert Parallelism." },
                             ].map((script, i) => (
                                 <div key={i} className="p-4 hover:bg-slate-800/30 transition-colors group flex justify-between items-center">
                                     <div>
                                         <p className="font-mono text-sm text-purple-300 font-semibold">{script.name}</p>
                                         <p className="text-xs text-slate-500 mt-1">{script.desc}</p>
                                     </div>
                                     <a href={`#`} className="text-xs text-slate-600 group-hover:text-purple-400 transition-colors border border-slate-800 group-hover:border-purple-500/50 rounded px-2 py-1">
                                         View
                                     </a>
                                 </div>
                             ))}
                        </div>
                    </div>

                    {/* Server Launch */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                        <div className="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center gap-2">
                            <Server size={18} className="text-orange-400" />
                            <h2 className="font-semibold text-slate-200">API Server</h2>
                        </div>
                        <div className="p-6 space-y-6 flex-1">
                            <div>
                                <p className="text-sm text-slate-400 mb-2 font-semibold uppercase tracking-wider">Launch Command</p>
                                <div className="relative group">
                                    <pre className="bg-slate-950 p-3 rounded border border-slate-800 text-sm font-mono text-orange-400">
                                        {SERVE_CMD}
                                    </pre>
                                     <button
                                        onClick={() => handleCopy(SERVE_CMD, 'serve')}
                                        className="absolute top-2 right-2 p-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Copy size={14} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-slate-400 mb-2 font-semibold uppercase tracking-wider">Test with cURL</p>
                                <div className="relative group">
                                    <pre className="bg-slate-950 p-3 rounded border border-slate-800 text-[10px] font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap">
                                        {CURL_CMD}
                                    </pre>
                                    <button
                                        onClick={() => handleCopy(CURL_CMD, 'curl')}
                                        className="absolute top-2 right-2 p-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Copy size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DaiLabPage;
