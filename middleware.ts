import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (!request.cookies.has('token') && request.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        '/',
    ],
}