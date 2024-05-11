function searchPage() {
    // Get the value entered in the search input
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    
    // key-value pairs of webpage names and their corresponding file names
    var webPages = {
        "about": "about",
        "vision": "vision",
        "vision 2030": "vision",
        "home": "index",
        "food": "food",
        "traditional food": "food",
        "tourism": "tourism",
        "costumes": "costumes",
        "cultural costumes": "costumes",
        "celebrations" : "celebrations",
        "national celebrations" : "celebrations",
    };

    // Check if the entered search term matches any webpage name
    if (webPages.hasOwnProperty(searchTerm)) {
        var fileName = webPages[searchTerm];
        window.location.href = fileName + ".html"; 
        // Navigate to the corresponding HTML file
    } else {
        // If the page name is not found, navigate to the "404" error page
        window.location.href = "404.html";
    }
}