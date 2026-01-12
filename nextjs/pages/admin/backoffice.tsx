import type { NextPage } from "next";
import DashboardLayout from "../../layouts/DashboardLayout";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ShieldCheck } from "lucide-react";

const BackOfficeGrid = dynamic(() => import('../../components/Admin/BackOfficeGrid'), { ssr: false });

const BackOfficePage: NextPage = () => {
    return (
        <DashboardLayout>
            <Head>
                <title>ApSciOS | Admin Back Office</title>
            </Head>

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-200 flex items-center gap-3">
                            <ShieldCheck className="text-purple-400" />
                            Admin Back Office
                        </h1>
                        <p className="text-slate-500 text-sm mt-1">Manage user accounts, balances, and platform activity.</p>
                    </div>
                </div>

                <div className="animate-in fade-in duration-500">
                    <BackOfficeGrid />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default BackOfficePage;
