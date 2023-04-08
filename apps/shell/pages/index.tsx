import dynamic from "next/dynamic";

const MicroFrontendOne = dynamic(() => import("@mfe/mfOne/root"), {
  ssr: false,
});

const SampleButtonMF1 = dynamic(() => import("@mfe/mfOne/sampleButton"));

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
