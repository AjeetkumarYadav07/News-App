export default async function handler(req, res) {
    const { category } = req.query;
    const apiKey = process.env.VITE_API_KEY;
  
    if (!apiKey) {
      return res.status(500).json({ error: "Missing VITE_API_KEY environment variable" });
    }
  
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        return res.status(response.status).json({ error: "Error fetching news" });
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }