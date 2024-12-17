// components/SocialMediaIcons.tsx
import { FC } from 'react';
import { FaPhoneAlt, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const SocialMediaIcons: FC = () => {
    return (
        <div className="flex space-x-4 text-2xl">
            {/* Call Icon */}
            <a href="tel:+1234567890" aria-label="Call" className="text-green-500 hover:text-green-600">
                <FaPhoneAlt />
            </a>
            {/* LinkedIn Icon */}
            <a
                href="https://www.linkedin.com/in/yourprofile"
                aria-label="LinkedIn"
                className="text-blue-700 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin />
            </a>
            {/* GitHub Icon */}
            <a
                href="https://github.com/yourprofile"
                aria-label="GitHub"
                className="text-gray-800 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub />
            </a>
            {/* PDF Icon */}
            <a href="/yourfile.pdf" aria-label="PDF" className="text-red-600 hover:text-red-700" target="_blank">
                <FaFilePdf />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
