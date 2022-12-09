import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllContacts = () => {
    const { data: contacts = [], refetch } = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/contacts')
            const data = res.json();
            return data;
        }
    });

    // delete user
    const handleDeleteContact = contact => {
        const proceed = window.confirm("Are you sure want to delete this contact?");
        if (proceed) {
            fetch(`http://localhost:5000/contacts/${contact._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('Successfully deleted')
                    }
                })
        }
    }

    return (
        <div className='m-12'>
            <div className="overflow-x-auto">
                <h2 className="text-3xl mb-5 ml-5">All Contacts Information</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, i) =>
                                <tr key={contact._id}>
                                    <th>{i + 1}</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.location}</td>
                                    <td><button onClick={() => handleDeleteContact(contact)} className='btn btn-xs btn-error'>Delete</button></td>
                                    <td>
                                        <Link to={`/update/${contact._id}`}>
                                            <button className='btn btn-xs btn-primary'>
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllContacts;