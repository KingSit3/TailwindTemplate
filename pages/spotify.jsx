const Spotify = () => {
    return (
    <div>

        <div class="flex flex-col h-screen text-gray-400 text-sm">
                {/* {{-- Top & Side Area --}} */}
                <div class="flex-1 flex overflow-y-hidden">

                    {/* {{-- Sidebar --}} */}
                        <div class="sidebar bg-gray-900-spotify w-48 flex-none flex flex-col justify-between font-semibold">
                            <ul class="py-2">
                                <li class="border-l-4 border-green-500">
                                    <a href="#" class="flex item-center mx-4 m-4 group">
                                        <svg class="fill-current group-hover:text-white h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg>
                                        <span class="ml-2 flex items-center group-hover:text-white ">Home</span>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="#" class="flex item-center mx-4 m-4 group">
                                        <svg class="group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                        <span class="ml-2 flex items-center group-hover:text-white ">Browse</span>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="#" class="flex item-center mx-4 m-4 group">
                                        <svg class="group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                        <span class="ml-2 flex items-center group-hover:text-white ">Radio</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="sidebar-spotify overflow-y-auto px-5 mt-2">
                                <h3 class="uppercase tracking-widest text-gray-500 text-xs mt-3">Your Library</h3>
                                <ul class="leading-loose"> 
                                    <li class="truncate"><a href="#" class="hover:text-white">Made For You</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Recent Played</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Liked Song</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Albums</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Artist</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Podcast</a></li>
                                </ul>
                                <h3 class="uppercase tracking-widest text-gray-500 text-xs mt-3">Playlist</h3>
                                <ul class="leading-loose">
                                    <li class="truncate"><a href="#" class="hover:text-white">Acoustic</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Rock</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Hip Hop</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Jazz</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Original Song</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Movie Official Soundtracks</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">R&B</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Itunes</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Koplo</a></li>
                                    <li class="truncate"><a href="#" class="hover:text-white">Dangdut</a></li>
                                </ul>
                            </div>
                            <div class="border-t-2 border-green-500 h-16 px-4 py-2 flex items-center group">
                                <svg class="text-gray-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="35" height="35" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <a href="#" class="ml-3 font-normal text-gray-500 group-hover:text-white">New Playlist</a>
                            </div>
                        </div>
                    {/* {{-- End Sidebar --}} */}

                    {/* {{-- Main Area --}} */}
                    <div class="bg-gray-800-spotify flex-1 ">

                        {/* {{-- Top Bar --}} */}
                        <div class="top-bar bg-gradient-to-b from-gray-600 to-gray-800-spotify flex items-center justify-between px-4 py-2">
                            <div class="flex items-center space-x-2">
                                <button>
                                    <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button>
                                    <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <div class="ml-4 relative">
                                    <input class="bg-white text-gray-800 border-0 focus:outline-none focus:ring-0 focus:ring-offset-0 placeholder-gray-800 rounded-full px-2 pl-8 py-1" type="text" placeholder="search" name="search" />
                                    <div class="absolute top-0">
                                        <svg class="w-6 h-6 pt-1 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="flex items-center">
                                    <button class="focus:outline-none">
                                        <svg class="w-6 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <div>KingSit</div>
                                <button>
                                    <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                            </div>
                        </div>
                        {/* {{-- End Top Bar --}} */}

                        {/* {{-- Main Content --}} */}
                        <div class="overflow-y-auto">
                            <div class="mx-24">
                                <h2 class="mt-10 text-5xl font-semibold text-white">Home</h2>
                                <div class="mt-5">
                                    <h3 class="font-semibold text-xl border-b border-gray-900 pb-2">Recently Played</h3>
                                    <div class="flex items-center mt-4 -mx-4">
                                        
                                        {/* {{-- Grid Start --}} */}
                                        <div class="grid grid-cols-5 gap-7">

                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>
                                            <div class="space-y-2">
                                                <div><a href="#"><img class="hover:opacity-50 transition ease-in-out duration-200" src="image/album.png" alt="Album" /></a></div>
                                                <div class="text-center">
                                                    <a href="#" class="font-semibold hover:text-white transition ease-in-out duration-200">My Little Pony Original Theme Song</a>
                                                    <div class="text-gray-500 mt-2">Amazing Cartoon for everyone.</div>
                                                    <div class="uppercase tracking-widest text-xs text-gray-500 mt-2">10800 Followers</div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* {{-- End Grid --}} */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {{-- End Main Content --}} */}

                    </div>
                    {/* {{-- End Main Area --}} */}
                    
                </div>
                {/* {{-- End Top & Side Area --}} */}

                {/* {{-- Bottom Area --}} */}
                    <div class="bg-gray-700-spotify flex-none flex items-center h-16 justify-between">
                        {/* {{-- Album & Song name --}} */}
                        <div class="flex items-center">
                            <a href="#"><img class="w-14 p-2" src="image/album.png" alt="Album" /></a>
                            <div class="ml-3">
                                <div><a class="hover:text-white" href="#">Name Song</a></div>
                                <div><a class="text-xs text-gray-500 hover:text-white" href="#">Artist name</a></div>
                            </div>
                        </div>
                        {/* {{-- End Album & Song Name --}} */}

                        {/* {{-- Player Control --}} */}
                            <div class="player-controls flex flex-col justify-center">
                                <div class="flex justify-center">
                                    <button class="mx-2">
                                        <svg height="17" width="17" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button class="mx-2">
                                        <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        </button>
                                    <button class="mx-2">
                                        <svg height="17" width="17" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="max-w-full flex items-center justify-center">
                                    <div class="text-xs text-gray-500">1:20</div>
                                    <div class="bg-gray-500 rounded-lg w-full xl:w-200 h-1 ml-3"></div>
                                    <div class="ml-3 text-xs text-gray-500">4:00</div>
                                </div>
                            </div>
                        {/* {{-- End Player Control --}} */}

                        {/* {{-- Volume & Subtitle --}} */}
                            <div class="volume-control flex items-center">
                                <button class="mx-2">
                                    <svg height="17" width="17" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    </svg>
                                </button>
                                <button class="mx-2">
                                    <svg height="17" width="17" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </button>
                                <button class="mx-2">
                                    <svg height="17" width="17" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>

                            </div>
                        {/* {{-- End Volume & Subtitle --}} */}

                    </div>
                {/* {{-- End Bottom Area --}} */}

            </div>

    </div>
    )
  }
  
  export default Spotify;