const OtakuDesu = () => {
  return (
        <div className="bg-black text-white -mt-5 pt-5">

            {/* {{-- Navbar paling atas --}} */}
                <div class="mx-40">
                    <div class="flex justify-between my-2">
                        <div class="flex space-x-2 font-bold text-sm">
                            <a class="px-3 hover:underline duration-150" href="#">Cara Download</a>
                            <a class="px-3 hover:underline duration-150" href="#">DMCA</a>
                        </div>
                        <div class="flex space-x-2 font-bold text-xs uppercase">
                            <a class="p-2 rounded bg-trueGray-700 hover:bg-white hover:text-black duration-200" href="#">Lapor Link</a>
                            <a class="p-2 rounded bg-trueGray-700 hover:bg-white hover:text-black duration-200" href="#">Grup FB</a>
                        </div>
                    </div>
                </div>
            {/* {{-- END Navbar paling atas --}} */}

            {/* {{-- Logo Desu --}} */}
                <div class="w-full py-4 bg-trueGray-800">
                    <div class="mx-40">
                        <a href="#">
                            <img src="/image/otakudesu.png" alt="Logo Desu" />
                        </a>
                    </div>
                </div>
            {/* {{-- End Logo --}} */}

            {/* {{-- Navbar --}} */}
                <div class="border-b-4 border-lightBlue-500">
                    <div class="mx-40 flex justify-between">
                        <div class="">
                            <ul class="flex font-bold ">
                                <a class="hover:bg-lightBlue-500 px-4 py-3 duration-200 focus:outline-none" href="#"><li>Home</li></a>
                                <a class="hover:bg-lightBlue-500 px-4 py-3 duration-200 focus:outline-none" href="#"><li>Anime List</li></a>
                                <a class="hover:bg-lightBlue-500 px-4 py-3 duration-200 focus:outline-none" href="#"><li>Jadwal Rilis</li></a>
                                <a class="hover:bg-lightBlue-500 px-4 py-3 duration-200 focus:outline-none" href="#"><li>On-Going Anime</li></a>
                                <a class="hover:bg-lightBlue-500 px-4 py-3 duration-200 focus:outline-none" href="#"><li>Genre List</li></a>
                                <a class="hover:bg-lightBlue-500 px-4 py-3 duration-200 focus:outline-none" href="#"><li>Fanpage</li></a>
                            </ul>
                        </div>
                        <div class="flex items-center">
                            <input class="p-2 text-sm text-trueGray-800 w-52" type="text" placeholder="Search Anime..." />
                        </div>
                    </div>
                </div>
            {/* {{-- End Navbar --}} */}

            {/* {{-- Iklan Desu --}} */}
                <div class="mx-40 mt-5">
                    <div class="flex justify-between space-x-4">
                        <div class="w-9/12">
                            <img class="w-full" src="image/otakudesu.png" alt="Logo desu" />
                        </div>
                        <div class="w-3/12 flex flex-col space-y-4">
                            <span class="bg-trueGray-700 text-sm py-1 pl-3 cursor-default">Like Fanspage</span>
                            <img src="/image/otakudesu.png" alt="Logo desu" />
                        </div>
                    </div>
                </div>
            {/* {{-- End Iklan --}} */}

            {/* {{-- On Going Section --}} */}
                <div class="mx-40">
                    <div class="flex w-9/12 justify-between p-1 bg-trueGray-800 border-b-4 border-lightBlue-500 font-bold">
                        <span>On-going Anime</span>
                        <div class="bg-blue-700 p-1 px-5">
                            <a class="uppercase text-sm" href="#">Cek Anime Ongoing Lainnya</a>
                        </div>
                    </div>
                    <div class="w-9/12 p-1">
                        <div class="grid grid-cols-5 gap-2">
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                        </div>
                    </div>
                </div>
            {/* {{-- End On Going Section --}} */}

            {/* {{-- Complete Section --}} */}
                <div class="mx-40 mt-5">
                    <div class="flex w-9/12 justify-between p-1 bg-trueGray-800 border-b-4 border-lightBlue-500 font-bold">
                        <span>Complete Anime</span>
                        <div class="bg-blue-700 p-1 px-5">
                            <a class="uppercase text-sm" href="#">Cek Anime Complete Lainnya</a>
                        </div>
                    </div>
                    <div class="w-9/12 p-1">
                        <div class="grid grid-cols-5 gap-2">
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                            {/* {{-- Card --}} */}
                                <a href="#">
                                    <div class="min-w-full h-48 bg-cover overflow-hidden duration-150" style={{backgroundImage: `url(/image/otaku-anime.jpg)`}}>
                                        <div class="flex flex-col">
                                            <span class="bg-black bg-opacity-50 py-1 px-3 text-sm absolute flex">
                                                <svg class="w-3 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Episode 1
                                            </span>
                                            <span class="bg-black bg-opacity-50 p-1 absolute mt-10 text-xs">14 jan</span>
                                            <div class="flex justify-end my-auto mt-20">
                                                <span class="bg-blue-700 bg-opacity-75 p-1 absolute text-xs">Jumat</span>
                                            </div>
                                            <div class="mt-20 px-2 bg-black bg-opacity-50 w-full transform hover:-translate-y-10 duration-300 text-center">
                                                    <span class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            {/* {{-- End Card --}} */}
                        </div>
                    </div>
                </div>
            {/* {{-- End Complete Section --}} */}

        </div>
    )
}

export default OtakuDesu;