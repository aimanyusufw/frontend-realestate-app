export const fetchApi = async (resource, params) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${resource}?${params}`
    );

    if (!response.ok) {
      return { message: error.message, data: null };
    }

    return response.json();
  } catch (error) {}
};
