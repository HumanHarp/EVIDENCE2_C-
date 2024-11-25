document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const query = document.getElementById("query").value;

  
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    
    const simulatedResults = [
        { title: "Introduction to CGI", link: "https://example.com/cgi" },
        { title: "Search Engine Optimization Basics", link: "https://example.com/seo" },
        { title: "Learn Modern Web Design", link: "https://example.com/web-design" },
    ];

    
    simulatedResults.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";
        resultItem.innerHTML = `<a href="${result.link}" target="_blank">${result.title}</a>`;
        resultsContainer.appendChild(resultItem);
    });
});
