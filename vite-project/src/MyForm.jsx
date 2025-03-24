import { useState } from 'react';

function MyForm(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [languages, setLanguages] = useState([]);
    const [destination, setDestination] = useState("");

    function handleChange(event){
        if(event.target.name === "name"){
            setName(() => event.target.value);
        }
        else if(event.target.name === "password"){
            setPassword(() => event.target.value);
        }
        else if(event.target.name === "gender"){
            setGender(() => event.target.value);
        }
        else if(event.target.name === "languages"){
            const {value, checked} = event.target;
            
            if(checked){
                setLanguages(prev => [...prev, value]);
            }
            else{
                setLanguages(prev => prev.filter(language => language !== value));
            }
        }
        else if(event.target.name === "destination"){
            setDestination(() => event.target.value);
        }
    }

    return (
        <>
            <form>
                <label for="name">Name: </label>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <br />

                <label for="password">Password: </label>
                <input type="password" name="password" value={password} onChange={handleChange} />
                <br />

                <label>Gender:</label>
                <label>Male</label>
                <input type="radio" name="gender" value="Male" onChange={handleChange} checked={gender === "Male"} />
                <label>Female</label>
                <input type="radio" name="gender" value="Female" onChange={handleChange} checked={gender === "Female"} />
                <label>Other</label>
                <input type="radio" name="gender" value="Other" onChange={handleChange} checked={gender === "Other"} />
                <br />

                <label>Languages:</label>
                <br />
                <input type="checkbox" value="HTML" name="languages" onChange={handleChange} />HTML &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="CSS" name="languages" onChange={handleChange} />CSS &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="JavaScript" name="languages" onChange={handleChange} />JavaScript &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="React" name="languages" onChange={handleChange} />React &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="Tailwind" name="languages" onChange={handleChange} />Tailwind &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="ECMAScript" name="languages" onChange={handleChange} />ECMAScript

                <label>Favorite Destination:</label>
                <select name="destination" onChange={handleChange}>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Norway">Norway</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Bangkok">Bangkok</option>
                </select>
            </form>
            <div>
                <h3>Name: {name}</h3>
                <h3>Password: {password}</h3>
                <h3>Gender: {gender}</h3>
                <h3>Favorite Destination: {destination}</h3>
                <h3>Languages: </h3>
                <ul>
                    {
                        languages.map(language => <li>{language}</li>)
                    }
                </ul>
            </div>
        </>
    );
}

export default MyForm;