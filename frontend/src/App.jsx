import React, { useState, useEffect } from "react";
import Registration from "./components/Registration";
import StudentsList from "./components/StudentsList";

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div className="p-4">
      <h1>Student Registration Form</h1>
      <Registration setStudents={setStudents} />
      <StudentsList students={students} />
    </div>
  );
}
