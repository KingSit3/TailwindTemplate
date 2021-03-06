const PonyTown = () => {
    return (
      <div className="bg-gray-ponytown">

        {/* {{-- Navbar --}} */}
                <div className="container">
                    <div className="text-white flex justify-end space-x-2">
                        <div className="p-3 group border-gray-100 border-transparent border-t-4">
                            <a className="text-white" href="#">Home</a>
                        </div>
                        <div className="p-3 block group hover:border-gray-100 border-transparent border-t-4 duration-150">
                            <a className="text-gray-300 group-hover:text-white" href="#">Help</a>
                        </div>
                        <div className="p-3 group hover:border-gray-100 border-transparent border-t-4 duration-150">
                            <a className="text-gray-300 group-hover:text-white" href="#">About</a>
                        </div>
                        {/* {{-- Button --}} */}
                        <div className="p-3 flex">
                            <button className="bg-gray-100 hover:bg-gray-300 text-black hover:text-gray-800 text-sm rounded-sm px-3 py-2 pl-6 duration-150">Sign In</button>
                            <div className="absolute mt-3 ml-1">
                                <svg className="w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            {/* {{-- End Navbar --}} */}

            {/* {{-- Content Center --}} */}
                {/* {{-- Logo Image --}} */}
                <div className="w-full flex justify-center mt-10">
                    <img src="/image/ponytown.png" alt=""/>
                </div>

                {/* {{-- Text Upper --}} */}
                <div className="text-center opacity-80 text-gray-100 text-base mt-10">Sign in with your social site account</div>
                <div className="text-center opacity-80 text-gray-300 text-base mt-10">SIGN IN <i className="text-gray-400" >or</i> SIGN UP OPTION</div>
                {/* {{-- Login Option --}} */}
                <div className="flex justify-center mt-4 space-x-2">
                    <a href="#">
                        <div className="py-2 px-7 rounded-md border-b-4 border-blue-400 hover:bg-gray-800-spotify duration-150 bg-gray-700-spotify">
                                <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                        </div>
                    </a>
                    <a href="#">
                        <div className="py-2 px-7 rounded-md border-b-4 border-blue-500 hover:bg-gray-800-spotify duration-150 bg-gray-700-spotify">
                                <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                        </div>
                    </a>
                    <a href="#">
                        <div className="py-2 px-7 rounded-md border-b-4 border-blue-600 hover:bg-gray-800-spotify duration-150 bg-gray-700-spotify">
                                <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                        </div>
                    </a>
                    <a href="#">
                        <div className="py-2 px-7 rounded-md border-b-4 border-blue-700 hover:bg-gray-800-spotify duration-150 bg-gray-700-spotify">
                                <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                </svg>
                        </div>
                    </a>
                </div>
                {/* {{-- Text Bottom --}} */}
                <div className="text-center opacity-80 text-gray-300 text-base mt-10">SIGN IN <i className="text-gray-400">only</i> OPTIONS</div>
                <div className="text-center opacity-80 text-gray-300 text-sm mt-4">(You <b>cannot</b> use these social sites to create new account)</div>
                {/* {{-- Login Option 2 --}} */}
                <div className="flex justify-center mt-4 space-x-2">
                    <a href="#">
                        <div className="py-2 px-7 rounded-md border-b-4 opacity-60 border-red-400 hover:bg-gray-800-spotify duration-150 bg-gray-700-spotify">
                                <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                        </div>
                    </a>
                    <a href="#">
                        <div className="py-2 px-7 rounded-md border-b-4 opacity-60 border-purple-600 hover:bg-gray-800-spotify duration-150 bg-gray-700-spotify">
                                <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                </svg>
                        </div>
                    </a>
                    <a href="#">
                        <div className="py-2 px-7 rounded-md border-b-4 opacity-60 border-red-500 hover:bg-gray-800-spotify duration-150 bg-gray-700-spotify">
                                <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
                                </svg>
                        </div>
                    </a>
                </div>
            {/* {{-- End Content Center --}} */}

            {/* {{-- Footer --}} */}
                <div className="container mx-auto px-16 mt-20 mb-8">
                    <div className="flex justify-between">
                        <div className="text-gray-400 text-sm flex flex-col">
                            <div>
                                version <b>0.81.2-alpha</b>
                            </div>
                        <span className="hover:underline hover:text-yellow-400"><a href="#">changelog</a></span>
                        </div>
                        <div className="text-right text-sm text-gray-400 flex flex-col">
                            <div className="flex space-x-2">
                                <span>&copy; 2016-2021</span>
                                <span className="hover:underline hover:text-yellow-400"><a href="#">Pony Town</a></span>
                                <span>|</span>
                                <span className="flex items-end">
                                    <a className="hover:underline hover:text-yellow-400" href="#">
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                        </svg>
                                    </a>
                                </span>
                                <span className="flex items-end">
                                    <a className="hover:underline hover:text-yellow-400" href="#">
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </a>
                                </span>
                                <span className="flex items-end">
                                    <a className="hover:underline hover:text-yellow-400" href="#">
                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div className="flex space-x-2 justify-end">
                                <span className="hover:underline hover:text-yellow-400"><a href="#">privacy policy</a></span>
                                <span> | </span>
                                <span className="hover:underline hover:text-yellow-400"><a href="#">terms of service</a></span>

                            </div>
                        </div>
                    </div>
                </div>
            {/* {{-- End Footer --}} */}

      </div>
    )
  }
  
  export default PonyTown;