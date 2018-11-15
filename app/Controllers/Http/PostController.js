'use strict'

class PostController {
    async index( { view } ){
        const posts = [
            {title: 'Post 1', body: 'This is post 1'},
            {title: 'Post 2', body: 'This is post 2'},
            {title: 'Post 3', body: 'This is post 3'}
        ]
        return view.render('posts.index', {
            title: 'Latest Posts', 
            posts: posts
        })
    }
}

module.exports = PostController
