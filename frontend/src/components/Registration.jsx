import React, { useState } from "react";

export default function Registration({ setStudents }) {
  const [form, setForm] = useState({ name: "", age: "", course: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStudents(prev => [...prev, data]);
    setForm({ name: "", age: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
      <input name="course" placeholder="Course" value={form.course} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}
