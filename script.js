//your code here
// Given array of band names
const bandNames = ['The Beatles', 'Radiohead', 'Pink Floyd', 'Led Zeppelin', 'The Rolling Stones', 'A Tribe Called Quest'];

// Function to remove articles from band names
function removeArticles(name) {
  // Split the name into words
  const words = name.split(' ');

  // Remove any article from the beginning of the name
  if (['a', 'an', 'the'].includes(words[0].toLowerCase())) {
    words.shift();
  }

  // Join the remaining words back into a string
  return words.join(' ');
}

// Sort the band names in lexicographic order excluding articles
const sortedBandNames = bandNames.map(removeArticles).sort();

// Get the band ul element from the DOM
const bandList = document.getElementById('band');

// Add each band name to the list as a li element
sortedBandNames.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
});


