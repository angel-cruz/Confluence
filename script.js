function toggleTheme() {
    document.body.classList.toggle('dark');
}

// You could dynamically update these counts from APIs in a real dashboard
let projectCount = 12;
let userCount = 4;
let messageCount = 23;

document.getElementById('projectCount').textContent = projectCount;
document.getElementById('userCount').textContent = userCount;
document.getElementById('messageCount').textContent = messageCount;
