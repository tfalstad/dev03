import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AMIGUS",
    description:
        "AMIGUS — a personal productivity tool built and operated by Travis Falstad for his own use.",
};

export default function Amigus() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full p-8 bg-white rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center text-fuchsia-50 font-medium text-lg">
                        A
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium text-gray-900">AMIGUS</h1>
                        <p className="text-gray-600">Personal productivity tool</p>
                    </div>
                </div>

                <p className="mt-6 text-gray-700">
                    AMIGUS is a personal productivity tool built and operated by
                    Travis Falstad for his own use. It connects to Travis&apos;s own
                    Google accounts to triage email and generate meeting notes from
                    calendar events. It is not a commercial product and is not offered
                    to other users.
                </p>

                <p className="mt-6 text-gray-700">
                    Contact:{" "}
                    <a
                        href="mailto:amigus+tfalstad@gmail.com"
                        className="text-blue-600 hover:underline"
                    >
                        amigus+tfalstad@gmail.com
                    </a>
                </p>

                <p className="mt-6 text-gray-500 text-sm">
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    );
}
