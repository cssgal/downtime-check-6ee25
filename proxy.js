exports.handler = async (event, context) => {
  const url = event.queryStringParameters.url;
  try {
    const response = await fetch(url, { method: "HEAD" });
    return {
      statusCode: response.status,
      body: JSON.stringify({ status: response.ok ? "Up" : "Down" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "Down (or blocked)" }),
    };
  }
};