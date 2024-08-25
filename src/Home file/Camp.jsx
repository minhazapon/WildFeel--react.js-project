



const Camp = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">



            <div>

              
              <div>
                
                <p className="  text-6xl font-serif text-[#02CCFF]">10 Amazing<br></br> Camping Tours</p>

                <p className=" text-white  mt-5 font-serif ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore<br></br> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br></br> sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <button className=" mt-5 btn border-[1px] bg-black border-[#02CCFF] text-[#02CCFF]">Learn More</button>
              </div>


               
               {/* -------------------- */}

               <div className=" flex justify-center  mt-10">


                 <div className="  grid  md:grid-cols-3 gap-5 ">

                    <img className=" rounded-md h-[150px] w-[180px]" src="https://img.freepik.com/free-photo/two-tents-field-with-word-nike-tent_1340-34139.jpg?t=st=1724564925~exp=1724568525~hmac=6b881fc2d331f058144f601a9337a4f16b347b82dd910cf3553feead83c26f85&w=740" alt="" />
                    <img className=" rounded-md h-[150px] w-[180px]" src="https://img.freepik.com/premium-photo/campfire-gathering-group-enjoying-cozy-tent-camping-experience-blue-sky_1274913-8863.jpg?w=740" alt="" />
                    <img className=" rounded-md h-[150px] w-[180px]" src="https://img.freepik.com/premium-photo/campfire-gathering-group-enjoying-cozy-tent-camping-experience-blue-sky_1274913-8855.jpg?w=740" alt="" />
                    <img className=" rounded-md h-[150px] w-[180px]" src="https://img.freepik.com/premium-photo/campfire-with-star-filled-sky-it_1277828-1848.jpg?w=740" alt="" />
                    <img className=" rounded-md h-[150px] w-[180px]" src="https://img.freepik.com/premium-photo/campfire-with-campfire-couple-sitting-fire_1255033-7497.jpg?w=740" alt="" />
                    <img className=" rounded-md h-[150px] w-[180px]" src="https://img.freepik.com/premium-photo/luxury-modern-camping-magical-night-sky-leisure-outdoor-lifestyle_1061358-155228.jpg?w=740" alt="" />


                 </div>




               </div>






            </div>


            {/* //------------------------------------------- */}



             <div>

                <img className=" h-[640px] w-[350px] " src="https://img.freepik.com/free-photo/group-colombian-male-friends-spending-time-together-having-fun_23-2151356440.jpg?t=st=1724565470~exp=1724569070~hmac=dfcc177e990a1e3fbf3eadee0e39a37d6d2e389ca3047ae6bd7ab49fe340c618&w=360" alt="" />

             </div>





            </div>



            
        </div>
    );
};

export default Camp;