


const Banner = () => {
    return (
        <div className=" mb-10 bg-no-repeat bg-cover  p-20 "
        
        style={{
          backgroundImage: "url(  https://img.freepik.com/premium-photo/mountain-challenge-climbers-testing-their-courage-strength-mountains-set-against-stunning-scenery-showcasing-spirit-adventure-personal-resilience-needed-conquer-natures-heights_771426-92060.jpg?w=826  )",
        }}
        
        
        >

            <div className=" bg-gradient-to-r from-black  p-5">


              <p className=" text-center text-white font-semibold text-6xl">Best Camping in the National Park</p>

              <p className=" mt-8 text-white text-xl text-center">"Adventure may hurt you, but monotony will kill you." – Unknown</p>

              <div className=" mt-10 flex justify-center gap-5">
               <button className=" btn border-[1px] bg-black text-white">Our Story</button>
               <button className=" btn border-[1px] bg-black text-white ">Contact Us</button>
              </div>

              <div className=" mt-10 flex justify-center ">
                
                <div className=" grid  md:grid-cols-4 gap-20 ">

                  
                
                  <div>
                  <div className=" flex justify-center">
                    <img
                     className=" h-[80px]" 
                     src="data:image/png;base64,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" alt="" />
                  </div>
                  <p className=" text-center mt-3 text-4xl text-white">Trekking</p>
                  </div>

                  <div>
                  <div className=" flex justify-center">
                    <img
                     className=" h-[80px]" 
                     src="data:image/png;base64,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" alt="" />
                  </div>
                  <p className=" text-center mt-3 text-4xl text-white">Camping
                  </p>
                  </div>


                  <div>
                  <div className=" flex justify-center">
                    <img
                     className=" h-[80px]" 
                     src="data:image/png;base64,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" alt="" />
                  </div>
                  <p className=" text-center mt-3 text-4xl text-white">Beach Tents</p>
                  </div>


                  <div>
                  <div className=" flex justify-center">
                    <img
                     className=" h-[80px]" 
                     src="data:image/png;base64,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" alt="" />
                  </div>
                  <p className=" text-center mt-3 text-4xl text-white">News &<br></br> Events</p>
                  </div>







                </div>




              </div>



            </div>
            
        </div>
    );
};

export default Banner;