import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noah Aghedo - Full-Stack Developer</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Noah Aghedo - Web Developer" />
        <meta name="title" content="Noah Aghedo | Full-Stack Developer" />
        <meta
          name="keywords"
          content="code, developer, JavaScript, TypeScript, web, web developer, web development, coding, developing, Next.js, HTML, CSS, Tailwind"
        />
        <meta
          property="og:title"
          content="Noah Aghedo | Full-Stack Web Developer"
        />
        <meta property="og:url" content="https://aghedo.vercel.app/#about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/95977247?s=400&v=4"
        ></meta>
        <meta
          property="og:description"
          content="As a FullStack Developer, my expertise spans both the frontend and backend, although I have a particular focus on the frontend. I have a proficiency in a range of technologies, including JavaScript, React.js, Next.js, MongoDB, SocketIo, TailwindCSS, Node.js, HTML, CSS, Express, Redux, and TypeScript. This comprehensive knowledge allows me to develop modern and efficient web applications that meet the specific needs of my clients. I am committed to delivering high-quality, responsive web designs that provide exceptional user experiences."
        ></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta
          property="twitter:title"
          content="Aghedo Noah | FullStack Web Developer"
        ></meta>
        <meta
          property="twitter:description"
          content="As a FullStack Developer, my expertise spans both the frontend and backend, although I have a particular focus on the frontend. I have a proficiency in a range of technologies, including JavaScript, React.js, Next.js, MongoDB, SocketIo, TailwindCSS, Node.js, HTML, CSS, Express, Redux, and TypeScript. This comprehensive knowledge allows me to develop modern and efficient web applications that meet the specific needs of my clients. I am committed to delivering high-quality, responsive web designs that provide exceptional user experiences."
        ></meta>
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/95977247?s=400&v=4"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </Head>
      <main className="grid grid-cols-1 md:grid-cols-2 text-white">
        <div className="flex flex-col justify-between p-8 h-screen md:w-3/4">
          <Header />
          <Intro />
          <p className="font-Fasthand text-4xl">Thanks!</p>
        </div>
        <div className="flex-1 md:overflow-y-hidden">
          <div className="md:overflow-y-scroll md:h-screen p-8 md:px-16">
            <Projects />
            <About />
            <div id="contact" className="space-y-4 py-8">
              <h3 className="text-gray text-2xl font-bold">Contact Me</h3>
              <p className="text-lg">
                Please do hit me up for any collaboration or job offer I&apos;d
                be very glad to discuss with you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
