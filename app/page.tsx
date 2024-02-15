import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image:
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYRNvTdXHTpPo7iU_nFEUTsPA6CnkzvLBNVauB4nhSOrE-rwTF_Z7pcHfFWZ5YRPOwNLdxKwYENYhzgEIbGfaQqYlJ15Uw=w2998-h1858",
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: "Korean",
  description: "A frame checking you are korean",
  openGraph: {
    title: "Korean",
    description: "A frame checking you are korean",
    images: [
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYRNvTdXHTpPo7iU_nFEUTsPA6CnkzvLBNVauB4nhSOrE-rwTF_Z7pcHfFWZ5YRPOwNLdxKwYENYhzgEIbGfaQqYlJ15Uw=w2998-h1858",
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>R u in Korea?</h1>
    </>
  );
}
