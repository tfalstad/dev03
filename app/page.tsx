import "./home.css";
import Frame from "../components/Frame";
import { contact, hero } from "../content/site";

export default function Home() {
    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: hero.name,
        url: "https://falstad.dev",
        jobTitle: "Chief Product Officer",
        worksFor: { "@type": "Organization", name: "Mixta", url: "https://mixta.ai" },
        sameAs: [contact.linkedin],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
            <Frame />
        </>
    );
}
