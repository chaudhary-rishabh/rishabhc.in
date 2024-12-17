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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <HomeModule />
        </div>
        <BottomNav />
      </div>
    </MainLayout>
  );
}