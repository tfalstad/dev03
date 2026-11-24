import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Archivo({
    subsets: ["latin"],
    axes: ["wdth"],
    variable: "--font-display",
});

const body = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
});

const mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-mono",
});

const description =
    "Travis Falstad helps learning companies become AI-native. Cofounder and Chief Product Officer at Mixta and NSF Principal Investigator.";

export const metadata: Metadata = {
    metadataBase: new URL("https://falstad.dev"),
    title: "Travis Falstad",
    description,
    openGraph: {
        title: "Travis Falstad",
        description,
        url: "https://falstad.dev",
        siteName: "Travis Falstad",
        images: [{ url: "/images/og.jpg" }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Travis Falstad",
        description,
        images: ["/images/og.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${display.variable} ${body.variable} ${mono.variable} ${body.className}`}>
                {children}
            </body>
        </html>
    );
}
