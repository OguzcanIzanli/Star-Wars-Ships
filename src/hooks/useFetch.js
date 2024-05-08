import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
