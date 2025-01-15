import { Button } from '@aws-amplify/ui-react'
import Link from 'next/link'
// import { Button } from '@/components/ui/button'

export function Header() {
    return (
        <header className="bg-background border-b">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-2xl font-bold">
                        GigPro
                    </Link>
                    <nav className="flex gap-4">
                        <Link href="/act-manager" className="text-sm font-medium hover:underline">
                            Act Manager
                        </Link>
                        <Link href="/gig-manager" className="text-sm font-medium hover:underline">
                            Gig Manager
                        </Link>
                        <Link href="/website-manager" className="text-sm font-medium hover:underline">
                            Website Manager
                        </Link>
                    </nav>
                </div>
                <Button >Login</Button>
            </div>
        </header>
    )
}

