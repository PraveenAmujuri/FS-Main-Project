import React from "react";

export default function StudentsList({ students }) {
  return (
    <div>
      <h2>Registered Students</h2>
      {students.length === 0 ? <p>No students registered yet.</p> : (
        <ul>
          {students.map((s, index) => (
            <li key={index}>
              {s.name} | {s.age} | {s.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
