import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
const Banner = () => {
    return (
        <>
            <div className="text-white bg-[url('./assets/images/more/3.png')] bg-cover bg-no-repeat min-h-64 lg:min-h-[680px]">
                <div className="py-14 px-10 lg:w-[45%] lg:mx-auto relative lg:top-60 lg:left-64 pl-10 space-y-5">
                    <h1 className="rancho-regular text-2xl lg:text-5xl">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="raleway-font text-base">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="rancho-regular p-2 bg-[#E3B577] text-[#242222] text-2xl hover:bg-[#F5F4F1] hover:text-slate-400 hover:shadow-md">Learn More</button>
                </div>
            </div>
            <div className="bg-[#ECEAE3] flex flex-col md:flex-row justify-center items-center md:gap-20 py-5 px-28 space-y-10 lg:space-y-0 md:py-10 md:px-52">
                <div className='space-y-2'>
                    <img src={icon1} alt="" />
                    <h3 className='rancho-regular text-3xl'>Awesome Aroma</h3>
                    <p className='raleway-font text-base'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-2'>
                    <img src={icon2} alt="" />
                    <h3 className='rancho-regular text-3xl'>High Quality</h3>
                    <p className='raleway-font text-base'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-2'>
                    <img src={icon3} alt="" />
                    <h3 className='rancho-regular text-3xl'>Pure Grades</h3>
                    <p className='raleway-font text-base'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='space-y-2'>
                    <img src={icon4} alt="" />
                    <h3 className='rancho-regular text-3xl'>Proper Roasting</h3>
                    <p className='raleway-font text-base'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </>
    );
};

export default Banner;