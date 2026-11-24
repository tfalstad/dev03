// All the words on the home page live in this file.
// Edit the text between the quotes and save. The layout picks it up.

export const contact = {
    email: "travis@falstad.dev",
    calendar: "https://calendar.app.google/zRMChYvy5bevvemw9",
    linkedin: "https://www.linkedin.com/in/tfalstad/",
};

export const hero = {
    name: "Travis Falstad",
    roles: ["Cofounder and product at Mixta", "NSF Principal Investigator"],
    headline: "I build AI systems that make people measurably more capable.",
    lede: "I help learning companies become AI-native. Over 25 years I have built products that train intelligence analysts, hospital staff and the workforces of global enterprises. I enjoy developing and mentoring teams.",
};

export const proof = [
    {
        figure: "140M",
        label: "users on the platform I built at Talespin (now part of Cornerstone OnDemand)",
    },
    {
        figure: "$250M+",
        label: "in revenue from products I have led",
    },
    {
        figure: "13",
        label: "federal agencies adopted the training product my team built",
    },
    {
        figure: "NSF",
        label: "Principal Investigator on a Phase I SBIR for AI-era training",
    },
];

export const story = {
    portraitAlt: "Portrait of Travis Falstad",
};

export const work = {
    items: [
        {
            tag: "2019 – 2024",
            title: "Talespin",
            summary: "A no-code platform for practicing hard conversations with AI characters.",
            art: { src: "/images/art/talespin.jpg", fit: "cover", bg: "#8fa3ad" },
            role: "VP of Product",
            body: [
                "At Talespin I created the Product and Learning Experience Design team: game and learning designers, data scientists, narrative designers, 3D artists, subject matter experts and UX researchers.",
                "We used a learning engineering approach to design every part of the platform: the web-based authoring tool, the content player, the analytics dashboard and the skills and competency model. We also designed more than 100 interactive learning experiences.",
                "Cornerstone OnDemand acquired the company in 2024, and the platform now supports 140M users.",
            ],
            stats: [
                { figure: "4x", label: "faster learning" },
                { figure: "275%", label: "more skill confidence" },
            ],
            statsNote: "From the largest soft-skills simulation study to date.",
            link: null as null | { href: string; label: string },
        },
        {
            tag: "IARPA Sirius",
            title: "Creative Technologies",
            summary: "Training that teaches intelligence analysts to catch their own cognitive biases.",
            art: { src: "/images/art/sirius.png", fit: "contain", bg: "#ffffff" },
            role: "Production lead",
            body: [
                "I led a 60-person team that built a new way to train intelligence analysts to catch their own cognitive biases.",
                "Thirteen federal agencies adopted it, and more than a million people have trained with it. Researchers at Johns Hopkins and Carnegie Mellon validated the results in 25+ published studies.",
            ],
            stats: [
                { figure: "30%", label: "faster learning" },
                { figure: "40%", label: "better retention" },
            ],
            statsNote: "",
            link: null,
        },
        {
            tag: "Now",
            title: "Mixta",
            summary: "Authoring tools that let a domain expert create adaptive, measurable training.",
            art: { src: "/images/art/mixta.png", fit: "contain", bg: "#292f38" },
            role: "Cofounder and Chief Product Officer",
            body: [
                "I lead product at Mixta and served as Principal Investigator on an NSF SBIR titled “Education and Training for an AI-Integrated Future.”",
                "We build authoring tools and a skills ontology so a domain expert (a nurse educator, a plant manager) can create adaptive, measurable training without a production team. Pilots with 10 universities and our first enterprise trials are underway.",
            ],
            stats: [],
            statsNote: "",
            link: { href: "https://mixta.ai", label: "Visit mixta.ai" },
        },
    ],
};

