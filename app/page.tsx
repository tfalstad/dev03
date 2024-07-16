import MyComponent from '../components/MyComponent';

export default function Home() {
    const imagePaths = {
        background: 'background.png',
        message: 'message.png',
        meet: 'meet.png',
        linkedin: 'linkedin.png',
        portfolio: 'portfolio.png',
        mixtaRe: 'mixta-re.png',
        adaptableHuman: 'adaptable-human.png',
    };

    return <MyComponent imagePaths={imagePaths} />;
}