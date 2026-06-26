import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AMIGUS Privacy Policy",
    description: "Privacy policy for AMIGUS, a personal tool operated by Travis Falstad.",
    robots: { index: true, follow: true },
};

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center p-4">
            <div className="max-w-2xl w-full p-8 bg-white rounded-xl shadow-lg my-8">
                <h1 className="text-2xl font-medium text-gray-900">
                    AMIGUS Privacy Policy
                </h1>
                <p className="mt-1 text-gray-500 text-sm">Last updated: June 25, 2026</p>

                <p className="mt-6 text-gray-700">
                    AMIGUS is a personal tool operated by Travis Falstad for his own
                    Google accounts. It is not offered to third parties.
                </p>

                <h2 className="mt-6 text-lg font-medium text-gray-900">
                    Data accessed
                </h2>
                <p className="mt-2 text-gray-700">
                    Via the Google APIs, AMIGUS accesses the operator&apos;s own Gmail
                    messages (read and modify, for email triage/labeling) and Google
                    Calendar events (read-only, to generate meeting notes).
                </p>

                <h2 className="mt-6 text-lg font-medium text-gray-900">
                    How it&apos;s used
                </h2>
                <p className="mt-2 text-gray-700">
                    Solely to triage the operator&apos;s email and create meeting notes
                    in the operator&apos;s private notes system. No data is used for
                    advertising or to train machine-learning models.
                </p>

                <h2 className="mt-6 text-lg font-medium text-gray-900">Storage</h2>
                <p className="mt-2 text-gray-700">
                    Data is processed on the operator&apos;s personal machine and stored
                    in the operator&apos;s private Notion workspace and local files. It
                    is not sold, rented, or shared with third parties.
                </p>

                <h2 className="mt-6 text-lg font-medium text-gray-900">Limited Use</h2>
                <p className="mt-2 text-gray-700">
                    AMIGUS&apos;s use and transfer of information received from Google
                    APIs adheres to the{" "}
                    <a
                        href="https://developers.google.com/terms/api-services-user-data-policy"
                        className="text-blue-600 hover:underline"
                    >
                        Google API Services User Data Policy
                    </a>
                    , including the Limited Use requirements.
                </p>

                <h2 className="mt-6 text-lg font-medium text-gray-900">Contact</h2>
                <p className="mt-2 text-gray-700">
                    <a
                        href="mailto:amigus+tfalstad@gmail.com"
                        className="text-blue-600 hover:underline"
                    >
                        amigus+tfalstad@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
