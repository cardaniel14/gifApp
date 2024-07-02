export const getGifs = async (category) => {
  const url = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=57EAQrMZtePQCt8rJn0I03YwAwSOlCXz&q=${category}&limit=10`
  );
  const resp = await url.json();
  const { data } = resp;
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
