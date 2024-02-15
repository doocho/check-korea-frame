import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  //   const searchParams = req.nextUrl.searchParams;
  //   const id: any = searchParams.get("id");
  //   const idAsNumber = parseInt(id);
  //   const nextId = idAsNumber + 1;

  if (req.geo?.country === "KR") {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>In Korea</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYRNvTdXHTpPo7iU_nFEUTsPA6CnkzvLBNVauB4nhSOrE-rwTF_Z7pcHfFWZ5YRPOwNLdxKwYENYhzgEIbGfaQqYlJ15Uw=w2998-h1858" />
    <meta property="fc:frame:button:1" content="You are in Korea ,${req.geo?.city}" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
  <title>Not In Korea</title>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTONYnr95vajpS1wtYFrfBU6e3yJixoThX5w7EztVIUM1SSB3jPsM-GWHW4YHOXaDki7G9O0n0wYL-poP5wOZnDIdkm8w=w2998-h1858" />
  <meta property="fc:frame:button:1" content="You are not in Korea" />
  <meta property="fc:frame:button:1:action" content="post_redirect" />
  <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
</head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
