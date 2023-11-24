import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';


const Loaddata = () => {

    const data = useLoaderData();


// console.log(data);

    return (
        <div>
            
            <h2>   The Number of   User is  :  {data.length} </h2>
            {
                data.map( user => <User
                key={data.id} user={user}
                ></User>)
            }  
            
        </div>
    );
};
export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }

export default Loaddata;