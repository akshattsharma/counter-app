import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0f4f8",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <div style={{
        background: "#fff",
        padding: "40px 48px",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        width: "100%",
        maxWidth: "360px",
        textAlign: "center",
      }}>

        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1a202c", marginBottom: "24px" }}>
          Counter App
        </h1>

        <div style={{
          fontSize: "1.4rem",
          fontWeight: 600,
          color: "#2d3748",
          marginBottom: "32px",
          padding: "16px",
          background: "#f7fafc",
          borderRadius: "10px",
          border: "1px solid #e2e8f0",
        }}>
          Count: {count}
        </div>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: "12px 28px",
              borderRadius: "8px",
              border: "none",
              background: "#48bb78",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 600,
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: "12px 28px",
              borderRadius: "8px",
              border: "none",
              background: "#fc8181",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 600,
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            Decrement
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;