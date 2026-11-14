import { use } from "react";
import User from "./User";

export default function Users({users}){
    const loadedUsers = use(users);
    // console.log(loadedUsers)
    return(
        <div>
            <h3>Users:{loadedUsers.length}</h3>
            {
                loadedUsers.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    )
}