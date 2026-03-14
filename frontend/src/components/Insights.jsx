function Insights({ insights }) {

    if (!insights) return null;

    return (

        <div>

            <h2>Insights</h2>

            <p>Total Entries: {insights.totalEntries}</p>
            <p>Top Emotion: {insights.topEmotion}</p>
            <p>Most Used Ambience: {insights.mostUsedAmbience}</p>
            <p>Recent Keywords: {insights.recentKeywords?.join(", ")}</p>

        </div>

    )

}

export default Insights;