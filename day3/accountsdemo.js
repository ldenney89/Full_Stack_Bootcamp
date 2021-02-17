function getUser(id, callbackfun) {

    setTimeout(() => {
        console.log('getting the user from the database')
        callbackfun({
            id:id,
            name:'amarjett'
        })
    }, 2000);
}

function getBlogs(username, callbackfun) {

    setTimeout(() => {
        console.log('loading all his posts from various apps')
        callbackfun
            (['post1', 'post2', 'post3'])
        
    }, 2000);
}

function getComments(post, callbackfun) {

    setTimeout(() => {
        console.log('loading comments from multiple posts' + post)
        callbackfun(['comments for ' + post])

    }, 2000);
}

getUser(101,(user)=> {
    getBlogs(user.name,(blogspost) => {
        getComments(blogspost[0], (comments) => {
            console.log(user, blogspost[0], comments)
        })
    } )
})