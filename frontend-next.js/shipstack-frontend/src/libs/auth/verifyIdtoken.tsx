// import { NextRequest, NextResponse } from 'next/server'
// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

// export async function verifyIdToken(req: NextRequest) {
//     const res = NextResponse.next()
//     const supabase = createMiddlewareClient({ req, res })

//     try {
//         // Check if the user is authenticated
//         const { data: { session }, error } = await supabase.auth.getSession()

//         if (error || !session) {
//             console.log('User not authenticated:', error)
//             return NextResponse.redirect(new URL('/login', req.url))
//         }

//         // Server-side: Validate token hasn't expired
//         const now = Math.floor(Date.now() / 1000)
//         if (session.expires_at && session.expires_at <= now) {
//             console.log('Token expired on server, redirecting to login')
//             return NextResponse.redirect(new URL('/login', req.url))
//         }

//         // If authenticated, continue with the request
//         return res
//     } catch (error) {
//         console.error('Error verifying ID token:', error)
//         return NextResponse.redirect(new URL('/login', req.url))
//     }
// }