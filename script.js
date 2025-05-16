
// Function to open the PDF modal
function openModal(pdfUrl) {
    document.getElementById('pdfViewer').src = pdfUrl;
    document.getElementById('pdfModal').style.display = "block";
}

// Function to close the PDF modal
function closeModal() {
    document.getElementById('pdfModal').style.display = "none";
    document.getElementById('pdfViewer').src = ""; // Clear the src to stop the PDF
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('pdfModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Function to filter books based on search input
function filterBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('book-card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].getElementsByClassName('book-title')[0];
        if (title) {
            const txtValue = title.textContent || title.innerText;
            cards[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}

// Function to show all books (Home section)
function showAllBooks() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear container

    // Restore all original book cards
    const allBookCards = `
        <div class="book-card">
            <img alt="Book cover of Bhagwad Gita" height="200" src="./Books Thumbnail/the bhagwat gita.png" width="180" />
            <div class="book-title">Bhagwad Gita</div>
            <div class="book-price">$1.5</div>
            <div class="book-category">Transformation of career...</div>
            <div class="book-actions">
                <button class="read-btn" onclick="openModal('./Books PDFs/Bhagvad Geeta.pdf')">READ</button>
                <i class="far fa-bookmark icon" onclick="toggleSave(this, 'Bhagwad Gita')"></i>
            </div>
        </div>
        <div class="book-card">
            <img alt="Book cover of The Magic Manifesting" height="200" src="./Books Thumbnail/the magic manifesting.png" width="180" />
            <div class="book-title">The Magic Manif...</div>
            <div class="book-price">$1.5</div>
            <div class="book-category">Transformation of career...</div>
            <div class="book-actions">
                <button class="read-btn" onclick="openModal('./Books PDFs/Bhagvad Geeta.pdf')">READ</button>
                <i class="far fa-bookmark icon" onclick="toggleSave(this, 'The Magic Manifesting')"></i>
            </div>
        </div>`;
    container.innerHTML = allBookCards; // Render all book cards
}

// Function to show only saved books
function showSavedBooks() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear container
    if (savedBooks.length === 0) {
        container.innerHTML = '<p>No saved books.</p>'; // Show empty message if no books are saved
    } else {
        const savedBooksHTML = savedBooks.map(book => {
            const template = document.createElement("template");
            template.innerHTML = book.cardHTML.trim();
            const card = template.content.firstChild;

            // Update save icon to saved state (green and fas class)
            const saveIcon = card.querySelector('.icon');
            saveIcon.classList.remove('far');
            saveIcon.classList.add('fas');
            saveIcon.style.color = "green";

            return card.outerHTML;
        });
        container.innerHTML = savedBooksHTML.join(''); // Render saved books
    }
}
