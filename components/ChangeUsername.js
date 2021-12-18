import { useMoralis } from "react-moralis"

function ChangeUsername() {

    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()})`)

        if (!username) return;

        setUserData({
            username, 
        })
    }

    return (
        <div className="text-sm absolute top-5 right-5">
            <button onClick={setUsername} className="bg-sky-500 rounded-lg p-2 font-bold hover:bg-sky-400">Change My Username</button>
        </div>
    )
}

export default ChangeUsername
