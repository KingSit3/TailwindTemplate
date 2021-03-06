const Homepage = () => {
    return (
    <div>
        <div className="bg-gray-500 overflow-hidden">
            <div class="flex items-center justify-center h-screen">
                    {/* {{-- Card --}} */}
                    <div class="w-3/6 h-3/6 bg-gray-50 flex justify-center rounded-xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 duration-200 hover:shadow-none">
                        <div class="flex-col w-full flex items-center">
                            {/* {{-- Top --}} */}
                            <div class="h-4/6 w-full p-5">
                                <div class="">
                                    <svg class="w-16 opacity-30 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div class="text-2xl mt-10 mb-24 font-semibold">Loved it the very moment I used it.</div>
                            </div>
                            {/* {{-- Bottom --}} */}
                            <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 w-full h-full flex justify-between p-8">
                                <div class="flex space-x-4 h-full">
                                        <img class="w-12 rounded-full ring-4 ring-white" src="/image/logo.jpg" alt="Image" />
                                    <div class="flex flex-col text-white leading-4">
                                    <span class="font-semibold text-lg">Graeme Houston</span> 
                                    <span class="opacity-50 font-semibold">JavaScript Developer</span> 
                                    </div>
                                </div>
                                <div>
                                    <svg class="w-10 opacity-40 hover:opacity-60 cursor-pointer duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {{-- End Card --}} */}
                </div>
            </div>

    </div>
    )
  }
  
  export default Homepage;