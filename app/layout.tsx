import { Inter } from '@next/font/google'
import RootStyleRegistry from './emotion';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <head />
            <body>
                <RootStyleRegistry>{children}</RootStyleRegistry>
            </body>
        </html>
    )
}
