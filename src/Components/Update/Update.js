import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedContact = useLoaderData();

    const [ contact, setContact ] = useState(storedContact)

    const handleUpdate = event =>{
        event.preventDefault();

        fetch(`https://vouch-digital-server.vercel.app/contacts/${storedContact._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                toast.success('contact Information successfully updated')
            }    
        })
    }
    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newContact = {...contact}
        newContact[field] = value;
        setContact(newContact);
    }    

    return (
        <div className='text-center my-12'>
            <h2 className='text-3xl font-bold'>Please Update Information</h2>
            <form onSubmit={handleUpdate}>
                <input onChange={handleInputChange} defaultValue={storedContact.name} type="text" name='name' placeholder='name' required className="input input-bordered input-primary w-full max-w-xs m-4"/>
                <br />
                <input onChange={handleInputChange} defaultValue={storedContact.email} type="email" name='email' placeholder='email' required className="input input-bordered input-primary w-full max-w-xs m-4"/>
                <br />
                <input onChange={handleInputChange} defaultValue={storedContact.phone} type="text" name='phone' placeholder='phone' required className="input input-bordered input-primary w-full max-w-xs m-4"/>
                <br />
                <input onChange={handleInputChange} defaultValue={storedContact.location} type="text" name='address' placeholder='address' required className="input input-bordered input-primary w-full max-w-xs m-4"/>
                <br />
                <button className="btn btn-secondary" type='submit'>Update Information</button>
            </form>
        </div>
    );
};

export default Update;