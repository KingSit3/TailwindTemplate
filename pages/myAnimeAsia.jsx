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

            {/* {{-- Garapan Section --}} */}
                <div className="my-20">
                    <div className="border border-b-2 border-trueGray-700"></div>
                    <div className="flex justify-center">
                        <h1 className="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">Garapan Progress</h1>
                    </div>



                </div>
            {/* {{-- End Garapan Section --}} */}

            {/* {{-- Popular Episodes --}} */}
                <div className="my-20">
                    <div className="border border-b-2 border-trueGray-700"></div>
                    <div className="flex justify-center">
                        <h1 className="absolute -mt-5 bg-trueGray-800 px-5 text-3xl font-semibold cursor-default">Popular Episodes</h1>
                    </div>

                    <div className="mt-8 py-2 px-10">
                        <div className="grid grid-cols-3 gap-5">

                            <div className="group">
                                <a className="flex justify-center items-center" href="#">
                                    <div className="absolute opacity-0 group-hover:opacity-100 duration-150 w-30% h-35%">
                                        <div className="flex flex-col text-center ml-10">
                                            <span className=" w-11/12 mt-2 font-semibold text-xl">Friendship Is Magic</span>
                                            <span className=" w-11/12 mt-2 font-semibold text-xl">Season 1</span>
                                            <span className=" w-11/12 mt-2 font-semibold text-sm">Episode 20 - The Mysterious Voice & The 5 Habits of Highly Effective Ponies</span>
                                        </div>
                                    </div>
                                    <img className="rounded-xl group-hover:opacity-10 duration-150" src="image/episodethumbnail.png" alt="Thumbnail" />
                                </a>
                            </div>
                            <div className="group">
                                <a className="flex justify-center items-center" href="#">
                                    <div className="absolute opacity-0 group-hover:opacity-100 duration-150 w-30% h-35%">
                                        <div className="flex flex-col text-center ml-10">
                                            <span className=" w-11/12 mt-2 font-semibold text-xl">Friendship Is Magic</span>
                                            <span className=" w-11/12 mt-2 font-semibold text-xl">Season 1</span>
                                            <span className=" w-11/12 mt-2 font-semibold text-sm">Episode 20 - The Mysterious Voice & The 5 Habits of Highly Effective Ponies</span>
                                        </div>
                                    </div>
                                    <img className="rounded-xl group-hover:opacity-10 duration-150" src="image/episodethumbnail.png" alt="Thumbnail" />
                                </a>
                            </div>
                            <div className="group">
                                <a className="flex justify-center items-center" href="#">
                                    <div className="absolute opacity-0 group-hover:opacity-100 duration-150 w-30% h-35%">
                                        <div className="flex flex-col text-center ml-10">
                                            <span className=" w-11/12 mt-2 font-semibold text-xl">Friendship Is Magic</span>
                                            <span className=" w-11/12 mt-2 font-semibold text-xl">Season 1</span>
                                            <span className=" w-11/12 mt-2 font-semibold text-sm">Episode 20 - The Mysterious Voice & The 5 Habits of Highly Effective Ponies</span>
                                        </div>
                                    </div>
                                    <img className="rounded-xl group-hover:opacity-10 duration-150" src="image/episodethumbnail.png" alt="Thumbnail" />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            {/* {{-- End Popular Episode --}} */}


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