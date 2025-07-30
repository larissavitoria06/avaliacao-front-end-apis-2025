document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  login(); 
});

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
        const response = await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: username,
    password: password,
    expiresInMins: 30, 
  }),
})

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'posts.html';
    } else {
      alert('Email ou senha incorretos');
    }

  } catch (error) {
    console.error('Erro ao fazer login:', error);
    alert('Erro ao fazer login');
  }
}

// user:emilys
//senha:emilyspass