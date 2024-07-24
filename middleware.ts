import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from '@/routes';

const requiredEnvVariables = [
  'NEXT_PUBLIC_API_URL',
  'NEXT_PUBLIC_API_KEY',
  'NEXT_PUBLIC_ANOTHER_VAR',
];

export async function middleware(req: NextRequest) {
  //verifier que les variable d'environnement sont presentes
  console.log('Middleware exécuté');

  const missingVariables = requiredEnvVariables.filter(
    (variable) => !process.env[variable]
  );

  // if (missingVariables.length > 0) {
  //   console.log("Variables d'environnement manquantes:", missingVariables);
  //   const url = req.nextUrl.clone();
  //   url.pathname = '/error';
  //   url.searchParams.set('missing', missingVariables.join(','));

  //   console.log("Redirection vers la page d'erreur:", url.toString());

  //   return NextResponse.rewrite(url);
  // }

  // Protection des routes

  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error('NEXTAUTH_SECRET environment variable is not defined');
  }

  const token = await getToken({ req, secret, salt: 'sfdsgdgdgdhhrg' });
  const isLoggedIn = !!token;

  const { nextUrl } = req;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }
    return NextResponse.next();
  }

  // if (!isLoggedIn && !isPublicRoute) {
  //   let callbackUrl = nextUrl.pathname;
  //   if (nextUrl.search) {
  //     callbackUrl += nextUrl.search;
  //   }

  //   const encodedCallbackUrl = encodeURIComponent(callbackUrl);
  //   return NextResponse.redirect(
  //     new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, req.url)
  //   );
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
