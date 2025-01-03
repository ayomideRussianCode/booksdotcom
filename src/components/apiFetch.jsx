export const apiFetch = async (URL, method = "POST", data = null) => {
  try {
    const response = await fetch(URL, {
      method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data ? JSON.stringify(data) : null,
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Error :", error.message);
    throw error;
  }
};
