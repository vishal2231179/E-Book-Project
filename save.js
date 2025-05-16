let savedBooks = []; // Array to store saved book data

// Function to toggle save/unsave
function toggleSave(iconElement, bookTitle) {
    const bookCard = iconElement.closest('.book-card'); // Get the book card
    const isSaved = savedBooks.some(book => book.title === bookTitle);

    if (isSaved) {
        // Unsave the book
        savedBooks = savedBooks.filter(book => book.title !== bookTitle);
        iconElement.classList.remove('fas'); // Change to unsaved icon
        iconElement.classList.add('far');
        iconElement.style.color = ""; // Reset color to default

        // If currently on the Saved tab, remove the card instantly
        const currentTab = document.querySelector('nav a.active');
        if (currentTab && currentTab.textContent === "Saved") {
            bookCard.remove();
        }
    } else {
        // Save the book
        const bookData = {
            title: bookTitle,
            cardHTML: bookCard.outerHTML // Save the HTML of the book card
        };
        savedBooks.push(bookData);
        iconElement.classList.remove('far'); // Change to saved icon
        iconElement.classList.add('fas');
        iconElement.style.color = "green"; // Set color to green for saved
    }
}
