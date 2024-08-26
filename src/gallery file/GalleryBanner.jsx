
//https://img.freepik.com/free-photo/off-road-car-wilderness_23-2151482989.jpg?t=st=1724666372~exp=1724669972~hmac=10d018cf1d80c600297c45797d0b7da9304c0ed1c473e2b9123ddbb927f879bc&w=826
//text-[#02CCFF]
const GalleryBanner = () => {
    return (
        <div className=" mb-10">

            <div className=" text-[#02CCFF] bg-no-repeat bg-cover  p-32 "
            
            style={{
                backgroundImage: "url(https://img.freepik.com/free-photo/off-road-car-wilderness_23-2151482989.jpg?t=st=1724666372~exp=1724669972~hmac=10d018cf1d80c600297c45797d0b7da9304c0ed1c473e2b9123ddbb927f879bc&w=826)",
              }}
            
            >

             
             <div className=" bg-gradient-to-r from-black p-5">

               <p className=" text-4xl font-mono">Find yourself <br></br>outside at a cozy<br></br> Camp this month.</p>
               <p className=" mt-6 font-mono text-xl">"The biggest adventure you <br></br>can take is to live the life <br></br>of your dreams." – Oprah Winfrey</p>
               <button className=" mt-6 btn bg-black border-[1px] border-[#02CCFF] text-[#02CCFF]">LEARN MORE</button>
             </div>
               









            </div>
            
        </div>
    );
};

export default GalleryBanner;