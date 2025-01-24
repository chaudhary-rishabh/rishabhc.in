'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const contactTitle = `Let's Connect`;
    return (
        <header className='fixed top-0 left-0 right-0 z-40'>
            <nav aria-label="Global" className="mx-auto my-3 bg-gradient-to-l from-blue-50/60 via-blue-300/60 to-blue-500/60 backdrop-blur flex shadow-md shadow-blue-400 max-w-6xl rounded-2xl items-center justify-between p-4 lg:px-8">
                <div className="flex w-1/4 sm:w-2/4">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Rishabh</span>
                        <Image src="https://i.imgur.com/3qM80rG.png" width={600} height={600} alt="Rishabh Portfolio Home" className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:flex-1">
                    <Link href="/contact" className="-m-1.5 text-black p-1.5 font-semibold  hover:underline">
                        {contactTitle}
                    </Link>
                </div>
                <div className="flex lg:flex-1">
                    <Link href="https://flowcv.com/resume/f1usckjdmt" className="-m-1.5 text-black p-1.5 font-semibold hover:underline">
                        Resume
                    </Link>
                </div>
                <div className="flex lg:flex-1">
                    <Link href="https://www.linkedin.com/in/rishabh029/" className="-m-1.5 p-1.5 text-black font-semibold hover:underline">
                        Blog
                    </Link>
                </div>
            </nav>
        </header>
    )
}