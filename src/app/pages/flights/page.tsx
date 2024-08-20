
export default function ListFlights() {
    return (
      <>
      <div className="ml-72 mr-72 mt-6">
        <h1 className="text-center text-2xl font-bold">List Flights</h1>

        <div className="w-full h-screen border-solid border-2 border-gray-600"> 
          
          <div className="m-10 bg-orange-300 rounded-2xl">
            <p className="font-semibold text-xl p-3">Flights</p>
            <form className="flex pl-6">
              <div className="mr-5">
                <label className="block uppercas text-gray-700 text-xs font-bold" htmlFor="origin_city">Origin City</label>
                <input className="appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="origin_city" type="text" placeholder="Origin City" required></input>
              </div>
              <div className="mr-5">
                <label className="block uppercas text-gray-700 text-xs font-bold" htmlFor="detination_city">Destination</label>
                <input className="appearance-none block bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="detination_city" type="text" placeholder="Destination" required></input>
              </div>
              <div>Data picker</div>
            </form>
            <div>ffdsfd</div>
          </div>
        </div>
      </div>
      </>
    );
  }