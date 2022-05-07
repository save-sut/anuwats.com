import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

type Props = {
  metaTitle?: string
  children: any
}

export default function Container({ metaTitle, children }: Props) {
  const router = useRouter();

  const meta = {
    title: metaTitle === "" ? "Anuwat Songchumrong - Web Developer" : `Anuwat S. | ${metaTitle}`,
    description: `I've been developing websites for 3 years straight. Get in touch with me to know more.`,
    image: "/images/myself.jpeg",
    type: "website",
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Anuwat Songchumrong" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div style={{ height: '68vh' }}>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}