import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const createItem = (itemNote) => {
  return (
    <Note
      key={itemNote.key}
      title={itemNote.title}
      content={itemNote.content}
    />
  );
};

const App = () => {
  return (
    <div>
      <Header />
      {notes.map(createItem)}
      <Footer />
    </div>
  );
};

export default App;
