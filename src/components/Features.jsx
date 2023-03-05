import { FaUser, FaCreditCard, FaTruck, FaGift } from "react-icons/fa"


const Features = ()=>{
    return(
        <div className="features">
            <div className="feature">
                <h5> <FaUser/> 24 * 7 Free Support </h5>
                <p>online support 247</p>
            </div>

            <div className="feature">
                <h5> <FaCreditCard/> Back Guaranty </h5>
                <p> 100% strong payment</p>
            </div>

            <div className="feature">
                <h5><FaTruck/> Free Nation Shipping </h5>
                <p>On orders over ₦100,00</p>
            </div>

            <div className="feature">
                <h5> <FaGift/> Gift Cards </h5>
                <p>Give the perfect gifts</p>
            </div>

            
        </div>
    )
}

export default Features