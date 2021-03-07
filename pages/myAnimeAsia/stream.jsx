const Stream = () => {
    return (
    <div>
  
        <div className="bg-trueGray-800 text-trueGray-200">
            {/* {{-- Navbar --}} */}
                <div className="flex justify-start bg-black p-4 rounded-b shadow-xl">
                    <div>
                        <a href="/myAnimeAsia/homepage">
                            <img className="w-40" src="../image/mpa.png" alt="Thumbnail" />
                        </a>
                    </div>
                </div>
            {/* {{-- End Navbar --}} */}

            {/* Player */}
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <img className="w-200" src="../image/episodethumbnail.png" alt=""/>
                </div>
                <div className="text-center font-semibold text-xl mt-3">
                    <p>Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari</p>
                    <p className="text-lg">Episode 06</p>
                </div>
            </div>
            {/* End Player */}

            {/* Next & Prev Section */}
                <div className="flex justify-between mx-64 font-bold text-xl py-3">
                    <a href="#">&larr; Previous Episode</a>
                    <a href="#">Next Episode &rarr;</a>
                </div>
            {/* End Next & Prev Section */}

            {/* {{-- Footer --}} */}
            <div className="flex justify-center mt-5 px-10 pt-2 bg-black shadow-2xl">
                    <div className="flex flex-col items-center justify-center ">
                        <span className="font-bold text-lg mb-3 cursor-default">Partners</span>
                        <div className="flex space-x-4">
                            <a href="/myAnimeAsia/stream"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../image/episodethumbnail.png" alt="Partners Banner" /></a>
                            <a href="/myAnimeAsia/stream"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../image/episodethumbnail.png" alt="Partners Banner" /></a>
                            <a href="/myAnimeAsia/stream"><img className="w-28 rounded-xl hover:opacity-75 duration-150" src="../image/episodethumbnail.png" alt="Partners Banner" /></a>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-3 text-center">
                            <a href="/myAnimeAsia/stream" className="mx-5 hover:opacity-60 duration-150">Privacy Policy</a>
                            &bull;
                            <a href="/myAnimeAsia/stream" className="mx-5 hover:opacity-60 duration-150">FeedBack</a>
                            &bull;
                            <a href="/myAnimeAsia/stream" className="mx-5 hover:opacity-60 duration-150">Support Us</a>
                            &bull;
                            <a href="/myAnimeAsia/stream" className="mx-5 hover:opacity-60 duration-150">Contact Us</a>
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
  
  export default Stream;