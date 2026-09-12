export default async function handler(req, res) {
  // Set CORS headers so your frontend can call this function
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { country, pageSize, page } = req.query;
  const apiKey = process.env.NEWS_API_KEY; 

  try {
    const queryParams = new URLSearchParams({
      country,
      pageSize,
      page,
      apiKey,
    });

    if (q) queryParams.append("q", q);

    const apiResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?${queryParams.toString()}`,
    );

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return res.status(apiResponse.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
}
