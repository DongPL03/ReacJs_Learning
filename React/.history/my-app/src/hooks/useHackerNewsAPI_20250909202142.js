import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const handleFetchResponse = useRef({});
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState([]);
  const [url, setUrl] = useState(initialUrl);
  handleFetchResponse.current = async () => {
    setLoading(true);
    try {
      const respose = await axios.get(url);
      setData(respose.data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      set(`The error happend ${message}`);
    }
  };
  useEffect(() => {
    handleFetchRespose.current();
  }, [url]);
  return {
    data,
    setUrl,
    loading,
    message,
  };
}
