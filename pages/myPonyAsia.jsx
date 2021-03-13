const Homepage = () => {
    return (
    <div>
  
        <div className="bg-trueGray-800 text-trueGray-100 w-full h-screen">
            {/* Logo */}
                <div className="mx-14 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-96 pt-7 lg:pt-10">
                    <img src="/image/mpa.png" alt="MPA Logo"/>
                </div>
            
            {/* Content */}
                <div className="flex justify-between items-center text-center font-bold flex-col lg:flex-row 
                        space-y-7 mt-7 space-x-0 px-14
                        sm:px-28 sm:text-2xl
                        md:text-3xl
                        lg:space-y-0 lg:space-x-16 lg:px-24 lg:mt-10 lg:text-4xl">
                    <a href="#">
                        {/* <span className="absolute ml-20 mt-20 text-3xl opacity-0 group-hover:opacity-100 duration-200"> My Little Pony </span> */}
                        <img className="rounded-xl hover:opacity-25 duration-200 shadow-xl transform hover:rotate-3" src="/image/img_landscape.png" alt="Thumbnail"/>
                        <span> My Little Pony </span>
                    </a>
                    <a href="#">
                        {/* <span className="absolute ml-32 mt-20 text-3xl opacity-0 group-hover:opacity-100 duration-200"> Anime </span> */}
                        <img className="rounded-xl hover:opacity-25 duration-200 shadow-xl transform hover:-rotate-3" src="/image/img_landscape2.jpg" alt="Thumbnail"/>
                        <span> Anime </span>
                    </a>
                </div>
        </div>

    </div>
  
    )
  }
  
  export default Homepage;