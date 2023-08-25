import { cookies } from 'next/headers';

interface Props {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: any;
}

export async function httpClient({ path, method, body, headers }: Props) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + path, {
      method,
      body,
      headers: {
        ...headers,
        Cookie: cookies().toString(),
        'Content-Type': 'application/json;charset=utf-8',
      },
      credentials: 'include',
    });
    const data = await response.text();
    return data;
  } catch (e) {
    console.log(e);
  }
}
