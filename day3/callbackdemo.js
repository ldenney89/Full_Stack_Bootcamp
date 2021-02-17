/* const getBlogPost =() => {
    setTimeout(() => {
        return {
            title:'welcome to callback'
        }
    }, 2000);
} */


const getBlogPost =(callbackdemo) => {
    setTimeout(() => {
        callbackdemo( {
            title:'welcome to callback'
        })
    }, 2000);
}

getBlogPost((bp) => {
    console.log(bp.title)
})