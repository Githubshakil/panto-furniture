function getImgUrl (name) {
    return new URL(`../assets/images/products/${name}`, import.meta.url).href
}

export {getImgUrl}