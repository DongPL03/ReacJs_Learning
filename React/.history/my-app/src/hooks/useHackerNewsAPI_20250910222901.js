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
      const re = await axios.get(url);
      setData(re.data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessage(`The error happend ${message}`);
    }
  };
  useEffect(() => {
    handleFetchResponse.current();
  }, [url]);
  return {
    data,
    setUrl,
    loading,
    message,
  };
}
