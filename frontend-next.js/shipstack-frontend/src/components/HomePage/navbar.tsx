import React from 'react';
import { User, FileText, Server, Globe, Cloud, BarChart3 } from 'lucide-react';

interface NavbarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const navItems = [
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'servers', label: 'Active Servers', icon: Server },
    { id: 'domains', label: 'Domains', icon: Globe },
    { id: 'cloudflare', label: 'Cloudflare', icon: Cloud },
    { id: 'docs', label: 'Docs', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
];

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
    return (
        <nav className="bg-blue-400 shadow-lg border-b border-blue-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-white text-xl font-bold">ShipStack</h1>
                    </div>

                    {/* Navigation Items */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeTab === item.id;
                                
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => onTabChange(item.id)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-all duration-200 ${
                                            isActive
                                                ? 'bg-blue-300 text-white shadow-md'
                                                : 'text-blue-100 hover:bg-blue-300 hover:text-white'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{item.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Profile Icon */}
                    <div className="flex items-center">
                        <button className="bg-blue-300 p-2 rounded-full text-white hover:bg-blue-500 transition-colors duration-200">
                            <User className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-500">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        
                        return (
                            <button
                                key={item.id}
                                onClick={() => onTabChange(item.id)}
                                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-all duration-200 ${
                                    isActive
                                        ? 'bg-blue-300 text-white'
                                        : 'text-blue-100 hover:bg-blue-300 hover:text-white'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}