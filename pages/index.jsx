const Homepage = () => {
  return (
  <div className="container mx-auto">

      {/* // Admin template */}
      <div className="min-w-full flex justify-center text-center mt-10">
        <div className="grid grid-cols-5 gap-7">
            <a href="admin/admin1" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Admin 1
            </a>
            <a href="#" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Admin 2
            </a>
            <a href="#" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Admin 3
            </a>
            <a href="#" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Admin 4
            </a>
            <a href="#" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Admin 5
            </a>
        </div>
      </div>

      {/* // Gabut template */}
      <div className="min-w-full flex justify-center text-center mt-10">
        <div className="grid grid-cols-5 gap-7">
            <a href="otakuDesu" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Otaku Desu
            </a>
            <a href="ponyTown" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Pony Town
            </a>
            <a href="spotify" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Spotify
            </a>
            <a href="tailwindCard" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Tailwind Card
            </a>
            <a href="twitter" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Twitter
            </a>
            <a href="myAnimeAsia" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              MyAnimeAsia
            </a>
        </div>
      </div>

  </div>

  )
}

export default Homepage;