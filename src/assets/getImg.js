const getImg = (image) => {
  return new URL(`./img/${image}`, import.meta.url).href
}

export default getImg