const https = require("https");

exports.handler = async (event) => {
  const ids = event.queryStringParameters?.ids || "";
  const url = `https://connpass.com/api/v1/event/?event_id=${ids}&order=2`;

  return new Promise((resolve) => {
    https.get(url, { headers: { "User-Agent": "1dayx-site/1.0" } }, (res) => {
      let body = "";
      res.on("data", chunk => body += chunk);
      res.on("end", () => {
        try {
          const data = JSON.parse(body);
          resolve({
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
        } catch (e) {
          resolve({ statusCode: 500, body: JSON.stringify({ error: "parse error", raw: body.slice(0, 200) }) });
        }
      });
    }).on("error", (e) => {
      resolve({ statusCode: 500, body: JSON.stringify({ error: e.message }) });
    });
  });
};
