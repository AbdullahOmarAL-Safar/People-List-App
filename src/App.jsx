import React from "react";
import people from "./people.jsx";

function PersonCard({ name, age, isStudent }) {
  const statusStyle = {
    color: isStudent ? "green" : "blue",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p style={statusStyle}>
        {isStudent ? "🎓 Student" : "💼 Not a Student"}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={appStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>People Cards</h1>
      <div style={gridStyle}>
        {people.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            age={person.age}
            isStudent={person.isStudent}
          />
        ))}
      </div>
    </div>
  );
}

const appStyle = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  backgroundColor: "#f2f2f2",
  minHeight: "100vh",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "0.3s",
  textAlign: "center",
};

export default App;