export const together = {
    intro: "I take a small number of advisory engagements alongside my role at Mixta. The best fit is a company with deep domain expertise that needs a credible learning product.",
    ways: [
        {
            title: "Fractional product leadership",
            body: "I join your team part time and own the product from first prototype through paying customers.",
        },
        {
            title: "AI-native product strategy",
            body: "I help an established learning company decide what to rebuild with AI and in what order.",
        },
        {
            title: "Research into product",
            body: "I turn grant-funded or academic work into something customers can buy.",
        },
    ],
    current: "Current advisory work includes Symptom Media (clinical simulation for mental-health training) and an enterprise training platform.",
    note: "Onboarding, customer adoption and enablement all come down to teaching people to use something well.",
};

export const workshop = {
    items: [
        {
            title: "AMIGUS",
            status: "In daily use",
            summary: "A personal operating system run by AI agents.",
            art: { src: "/images/art/amigus.svg", fit: "cover", bg: "#b9cbcf" },
            body: "A personal operating system in which AI agents triage my email, write up my meetings and keep my week in order.",
            href: "/amigus" as string | null,
        },
        {
            title: "Far Meridian",
            status: "In development",
            summary: "A strategy game whose rival AI learned through self-play.",
            art: { src: "/images/art/far-meridian.jpg", fit: "cover", bg: "#020d12" },
            body: "A real-time strategy game with a rival AI that learned its strategy through self-play.",
            href: null,
        },
        {
            title: "Adaptable Human",
            status: "Concept",
            summary: "A career assistant that brings labor market data to workers.",
            art: { src: "/images/art/adaptable-human.jpg", fit: "cover", bg: "#2c4a63" },
            body: "A career assistant that brings labor market data and a virtual career counselor directly to workers.",
            href: null,
        },
    ],
};

export const research = {
    rows: [
        {
            what: "Principal Investigator",
            where: "NSF Phase I SBIR (awarded December 2024)",
            href: null as null | string,
        },
        {
            what: "Production lead",
            where: "IARPA Sirius program at Creative Technologies",
            href: null,
        },
        {
            what: "Contributing designer",
            where: "Largest soft-skills simulation study to date (PwC with Talespin)",
            href: "https://www.pwc.com/us/en/tech-effect/emerging-tech/virtual-reality-study.html",
        },
        {
            what: "Chapter contributor",
            where: "Generalized Intelligent Framework for Tutoring (GIFT)",
            href: null,
        },
        {
            what: "Presenter",
            where: "IEEE ICICLE Learning Engineering working group",
            href: null,
        },
        {
            what: "Adjunct faculty",
            where: "Cal Poly Pomona and New York Film Academy",
            href: null,
        },
        {
            what: "Education",
            where: "MBA from Loyola Marymount and BS in Journalism from the University of Kansas",
            href: null,
        },
    ],
};


// Talks on AI for industry audiences.
export const speaking = {
    label: "Speaking",
    photoAlt: "Travis Falstad speaking on stage at a conference",
    rows: [
        { when: "2026", where: "Maryland Workers' Compensation Educational Association conference" },
        { when: "2026", where: "American Wire Producers Association meeting" },
        { when: "2025", where: "Oklahoma public transit conference" },
        { when: "2025", where: "Composite Can and Tube Institute annual meeting" },
    ],
};

// ---------- Labels for the frame ----------
// The stage shows the things I have built. The right panel is the CV.

export const frame = {
    dockLabel: "Things I have built",
    workLabel: "Work",
    personalLabel: "Personal projects",
    status: "Open to select advisory work",
    tabs: { cv: "CV", advisory: "Advisory" },
};

export const cv = {
    experience: [
        { title: "Cofounder and Chief Product Officer", org: "Mixta", dates: "2024 – now" },
        { title: "Product Advisor", org: "Symptom Media and others", dates: "2024 – now" },
        { title: "VP of Product", org: "Talespin", dates: "2019 – 2024" },
        { title: "Chief Product Officer (fractional)", org: "Uncanny Ridge", dates: "2014 – 2019" },
        { title: "Director of Product", org: "Creative Technologies", dates: "2010 – 2014" },
        { title: "Director of Product Marketing", org: "Electronic Arts", dates: "2008 – 2009" },
    ],
    experienceLabel: "Experience",
    researchLabel: "Research and teaching",
};
