   // Prevent default Ctrl+F behavior (search across the page)
   document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault(); // Prevent browser's default find behavior
        document.getElementById('searchInput').focus(); // Focus on the search input
    }
});

// Your filterBooks function
function filterBooks() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    // Add your filtering logic here to search through books
    console.log("Searching for:", filter);
}