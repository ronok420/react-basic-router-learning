import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Loaddata = () => {

    const data = useLoaderData();


console.log(data);

    return (
        <div>
            <h2>this  is the basic page to load data</h2>
        </div>
    );
};
export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }

export default Loaddata;