export default function User({user}){
    console.log(user)
    const {name, email}=user
    return(
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}