const MyAnimeAsia = () => {
    return (
    <div>
        
        <div className="bg-trueGray-800 text-white">
            {/* {{-- Navbar --}} */}
                <div className="flex justify-start bg-black p-4 rounded-b shadow-xl">
                    <div>
                        <a href="#">
                            <img className="w-40" src="image/mpa.png" alt="" />
                        </a>
                    </div>
                </div>
            {/* {{-- End Navbar --}} */}

            {/* Corousel Section */}
                <div className="flex w-full bg-black h-96">
                    <img className="w-full h-full object-cover opacity-30" src="/image/episodethumbnail.png" alt="Corousel"/>
                    <div className="absolute w-full h-96 flex flex-col justify-center items-center font-semibold">
                        <p className="text-3xl cursor-default">Gotoubun No Hanayome Season 2 Is Out!</p>
                        <a className="ring-2 ring-white p-2 rounded-lg mt-3 hover:bg-white hover:text-black duration-150" href="#">Click Here</a>
                    </div>
                </div>
            {/* End Corousel Section */}

            {/* {{-- On Progress Section --}} */}
                <div className="my-14">
                    <div className="border border-b-2 border-trueGray-700"></div>
                    <div className="flex justify-center">
                        <h1 className="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">On Progress</h1>
                    </div>
                    
                    <div className="p-4 mt-5 flex justify-center space-x-10">
                        {/* Card */}
                        <a className="p-2 flex flex-col w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="#">
                            <img className="rounded-xl" src="image/otaku-anime.jpg" alt="Poster"/>
                            <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold">TV</p>
                            <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 8</p>
                            <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a className="p-2 flex flex-col w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="#">
                            <img className="rounded-xl" src="image/otaku-anime.jpg" alt="Poster"/>
                            <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold">BD</p>
                            <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 1</p>
                            <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a className="p-2 flex flex-col w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="#">
                            <img className="rounded-xl" src="image/otaku-anime.jpg" alt="Poster"/>
                            <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold">TV</p>
                            <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                            <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                        </a>
                        {/* End Card */}
                    </div>


                </div>
            {/* {{-- End On Progress Section --}} */}

            {/* {{-- Finished Anime --}} */}
                <div className="my-14">
                    <div className="border border-b-2 border-trueGray-700"></div>
                    <div className="flex justify-center">
                        <h1 className="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">Finished Anime</h1>
                    </div>

                    <div className="p-4 mt-5">
                        <div className="grid grid-cols-5 gap-3">
                            {/* Card, Max 5 */}
                            <a className="p-2 flex flex-col w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="#">
                                <img className="rounded-xl" src="image/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold">TV</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>
                            {/* End Card */}

                            <a className="p-2 flex flex-col w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="#">
                                <img className="rounded-xl" src="image/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold">BD</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>
                            <a className="p-2 flex flex-col w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="#">
                                <img className="rounded-xl" src="image/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold">TV</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>
                            <a className="p-2 flex flex-col w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="#">
                                <img className="rounded-xl" src="image/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold">BD</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>
                            <a className="p-2 flex flex-col w-52 bg-black bg-opacity-25 hover:shadow-lg rounded-xl hover:opacity-50 duration-200" href="#">
                                <img className="rounded-xl" src="image/otaku-anime.jpg" alt="Poster"/>
                                <p className="absolute p-2 bg-blue-700 -mt-2 -ml-2 rounded-tl-xl font-bold">BD</p>
                                <p className="-mt-6 text-center bg-trueGray-700 font-semibold rounded-b-xl">Episode 12</p>
                                <p className="text-center mt-2">Tensei Shirata Slime Datta Ken S2</p>
                            </a>
                        </div>
                    </div>
                    
                </div>
            {/* {{-- End Finished Anime --}} */}


            {/* {{-- Footer --}} */}
                <div className="flex justify-between px-10 p-5 bg-black shadow-2xl">
                    <div className="w-1/3">FIrst</div>
                    <div className="w-1/3 flex flex-col items-center justify-center ">
                        <span className="font-bold text-lg mb-3">Partners</span>
                        <div className="flex space-x-4">
                            <a href="#"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="image/episodethumbnail.png" alt="Partners Banner" /></a>
                            <a href="#"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="image/episodethumbnail.png" alt="Partners Banner" /></a>
                            <a href="#"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="image/episodethumbnail.png" alt="Partners Banner" /></a>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-center">Third</div>
                </div>
                <div className="text-center bg-black pb-3">This Website Made by @....</div>
            {/* {{-- End Footer --}} */}
        </div>

    </div>
    )
  }
  
  export default MyAnimeAsia;