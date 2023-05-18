import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <meta name="description" content="David Hernandez, Front-end developer, Based in Halifax Nova Scotia, Canada " />
        <link rel='stylesheet' href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Source+Code+Pro:wght@800&family=Syne:wght@400;500;600;700&family=Ubuntu:wght@500;700&display=swap" rel="stylesheet"/>        

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
