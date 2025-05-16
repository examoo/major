import { useState } from 'react';
import padlock from '../../public/padlock.png';
const Login = ({onAuthenticated}) => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'Majorszn') {
            localStorage.setItem('token', 'Majorszn');
            onAuthenticated(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid password. Please try again.');
        }
    };

    return (
        <div className="min-h-screen overflow-hidden relative bg-[#242424] text-[#F0F0F0] flex flex-col items-center justify-center w-full">

            <div className="w-full max-w-md p-8 space-y-8 bg-[#242424] border-[#3F3F3F] rounded-lg shadow-lg">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-6">
                        <img src={padlock} alt='lock' className='w-[175px] h-[175px]' />
                    </div>
                    <h1 className="text-2xl font-bold text-center mb-8">YOU DO NOT HAVE THE XP</h1>
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-2">Enter Access Code</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-[#181818] border border-[#B0B0B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DF3844]"
                                placeholder="Enter access code"
                            />
                        </div>
                        {errorMessage && (
                            <span className="text-red-400 text-sm">{errorMessage}</span>
                        )}
                        <button type="submit" className="w-full px-4 py-2 bg-[#E63946] hover:bg-[#DF3844] rounded-md transition-colors duration-300 cursor-pointer">
                            Unlock Access
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login;