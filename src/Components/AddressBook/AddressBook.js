import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const AddressBook = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleLogin = data => {
        
        fetch('https://vouch-digital-server.vercel.app/addressBook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('save contact information successfully');
                navigate('/allContacts')
            })

    }

    return (
        <div className='flex flex-col justify-center lg:flex-row lg:justify-center items-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 shadow-2xl m-12">
                <h1 className="text-2xl font-bold text-center">Address Book</h1>
                <form
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Name</label>
                        <input
                            type="name"
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className='text-red-500 font-semibold'>{errors.name?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                        <input
                            type="email"
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            {...register("email", { required: "Email Address is required" })}
                        />
                        {errors.email && <p className='text-red-500 font-semibold'>{errors.email?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="phone" className="block dark:text-gray-400">Mobile Number</label>
                        <input
                            type="phone"
                            placeholder="Your Phone Number"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            {...register("phone", { required: "Phone Address is required" })}
                        />
                        {errors.phone && <p className='text-red-500 font-semibold'>{errors.phone?.message}</p>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="location" className="block dark:text-gray-400">Location</label>
                        <input
                            type="location"
                            placeholder="Your Location"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                            {...register("location", { required: "Location Address is required" })}
                        />
                        {errors.location && <p className='text-red-500 font-semibold'>{errors.location?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' type="submit" value="Submit" />
                </form>
            </div>

        </div>
    );
};

export default AddressBook;