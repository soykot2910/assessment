export const fetchData = async (URL) => {
  try {
    let res = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
