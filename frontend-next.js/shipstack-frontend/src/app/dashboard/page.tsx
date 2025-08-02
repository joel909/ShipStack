"use client"
import React, { useState } from 'react';
import Navbar from "../../components/HomePage/navbar";
import { FileText, Server, Globe, Cloud, BarChart3, Plus } from 'lucide-react';
import Loader from '@/components/loader';
export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('projects');

    const renderContent = () => {
        switch (activeTab) {
            case 'projects':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                            <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-200 flex items-center space-x-2">
                                <Plus className="w-4 h-4" />
                                <span>New Project</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <FileText className="w-8 h-8 text-blue-400" />
                                        <h3 className="text-lg font-semibold">Project {i}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">Description of project {i}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                                        <button className="text-blue-400 hover:text-blue-600">View →</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'servers':
                return (
                    <Loader></Loader>
                )
                // return (
                //     <div className="space-y-6">
                //         <h2 className="text-2xl font-bold text-gray-800">Active Servers</h2>
                //         <div className="bg-white rounded-lg shadow-md">
                //             {[1, 2, 3].map((i) => (
                //                 <div key={i} className="p-4 border-b border-gray-200 last:border-b-0 flex items-center justify-between">
                //                     <div className="flex items-center space-x-3">
                //                         <Server className="w-6 h-6 text-blue-400" />
                //                         <div>
                //                             <h3 className="font-semibold">Server {i}</h3>
                //                             <p className="text-sm text-gray-600">us-east-1</p>
                //                         </div>
                //                     </div>
                //                     <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Running</span>
                //                 </div>
                //             ))}
                //         </div>
                //     </div>
                // );
            default:
                return (
                    <div className="text-center py-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                        <p className="text-gray-600">Content for {activeTab} coming soon...</p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-sky-200">
            <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {renderContent()}
            </main>
        </div>
    );
}