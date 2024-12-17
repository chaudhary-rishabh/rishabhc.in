import BottomNav from '@/components/BottomNav';
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaLinkedin, FaGithub, FaRegLightbulb, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactModule = () => {
    return (
        <div>

            <form className="max-w-md mx-auto mt-40">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative md:w-full z-0 mx-auto w-2/3 mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="First Name" required />
                    </div>
                    <div className="relative md:w-full z-0 mx-auto w-2/3 mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="relative z-0 md:w-full w-2/3 mb-5 mx-auto group">
                    <input type="email" name="floating_email" placeholder="Enter Email/Mobile" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                </div>
                <div className="relative z-0 md:w-full w-2/3 mb-5 mx-auto group">
                    <textarea name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Write Your Message" required />
                </div>
                <button type="submit" className="text-white bg-blue-400 hover:bg-blue-500 shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg m-auto text-sm w-1/3 mx-32 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-500">Submit</button>
            </form>

            <div aria-label="Global" className="mx-auto w-3/4 mt-10 bg-blue-400/40 backdrop-blur flex shadow-md shadow-blue-400 max-w-2xl rounded-lg items-center justify-between p-4 lg:px-8">
                <div className="flex  justify-center align-center lg:flex-1">
                    <Link href="https://www.linkedin.com/in/rishabh029/" className="-m-1.5 p-1.5">
                        <FaLinkedin className='text-blue-500' style={{ fontSize: '26px' }} />
                    </Link>
                </div>
                <div className="flex justify-center align-center lg:flex-1">
                    <Link href="https://github.com/chaudhary-rishabh" className="-m-1.5 p-1.5">
                        <FaGithub className='text-blue-500' style={{ fontSize: '26px' }} />
                    </Link>
                </div>
                <div className="flex justify-center align-center lg:flex-1">
                    <Link href="https://discord.com/your-discord-link" className="-m-1.5 p-1.5">
                        <FaDiscord className="text-blue-500" style={{ fontSize: '26px' }} />
                    </Link>
                </div>
                <div className="flex  justify-center align-center lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <FaTwitter className='text-blue-500' style={{ fontSize: '26px' }} />
                    </Link>
                </div>
                <div className="flex  justify-center align-center lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <FaEnvelope className='text-blue-500' style={{ fontSize: '26px' }} />
                    </Link>
                </div>
            </div>
            <BottomNav />
        </div>
    )
}

export default ContactModule