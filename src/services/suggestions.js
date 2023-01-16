export const getSuggestions = async (searchTerm) => {
  if (searchTerm !== "") {
    try {
      const response = await fetch(`${process.env.REACT_APP_GEO_URL}&apiKey=${process.env.REACT_APP_GEO_KEY}&format=json&type=city&text=${encodeURI(searchTerm)}`);
      const data = await response.json();
      const suggestions = data.results.map((result) => {
        return (
          {
            key: `${result.place_id}`,
            label: `${result.city}, ${result.state}, ${result.country}`,
            coordinates: {
              latitude: result.lat,
              longitude: result.lon
            }
          }
        );
      });
      if (suggestions.length === 0) {
        return [];
      } else {
        return suggestions;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  } else {
    return [];
  }
};