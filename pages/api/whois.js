export default async function handler(req, res) {
  const { user } = req.body;

  console.log(user);

  var myHeaders = new Headers();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(user, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const details = JSON.stringify(result);
      console.log("Details: ", details);
      res.status(200).json(
        JSON.stringify({
          status: user,
        })
      );
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json(
        JSON.stringify({
          status: "error",
          error,
        })
      );
    });
}