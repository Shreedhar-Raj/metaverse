import Head from 'next/head'
import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Login from '../components/Login'
import Messages from '../components/Messages';

export default function Home() {

  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden overflow-hidden p-0 m-0">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <Header />
        <Messages className="z-10" />
        
      </div>

      
      <video src="/chat.mp4" autoPlay muted loop className="absolute inset-0 object-cover h-screen w-full blur-sm" />
      
    </div>
  )
}
