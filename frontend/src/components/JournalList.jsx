function JournalList({ entries }) {

    return (

        <div>

            <h2>Previous Entries</h2>

            {entries.map((entry) => (
                <div className="card" key={entry._id}>

                    <p><strong>Text:</strong> {entry.text}</p>
                    <p><strong>Emotion:</strong> {entry.emotion}</p>
                    <p><strong>Ambience:</strong> {entry.ambience}</p>

                </div>
            ))}

        </div>

    )

}

export default JournalList;