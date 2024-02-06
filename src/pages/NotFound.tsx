
export default function NotFound(){
    return(
        <div className="bg-palette-cancel w-full h-[100vh]">
            <div className="flex">
              <img src="../../src/assets/NotFound/Person.png" className="p-[200px] ml-20"/>
              
              <div className="mt-[100px]">
                <img src="../../src/assets/NotFound/404.png" className="w-[300px]"/>
                <h1 className="text-6xl font-semibold">Page not found</h1>
                <h2>Sorry, the page you are looking for cannot be found.</h2>
              </div>
            </div>
        </div>
    )
}