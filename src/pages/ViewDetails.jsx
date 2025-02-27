import { useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const loadedCoffee = useLoaderData();
    // console.log(loadedCoffee);
     useEffect(()=>{
            document.title = "View coffee | Espresso"
        },[])
    return (
        <div className="mb-20 max-w-5xl mx-auto">
            <div>
                <Link to='/'><div className="flex items-center rancho-regular text-3xl cursor-pointer my-5 hover:bg-[#D2B48C] w-fit rounded-3xl p-2"><span><IoIosArrowRoundBack /></span><span>Back to home</span></div></Link>
            </div> 
            <div className="bg-[#F5F4F1] flex justify-around  px-20 py-10 ">
                <div className="w-3/6">
                    <img src={loadedCoffee.photo} alt="" />
                </div>
                <div className="w-3/6 space-y-3">
                    <h1 className="rancho-regular text-4xl text-[#331A15]">{loadedCoffee.name}</h1>
                    <p className="raleway-font text-xl"><span className="font-semibold">Chef:</span> {loadedCoffee.chef}</p>
                    <p className="raleway-font text-xl"><span className="font-semibold">Supplier:</span> {loadedCoffee.supplier}</p>
                    <p className="raleway-font text-xl"><span className="font-semibold">Taste:</span> {loadedCoffee.taste}</p>
                    <p className="raleway-font text-xl"><span className="font-semibold">Category:</span> {loadedCoffee.category}</p>
                    <p className="raleway-font text-xl"><span className="font-semibold">Details:</span> {loadedCoffee.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;