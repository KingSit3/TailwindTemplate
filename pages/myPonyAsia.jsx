const Homepage = () => {
    return (
    <div>
  
        <div className="bg-trueGray-800 text-white w-full h-screen">
            <div className="mx-96 pt-10">
                <img src="/image/mpa.png" alt="MPA Logo"/>
            </div>
            <div className="flex justify-between space-x-16 px-24 mt-10 text-center text-2xl font-bold ">
                <a href="#">
                    <img className="rounded-xl hover:opacity-50 duration-200 shadow-xl transform hover:rotate-3" src="/image/image_landscape.png" alt="Thumbnail"/>
                    <span> My Little Pony </span>
                </a>
                <a href="#">
                    <img className="rounded-xl hover:opacity-50 duration-200 shadow-xl transform hover:-rotate-3" src="/image/episodethumbnail.png" alt="Thumbnail"/>
                    <span> Anime </span>
                </a>
            </div>
        </div>

    </div>
  
    )
  }
  
  export default Homepage;