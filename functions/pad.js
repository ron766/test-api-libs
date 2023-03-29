import padCenter from "pad-center";

export default async function handler(req, res) {
  const code = padCenter({
    startWith: "053",
    endWith: "0",
    fillWith: "*",
    length: 11,
  });

  console.log("padCenter", code);

  res.status(200).send(code);
}
