const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static elements from public folder
app.use(express.static(path.join(__dirname, '../public')));

// Simulated secure API proxy router endpoint
app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: 'Search term query required' });
    }

    // In a live environment, fetch configuration secret keys from environment configurations
    // const apiKey = process.env.SEARCH_API_KEY;
    // Example fetch layout:
    // const apiResponse = await fetch(`https://api.externalprovider.com/search?key=${apiKey}&q=${query}`);
    // const data = await apiResponse.json();

    // Reverting custom fallback JSON array
    const sampleResults = {
        results: [
            { title: `${query} - Wikipedia Explanation`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`, snippet: `Detailed information, historical contexts, and community consensus data addressing ${query}.` },
            { title: `How ${query} Works in Modern Architecture`, url: 'https://developer.mozilla.org', snippet: `Practical implementation documentation, syntax guides, and step-by-step developer manuals regarding ${query}.` }
        ]
    };

    res.json(sampleResults);
});

app.listen(PORT, () => {
    console.log(`PrivySearch engine mock backend operating locally on http://localhost:${PORT}`);
});