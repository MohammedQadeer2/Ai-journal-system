import { useEffect, useState } from "react";
import API from "./api";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";
import Insights from "./components/Insights";

function App() {

  const [entries, setEntries] = useState([]);
  const [insights, setInsights] = useState(null);

  const userId = "123";

  const fetchEntries = async () => {

    const res = await API.get(`/journal/${userId}`);

    setEntries(res.data);

  }

  const fetchInsights = async () => {

    const res = await API.get(`/journal/insights/${userId}`);

    setInsights(res.data);

  }

  const refresh = () => {
    fetchEntries();
    fetchInsights();
  }

  useEffect(() => {
    refresh();
  }, [])

  return (

    <div className="container">

      <h1>AI Journal</h1>

      <JournalForm refresh={refresh} />

      <JournalList entries={entries} />

      <Insights insights={insights} />

    </div>

  )

}

export default App;