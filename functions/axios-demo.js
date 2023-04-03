import fetch from "cross-fetch";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }

  res.status(200).send(data);
}
