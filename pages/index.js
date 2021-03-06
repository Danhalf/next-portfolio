import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import { socialsList } from '../store/store';

export default function Home() {
  return (
    <>
      <Head>
        <title>&lt;Suvorov /&gt; | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main socialsList={socialsList} />
    </>
  );
}
