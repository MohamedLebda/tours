import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Title from "./Title";

function App() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  const travels = data.map((place) => (
    <Tours {...place} key={place.id} delete={deletePlace} />
  ));

  function deletePlace(event, id) {
    setData((newData) => newData.filter((place) => place.id !== id));
  }

  return (
    <main>
      {load ? (
        <Loading />
      ) : (
        <Title
          refresh={() => setRefresh((prev) => !prev)}
          dataLength={data.length}
        />
      )}
      {travels}
    </main>
  );
}

export default App;
