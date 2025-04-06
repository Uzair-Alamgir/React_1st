import React from "react";
import Card from "../components/Card";

const App = () => {
  return (
    <>
      <h1 className="text-black-600 text-center bg-amber-600 rounded-xl mb-4">
        Uzair Alamgir
      </h1>
      <Card username="Uzair Alamgir" />
      <Card username="Abdul Hadi" />
    </>
  );
};

export default App;
