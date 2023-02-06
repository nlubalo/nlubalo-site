import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/navbar.js'
import AboutMe from '../components/aboutme.js'
import Projects from '../components/projects.js'
import Skills from '../components/skills.js'
import Title from '../components/title.js'
import Divider from '../components/divider.js'

export default function Home () {
  return (
    <>
      <Head>
        <title>Nancy Lubalo | nlubalo.com</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta
          property='og:description'
          content='A personal portfolio website Nancy Lubalo.
            Data Engineer.
          '
        />
        <meta
          name='description'
          content='A personal portfolio website for Nancy Lubalo.
            Data Engineer.
          '
        />
        <meta
          property='og:title'
          content='Nancy Lubalo | nlubalo.com'
          key='title'
        />
        <meta property='og:image' content={'/nlubalo.webp'} />
        <meta property='og:url' content={'https://nlubalo.com'} />
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@nlubalo' />
        <meta name='twitter:creator' content='@nlubalo' />
        <meta name='twitter:title' content='Nancy Lubalo | nlubalo.com' />
        <meta
          name='twitter:description'
          content='A personal portfolio website for Nancy Lubalo.
          Data Engineer.
        '
        />
        <meta name='twitter:image' content='/nlubalo.webp' />
        <link rel='canonical' href={'https://nlubalo.com'} />
      </Head>
      <Script id='scheme' type='application/ld+json'>{`
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Nancy Lubalo",
  "url": "https://nlubalo.com",
  "image": "",
  "sameAs": [
    "https://www.linkedin.com/in/nlubalo/",
    "https://github.com/nlubalo"
  ],
  "jobTitle": "Data Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": ""
  } 
}
`}</Script>
<Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-KDWPV496DM"></Script>
<Script strategy="afterInteractive" id='google'>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-KDWPV496DM');`}
</Script>
      <div
        style={{ scrollBehavior: 'smooth' }}
        className='bg-slate-900 w-full overflow-x-hidden flex flex-col items-center'
      >
        <Navbar />
         <Title/>
         <Divider/>
        <AboutMe/>
        <Skills/>
        <Projects />
      </div>
    </>
  )
}