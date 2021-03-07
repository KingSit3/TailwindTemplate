const Homepage = () => {
    return (
    <div>
        
        <div className="bg-trueGray-800 text-white">
            {/* {{-- Navbar --}} */}
                <div className="flex justify-start bg-black p-4 rounded-b shadow-xl">
                    <div>
                        <a href="#">
                            <img className="w-40" src="../image/mpa.png" alt="" />
                        </a>
                    </div>
                </div>
            {/* {{-- End Navbar --}} */}

            {/* {{-- Top Section --}} */}
                <div className="my-5 flex flex-row mx-32">
                    <img src="../image/otaku-anime.jpg" alt="Poster"/>
                    <div className="ml-10">
                        <p className="font-bold text-2xl">Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari</p>
                        <table className="table mt-3">
                            <tr>
                                <td>Japanese</td>
                                <td>:</td>
                                <td>俺だけ入れる隠しダンジョン</td>
                            </tr>
                            <tr>
                                <td>Episodes</td>
                                <td>:</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>Premiered</td>
                                <td>:</td>
                                <td>Spring 2021</td>
                            </tr>
                            <tr>
                                <td>Producers</td>
                                <td>:</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Licensors</td>
                                <td>:</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>:</td>
                                <td>Not yet aired</td>
                            </tr>
                            <tr>
                                <td>Studios</td>
                                <td>:</td>
                                <td>Doga Kobo</td>
                            </tr>
                            <tr>
                                <td>Source</td>
                                <td>:</td>
                                <td>Light novel</td>
                            </tr>
                            <tr>
                                <td>Genres</td>
                                <td>:</td>
                                <td>Harem, Comedy, Romance, School</td>
                            </tr>
                        </table>
                    </div>
                </div>
            {/* {{-- End Top Section --}} */}

            {/* Episodes Links */}
                <div className="border-t-2 border-trueGray-700">
                    {/* EPisode Link */}
                    <div className="px-40 mt-3 font-semibold">
                        <div className="bg-trueGray-900 p-5 rounded-2xl">
                            <span className="bg-blue-700 px-16 rounded-md text-xl">Episode 01</span>
                            <div className="flex justify-between">
                            <div className="flex flex-col justify-center">
                                <p className="text-center">Streaming</p>
                                <div className="grid grid-cols-2 gap-4 text-center mt-2">
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English 360p</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia 360p</a>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-center">Download Mp4</p>
                                <div className="grid grid-cols-2 gap-4 text-center mt-2">
                                    <a className="p-3 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">720p</a>
                                    <a className="p-3 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">360p</a>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-center">Download Mkv</p>
                                <div className="grid grid-cols-2 gap-4 text-center mt-2">
                                    <a className="p-3 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">720p</a>
                                    <a className="p-3 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">360p</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* End Episode Link */}
                    {/* EPisode Link */}
                    <div className="px-40 mt-3 font-semibold">
                        <div className="bg-trueGray-900 p-5 rounded-2xl">
                            <span className="bg-blue-700 px-16 rounded-md text-xl">Episode 02</span>
                            <div className="flex justify-between">
                            <div className="flex flex-col justify-center">
                                <p className="text-center">Streaming</p>
                                <div className="grid grid-cols-2 gap-4 text-center mt-2">
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English 360p</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia 360p</a>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-center">Download Mp4</p>
                                <div className="grid grid-cols-2 gap-4 text-center mt-2">
                                    <a className="p-3 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">720p</a>
                                    <a className="p-3 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">360p</a>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-center">Download Mkv</p>
                                <div className="grid grid-cols-2 gap-4 text-center mt-2">
                                    <a className="p-3 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">720p</a>
                                    <a className="p-3 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">360p</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* End Episode Link */}
                </div>
            {/* End Episodes Links */}

            {/* Episodes Links V2 */}
                <div className="border-t-2 mt-5 border-trueGray-700">
                    {/* EPisode Link */}
                    <div className="px-40 mt-3 font-semibold">
                        <div className="bg-trueGray-900 p-5 rounded-2xl">
                            <span className="bg-blue-700 px-16 rounded-md text-xl">Episode 01</span>
                            <div className="flex space-x-6 items-center mt-4">
                                <p className="text-center">Streaming: </p>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English 360p</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia 360p</a>
                            </div>
                            <div className="flex space-x-6 items-center mt-4">
                                <p className="text-center">Download Mp4: </p>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English 360p</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia 360p</a>
                            </div>
                            <div className="flex space-x-6 items-center mt-4">
                                <p className="text-center">Download Mkv: </p>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Server 1</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Server 2</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Server 3 [360p]</a>
                            </div>
                        </div>
                    </div>
                    {/* End Episode Link */}
                    {/* EPisode Link */}
                    <div className="px-40 mt-3 font-semibold">
                        <div className="bg-trueGray-900 p-5 rounded-2xl">
                            <span className="bg-blue-700 px-16 rounded-md text-xl">Episode 02</span>
                            <div className="flex space-x-6 items-center mt-4">
                                <p className="text-center">Streaming: </p>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English 360p</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia 360p</a>
                            </div>
                            <div className="flex space-x-6 items-center mt-4">
                                <p className="text-center">Download Mp4: </p>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">English 360p</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Indonesia 360p</a>
                            </div>
                            <div className="flex space-x-6 items-center mt-4">
                                <p className="text-center">Download Mkv: </p>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Server 1</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Server 2</a>
                                    <a className="p-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 duration-200" href="#">Server 3 [360p]</a>
                            </div>
                        </div>
                    </div>
                    {/* End Episode Link */}
                </div>
            {/* End Episodes Links */}

            {/* {{-- Footer --}} */}
                <div className="flex justify-center mt-5 px-10 pt-2 bg-black shadow-2xl">
                    <div className="flex flex-col items-center justify-center ">
                        <span className="font-bold text-lg mb-3 cursor-default">Partners</span>
                        <div className="flex space-x-4">
                            <a href="#"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../image/episodethumbnail.png" alt="Partners Banner" /></a>
                            <a href="#"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../image/episodethumbnail.png" alt="Partners Banner" /></a>
                            <a href="#"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../image/episodethumbnail.png" alt="Partners Banner" /></a>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-3 text-center">
                            <a href="#" className="mx-5 hover:opacity-60 duration-150">Privacy Policy</a>
                            &bull;
                            <a href="#" className="mx-5 hover:opacity-60 duration-150">FeedBack</a>
                            &bull;
                            <a href="#" className="mx-5 hover:opacity-60 duration-150">Support Us</a>
                            &bull;
                            <a href="#" className="mx-5 hover:opacity-60 duration-150">Contact Us</a>
                        </div>
                        <div className="border border-b-2 border-trueGray-700 border-opacity-75 w-full mt-2"></div>
                        <div className="text-center bg-black pb-5 mt-2 text-sm">My Pony Asia is in no way associated with Hasbro or any author of the series My Little Pony Friendship is Magic and its derivatives.</div>
                    </div>
                </div>
                
            {/* {{-- End Footer --}} */}
        </div>

    </div>
    )
  }
  
  export default Homepage;