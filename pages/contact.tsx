import MainLayout from '@/layouts/MainLayout'
import ContactModule from '@/modules/ContactModule/ContactModule'
import Head from 'next/head'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Rishabh</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Get in touch with Rishabh, an experienced full-stack developer and DevOps specialist." />
                <meta name="keywords" content="Contact, Get In Touch, Connect With Best Developer, Socials Of Rishabh Chaudhary" />
                <meta name="author" content="Rishabh" />
                <link rel="canonical" href="https://rishabhc.dev/contact" />
            </Head>
            <MainLayout>
                <ContactModule />
            </MainLayout>
        </>
    )
}

export default Contact