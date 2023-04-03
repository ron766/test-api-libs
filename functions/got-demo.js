import got from 'got';

export default async function handler(req, res) {
  try {
    const data = await got("https://jsonplaceholder.typicode.com/users").json();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }

}
