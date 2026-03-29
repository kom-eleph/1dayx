exports.handler = async (event) => {
  const ids = event.queryStringParameters?.ids || "";
  const url = `https://connpass.com/api/v1/event/?event_id=${ids}&order=2`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
