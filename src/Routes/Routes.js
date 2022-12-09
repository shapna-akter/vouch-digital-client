import { createBrowserRouter } from "react-router-dom";
import AddressBook from "../Components/AddressBook/AddressBook";
import AllContacts from "../Components/AllContacts/AllContacts";
import Home from "../Components/Home/Home";
import Update from "../Components/Update/Update";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addressBook',
                element: <AddressBook></AddressBook>
            },
            {
                path: '/allContacts',
                element: <AllContacts></AllContacts>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/contacts/${params.id}`)
            },
        ]
    }
])