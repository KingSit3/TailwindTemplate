const Homepage = () => {
    return (
    <div>
  
        <div className="bg-trueGray-800 text-white w-full h-screen">
            {/* Logo */}
                <div className="mx-20 md:mx-40 lg:mx-60 xl:mx-96 pt-2 lg:pt-10">
                    <img src="/image/mpa.png" alt="MPA Logo"/>
                </div>
            
            {/* Content */}
                <div className="flex justify-between flex-col items-center lg:flex-row space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 px-14 lg:px-24 mt-10 lg:mt-10 text-center text-2xl font-bold">
                    <a href="#">
                        <img className="rounded-xl hover:opacity-50 duration-200 shadow-xl transform hover:rotate-3" src="/image/img_landscape.png" alt="Thumbnail"/>
                        <span> My Little Pony </span>
                    </a>
                    <a href="#">
                        <img className="rounded-xl hover:opacity-50 duration-200 shadow-xl transform hover:-rotate-3" src="/image/img_landscape2.jpg" alt="Thumbnail"/>
                        <span> Anime </span>
                    </a>
                </div>
        </div>

    </div>
  
    )
  }
  
  export default Homepage;