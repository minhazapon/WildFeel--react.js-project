

const ContactUs = () => {
    return (
        <div className=" mt-10 bg-no-repeat bg-cover p-40 "
        
        style={{
            backgroundImage: "url(https://img.freepik.com/free-photo/silhouette-men-hiking-mountain-peak-sunset-generative-ai_188544-12480.jpg?t=st=1724595025~exp=1724598625~hmac=36a033997eea4e6bed83c35a3711e1cf958ef0659ae730954955042ae708eaec&w=826)",
          }}
        
        >

            <div className=" flex-col md:flex-row flex justify-center gap-10 text-[#02CCFF]">

              

              <div>
                <div>
                <p className="   text-5xl font-mono ">Contact Us</p>
                <p className=" text-xl font-mono mt-5">The trekking in the enchanting mountains or<br></br> rafting in the wild rivers, exploring the<br></br> dense forest, canyoning in the refreshing <br></br>waterfall, gliding across the highest peaks<br></br> and the beautiful valley etc. are some of<br></br> the adventures you can imagine.</p>
                <button className=" mt-5 font-mono btn border-[1px] bg-black border-[#02CCFF] text-[#02CCFF]">Learn More</button>
                </div>
              </div>


              {/* 000000000000000000000000000000000000000000000 */}
              

              


              <div className=" flex justify-center">


              <div className=" grid  md:grid-cols-1">
               <div className=" flex  items-center gap-5">
               <div>
                <p className=" font-mono">Email</p>
                <input className=" h-[50px] -w-[200px] border-[1px] border-[#02CCFF]" type="email" name="" id="" />
               </div> 
               <div>
               <p className=" font-mono">Name</p>
                <input className=" h-[50px] -w-[200px] border-[1px] border-[#02CCFF]" type="text" />
               </div>
               </div>

               <div>
                <p className=" font-mono">Address</p>
                <input className=" h-[50px] w-[386px] border-[1px] border-[#02CCFF]" type="text" name="" id="" />
               </div>

               <div>
                <p className=" font-mono">Message</p>
                 <textarea className=" h-[50px] w-[386px] border-[1px] border-[#02CCFF]" name="" id=""></textarea>
               </div>

               <div className=" flex justify-center mt-5">
                <button className=" btn border-[1px] w-[386px] bg-black border-[#02CCFF] text-[#02CCFF]">Submit</button>
               </div>
 
              </div>



              </div>








            </div>
            
        </div>
    );
};

export default ContactUs;