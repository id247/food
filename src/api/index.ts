const API = process.env.REACT_APP_API;

export const apiRequest = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${API}${url}`);
  const json = await response.json();

  return json;
};
