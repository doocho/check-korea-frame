import { NextRequest, NextResponse } from "next/server";
// import countries from './lib/countries.json'

// run only on homepage
export const config = {
  matcher: "/api/frame",
};

export function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo?.country || "US";
  const city = geo?.city || "San Francisco";
  const region = geo?.region || "CA";

  // Clone request headers
  const headers = new Headers(req.headers);
  // Add a new request header
  headers.set("country", country);
  headers.set("city", city);
  headers.set("region", region);

  const response = NextResponse.next({
    // New option `request.headers` which accepts a Headers object
    // overrides request headers with the specified new ones.
    request: {
      headers,
    },
  });

  return response;
}
