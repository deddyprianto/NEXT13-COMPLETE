import useSWR from 'swr';
import axios from 'axios';

export const useFetchData = (endpoint) => {
  const { data, isLoading, error, mutate } = useSWR(
    `https://64a7ca17dca581464b84c889.mockapi.io/students/${endpoint}`,
    (url) =>
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OGZlMmQ3OC00Y2EyLTQzNmQtYjUyNi1jYzViOTE1MTc5MjYiLCJjb21wYW55SWQiOiJjb21wYW55OjpjMjY4ODY5OC1hY2JmLTQ1ODctOTlmZS04ZjExYzBhM2FjNGEiLCJldmVudF9pZCI6IjUyZTUyM2ZlLWQyZTQtNGIxZi04MWJkLTk2NjJjODRkNjhhMiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjg4OTgyMjM4LCJuYW1lIjoidGVzc3MiLCJwaG9uZV9udW1iZXIiOiIrNjUxMjMxMjMiLCJleHAiOjE2ODkwNjg2MzgsImlhdCI6MTY4ODk4MjIzOCwic2lnbkFzIjoiY3VzdG9tZXI6Ojk4ZmUyZDc4LTRjYTItNDM2ZC1iNTI2LWNjNWI5MTUxNzkyNiIsImVtYWlsIjoidGVzdDk5QHRlc3QuY29tIiwiZG9tYWluTmFtZSI6ImFwaS1jaGlja3lmdW4ucHJvc2VsbGVyLWRlbW8uY29tIiwiY29tcGFueU5hbWUiOiJDaGlja3lGdW5EZW1vIn0.4k2C4iq9ozT_UETn9f0RI9FeXSu57tCj8DUH-Ht-QWA',
          },
        })
        .then((res) => res.data),
    {
      errorRetryInterval: 300000,
    }
  );

  return {
    mutate,
    data,
    isLoading,
    isError: error,
  };
};
