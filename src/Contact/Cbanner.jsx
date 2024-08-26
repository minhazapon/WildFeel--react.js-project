

// 


const Cbanner = () => {
    return (
        <div className=" mb-10">


            <div className=" bg-no-repeat bg-cover p-32 " 
            
            style={{
                backgroundImage: "url(  https://img.freepik.com/free-photo/traveling-with-off-road-car_23-2151473066.jpg?t=st=1724646108~exp=1724649708~hmac=ff42f883cac1c69ee5b564b40498e8bca6d4283cff61b1f8d2fad9c7a47a3afe&w=826  )",
              }}
            
            >

              <div className=" bg-gradient-to-r from-black p-3">
                <p className=" text-center text-[#02CCFF] text-5xl font-mono">Plan Your Camping Trip</p>
                <p className=" text-center text-xl font-mono mt-5 text-[#02CCFF]">"To live will be an awfully big adventure." – J.M. Barrie</p>
                <div className=" flex justify-center mt-10">
                  <button className=" bg-black text-[#02CCFF] btn border-[1px] border-[#02CCFF]">VIEW MORE</button>
                </div>
              </div>








            </div>
            
        </div>
    );
};

export default Cbanner;