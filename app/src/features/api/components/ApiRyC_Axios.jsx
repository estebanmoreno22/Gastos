import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

export const ApiRyC = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [query,setQuery] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source()
    axios.get('https://rickandmortyapi.com/api/character/',{params:{page,name:query},CancelToken:source.token})
      
      .then(({data}) => {
        setData(data.results || [])
        setInfo(data.info || {})
      })
      .catch((err) => {
        if(axios.isCancel(err)) return
        if(err.response?.status === 404) {
            setData([])
            setInfo({})
            return
        }
        console.error(err)
      });
      return () => source.cancel()
  }, [page,query]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#F5F7FA", // fondo claro banco
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Header />

      <div style={{ flex: 1, padding: "40px 20px" }}>
        
        <h1 
          style={{ 
            textAlign: "center", 
            marginBottom: "30px",
            fontWeight: "600",
            color: "#0B1F3A"
          }}
        >
         API Rick & Morty 🛸 
        </h1>

        {/* BUSCADOR */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
          <input
            placeholder="Buscar personaje..."
            value={query}
            onChange={(c) => (setQuery(c.target.value.trim()), setPage(1))}
            style={{
              width: "300px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #D1D5DB",
              background: "white",
              color: "#111827",
              outline: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
          />
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {data?.map(char => (
            <div
              key={char.id}
              style={{
                width: "200px",
                background: "white",
                border: "1px solid #E5E7EB",
                borderRadius: "14px",
                padding: "15px",
                textAlign: "center",
                transition: "0.3s",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={char.image}
                alt={char.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />

              <h4 
                style={{ 
                  marginTop: "10px", 
                  color: "#1D4ED8",
                  fontWeight: "600"
                }}
              >
                {char.name}
              </h4>

              <p
                style={{
                  color: char.gender === "Male" ? "#2563EB" : "#DB2777",
                  fontWeight: "500",
                }}
              >
                {char.gender}
              </p>
            </div>
          ))}
        </div>

        {/* PAGINACIÓN */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => setPage(page - 1)}
            disabled={!info.prev}
            style={{
              margin: "0 10px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #D1D5DB",
              background: "white",
              color: "#1D4ED8",
              cursor: "pointer",
            }}
          >
            Anterior
          </button>

          <span style={{ margin: "0 15px", color: "#6B7280" }}>
            Página {page}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={!info.next}
            style={{
              margin: "0 10px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #D1D5DB",
              background: "white",
              color: "#1D4ED8",
              cursor: "pointer",
            }}
          >
            Siguiente
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};