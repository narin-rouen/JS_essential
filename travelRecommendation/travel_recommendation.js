// Fetching data from JSON (simulated with a hardcoded object for now)
const recommendationsData = {
  countries: [
    {
      name: "Australia",
      cities: [
        {
          name: "Sydney, Australia",
          imageUrl: "enter_your_image_for_sydney.jpg",
          description:
            "A vibrant city known for its iconic landmarks like the Sydney Opera House.",
        },
      ],
    },
    {
      name: "Japan",
      cities: [
        {
          name: "Tokyo, Japan",
          imageUrl: "enter_your_image_for_tokyo.jpg",
          description:
            "A bustling metropolis blending tradition and modernity.",
        },
      ],
    },
  ],
  temples: [
    {
      name: "Angkor Wat, Cambodia",
      imageUrl: "enter_your_image_for_angkor-wat.jpg",
      description:
        "A UNESCO World Heritage site and the largest religious monument in the world.",
    },
  ],
  beaches: [
    {
      name: "Bora Bora, French Polynesia",
      imageUrl: "enter_your_image_for_bora-bora.jpg",
      description:
        "Known for stunning turquoise waters and luxurious overwater bungalows.",
    },
  ],
};

// Search recommendations based on the keyword
function searchRecommendations() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  let results = [];

  // Search through the data based on the keyword
  if (keyword.includes("beach")) {
    results = recommendationsData.beaches;
  } else if (keyword.includes("temple")) {
    results = recommendationsData.temples;
  } else if (keyword.includes("country")) {
    results = recommendationsData.countries;
  } else {
    console.log("No recommendations found.");
  }

  // Display the recommendations based on the search result
  displayRecommendations(results);
}

// Display recommendations dynamically in the container
function displayRecommendations(results) {
  const container = document.getElementById("recommendations");
  container.innerHTML = ""; // Clear previous results

  // Check if there are any results and display them
  if (results.length > 0) {
    results.forEach((result) => {
      const item = document.createElement("div");
      item.classList.add("recommendation-item");
      item.innerHTML = `
              <img src="${result.imageUrl}" alt="${result.name}" style="width: 300px;">
              <h3>${result.name}</h3>
              <p>${result.description}</p>
          `;
      container.appendChild(item);
    });
  } else {
    container.innerHTML =
      "<p>No results found. Please try another keyword.</p>";
  }
}

// Clear the search results and reset the input field
function clearResults() {
  document.getElementById("searchInput").value = "";
  const container = document.getElementById("recommendations");
  container.innerHTML = ""; // Clear displayed recommendations
}
