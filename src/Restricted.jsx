import React, { useState } from 'react';
import GLBViewer from './GLBViewer';
import padlock from '../public/padlock.png';
import logoFull from '../public/logo-full.png';
// import set1 from '../public/set1.glb';
// import set2 from '../public/set2.glb';
// import set3 from '../public/set3.glb';
import PowerIcon from './Icons/PowerIcon';
import ShopIcon from './Icons/ShopIcon';
import MenuIcon from './Icons/MenuIcon';
import Layout from './components/Layout';

const Restricted = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');


    // Handle password submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'Majorszn') {
            setIsAuthenticated(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid password. Please try again.');
        }
    };

    return (
<>
            {!isAuthenticated ? (
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
            ) : (
                <>
                <Layout>
                <div className="absolute inset-0 z-[-1] opacity-10 bg-contain bg-no-repeat bg-center " style={{ backgroundImage: `url('major-world.png')` }}></div>



                    <div className='w-full'>
                        <header className="flex justify-center items-center mb-12 p-6">
                            <span>
                                <img src={logoFull} alt="major" className='w-[150px]' />
                            </span>
                        </header>
                    </div>
                    <div className="w-full p-6 mt-12 min-h-[85vh]">
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[90%] mx-auto  ">
                            <div className="bg-[#242424] p-6 mb-6 rounded-lg shadow-lg">
                                <div className="w-full aspect-square bg-[#B0B0B0] rounded-lg flex items-center justify-center mb-4">
                                    <div className="w-3/4 h-3/4 rounded-md flex items-center justify-center text-lg font-bold">
                                        <GLBViewer modelPath={set1} scale={4}/>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Limited Edition Set</h2>
                                <p className="text-gray-400">Exclusive rotating collection item.</p>
                            </div>
                            <div className="bg-[#242424] p-6 mb-6 rounded-lg shadow-lg">
                                <div className="w-full aspect-square bg-[#B0B0B0] rounded-lg flex items-center justify-center mb-4">
                                    <div className="w-3/4 h-3/4  rounded-md flex items-center justify-center text-lg font-bold">
                                    <GLBViewer modelPath={set2} scale={4}/>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Premium Collection</h2>
                                <p className="text-gray-400">Limited availability rotating item.</p>
                            </div>

                            <div className="bg-[#242424] p-6 mb-6 rounded-lg shadow-lg">
                                <div className="w-full aspect-square bg-[#B0B0B0] rounded-lg flex items-center relative justify-center mb-4">
                                    <div className="w-3/4 h-3/4  rounded-md flex items-center justify-center text-lg font-bold ">
                                    <GLBViewer modelPath={set3} scale={4}/>
                                    </div>
                                    <div className='absolute top-0 left-0 w-full  rounded-md flex items-center justify-center bg-light'>
                                            <img src={padlock} className='w-full'/>
                                        </div>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Premium Collection</h2>
                                <p className="text-gray-400">Limited availability rotating item.</p>
                            </div>
                        </div> */}
                    </div>
                    </Layout>
                </>
            )}
            </>
    );
};

export default Restricted;