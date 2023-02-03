const BASE_URL = "https://api.spacexdata.com/v3";

export const LAUNCHES_LIST_URL = `${BASE_URL}/launches`;
export const ROCKETS_LIST_URL = `${BASE_URL}/rockets`;


class RequestError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "RequestError";
    this.statusCode = status;
  }
}

export async function request({ method, url, body }) {
  const response = await fetch(url, {
    method,
    ...(method !== "GET" && JSON.stringify(body)),
  });
  const data = await response.json();

  if (!response.ok) {
    const errorMessage = data?.message ?? data?.error ?? 'Algo salio mal!';
    throw new RequestError(errorMessage, response.status);
  }

  return data;
}


// ESTOS SERVICIOS SON POR SI USO UNA LIBRERIA COMO SWR O REACT QUERY
export function getLaunches() {
  return request({ url: LAUNCHES_LIST_URL });
}

export function getLaunchDetail({ id }) {
  return request({ url: `${LAUNCHES_LIST_URL}/${id}` });
}

export function getRocket({ id }) {
  return request({ url: `${ROCKETS_LIST_URL}/${id}` });
}
