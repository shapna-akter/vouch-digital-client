import { createBrowserRouter } from "react-router-dom";
import AddressBook from "../Components/AddressBook/AddressBook";
import AllContacts from "../Components/AllContacts/AllContacts";
import Home from "../Components/Home/Home";
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
        ]
    }
])