import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Rishabh Chaudhary - Software Developer with expertise in full-stack development, DevOps, and technologies like TypeScript, Next.js, React.js, Node.js, MongoDB, MySQL, AWS, Kubernetes, Docker, and Jenkins." />
        <meta name="keywords" content="Rishabh Chaudhary, Full-Stack Developer, DevOps, Software Developer, Rishabh, TypeScript, Next.js, React.js, Node.js, MongoDB, MySQL, Jenkins, AWS Cloud, Kubernetes, Docker" />
        <meta name="author" content="Rishabh" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Rishabh Chaudhary | Full-Stack Developer & DevOps Expert" />
        <meta property="og:description" content="Explore the portfolio and expertise of Rishabh Chaudhary, a highly motivated software developer specializing in modern technologies and cloud DevOps solutions." />
        <meta property="og:url" content="https://rishabhc.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rishabhc.dev/assets/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rishabh Chaudhary | Full-Stack Developer & DevOps Expert" />
        <meta name="twitter:description" content="Discover Rishabh's expertise in full-stack development, DevOps, and cutting-edge technologies like AWS Cloud, Docker, Kubernetes, and more." />
        <meta name="twitter:image" content="https://rishabhc.dev/assets/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Additional SEO Enhancements */}
        <link rel="canonical" href="https://rishabhc.dev" />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Fonts - Removed Lora since it's handled by next/font/google */}
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}