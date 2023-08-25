interface Props {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: any;
}

export async function httpClient({ path, method, body, headers }: Props) {
  const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + path, {
    method,
    body,
    headers: {
      ...headers,
      'Content-Type': 'application/json;charset=utf-8',
    },
    credentials: 'include',
  });

  const data = await response.json();
  return data;
}
