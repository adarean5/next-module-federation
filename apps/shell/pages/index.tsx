import dynamic from "next/dynamic";

// @ts-ignore
const MicroFrontendOne = dynamic(() => import("mfOne/root"), {
  ssr: false,
});

// @ts-ignore
const SampleButtonMF1 = dynamic(() => import("mfOne/sampleButton"));

export default function Home() {
  return (
    <>
      <header>Shell</header>
      <main className="border-4 border-solid border-blue-600">
        <MicroFrontendOne></MicroFrontendOne>
        <SampleButtonMF1></SampleButtonMF1>
      </main>
    </>
  );
}
