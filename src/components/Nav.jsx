import icon from '../assets/images/logo.png'
const Nav = () => {
    return (
        <div className="nav rancho-regular">
            <div className='flex justify-center gap-2 items-center'>
                <img src={icon} alt="" className="w-16 relative -top-2" />
                <h1>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Nav;