import { FaRegEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, taste, photo } = coffee;
    return (
        <div className="flex flex-col md:flex-row shadow-xl bg-[#F5F4F1] gap-10 px-10 py-5 rounded-md">
            <div  className="">
                <img src={photo} alt={`${name} coffee`}/>
            </div>
            <div className="flex gap-10">
                <div className="space-y-2">
                    <h3 className="raleway-font md:text-xl"><span className="font-semibold">Name:</span> {name}</h3>
                    <p className="raleway-font md:text-xl"><span className="font-semibold">chef:</span> {chef}</p>
                    <p className="raleway-font md:text-xl"><span className="font-semibold">taste:</span> {taste}</p>
                </div>
                <div className="space-y-5">
                    <p title="View" className="bg-[#D2B48C] hover:bg-[#e3ccad] text-white p-2 cursor-pointer"><FaRegEye/></p>
                    <p title="Update" className="bg-[#3C393B] hover:bg-[#656164] text-white p-2 cursor-pointer"><MdEdit/></p>
                    <p title="Delete" className="bg-[#EA4744] hover:bg-[#bb4f4d] text-white p-2 cursor-pointer"><MdDelete/></p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;