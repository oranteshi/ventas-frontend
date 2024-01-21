import React from "react";
import style from "../styles/Home.module.css";
import Card from "../components/Card";

function Home() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Home;
