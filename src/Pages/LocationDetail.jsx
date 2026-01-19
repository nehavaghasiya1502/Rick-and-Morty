import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LocationDetail = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, [id]);

  if (!location) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      color: "white",
    //   padding: "80px 100px",
      fontFamily: "monospace",
      whiteSpace: "pre-wrap"
    }}>
      {JSON.stringify(location, null, 2)}
    </div>
  );
};

export default LocationDetail;
