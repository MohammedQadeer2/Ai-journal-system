import { useState } from "react";
import API from "../api";

function JournalForm({ refresh }) {

    const [text, setText] = useState("");
    const [ambience, setAmbience] = useState("forest");

    const submitJournal = async () => {

        await API.post("/journal", {
            userId: "123",
            ambience,
            text
        });

        setText("");
        refresh();

    }

    return (
        <div>

            <h2>Write Journal</h2>

            <select value={ambience} onChange={(e) => setAmbience(e.target.value)}>
                <option value="forest">Forest</option>
                <option value="ocean">Ocean</option>
                <option value="mountain">Mountain</option>
            </select>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your thoughts"
            />

            <button onClick={submitJournal}>
                Submit
            </button>

        </div>
    )

}

export default JournalForm;