import MyComponent from '../components/MyComponent';

export default function Home() {
    const imagePaths = {
        background: '/images/background.png',
        message: '/images/message.png',
        meet: '/images/meet.png',
        linkedin: '/images/linkedin.png',
        portfolio: '/images/profile-shot.png',
        mixtaRe: '/images/mixta.png',
        adaptableHuman: '/images/adaptable-human.png',
    };

    return <MyComponent imagePaths={imagePaths} />;
}