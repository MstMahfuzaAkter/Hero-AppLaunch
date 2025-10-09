// // get
// export const loadInstalllist = () => {
//   try {
//     const data = localStorage.getItem('intallation')
//     return data ? JSON.parse(data) : []
//   } catch (err) {
//     console.log(err)
//     return []
//   }
// }

// // save
// export const updateList = product => {
//   const installlist = loadInstalllist()

//   try {
//     const isDuplicate = installlist.some(p => p.id === product.id)
//     if (isDuplicate) return alert('Already added in wishlist')
//     const updatedWishlist = [...installlist, product]
//     localStorage.setItem('installtion', JSON.stringify(updatedWishlist))
//   } catch (err) {
//     console.log(err)
//   }
// }

// // delete
// export const removeFromWishlist = id => {
//   const installlist = loadInstalllist();
//   try {
//     const updatedWishlist = installlist.filter(p => p.id !== id)
//     localStorage.setItem('installtio', JSON.stringify(updatedWishlist))
//   } catch (err) {
//     console.log(err)
//   }
// }