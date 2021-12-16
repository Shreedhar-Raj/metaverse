import Head from 'next/head'
import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Login from '../components/Login'

export default function Home() {

  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col absolute h-4/6 relative z-50 items-center w-full justify-center space-y-4 relative">
      <Image className="object-cover rounded-full" src="https://links.papareact.com/3pi" width={200} height={200} />
      <h1 className="">Successfuly Logged in!</h1>
      <button onClick={logout} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Logout of METAVERSE</button>
      </div>

      <div className="w-full h-screen">
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}
