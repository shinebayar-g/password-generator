import { Title, A } from 'solid-start';
import Counter from '~/components/Counter';

export default function Home() {
    return (
        <main class='text-center mx-auto text-gray-700 p-4'>
            <Title>Hello World</Title>
            <h1>Hello world!</h1>
            <Counter />
            <p class='mt-8'>
                Visit{' '}
                <a
                    href='https://start.solidjs.com'
                    target='_blank'
                    class='text-sky-600 hover:underline'
                >
                    start.solidjs.com
                </a>{' '}
                to learn how to build SolidStart apps.
            </p>
            <p class='my-4'>
                <span>Home</span>
                {' - '}
                <A href='/about' class='text-sky-600 hover:underline'>
                    About Page
                </A>{' '}
            </p>
        </main>
    );
}
