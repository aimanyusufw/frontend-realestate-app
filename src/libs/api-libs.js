export const fetchApi = async (resource, params) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${resource}?${params}`
    );

    return response.json();
  } catch (error) {
    return { message: error.message, data: null };
  }
};
