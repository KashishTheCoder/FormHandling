import { useState } from 'react';

function MyForm(){
    const [name, setName] = useState("");

    function handleChange(event){
        setName(() => event.target.value);
    }

    return (
        <>
        <form>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleChange} />
        </form>
        <div>
        <h1>My Name: {name}</h1>
        <p>{name}</p>
         </div>
         </>
    );
}

export default MyForm;