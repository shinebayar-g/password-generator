import { Title, A } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';

export default function NotFound() {
    return (
        <main class='text-center mx-auto text-gray-700 p-4'>
            <Title>Not Found</Title>
            <HttpStatusCode code={404} />
            <h1>Page Not Found</h1>
            <p class='my-4'>
                <A href='/' class='text-sky-600 hover:underline'>
                    Home
                </A>
            </p>
        </main>
    );
}
