export default function Singer({singer}){
    const {id,name}=singer;
    return(
        <div>
            <li>id: {id}</li>
            <li>name: {name}</li>
        </div>
    )
}