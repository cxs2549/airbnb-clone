

const locationsList = [
  {
    location: "Boulder, Utah",
    rating: 4.5,
    distance: 570.7,
    price: 6237,
  },
  {
    location: "Portland, Oregon",
    rating: 3.2,
    distance: 966.3,
    price: 4753,
  },
  {
    location: "San Francisco, California",
    rating: 4.9,
    distance: 382.4,
    price: 8745,
  },
  {
    location: "Austin, Texas",
    rating: 3.8,
    distance: 1378.5,
    price: 3215,
  },
  {
    location: "New York, New York",
    rating: 4.7,
    distance: 2452.2,
    price: 9962,
  },
  {
    location: "Paris, France",
    rating: 4.2,
    distance: 9655.5,
    price: 7812,
  },
  {
    location: "Tokyo, Japan",
    rating: 4.8,
    distance: 8808.7,
    price: 5790,
  },
  {
    location: "Sydney, Australia",
    rating: 4.4,
    distance: 12313.3,
    price: 5489,
  },
  {
    location: "Rio de Janeiro, Brazil",
    rating: 4.1,
    distance: 8072.2,
    price: 4265,
  },
  {
    location: "Cape Town, South Africa",
    rating: 3.9,
    distance: 17083.5,
    price: 2895,
  },
  {
    location: "Vancouver, Canada",
    rating: 4.6,
    distance: 2221.3,
    price: 5374,
  },
  {
    location: "Amsterdam, Netherlands",
    rating: 4.3,
    distance: 8974.4,
    price: 6734,
  },
  {
    location: "Munich, Germany",
    rating: 4.0,
    distance: 9286.7,
    price: 4179,
  },
  {
    location: "Stockholm, Sweden",
    rating: 4.7,
    distance: 8052.8,
    price: 6231,
  },
  {
    location: "Barcelona, Spain",
    rating: 4.2,
    distance: 9519.6,
    price: 5398,
  },
]
export const generateRandomData = (List) => {
  const updatedLocations = locationsList.map((location, index) => {
    const randomPrice = Math.floor(Math.random() * 2000) + 2000
    const imageUrl = `/rentals/rental-${index + 1}.png`
    const parsedDistance = parseInt(Math.floor(location.distance))
    return {
      ...location,
      images: [imageUrl],
      price: randomPrice,
      night: randomPrice / 5,
      distance: parsedDistance,
    }
  })

  return updatedLocations
}

