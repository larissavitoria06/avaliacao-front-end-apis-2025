
if (!localStorage.getItem('authToken')) {
    window.location.href = './login.html';
}

const searchInput = document.getElementById('search');
const postsList = document.getElementById('posts-list');

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    renderPosts(posts);
}

function renderPosts(posts) {
    postsList.innerHTML = '';
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body.substring(0, 100)}...</p>
            <button onclick="viewPostDetails(${post.id})">Ver Detalhes</button>
        `;
        postsList.appendChild(postCard);
    });
}

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    fetchPosts().then(posts => {
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm));
        renderPosts(filteredPosts);
    });
});

function viewPostDetails(postId) {
    window.location.href = `./post-detail.html?id=${postId}`;
}

fetchPosts();
