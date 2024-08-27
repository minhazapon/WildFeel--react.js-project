

const PlaceDetails = ({Places}) => {

    const {image, place, deatils} = Places



    return (
        <div>

            <div className="card card-compact bg-black border-[1px] border-[#02CCFF] w-96 shadow-xl">
              <figure>
                <img className="  h-[250px] w-[400px]"
                  src={image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Place: {place} </h2>
                <p>{deatils}</p>
              </div>
            </div>


            
        </div>
    );
};

export default PlaceDetails;