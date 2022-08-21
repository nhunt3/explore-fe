export const venues = {
  type: 'FeatureCollection',
  longitude: -84.3593842,
  latitude: 33.7636161,
  zoom: 14,
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-84.36196304347493, 33.76900782383692]
      },
      properties: {
        title: 'New Realm',
        description: 'brewery',
        image_name: 'New_Realm',
        id: 1
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-84.36422073173803, 33.75954915304173]
      },
      properties: {
        title: 'Ladybird',
        description: 'daytime bar',
        image_name: 'Ladybird',
        id: 2
      }
    }
  ]
};
