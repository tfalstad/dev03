// All the words on the home page live in this file.
// Edit the text between the quotes and save. The layout picks it up.

export const contact = {
    // The Email key opens the contact form once formLive is true (delivery must be set up in Cloudflare first).
    // Until then it opens a normal email to this address. Remove the address when the form goes live.
    formLive: false,
    email: "travis@falstad.dev",
    calendar: "https://calendar.app.google/zRMChYvy5bevvemw9",
    linkedin: "https://www.linkedin.com/in/tfalstad/",
};

export const hero = {
    name: "Travis Falstad",
    roles: ["Cofounder and product at Mixta", "NSF Principal Investigator"],
    headline: "Thanks for stopping by.",
    lede: "I’ve been building new products in the learning space for 20 years. I’m currently pursuing a mix of entrepreneurial ventures and consulting work. Reach out if you’d like to catch up, discuss a project, or chat.",
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
            shots: [
                { src: "/images/talespin-authoring.jpg", alt: "The Talespin authoring tool: a dialogue list, a 3D scene with two characters and a timeline of gestures and emotions" },
                { src: "/images/talespin-lesson.jpg", alt: "The end of a Talespin lesson: an AI character seated in an office with a Lesson Completed message" },
                { src: "/images/talespin-module.jpg", alt: "Cover of the Talespin module Effective Behavioral Feedback" },
            ] as { src: string; alt: string; href?: string; source?: string }[],
            role: "VP of Product",
            body: [
                "At Talespin I created the Product and Learning Experience Design team: game and learning designers, data scientists, narrative designers, 3D artists, subject matter experts and UX researchers.",
                "We used a learning engineering approach to design every part of the platform: the web-based authoring tool, the content player, the analytics dashboard and the skills and competency model. We also designed more than 100 interactive learning experiences.",
                "With Pearson we piloted “Where’d Everybody Go?”, a 30-module immersive learning world about leading a decentralized workforce.",
                "Cornerstone OnDemand acquired the company in 2024, and the platform now supports 140M users.",
            ],
            stats: [
                { figure: "4x", label: "faster learning" },
                { figure: "275%", label: "more skill confidence" },
            ],
            statsNote: "From the largest soft-skills simulation study to date.",
            quote: {
                text: "With Talespin you can use GenAI to build character-based content in minutes to hours, instead of days to weeks.",
                by: "Josh Bersin on the Cornerstone acquisition (2024)",
                href: "https://joshbersin.com/2024/03/cornerstone-acquires-talespin-ai-meets-metaverse-in-corporate-learning/",
            } as null | { text: string; by: string; href: string },
            link: null as null | { href: string; label: string },
        },
        {
            tag: "IARPA Sirius",
            title: "Creative Technologies",
            summary: "Training that teaches intelligence analysts to catch their own cognitive biases.",
            art: { src: "/images/art/sirius.png", fit: "contain", bg: "#ffffff" },
            shots: [
                { src: "/images/sirius-nyt.jpg", source: "The New York Times (2016)", href: "https://www.nytimes.com/2016/09/18/opinion/sunday/the-difference-between-rationality-and-intelligence.html", alt: "The New York Times, September 2016: The Difference Between Rationality and Intelligence" },
                { src: "/images/sirius-hbr.jpg", source: "Harvard Business Review (2015)", href: "https://hbr.org/2015/10/how-a-video-game-helped-people-make-better-decisions", alt: "Harvard Business Review, October 2015: How a Video Game Helped People Make Better Decisions" },
                { src: "/images/sirius-wired.jpg", source: "Wired (2011)", href: "https://www.wired.com/2011/11/iarpa-video-games/", alt: "Wired, November 2011: U.S. Intelligence Will Train Super-Sleuths With Videogames" },
            ] as { src: string; alt: string; href?: string; source?: string }[],
            role: "Production lead",
            body: [
                "I led a 60-person team that built a new way to train intelligence analysts to catch their own cognitive biases.",
                "Thirteen federal agencies adopted it, and more than a million people have trained with it. Researchers at Johns Hopkins and Carnegie Mellon validated the results in 25+ published studies.",
            ],
            stats: [
                { figure: "31%", label: "immediate improvement" },
                { figure: "23%", label: "enduring improvement" },
            ],
            statsNote: "After one hour of play, across four years of research.",
            quote: null,
            link: null,
        },
        {
            tag: "Now",
            title: "Mixta",
            summary: "Authoring tools that let a domain expert create adaptive, measurable training.",
            art: { src: "/images/art/mixta.png", fit: "contain", bg: "#292f38" },
            shots: [
                { src: "/images/mixta-designer.jpg", alt: "The Mixta Blueprint Designer: an author describes a course in conversation and the tool proposes steps, skills and a skill level" },
                { src: "/images/mixta-conversation.jpg", alt: "A learner practicing a difficult conversation with an AI character in Mixta, with objectives tracked at the top" },
                { src: "/images/mixta-library.jpg", alt: "The Mixta module library: three conversation modules with attempts, learners and scores" },
            ] as { src: string; alt: string; href?: string; source?: string }[],
            role: "Cofounder and Chief Product Officer",
            body: [
                "I lead product at Mixta and served as Principal Investigator on an NSF SBIR titled “Education and Training for an AI-Integrated Future.”",
                "We build authoring tools and a skills ontology so a domain expert (a nurse educator, a plant manager) can create adaptive, measurable training without a production team. Pilots with 10 universities and our first enterprise trials are underway.",
            ],
            stats: [],
            statsNote: "",
            quote: null,
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
            art: { src: "/images/art/amigus.png", fit: "cover", bg: "#6f8fc4" },
            shots: [
                { src: "/images/amigus-workbench.jpg", alt: "The AMIGUS Workbench, shown with sample cards" },
                { src: "/images/amigus-blueprint.jpg", alt: "Blueprint of how AMIGUS is put together: mail, calendar and recordings feed machines that propose actions, and approved work is kept in a vault" },
            ] as { src: string; alt: string; href?: string; source?: string }[],
            body: ["A personal operating system in which AI agents triage my email, write up my meetings and keep my week in order."],
            href: "/amigus" as string | null,
        },
        {
            title: "Far Meridian",
            status: "In development",
            summary: "A strategy game whose rival AI learned through self-play.",
            art: { src: "/images/art/far-meridian.jpg", fit: "cover", bg: "#020d12" },
            shots: [
                { src: "/images/far-meridian-base.jpg", alt: "A Far Meridian match during the truce: a base with reactors, refineries and a sensor array beside a field of yellow aurite, with the build menu and truce countdown in the sidebar" },
                { src: "/images/far-meridian-units.jpg", alt: "Close view of a command base, two battle tanks and three troopers near an aurite deposit" },
                { src: "/images/far-meridian-title.jpg", alt: "The Far Meridian title screen: how to play, a service record against each difficulty and the match settings" },
            ] as { src: string; alt: string; href?: string; source?: string }[],
            body: [
                "Far Meridian is a real-time strategy game that runs in a browser. You land a base on a volcanic moon, mine aurite to pay for an army, and fight up to three rival factions that are also at war with each other.",
                "A match grows from scouting into full war: tanks and howitzers on the ground, starships and dropships overhead, missile silos and the batteries that shoot missiles down. Mountains erupt and throw flaming rocks across the map. Apocalypse mode opens with a truce, and every faction marches the moment it ends.",
                "The hardest opponent (the Admiral) learned its strategy in a self-play lab. Candidate versions play each other across many maps, the winners are kept and varied, and the champion is tested on maps it has never seen. I do not weaken what it discovers, so it sometimes beats me with plans I did not expect.",
                "I built it with Claude as my coding partner, for fun and to sharpen my own machine learning skills.",
            ],
            href: null,
        },
        {
            title: "Adaptable Human",
            status: "Concept",
            summary: "A lifetime career coach and advocate for every worker.",
            art: { src: "/images/art/adaptable-human.jpg", fit: "cover", bg: "#e9e9e7" },
            shots: [
                { src: "/images/adaptable-human-home.jpg", alt: "Adaptable Human home page design: Lifetime Career Coach and Advocate" },
                { src: "/images/adaptable-human-assessment.jpg", alt: "Phone designs for the career assessment, which asks about a worker's job, goals and interests" },
                { src: "/images/adaptable-human-paths.jpg", alt: "Phone designs showing career options at three distances: closest match, more of a pivot, try something new" },
            ],
            body: [
                "Adaptable Human is a concept for an AI career coach and advocate that stays with a worker for life. It gives every worker the career insight that has traditionally been available only to top recruiters.",
                "A short assessment of goals, interests and current work produces a personal skills profile in seconds. The profile is built on the US Department of Labor's O*NET taxonomy, which covers 1,000+ occupations and the skills each one needs.",
                "The coach then suggests career paths at three distances (closest match, more of a pivot, try something new) and compares them on requirements, salary and demand. Each path links to the training that leads to it, and the advocate answers plain questions such as “Am I being paid fairly for my job?”",
                "I designed it for Kansas, where employers report a labor shortage while tens of thousands of workers are unemployed or underemployed. It is meant to work alongside existing workforce programs and to serve people from seventh grade through retirement.",
            ],
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
        { when: "2025", where: "GIFT Expert Workshop on scalability and intelligent tutoring systems" },
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
    tabs: { about: "About", cv: "CV", advisory: "Advisory" },
};

