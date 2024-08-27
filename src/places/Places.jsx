import { useEffect, useState } from "react";
import PlaceDetails from "./PlaceDetails";


const Places = () => {
     
    const [ Places, setPlace ] = useState([])


    useEffect( ()=>{
      
        fetch('place.json')
        .then(res =>res.json())
        .then(data => setPlace(data))


    } , [])

    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">


            <div className=" text-[#02CCFF]">

            <div className=" flex justify-center items-center gap-2">
                <img className=" h-[50px]" src="https://cdn-icons-png.flaticon.com/128/17250/17250083.png" alt="" />
                <p className=" text-center text-6xl font-mono">Place Information</p>
            </div>



            <div className=" flex justify-center mt-10">
                <div className=" grid  md:grid-cols-3 gap-5 ">
                    {
                       
                       Places.map( Places => <PlaceDetails Places={Places} ></PlaceDetails> )

                    }
                </div>
            </div>





            </div>

            
            
        </div>
    );
};

export default Places;