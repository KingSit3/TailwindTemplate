const Homepage = () => {

  // Deklarasi harus sebelum return
  let x =  1;
  let a = ['a' , 'b' , 'c']
  
  return (
  <div className="container mx-auto">

      {/* // Admin template */}
      <div className="min-w-full flex justify-center text-center mt-10">
        <div className="grid grid-cols-5 gap-7">
            <a href="admin/admin1" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Admin 1
            </a>
            <a href="#" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              { x }
            </a>
            <a href="#" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              {
                // testing Loop
                a.map(val => {
                  return (
                    <h6>
                      { val }
                    </h6>
                  )
                })
              }
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
        </div>
      </div>
      
      <p className="my-5 text-center font-bold">My Pony Asia (Anime)</p>
      <div className="min-w-full flex justify-center text-center">
        <div className="grid grid-cols-4 gap-7 pb-5">
        
            <a href="myAnimeAsia/homepage" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              HomePage
            </a>
            <a href="myAnimeAsia/detail" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Detail Anime
            </a>
            <a href="myAnimeAsia/stream" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Stream Anime
            </a>
            <a href="myPonyAsia" className="h-44 w-52 bg-gray-400 flex justify-center items-center">
              Switcher (Pony atau Anime)
            </a>
        </div>
      </div>
          
      

  </div>

  )

  

}

export default Homepage;