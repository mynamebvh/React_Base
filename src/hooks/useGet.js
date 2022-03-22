import { useEffect, useState } from "react";

import axios from "axios";

import httpRequest from "services/httpRequest";

const useGet = (
  url,
  params = {},
  showSpinner = false,
  delay = process.env.REACT_APP_DELAY_GET_DATA,
) => {
  const [data, setData] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    let timeout = null;

    setShowLoading(true);

    httpRequest
      .get(url, {
        url,
        params,
        showSpinner,
        cancelToken: source.token,
      })
      .then((response) => {
        timeout = setTimeout(() => {
          setShowLoading(false);
          setData(response.data);
        }, delay);
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          setShowLoading(false);
        }
      });

    return () => {
      source.cancel();
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, showLoading };
};

export default useGet;
