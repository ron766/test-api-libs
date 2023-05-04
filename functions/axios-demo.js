import axios from "axios";

export default async function handler(req, res) {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
