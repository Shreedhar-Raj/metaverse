import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";



function Login() {

    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative">
            <Head><title>Metaverse Login Page</title></Head>

            <div className="flex flex-col absolute z-50 h-4/6 items-center w-full justify-center space-y-5">
            <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
  <div>
  <h1 className="text-5xl mb-2">
    <span className="bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">Welcome to the Metaverse!</span>
  </h1>
  </div>
</motion.div>
                <Image className="object-cover rounded-full" src="https://links.papareact.com/3pi" width={200} height={200} />
                <div className="flex bg-yellow-500 rounded-lg p-4 font-bold animate-bounce">
                <LogoutIcon className="h-7 w-7 mr-1" />
                <button onClick={authenticate} >Login to the METAVERSE</button>
                </div>
                <a href="https://metamask.io/"><p className="text-md text-gray-100 italic hover:underline cursor-pointer">Dont have a wallet? Create one now!</p></a>
            </div>

            <div className="w-full h-screen">
                <video src="/video.mp4" autoPlay muted loop className="object-cover h-full w-full blur-md" />
            </div>
        </div>
    )
}

export default Login