// The contact form behind the Email key. Messages are delivered by email.
export const contactForm = {
    intro: "Send me a note and I’ll reply by email.",
    name: "Your name",
    email: "Your email",
    message: "Message",
    send: "Send",
    sending: "Sending",
    sent: "Thanks. Your message is on its way.",
    failed: "That didn’t send. Please try again, or message me on LinkedIn.",
};

// How I got here. Shown in the About tab.
export const about = {
    parts: [
        {
            text: "I started my career in animation at Hanna-Barbera two weeks before an acquisition led to the dismissal of most of the staff. I arrived at the lot to see Los Angeles police officers guiding away some of the original artists from Scooby-Doo and The Jetsons for smashing the lobby display cases that held their artwork.",
            photo: { src: "/images/about-animation.jpg", alt: "A young Travis Falstad in sunglasses beside a costumed cartoon character at an outdoor event" },
        },
        {
            text: "My next job was at a record label a few months before Napster and file sharing arrived. I have seen the same story repeat in every industry I have worked in since.",
            photo: { src: "/images/about-records.jpg", alt: "A young Travis Falstad holding up a card in front of the Capitol Records building in Hollywood" },
        },
        {
            text: "The pace of change in how we work has been accelerating for decades, and there is no reason to assume it will slow down. That is why I build products that help people learn new skills.",
            photo: null as null | { src: string; alt: string },
        },
    ],
    caption: "Pictured: my early enthusiasm for the entertainment industry.",
};

export const cv = {
    experience: [
        { title: "Cofounder and Chief Product Officer", org: "Mixta", dates: "2024 – now" },
        { title: "Product Advisor", org: "Symptom Media and others", dates: "2024 – now" },
        { title: "VP of Product", org: "Talespin", dates: "2019 – 2024" },
        {
            title: "Chief Product Officer (fractional)",
            org: "Uncanny Ridge",
            dates: "2016 – 2019",
            note: "Built RelayCars, a VR car showroom with more than 1M downloads and one of the first 10 titles on Magic Leap One.",
            href: "https://www.digitaltrends.com/cars/relaycars-virtual-reality-car-buying-news-details/",
        },
        { title: "VP of Product", org: "Backcode", dates: "2013 – 2016" },
        { title: "Director of Product", org: "Creative Technologies", dates: "2010 – 2013" },
        { title: "Director of Product Marketing", org: "Electronic Arts", dates: "2008 – 2009" },
    ] as { title: string; org: string; dates: string; note?: string; href?: string }[],
    experienceLabel: "Experience",
    researchLabel: "Research and teaching",
};
