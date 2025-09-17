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
      const response = await axios.get(url);
      setData(response.data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessage(`The error happened ${error.message}`);
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
