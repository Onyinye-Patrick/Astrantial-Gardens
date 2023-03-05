import { FaStar, FaStarHalfAlt } from "react-icons/fa"


const Arrivals = () =>{
    return(
        <div className="arrivals">
            <h1>New Arrivals</h1>
            <div className="new-arrivals">
                <div className="arrival">
                    <img src="images/image9.jpg" alt="" srcset="" />
                    <h6>Peace Lily</h6>
                    <p>₦150,000</p>
                    <div className="stars"><FaStar/>  <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/> </div>
                     

                </div>
                <div className="arrival">
                    <img src="images/image5.jpg" alt="" srcset="" className="img-10"/>
                    <h6>Monstera</h6>
                    <p>₦150,000</p>
                    <div className="stars"><FaStar/>  <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/> </div>

                </div>
                <div className="arrival">
                    <img src="images/image7.jpg" alt="" srcset="" className="img-10"/> 
                    <h6>Jade plant</h6>
                    <p>₦150,000</p>
                    <div className="stars"><FaStar/>  <FaStar/> <FaStar/> <FaStarHalfAlt/> <FaStarHalfAlt/> </div>

                </div>
                <div className="arrival">
                    <img src="images/ima.jpg" alt="" srcset=""  className="img-10"/>
                    <h6>Sensiniera snake plant</h6>
                    <p>₦150,000</p>
                    <div className="stars"><FaStar/>  <FaStar/> <FaStarHalfAlt/> <FaStarHalfAlt/> <FaStarHalfAlt/> </div>

                </div>
            </div>
        </div>
    )
}

export default Arrivals