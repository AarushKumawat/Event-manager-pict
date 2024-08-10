import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  '/',
  '/events/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
]);

// Export the middleware function
export default clerkMiddleware((auth, req: NextRequest) => {
  if (isPublicRoute(req)) {
    return NextResponse.next(); // Skip Clerk authentication for public routes
  }

  // For protected routes, continue with Clerk's default behavior
  return NextResponse.next(); // Alternatively, handle auth logic here if needed
});

export const config = {
  matcher: [
    // Apply middleware to all routes except static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
