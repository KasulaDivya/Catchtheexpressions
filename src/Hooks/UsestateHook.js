import { useState } from "react";

function Hooks1() {
    //var a = [{ name: "Divya", age: 27 }, { name: "Thulasi", age: 22 }, { name: "anitha", age: 28 }];
    const [currenthobbies, sethobbies] = useState(false);

    const change = (e) => {
        e.preventDefault();
        if (e.target[0].value % 2 === 0) {
            sethobbies(true);
        }
    };

    return (
        <>
            <h2 style={{ color: currenthobbies ? "blue" : "pink" }}>hyy</h2>
            <form onSubmit={change}>
                
                <input id="input" type="text" />
                <input type="submit" value="submit" />
            </form>
        </>
    );
}

export default Hooks1;
