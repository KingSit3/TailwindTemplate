const Twitter = () => {
    return (
    <div>

        <div class="bg-gray-100 font-sans">
                {/* {{-- Top Bar --}} */}
                <div class="bg-white">
                    <div class="container mx-auto flex pt-3">
                                {/* {{-- Left Side --}} */}
                                <div class="w-2/5 flex space-x-8 justify-start">
                                    <a class="pb-4 flex space-x-1 items-center font-semibold hover:text-green-400 border-b-2 border-transparent hover:border-green-400 duration-300" href="#">
                                        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        <span class="text-sm">Home</span>
                                    </a>
                                    <a class="pb-4 flex space-x-1 items-center font-semibold hover:text-green-400 border-b-2 border-transparent hover:border-green-400 duration-300" href="#">
                                        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span class="text-sm">Moments</span>
                                    </a>
                                    <a class="pb-4 flex space-x-1 items-center font-semibold hover:text-green-400 border-b-2 border-transparent hover:border-green-400 duration-300" href="#">
                                        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <span class="text-sm">Notification</span>
                                    </a>
                                    <a class="pb-4 flex space-x-1 items-center font-semibold hover:text-green-400 border-b-2 border-transparent hover:border-green-400 duration-300" href="#">
                                        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span class="text-sm">Mail</span>
                                    </a>
                                </div>
                                {/* {{-- End Left Side --}} */}

                                {/* {{-- Center Side --}} */}
                                <div class="w-1/5 flex mx-auto justify-center">
                                    <a href="#">
                                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </a>
                                </div>
                                {/* {{-- End Center Side --}} */}

                                {/* {{-- Right Side --}} */}
                                <div class="w-2/5 flex justify-end space-x-4 pb-3">
                                    {/* {{-- Search --}} */}
                                    <div class="flex items-start">
                                        <input class="bg-gray-100 rounded-full pl-8 py-1.5 text-gray-400 focus:outline-none outline-none text-sm focus:ring-2 focus:ring-blue-300 duration-200" id="" type="text" name="search" placeholder="Search Twitter" />
                                        <span class="absolute flex ml-2 mt-2">
                                            <svg class="w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    {/* {{-- Profile --}} */}
                                    <div class="flex items-start">
                                        <a href="#"><img class="w-6 rounded-full" src="image/album.png" alt="Profile" /></a>
                                    </div>
                                    {/* {{-- Tweet Button --}} */}
                                    <div class="flex items-start">
                                        <button class="bg-green-400 font-semibold text-white rounded-full px-4 py-1 focus:outline-none hover:bg-green-500 duration-300">Tweet</button>
                                    </div>
                                </div>
                                {/* {{-- End Right Side --}} */}

                    </div>
                </div>
                {/* {{-- End Top Bar --}} */}

                {/* {{-- Jumbotron Color --}} */}
                <div class="bg-gradient-to-r from-blue-400 via-blue-400 to-green-300 w-full h-80"></div>
                {/* {{-- End Jumbotron Color --}} */}
                
                {/* {{-- Navbar Content --}} */}
                <div class="bg-white shadow-md">
                    <div class="container mx-auto flex justify-between pt-2.5">
                        {/* {{-- Right section --}} */}
                        <div class="w-1/4">
                            <img class="rounded-full h-48 w-48 absolute -mt-20" src="image/logo.jpg" alt="Profile" />
                        </div>
                        {/* {{-- End Right section --}} */}

                        {/* {{-- Center section --}} */}
                        <div class="text-center">
                            <ul class="flex">
                                <a href="#">
                                    <li class="group flex-col border-b-4 px-4 pb-2 hover:border-green-400 border-transparent duration-300">
                                            <div class="text-gray-600 font-semibold">Tweets</div>
                                            <div class="group-hover:text-green-500 font-bold duration-200">60</div>
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="group flex-col border-b-4 px-4 pb-2 hover:border-green-400 border-transparent duration-300">
                                            <div class="text-gray-600 font-semibold">Following</div>
                                            <div class="group-hover:text-green-500 font-bold duration-200">10</div>
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="group flex-col border-b-4 px-4 pb-2 hover:border-green-400 border-transparent duration-300">
                                            <div class="text-gray-600 font-semibold">Followers</div>
                                            <div class="group-hover:text-green-500 font-bold duration-200">10k</div>
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="group flex-col border-b-4 px-4 pb-2 hover:border-green-400 border-transparent duration-300">
                                            <div class="text-gray-600 font-semibold">Likes</div>
                                            <div class="group-hover:text-green-500 font-bold duration-200">15k</div>
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="group flex-col border-b-4 px-4 pb-2 hover:border-green-400 border-transparent duration-300">
                                            <div class="text-gray-600 font-semibold">Moments</div>
                                            <div class="group-hover:text-green-500 font-bold duration-200">5</div>
                                    </li>
                                </a>
                            </ul>
                        </div>
                        {/* {{-- End Center section --}} */}
                        
                        {/* {{-- Left section --}} */}
                        <div class="w-1/4 text-center flex justify-end items-center">
                            <div class="flex">
                                <button class="bg-green-400 font-semibold text-sm text-white rounded-full px-4 py-1 focus:outline-none hover:bg-green-500 duration-300">Following</button>
                                <span class="ml-1">
                                    <a href="#">
                                        <svg class="w-8 text-gray-400 hover:text-gray-500 duration-200 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div></div>
                        </div>
                        {/* {{-- End Left section --}} */}
                    </div>
                </div>
                {/* {{-- End Navbar Content --}} */}

                {/* {{-- Content --}} */}
                <div class="container mx-auto flex mt-4">

                    {/* {{-- Left Section Content --}} */}
                    <div class="w-1/4 p-5 mt-6 mb-4">
                        <div class="text-3xl text-black font-bold"><a href="#">My Little Pony</a></div>
                        <div class="text-gray-500 text-sm"><a href="#">@Testing</a></div>
                        <div class="mb-2">Meet six colourfull pastel ponies</div>
                        {/* {{-- Links --}} */}
                        <div class="flex space-x-1 py-1">
                            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span class="text-green-400 hover:text-green-500 duration-200 text-sm">
                                <a href="#">MyPony.asia</a>
                            </span>
                        </div>
                        {/* {{-- Calendar --}} */}
                        <div class="flex space-x-1 py-1">
                            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span class="text-green-400 hover:text-green-500 duration-200 text-sm">
                                <a href="#">Joined 8 Aug</a>
                            </span>
                        </div>
                        {/* {{-- Button --}} */}
                        <div class="py-1 justify-center">
                            <button class="bg-green-400 font-semibold text-white rounded-full px-6 py-1 focus:outline-none hover:bg-green-500 duration-300">Tweet to MyPonyAsia</button>
                        </div>
                        {/* {{-- Following friends --}} */}
                        <div class="flex space-x-1 py-1">
                            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>
                                <a class="text-sm text-green-400 hover:text-green-500 duration-200" href="#">25 Followers you know</a>
                            </span>
                        </div>
                        {/* {{-- Following friends Profile --}} */}
                        <div class="py-1 w-9/12 justify-start">
                            <div class="py-1 grid grid-cols-5 gap-1">
                                <a href="#"><img class="w-6 rounded-full" src="image/album.png" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/logo.jpg" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/album.png" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/logo.jpg" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/album.png" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/logo.jpg" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/album.png" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/logo.jpg" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/album.png" alt="Profile" /></a>
                                <a href="#"><img class="w-6 rounded-full" src="image/logo.jpg" alt="Profile" /></a>
                            </div>
                        </div>
                        {/* {{-- Text Photos & Videos --}} */}
                        <div class="py-1 space-x-1 flex">
                            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <a class="" href="#">
                                <span class="text-sm text-green-400 hover:text-green-500 duration-200">Photos & Videos</span>
                            </a>
                        </div>
                        {/* {{-- Photos --}} */}
                        <div class="py-1 w-10/12 grid grid-cols-3 gap-3">
                            <a class="hover:opacity-50 duration-200" href="#"><img src="image/logo.jpg" alt="Photos" /></a>
                            <a class="hover:opacity-50 duration-200" href="#"><img src="image/logo.jpg" alt="Photos" /></a>
                            <a class="hover:opacity-50 duration-200" href="#"><img src="image/logo.jpg" alt="Photos" /></a>
                            <a class="hover:opacity-50 duration-200" href="#"><img src="image/logo.jpg" alt="Photos" /></a>
                        </div>

                    </div>
                    {/* {{-- End Left Section Content --}} */}

                    {/* {{-- Center Section Content --}} */}
                    <div class="w-1/2 bg-white rounded-t-xl">
                        {/* {{-- Upper part --}} */}
                        <div class="pt-3 px-3 font-bold text-lg border-b-2 border-gray-200 flex space-x-10 ">
                            <div class="pb-2"><a href="#">Tweets</a></div>
                            <div class="pb-2 text-green-400 hover:text-black duration-200 border-b-4 hover:border-green-400 border-transparent"><a href="#">Tweets &amp; Replies</a></div>
                            <div class="pb-2 text-green-400 hover:text-black duration-200 border-b-4 hover:border-green-400 border-transparent"><a href="#">Media</a></div>
                        </div>
                        {/* {{-- End Upper Part --}} */}
                        
                        {/* {{-- Tweets --}} */}
                            <div class="flex border-b-2 border-gray-200 pb-4">
                                {/* {{-- Left part --}} */}
                                <div class="w-1/6">
                                    <div class="flex justify-end p-2">
                                        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div class="flex justify-center">
                                        <a href="#"><img class=" rounded-full w-14" src="image/logo.jpg" alt="" /></a>
                                    </div>
                                </div>
                                {/* {{-- Right part --}} */}
                                <div class="w-full pt-2 pr-2 ">
                                    <div class="text-xs text-gray-400">Pinned Tweet</div>
                                    <div class="flex justify-between text-sm  mt-1">
                                        <div class="flex space-x-1">
                                            <a class="text-green-300 hover:text-green-400 hover:underline duration-200" href="#">MyPonyAsia</a>
                                            <span class="text-gray-600">@MyPonyAsia</span>
                                            <span>&bull;</span>
                                            <span class="text-gray-400">25 Dec 2019</span>
                                        </div>
                                        <div class="flex pr-4">
                                            <a href="#">
                                                <svg class="w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="py-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa maiores, sequi dolorem quam, fuga maxime, neque repellat inventore facere sit architecto enim! Voluptatibus quisquam velit recusandae fugit labore ipsam, voluptates quos molestiae illo pariatur cum accusamus deleniti explicabo iste.
                                    </div>
                                    <div class="text-green-300 w-4/12 truncate">
                                        <a class="hover:underline hover:text-green-400 duration-200" href="#">github.Lorem ipsum dolor sit amet.</a>
                                    </div>
                                    <div class="w-full py-2 pr-2">
                                        <a href="#"><img src="image/img_landscape.png" alt="" /></a>
                                    </div>

                                    {/* {{-- Comment, Like, ETC --}} */}
                                    <div class="flex space-x-6 text-gray-500">
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="w-6 group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg></a>  
                                            <span><a class="group-hover:text-blue-500" href="#">50</a></span>
                                        </div>
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="group-hover:text-green-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                            </svg></a>
                                            <span><a class="group-hover:text-green-500 " href="#">20</a></span>
                                        </div>
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="group-hover:text-red-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg></a>
                                            <span><a class="group-hover:text-red-500" href="#">100</a></span>
                                        </div>
                                        <div class="flex">
                                            <a href="#"><svg class="hover:text-green-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex border-b-2 border-gray-200 pb-4">
                                {/* {{-- Left part --}} */}
                                <div class="w-1/6">
                                    <div class="flex justify-end p-2">
                                        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div class="flex justify-center">
                                        <a href="#"><img class=" rounded-full w-14" src="image/logo.jpg" alt="" /></a>
                                    </div>
                                </div>
                                {/* {{-- Right part --}} */}
                                <div class="w-full pt-2 pr-2 ">
                                    <div class="text-xs text-gray-400">Pinned Tweet</div>
                                    <div class="flex justify-between text-sm  mt-1">
                                        <div class="flex space-x-1">
                                            <a class="text-green-300 hover:text-green-400 hover:underline duration-200" href="#">MyPonyAsia</a>
                                            <span class="text-gray-600">@MyPonyAsia</span>
                                            <span>&bull;</span>
                                            <span class="text-gray-400">25 Dec 2019</span>
                                        </div>
                                        <div class="flex pr-4">
                                            <a href="#">
                                                <svg class="w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="py-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa maiores, sequi dolorem quam, fuga maxime, neque repellat inventore facere sit architecto enim! Voluptatibus quisquam velit recusandae fugit labore ipsam, voluptates quos molestiae illo pariatur cum accusamus deleniti explicabo iste.
                                    </div>
                                    <div class="text-green-300 w-4/12 truncate">
                                        <a class="hover:underline hover:text-green-400 duration-200" href="#">github.Lorem ipsum dolor sit amet.</a>
                                    </div>
                                    <div class="w-full py-2 pr-2">
                                        <a href="#"><img src="image/img_landscape.png" alt="" /></a>
                                    </div>

                                    {/* {{-- Comment, Like, ETC --}} */}
                                    <div class="flex space-x-6 text-gray-500">
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="w-6 group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg></a>  
                                            <span><a class="group-hover:text-blue-500" href="#">50</a></span>
                                        </div>
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="group-hover:text-green-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                            </svg></a>
                                            <span><a class="group-hover:text-green-500 " href="#">20</a></span>
                                        </div>
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="group-hover:text-red-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg></a>
                                            <span><a class="group-hover:text-red-500" href="#">100</a></span>
                                        </div>
                                        <div class="flex">
                                            <a href="#"><svg class="hover:text-green-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex border-b-2 border-gray-200 pb-4">
                                {/* {{-- Left part --}} */}
                                <div class="w-1/6">
                                    <div class="flex justify-end p-2">
                                        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div class="flex justify-center">
                                        <a href="#"><img class=" rounded-full w-14" src="image/logo.jpg" alt="" /></a>
                                    </div>
                                </div>
                                {/* {{-- Right part --}} */}
                                <div class="w-full pt-2 pr-2 ">
                                    <div class="text-xs text-gray-400">Pinned Tweet</div>
                                    <div class="flex justify-between text-sm  mt-1">
                                        <div class="flex space-x-1">
                                            <a class="text-green-300 hover:text-green-400 hover:underline duration-200" href="#">MyPonyAsia</a>
                                            <span class="text-gray-600">@MyPonyAsia</span>
                                            <span>&bull;</span>
                                            <span class="text-gray-400">25 Dec 2019</span>
                                        </div>
                                        <div class="flex pr-4">
                                            <a href="#">
                                                <svg class="w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="py-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa maiores, sequi dolorem quam, fuga maxime, neque repellat inventore facere sit architecto enim! Voluptatibus quisquam velit recusandae fugit labore ipsam, voluptates quos molestiae illo pariatur cum accusamus deleniti explicabo iste.
                                    </div>
                                    <div class="text-green-300 w-4/12 truncate">
                                        <a class="hover:underline hover:text-green-400 duration-200" href="#">github.Lorem ipsum dolor sit amet.</a>
                                    </div>
                                    <div class="w-full py-2 pr-2">
                                        <a href="#"><img src="image/img_landscape.png" alt="" /></a>
                                    </div>

                                    {/* {{-- Comment, Like, ETC --}} */}
                                    <div class="flex space-x-6 text-gray-500">
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="w-6 group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg></a>  
                                            <span><a class="group-hover:text-blue-500" href="#">50</a></span>
                                        </div>
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="group-hover:text-green-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                            </svg></a>
                                            <span><a class="group-hover:text-green-500 " href="#">20</a></span>
                                        </div>
                                        <div class="group flex space-x-3">
                                            <a href="#"><svg class="group-hover:text-red-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg></a>
                                            <span><a class="group-hover:text-red-500" href="#">100</a></span>
                                        </div>
                                        <div class="flex">
                                            <a href="#"><svg class="hover:text-green-500 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* {{-- End Tweets --}} */}

                    </div>
                    {/* {{-- End Center Section Content --}} */}

                    {/* {{-- Right Section Content --}} */}
                    <div class="w-1/4 ml-3">
                        {/* {{-- First Section --}} */}
                        <div class="bg-white rounded-l-xl p-4">
                            <div class="flex space-x-2 mb-2">
                                <span class="font-bold"><a href="##"> Who To Follow</a></span>
                                <span class="flex items-center text-xs">&bull;</span>
                                <span class="flex items-center text-xs text-green-300 hover:underline hover:text-green-500 duration-200"><a href="#">Refresh</a></span>
                                <span class="flex items-center text-xs">&bull;</span>
                                <span class="flex items-center text-xs text-green-300 hover:underline hover:text-green-500 duration-200"><a href="#">View All</a></span>
                            </div>
                            {/* {{-- Follow Section --}} */}
                            <div class="border-b-2 border-gray-100 pt-3 pb-3 flex">
                                <div class="pr-3 mt-2 flex flex-row">
                                    <img class="w-14 rounded-full" src="https://ui-avatars.com/api/?my" alt="" />
                                </div>
                                <div class="w-10/12">
                                    <div class="flex flex-row justify-between">
                                        <div class="text-sm truncate mr-2">
                                            <span class="font-semibold"><a href="#">MyLittlePony</a></span>
                                            <span class="text-gray-400">@MyLittlePony</span>
                                        </div>
                                        <div class="flex content-start">
                                            <a class="text-xs" href="#">
                                                <svg class="w-4 text-gray-400 hover:text-gray-500 duration-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="px-4 mt-2 py-1 font-semibold text-sm bg-white ring-1 ring-green-400 text-green-500 hover:text-white rounded-full focus:outline-none hover:bg-green-500 duration-300">Follow</button>
                                    </div>
                                </div>
                            </div>
                            <div class="border-b-2 border-gray-100 pt-3 pb-3 flex">
                                <div class="pr-3 mt-2 flex flex-row">
                                    <img class="w-14 rounded-full" src="https://ui-avatars.com/api/?my" alt="" />
                                </div>
                                <div class="w-10/12">
                                    <div class="flex flex-row justify-between">
                                        <div class="text-sm truncate mr-2">
                                            <span class="font-semibold"><a href="#">MyLittlePony</a></span>
                                            <span class="text-gray-400">@MyLittlePony</span>
                                        </div>
                                        <div class="flex content-start">
                                            <a class="text-xs" href="#">
                                                <svg class="w-4 text-gray-400 hover:text-gray-500 duration-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="px-4 mt-2 py-1 font-semibold text-sm bg-white ring-1 ring-green-400 text-green-500 hover:text-white rounded-full focus:outline-none hover:bg-green-500 duration-300">Follow</button>
                                    </div>
                                </div>
                            </div>
                            <div class="border-b-2 border-gray-100 pt-3 pb-3 flex">
                                <div class="pr-3 mt-2 flex flex-row">
                                    <img class="w-14 rounded-full" src="https://ui-avatars.com/api/?my" alt="" />
                                </div>
                                <div class="w-10/12">
                                    <div class="flex flex-row justify-between">
                                        <div class="text-sm truncate mr-2">
                                            <span class="font-semibold"><a href="#">MyLittlePony</a></span>
                                            <span class="text-gray-400">@MyLittlePony</span>
                                        </div>
                                        <div class="flex content-start">
                                            <a class="text-xs" href="#">
                                                <svg class="w-4 text-gray-400 hover:text-gray-500 duration-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="px-4 mt-2 py-1 font-semibold text-sm bg-white ring-1 ring-green-400 text-green-500 hover:text-white rounded-full focus:outline-none hover:bg-green-500 duration-300">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {{-- End First Section --}} */}

                        {/* {{-- Second Section --}} */}
                        <div class="bg-white rounded-l-xl p-4 mt-6">
                            <div class="flex space-x-2 mb-2">
                                <span class="font-bold"><a href="#">Trends For You</a></span>
                                <span class="flex items-center text-xs">&bull;</span>
                                <span class="flex items-center text-xs text-green-300 hover:underline hover:text-green-500 duration-200"><a href="#">Change</a></span>
                            </div>
                            {/* {{-- Trends List --}} */}
                                <div class="flex flex-col leading-4 my-2">
                                    <a class="text-green-400 font-semibold" href="#">#Lorem</a>
                                    <span class="text-sm">Lorem ipsum dolor sit.</span>
                                </div>
                                <div class="flex flex-col leading-4 my-2">
                                    <a class="text-green-400 font-semibold" href="#">#sit</a>
                                    <span class="text-sm">Lorem ipsum dolor sit.</span>
                                </div>
                                <div class="flex flex-col leading-4 my-2">
                                    <a class="text-green-400 font-semibold" href="#">#ipsum</a>
                                    <span class="text-sm">Lorem ipsum dolor sit.</span>
                                </div>
                                <div class="flex flex-col leading-4 my-2">
                                    <a class="text-green-400 font-semibold" href="#">#dolor</a>
                                    <span class="text-sm">Lorem ipsum dolor sit.</span>
                                </div>
                            {/* {{-- End Trend List --}} */}
                        </div>
                        {/* {{-- End Second Section --}} */}
                        
                        {/* {{-- Footer & Credits --}} */}
                        <div class="my-3 px-4 text-xs text-gray-500 space-x-2">
                            <span>&copy; 2018 Twitter</span> 
                            <span>About</span> 
                            <span>Help Center</span> 
                            <span>Terms</span> 
                            <span>Privacy Policy</span> 
                            <span>Cookies</span> 
                            <span>Site Info</span> 
                        </div>
                        {/* {{-- End Footer & Credits --}} */}
                    </div>
                    {/* {{-- End Right Section Content --}} */}

                </div>
                {/* {{-- End Content --}} */}

        </div>

    </div>
    )
  }
  
  export default Twitter;