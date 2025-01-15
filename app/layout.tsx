import type { Metadata } from 'next'
import { Inter, Azeret_Mono as Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const geistSans = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
})
const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const metadata: Metadata = {
    title: 'GigPro',
    description: 'Manage your gigs, acts, and website with ease',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
        >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    )
}

