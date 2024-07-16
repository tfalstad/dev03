import MyComponent from '../components/MyComponent';

export default function Home() {
    return <MyComponent imagePaths={{
        background: '/images/background.png',
        message: '/images/message.png',
        meet: '/images/meet.png',
        linkedin: '/images/linkedin.png',
        portfolio: '/images/portfolio.png',
        mixtaRe: '/images/mixta-re.png',
        adaptableHuman: '/images/adaptable-human.png',
    }} />;
}