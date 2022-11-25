import { useState, useEffect } from "react";
import "./App.css";
import CoursePage from "./components/CoursePage/CoursePage";
import Form from "./components/Form/Form";
import { useCourse } from "./hooks/useCourse";

function App() {
  const [handledBlur, lessons, error] = useCourse();
  return (
      <main className="App">
        <Form handledBlur={handledBlur} />
        <CoursePage lessons={lessons} error={error}/>
      </main>
  );
}

export default App;
