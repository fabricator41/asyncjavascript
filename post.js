const posts = [
    { name: 'Post 1', author: 'Admin' },
    { name: 'Post 2', author: 'Admin' },
    { name: 'Post 3', author: 'Admin' }
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.name);
    });
}

const addPost = (newPost) => {

    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        // reject('BIR HATA OLUSTU');
    });

    return promise1;


}

async function showPosts() {
    try {
        await addPost({ name: 'Post 12', author: 'Admin' }, listPosts);
        listPosts();
    }

    catch (error) {
        console.log(error)
    }
}

showPosts();