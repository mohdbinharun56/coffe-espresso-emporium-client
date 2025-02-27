import { FaRegEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const CoffeeCard = ({ coffee,setCoffees,coffees }) => {
    const handleDeleteCoffee = (_id) =>{
        console.log(_id)
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>{
            res.json()
        })
        .then(()=>{
            const remainingCoffes = coffees.filter(coffee=>coffee._id !== _id);
            setCoffees(remainingCoffes);
        })
        .catch(error=>console.log(error.message))
    }
    const { _id, name, chef, taste, photo } = coffee;
    return (
        <div className="flex flex-col md:flex-row shadow-xl bg-[#F5F4F1] gap-10 px-10 py-5 rounded-md">
            <div  className="">
                <img src={photo} alt={`${name} coffee`}/>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="space-y-2">
                    <h3 className="raleway-font md:text-xl"><span className="font-semibold">Name:</span> {name}</h3>
                    <p className="raleway-font md:text-xl"><span className="font-semibold">chef:</span> {chef}</p>
                    <p className="raleway-font md:text-xl"><span className="font-semibold">taste:</span> {taste}</p>
                </div>
                <div className="flex flex-row md:flex-col items-center justify-center gap-2 mt-2 md:mt-0">
                    <Link to={`/coffee/${_id}`}><div title="View" className="bg-[#D2B48C] hover:bg-[#e3ccad] text-white p-2 cursor-pointer"><FaRegEye/></div></Link>
                    <Link to={`/coffees/${_id}`}><div title="Update" className="bg-[#3C393B] hover:bg-[#656164] text-white p-2 cursor-pointer"><MdEdit/></div></Link>
                    <button title="Delete" className="bg-[#EA4744] hover:bg-[#bb4f4d] text-white p-2 cursor-pointer" onClick={()=>handleDeleteCoffee(_id)}><MdDelete/></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;