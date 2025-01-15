export function Footer() {
    return (
        <footer className="bg-background border-t py-6">
            <div className="container text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} GigPro. All rights reserved.
            </div>
        </footer>
    )
}

