import { useForm } from "react-hook-form";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const AddCoffee = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // const onSubmit = (data) => console.log(data)

    // use react form hook
    const handleAddCoffee = (data) => {
        console.log(data);
        fetch('http://localhost:5000/coffee/',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error.message));
    }

    // Using event default 
    // const handleAddCoffee = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const chef = form.chef.value;
    //     const supplier = form.supplier.value;
    //     const taste = form.taste.value;
    //     const category = form.category.value;
    //     const details = form.details.value;
    //     const photo = form.photo.value;

    //     const newCoffee = { name, chef, supplier, taste, category, details, photo }
    // }

    return (
        <div className="mb-20 max-w-5xl mx-auto">
            <div>
                <Link to='/'><div className="flex items-center rancho-regular text-3xl cursor-pointer my-5 hover:bg-[#D2B48C] w-fit rounded-3xl p-2"><span><IoIosArrowRoundBack /></span><span>Back to home</span></div></Link>
            </div>
            <div className="bg-[#F5F4F1] px-20 py-10">
                <h1 className="rancho-regular text-[#331A15] text-2xl lg:text-5xl text-center mb-2">Add New Coffee</h1>
                <p className="lg:text-xl raleway-font text-[#1B1A1A] text-center w-3/4 mx-auto mb-10">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form className="p-4 space-y-4" onSubmit={handleSubmit(handleAddCoffee)}>
                    <div className="flex flex-col md:flex-row gap-10 raleway-font text-[#1B1A1A]">
                        <div className="md:w-1/2">
                            <label htmlFor="Name" className="block">Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter coffee name" className="w-full p-3" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="md:w-1/2">
                            <label htmlFor="Chef" className="block">Chef</label>
                            <input type="text" {...register("chef", { required: true })} name="chef" placeholder="Enter coffee chef" className="w-full p-3" />
                            {errors.chef && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 raleway-font text-[#1B1A1A]">
                        <div className="md:w-1/2">
                            <label htmlFor="Supplier" className="block">Supplier</label>
                            <input type="text" {...register("supplier", { required: true })} name="supplier" placeholder="Supplier" className="w-full p-3" />
                            {errors.supplier && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="md:w-1/2">
                            <label htmlFor="Taste" className="block">Taste</label>
                            <input type="text" {...register("taste", { required: true })} name="taste" placeholder="Taste" className="w-full p-3" />
                            {errors.taste && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 raleway-font text-[#1B1A1A]">
                        <div className="md:w-1/2">
                            <label htmlFor="Category" className="block">Category</label>
                            <input type="text" {...register("category", { required: true })} name="category" placeholder="Category" className="w-full p-3" />
                            {errors.category && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="md:w-1/2">
                            <label htmlFor="Details" className="block">Details</label>
                            <input type="text" {...register("details", { required: true })} name="details" placeholder="Details" className="w-full p-3" />
                            {errors.details && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="raleway-font text-[#1B1A1A]">
                        <div>
                            <label htmlFor="Photo" className="block">Photo</label>
                            <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="w-full p-3" />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Add Coffee" className="w-full bg-[#D2B48C] p-3 rancho-regular text-2xl cursor-pointer hover:bg-[#d08829]" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;