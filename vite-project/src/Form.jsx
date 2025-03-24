import { useState } from "react";

function FormHandling() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [fruit, setFruit] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [gender, setGender] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`
            Name: ${name}
            Password: ${password}
            Message: ${message}
            Favorite Fruit: ${fruit}
            Gender: ${gender}
            Terms Accepted: ${isChecked ? "Yes" : "No"}
        `);
    }

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
            <h2>React Form Handling</h2>
            <form onSubmit={handleSubmit}>

                {/* Name Input */}
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ width: "100%", marginBottom: "10px" }}
                /><br />

                {/* Password Input */}
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ width: "100%", marginBottom: "10px" }}
                /><br />

                {/* Textarea */}
                <label>Message:</label>
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    style={{ width: "100%", height: "60px", marginBottom: "10px" }}
                /><br />

                {/* Dropdown (Select) */}
                <label>Favorite Fruit:</label>
                <select 
                    value={fruit} 
                    onChange={(e) => setFruit(e.target.value)} 
                    style={{ width: "100%", marginBottom: "10px" }}
                >
                    <option value="">Select</option>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="cherry">Cherry</option>
                </select><br />

                {/* Radio Buttons (Gender) */}
                <label>Gender:</label><br />
                <input 
                    type="radio" 
                    value="male" 
                    checked={gender === "male"} 
                    onChange={(e) => setGender(e.target.value)} 
                /> Male
                <input 
                    type="radio" 
                    value="female" 
                    checked={gender === "female"} 
                    onChange={(e) => setGender(e.target.value)} 
                    style={{ marginLeft: "10px" }}
                /> Female
                <br /><br />

                {/* Checkbox */}
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={(e) => setIsChecked(e.target.checked)} 
                />
                <label style={{ marginLeft: "5px" }}>Accept Terms and Conditions</label><br /><br />

                {/* Submit Button */}
                <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormHandling;
