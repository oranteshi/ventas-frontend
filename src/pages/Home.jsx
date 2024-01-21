import React, { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import Card from "../components/Card";

function Home() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/productos");
        const data = await response.json();
        if (data.length !== productos.length) {
          setProductos(data);
        }
        console.log("Datos obtenidos:", data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
    const intervalo = setInterval(fetchData, 10000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);
  return (
    <main className={style.main}>
      <div className={style.container}>
        {productos.length
          ? productos.map((producto) => (
              <Card
                nombreProducto={producto.nombre}
                descuento={producto.descuento}
                precio={producto.precio}
                idUser={producto.idUsuario}
              />
            ))
          : "No hay productos"}
      </div>
    </main>
  );
}

export default Home;
