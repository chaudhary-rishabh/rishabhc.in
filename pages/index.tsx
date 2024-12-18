import Image from "next/image";
import { Inter } from "next/font/google";
import HomeModule from "@/modules/HomeModule/HomeModule";
import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import BottomNav from "@/components/BottomNav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
          <div className="flex-grow">
            <HomeModule />
          </div>
          <BottomNav />
        </div>
      </MainLayout>
    </>
  );
}