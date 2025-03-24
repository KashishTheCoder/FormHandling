import { useState } from 'react';

function MyForm(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [languages, setLanguages] = useState([]);

    function handleNameChange(event){
        setName(() => event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(() => event.target.value);
    }
    function handleGenderChange(event){
        setGender(() => event.target.value);
    }
    function handleLanguageChange(event){
        const {value, checked} = event.target;
        
        if(checked){
            setLanguages(prev => [...prev, value]);
        }
        else{
            setLanguages(prev => prev.filter(language => language !== value));
        }
    }

    return (
        <>
            <form>
                <label for="name">Name: </label>
                <input type="text" value={name} onChange={handleNameChange} />
                <br />

                <label for="password">Password: </label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <br />

                <label>Gender:</label>
                <label>Male</label>
                <input type="radio" name="gender" value="Male" onChange={handleGenderChange} checked={gender === "Male"} />
                <label>Female</label>
                <input type="radio" name="gender" value="Female" onChange={handleGenderChange} checked={gender === "Female"} />
                <label>Other</label>
                <input type="radio" name="gender" value="Other" onChange={handleGenderChange} checked={gender === "Other"} />
                 <br />

                <label>Languages:</label>
                <br />
                <input type="checkbox" value="HTML" name="languages" onChange={handleLanguageChange} />HTML &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="CSS" name="languages" onChange={handleLanguageChange} />CSS &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="JavaScript" name="languages" onChange={handleLanguageChange} />JavaScript &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="React" name="languages" onChange={handleLanguageChange} />React &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="Tailwind" name="languages" onChange={handleLanguageChange} />Tailwind &nbsp;&nbsp;&nbsp;
                <input type="checkbox" value="ECMAScript" name="languages" onChange={handleLanguageChange} />ECMAScript
            </form>
            <div>
                <h3>Name: {name}</h3>
                <h3>Password: {password}</h3>
                <h3>Gender: {gender}</h3>
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