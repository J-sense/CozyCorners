function getImgUrl(name) {
    return new URL(`../assets/assets/products/${name}`, import.meta.url).href
 }

 export {getImgUrl};