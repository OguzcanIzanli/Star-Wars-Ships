import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
