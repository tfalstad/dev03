"use client";

import React from 'react';
import Link from 'next/link';

interface ImagePaths {
    background: string;
    message: string;
    meet: string;
    linkedin: string;
    portfolio: string;
    mixtaRe: string;
    adaptableHuman: string;
}

const MyComponent: React.FC<{ imagePaths: ImagePaths }> = ({ imagePaths }) => {
    return (
        <div className="relative bg-white min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full">
                <img src={imagePaths.background} alt="Background" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="max-w-7xl p-4 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        <div className="col-span-1 lg:col-span-1">
                            <div className="w-20 p-4 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-5">
                                <Link href="https://www.travisfalstad.com/contact" target="_blank" rel="noopener noreferrer">
                                    <div className="text-black flex justify-center">
                                        <img src={imagePaths.message} alt="Mail" style={{ width: 24, height: 24 }} />
                                    </div>
                                </Link>
                                <div className="border-b border-gray-300 w-full my-2"></div>
                                <Link href="https://calendar.app.google/zRMChYvy5bevvemw9" target="_blank" rel="noopener noreferrer">
                                    <div className="text-black flex justify-center">
                                        <img src={imagePaths.meet} alt="Meet" style={{ width: 24, height: 24 }} />
                                    </div>
                                </Link>
                                <div className="border-b border-gray-300 w-full my-2"></div>
                                <Link href="https://www.linkedin.com/in/tfalstad/" target="_blank" rel="noopener noreferrer">
                                    <div className="text-black flex justify-center">
                                        <img src={imagePaths.linkedin} alt="LinkedIn" style={{ width: 24, height: 24 }} />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-2">
                            <a href="https://travisfalstad.com" target="_blank" rel="noopener noreferrer">
                                <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg flex justify-between items-center hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-fuchsia-50 font-medium">P</div>
                                        <div>
                                            <h2 className="text-lg font-medium text-gray-900">Portfolio</h2>
                                            <p className="text-gray-600">My CV and work samples</p>
                                        </div>
                                    </div>
                                    <img className="rounded-lg" src={imagePaths.portfolio} alt="Portfolio" style={{ width: 80, height: 80 }} />
                                </div>
                            </a>
                        </div>

                        <div className="col-span-1 lg:col-span-2 flex flex-col space-y-4">
                            <a href="https://mixta.ai" target="_blank" rel="noopener noreferrer">
                                <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-fuchsia-50 font-medium">M</div>
                                        <div>
                                            <h2 className="text-lg font-medium text-gray-900">Mixta.ai</h2>
                                            <p className="text-gray-600">Adaptive Learning</p>
                                        </div>
                                    </div>
                                    <img className="mt-4 rounded-lg" src={imagePaths.mixtaRe} alt="MIXTA RE" style={{ width: 358, height: 149 }} />
                                    <p className="mt-4 text-gray-600">Status: LIVE</p>
                                    <p className="mt-2 text-gray-600">We&apos;ve built a real-time course creation and simulation platform for training soft skills.</p>
<p className="mt-2 text-gray-600">We are beginning limited pilots. Reach out if you would like to participate!</p>
                                </div>
                            </a>
                            <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-fuchsia-50 font-medium">A</div>
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-900">ADAPTABLE HUMAN</h2>
                                        <p className="text-gray-600">Workforce Development</p>
                                    </div>
                                </div>
                                <img className="mt-4 rounded-lg" src={imagePaths.adaptableHuman} alt="ADAPTABLE HUMAN" style={{ width: 358, height: 149 }} />
                                <p className="mt-4 text-gray-600">Status: In Development</p>
                                <p className="text-gray-600">Launching Q2, 2026</p>
                                <p className="mt-2 text-gray-600">Workers should manage their own careers! This personal assistant brings real-time labor market analytics and a virtual career counselor directly to workers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;