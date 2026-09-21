document.getElementById('search-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    const errorMsg = document.getElementById('error-message');
    
    if (!query) {
        errorMsg.textContent = 'Please enter a valid search query.';
        errorMsg.classList.remove('hidden');
        return;
    }
    errorMsg.classList.add('hidden');

    // Simulate saving temporary session trace to show clear-data feature
    localStorage.setItem('temp_session_trace', 'Active Search Session Data');

    try {
        // Send request to our Node.js backend proxy
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('API server returned an error status.');
        
        const data = await response.json();
        renderResults(query, data.results || []);
    } catch (error) {
        errorMsg.textContent = 'Unable to fetch results. Showing simulated fallback data.';
        errorMsg.classList.remove('hidden');
        
        // Fallback demo data if no external live API backend is running
        const mockResults = [
            { title: `${query} - Fundamental Guide`, url: 'https://example.com/guide', snippet: `Comprehensive resources, breakdowns, and community articles focusing on ${query}.` },
            { title: `What is ${query}?`, url: 'https://example.org/explainer', snippet: `An introduction explaining the structural components, history, and real-world implications of ${query}.` }
        ];
        setTimeout(() => renderResults(query, mockResults), 500);
    }
});

function renderResults(query, results) {
    document.getElementById('search-homepage').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    document.getElementById('query-profile').textContent = query;

    const wrapper = document.getElementById('results-wrapper');
    wrapper.innerHTML = '';

    if (results.length === 0) {
        wrapper.innerHTML = '<p>No results found for this query.</p>';
        return;
    }

    results.forEach(item => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <h3 class="result-title"><a href="${item.url}" target="_blank">${item.title}</a></h3>
            <div class="result-url">${item.url}</div>
            <p class="result-snippet">${item.snippet}</p>
        `;
        wrapper.appendChild(div);
    });
}

document.getElementById('back-home-btn').addEventListener('click', () => {
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('search-homepage').classList.remove('hidden');
});

document.getElementById('privacy-info-btn').addEventListener('click', () => {
    document.getElementById('privacy-modal').classList.toggle('hidden');
});

document.getElementById('close-privacy-btn').addEventListener('click', () => {
    document.getElementById('privacy-modal').classList.add('hidden');
});

document.getElementById('clear-data-btn').addEventListener('click', () => {
    localStorage.clear();
    alert('Local application and temporary session data successfully wiped from your browser.');
});