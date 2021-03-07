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

            {/* {{-- On Progress Section --}} */}
                <div className="my-5 flex flex-row mx-32">
                    <img className="w-64" src="../image/otaku-anime.jpg" alt="Poster"/>
                    <div className="ml-10">
                        <p className="font-bold text-2xl">Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari</p>
                        <div className="flex flex-row space-x-4">
                            <p>Japanese:</p>
                            <p>俺だけ入れる隠しダンジョン</p>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <p>Episode:</p>
                            <p>24</p>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <p>Japanese:</p>
                            <p>俺だけ入れる隠しダンジョン</p>
                        </div>
                    </div>


                </div>
            {/* {{-- End On Progress Section --}} */}

            {/* {{-- Footer --}} */}
                <div className="flex justify-center px-10 pt-2 bg-black shadow-2xl">
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