import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


const checkAuth = (request: NextRequest) => {
    const token = request.cookies.get('token');
    console.log(token);
    return !!token;
};


export function middleware(request: NextRequest) {

    const token = checkAuth(request);

    if (!token)
    {
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    return NextResponse.next();
    // if (request.nextUrl.pathname.startsWith('/dashboard')) 
    // {
    //     if (!token)
    //     {
    //         return NextResponse.rewrite(new URL('/auth/signin', request.url));
    //     }
    //     return NextResponse.rewrite(new URL('/dashboard', request.url));
    // }

    // if (request.nextUrl.pathname.startsWith('/auth/signin')) 
    // {
    //     if (token)
    //     {
    //         return NextResponse.rewrite(new URL('/', request.url));
    //     }
    //     return NextResponse.rewrite(new URL('/auth/signin', request.url));
    // }

    // if (request.nextUrl.pathname.startsWith('/auth/signup')) 
    // {
    //     if (token)
    //     {
    //         return NextResponse.rewrite(new URL('/', request.url));
    //     }
    //     return NextResponse.rewrite(new URL('/auth/signup', request.url));
    // }
}


export const config = {
    matcher: ['/dashboard'],
    api: {
        bodyParser: false, // Disable parsing of request body, so cookies can be accessed
    },
}

