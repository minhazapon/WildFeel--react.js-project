


const AboutBanner = () => {
    return (
        <div className=" mb-10">


            <div className=" bg-no-repeat bg-cover p-32 " 
            
            style={{
                backgroundImage: "url(  https://img.freepik.com/free-photo/person-enjoying-time-nature_23-2151262733.jpg?t=st=1724651561~exp=1724655161~hmac=7236687e7b2184a517fb09aab5b9b59bb94a5f99a3bb29236bbd903392ab0c74&w=826  )",
              }}
            
            >

              <div className=" bg-gradient-to-r from-black p-3">
                <p className=" text-center text-[#02CCFF] text-5xl font-mono">Find yourself outside</p>
                <p className=" text-center text-xl font-mono mt-5 text-[#02CCFF]">"To live will be an awfully big adventure." – J.M. Barrie</p>
                <div className=" flex justify-center mt-10">
                  <button className=" bg-black text-[#02CCFF] btn border-[1px] border-[#02CCFF]">VIEW MORE</button>
                </div>
              </div>



      




            </div>
            
        </div>
    );
};

export default AboutBanner;