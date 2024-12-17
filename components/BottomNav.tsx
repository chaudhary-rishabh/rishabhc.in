import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const BottomNav = () => {
    const router = useRouter();

    // Function to check if the link is active
    const isActive = (path: any) => router.pathname === path;
    return (
        <>
            <nav aria-label="Global" className="fixed-bottom w-11/12 mx-auto my-3 bg-blue-400/40 backdrop-blur-sm flex align-middle shadow-md shadow-blue-400 max-w-xl rounded-full items-center justify-center p-2 lg:px-10">
                <div className="button-group">
                    <Link href="/portfolio" className={`text-sm ${isActive("/portfolio") ? "btn-header-active" : ""} btn-header sm:py-2 sm:px-2`}>
                        <FontAwesomeIcon className="btmNavColorPortfolio" icon={faFolderOpen} size="2x" />
                        Portfolio
                    </Link>
                    <Link href="/experience" className={`text-sm ${isActive("/experience") ? "btn-header-active" : ""} btn-header sm:py-2 sm:px-2`}>
                        <FontAwesomeIcon className="btmNavColorExp" icon={faBriefcase} size="2x" />
                        Experience
                    </Link>
                    <Link href="/skills" className={`text-sm ${isActive("/skills") ? "btn-header-active" : ""} btn-header sm:py-2 sm:px-2`}>
                        <FontAwesomeIcon className="btmNavColorSkill" icon={faLightbulb} size="2x" />
                        Skills
                    </Link>
                    <Link href="/education" className={`text-sm ${isActive("/education") ? "btn-header-active" : ""} btn-header sm:py-2 sm:px-2`}>
                        <FontAwesomeIcon className="btmNavColorEdu" icon={faGraduationCap} size="2x" />
                        Education
                    </Link>
                </div>
            </nav>
            {/* 
            <div className="fixed-bottom w-full" >
                <div className="button-group">
                    <Link href="/portfolio" className="btn-header text-sm  sm:py-2 sm:px-2">
                        <FontAwesomeIcon icon={faFolderOpen} size="2x" />
                        Portfolio
                    </Link>
                    <Link href="/experience" className="btn-header text-sm  sm:py-2 sm:px-2">
                        <FontAwesomeIcon icon={faBriefcase} size="2x" />
                        Experience
                    </Link>
                    <Link href="/education" className="btn-header text-sm sm:py-2 sm:px-2">
                        <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                        Education
                    </Link>
                    <Link href="/skills" className="btn-header text-sm sm:py-2 sm:px-2">
                        <FontAwesomeIcon icon={faLightbulb} size="2x" />
                        Skills
                    </Link>
                </div>
            </div> */}
        </>
    )
}

export default BottomNav