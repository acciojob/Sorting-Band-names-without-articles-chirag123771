document.addEventListener('DOMContentLoaded', function () {
    let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

    // Function to remove articles and sort in lexicographic order
    function sortAndDisplayBands(bands) {
        const sortedBands = bands.sort((a, b) => {
            return removeArticle(a) > removeArticle(b) ? 1 : -1;
        });

        const bandList = document.getElementById('band');
        sortedBands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = band;
            bandList.appendChild(listItem);
        });
    }

    // Function to remove articles from band names
    function removeArticle(band) {
        return band.replace(/^(a |an |the )/i, '').trim();
    }

    // Call the function with the provided array
    sortAndDisplayBands(touristSpots);
});
