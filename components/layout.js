import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Script from "next/Script";
import Footer from "./footer"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Layout({ children }) {
  let router = useRouter();

  return (
    <div>

      <Head>
      <link rel="foo" href="bar" />

      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="manifest" href="/manifest.json" />

    <meta name="author" content="MyPond" />
    <link rel="canonical" href="https://mypond.hu" />

    <meta
      name="description"
      content="Légy részese az ország legnagyobb kistó felmérésének, és tudj meg többet a kerti tavadról!"
    />

    <Script
      src="https://kit.fontawesome.com/61c49ee100.js"
      crossorigin="anonymous"
    ></Script>
    <Script
      src="https://kit.fontawesome.com/6cebe413cb.js"
      crossorigin="anonymous"
    ></Script>

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Sahitya:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <title>myPond-Légy részese az ország legnagyobb kistó felmérésének!</title>
    <meta
      name="keywords"
      content="
    tó ,tavak, kerti tó, kertitó, kerti tavak, kertitavak, kertépítés, tóépítés, halastó, vízi növény, 
    vizi növény, vizinövény, vízinövény, citizen science, kistó, kis tó, kistavak, kis tavak, mesterséges tó , 
    mesterséges tavak, biodiverzitás, globális felmelegedés, klímaváltozás, városi hősziget, hősziget, oktatás, tudomány, 
    természetvédelem, természet védelem, ökológia, gyerekek, aranyhal, aranyhalak, koi ponty, tündérrózsa, tündér rózsa
    
    "
    />
<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-4Z42X0448R"/>
  <Script
   id='google-analytics'
   strategy="afterInteractive"
   dangerouslySetInnerHTML={{
    __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-4Z42X0448R', {
      page_path: window.location.pathname,
     });
    `,
    }}
  />
    
      </Head>
<Navbar />
     

      <main className="main_container">{children}</main>
      <Footer />
    </div>
  );
}