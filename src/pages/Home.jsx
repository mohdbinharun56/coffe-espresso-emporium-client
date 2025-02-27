import Banner from "../components/Banner";
import icon4 from '../assets/images/more/4.png'
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import cup1 from '../assets/images/cups/Rectangle 9.png'
import cup2 from '../assets/images/cups/Rectangle 10.png'
import cup3 from '../assets/images/cups/Rectangle 11.png'
import cup4 from '../assets/images/cups/Rectangle 12.png'
import cup5 from '../assets/images/cups/Rectangle 13.png'
import cup6 from '../assets/images/cups/Rectangle 14.png'
import cup7 from '../assets/images/cups/Rectangle 15.png'
import cup8 from '../assets/images/cups/Rectangle 16.png'
const Home = () => {
    const loadedCoffees = useLoaderData(); // load coffees data from database to use fetch api
    console.log(loadedCoffees);
    const [coffees, setCoffees] = useState(loadedCoffees);
    useEffect(() => {
        document.title = "Home | Espresso"
    }, [])
    return (
        <div>
            <Banner></Banner>
            {/* <div className="mt-16 bg-[url(./assets/images/more/4.png)] bg-no-repeat h-[650px] w-1/3"> */}
            <div className="mt-16 flex flex-col md:flex-row">
                <div className="">
                    <img src={icon4} alt="" />
                </div>
                <div className="mx-auto lg:mx-0 border border-yellow-300">
                    <div className="text-center space-y-3">
                        <small className="text-xl raleway-font text-[#1B1A1A]">--- Sip & Savor ---</small>
                        <h1 className="rancho-regular text-[#331A15] text-2xl lg:text-5xl">Our Popular Products</h1>
                        <button className="rancho-regular p-2 bg-[#E3B577] text-[#242222] text-2xl hover:bg-[#F5F4F1] hover:text-slate-400 hover:shadow-md">Add Coffee</button>
                    </div>

                    {/* card fetch all coffee from databse */}
                    <div className="grid lg:grid-cols-2 gap-10 mt-20 mx-5 md:mx-0 lg:mx-auto w-fit">
                        {
                            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                        }
                    </div>
                </div>
            </div>
            {/* Cups coffee containeer */}
            {/* Follow on Instagram */}
            <div className="text-center space-y-3 mt-20">
                <small className="text-xl raleway-font text-[#1B1A1A]">Follow Us Now</small>
                <h1 className="rancho-regular text-[#331A15] text-2xl lg:text-5xl">Follow on Instagram</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 border border-yellow-400 max-w-5xl justify-center items-center mx-auto md:px-20 lg:px-0">
                    <figure className="hover:border-2 hover:border-blue-500 hover:rounded-xl">
                        <img src={cup1} />
                    </figure>
                    <figure className="hover:border-2 hover:border-blue-500 hover:rounded-xl">
                        <img src={cup2} />
                    </figure>
                    <figure className="hover:border-2 hover:border-blue-500 hover:rounded-xl">
                        <img src={cup3} />
                    </figure>
                    <figure className="hover:border-2 hover:border-blue-500 hover:rounded-xl">
                        <img src={cup4} />
                    </figure>
                    <figure className="hover:border-2 hover:border-blue-500 hover:rounded-xl">
                        <img src={cup5} />
                    </figure>
                    <figure className="hover:border-2 hover:border-blue-500 hover:rounded-xl">
                        <img src={cup6} />
                    </figure>
                    <figure className="hover:border-2 hover:border-blue-500 hover:rounded-xl">
                        <img src={cup7} />
                    </figure>
                    <figure className="hover:border-2 hover:border-blue-500 hover:rounded-xl">
                        <img src={cup8} />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Home;