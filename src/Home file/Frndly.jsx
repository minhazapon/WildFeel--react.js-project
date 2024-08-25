


const Frndly = () => {
    return (
        <div className=" rounded-xl flex-col md:flex-row mb-10 mt-10 ml-5 mr-5  bg-no-repeat bg-cover p-20 "
        
        
        style={{
            backgroundImage: "url(https://img.freepik.com/free-photo/traveling-with-off-road-car_23-2151473063.jpg?t=st=1724592292~exp=1724595892~hmac=ad6f3e7f937f4fec3d9d6305239074dc65cb5f4106316287e4561aec2342e779&w=826)",
          }}
        
        
        >

            <div className=" rounded-xl flex-col md:flex-row lg:flex-row bg-black border-[1px] p-2 border-[#02CCFF] flex justify-center items-center gap-10 text-[#02CCFF]">


              <div>

               <p className="   text-5xl font-mono ">Family Camp</p>

               <p className=" text-xl font-mono mt-5">The trekking in the enchanting mountains or<br></br> rafting in the wild rivers, exploring the<br></br> dense forest, canyoning in the refreshing <br></br>waterfall, gliding across the highest peaks<br></br> and the beautiful valley etc. are some of<br></br> the adventures you can imagine.</p>
                
               <button className=" mt-5 font-mono btn border-[1px] bg-black border-[#02CCFF] text-[#02CCFF]">Learn More</button>

              </div>

          

               <div>

                <img className=" rounded-xl h-[400px] w-[500px]" src="https://img.freepik.com/premium-photo/man-with-backpack-walks-down-trail-with-mountains-background_1252102-34328.jpg?w=740" alt="" />

               </div>






            </div>
            
        </div>
    );
};

export default Frndly;