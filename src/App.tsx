import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Subs } from "./types";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

function App() {
  const [subs, setSubs] = useState<Array<Subs>>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Midu subs</h1>
      <Form onNewSub={setSubs} />
      <List subs={subs} />
    </div>
  );
}

export default App;
