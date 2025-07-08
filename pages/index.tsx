import { Inter } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import PortfolioLanding from "@/components/PortfolioLanding";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Rishabh Chaudhary</title>
        <meta
          name="description"
          content="Welcome to Rishabh Chaudhary's portfolio. Explore his expertise in full-stack development, DevOps, and cutting-edge technologies like TypeScript, Next.js, React.js, Node.js, AWS, Docker, and Kubernetes."
        />
        <link rel="canonical" href="https://rishabhc.dev" />
      </Head>
      <MainLayout>
        <div className="flex flex-col min-h-screen">
            <PortfolioLanding />
        </div>
      </MainLayout>
    </>
  );
}