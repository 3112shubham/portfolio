document.addEventListener('DOMContentLoaded', function() {
    const userDropdown = document.getElementById('user-dropdown');
    const portfolioContent = document.querySelector('.portfolio-content');
    const portfolioPlaceholder = document.querySelector('.portfolio-placeholder');
    
    // Fetch users for dropdown
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = user.name;
                userDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    
    // Handle dropdown change
    userDropdown.addEventListener('change', function() {
        const userId = this.value;
        
        if (!userId) {
            portfolioContent.classList.add('hidden');
            portfolioPlaceholder.style.display = 'block';
            return;
        }
        
        // Fetch user details
        fetch(`/api/user/${userId}`)
            .then(response => response.json())
            .then(user => {
                // Update DOM with user data
                document.getElementById('user-name').textContent = user.name;
                document.getElementById('user-profession').textContent = user.profession;
                document.getElementById('user-bio').textContent = user.bio;
                document.getElementById('user-skills').textContent = user.skills;
                document.getElementById('user-email').textContent = user.email;
                document.getElementById('user-image').src = user.image_url;
                
                // Show portfolio content
                portfolioPlaceholder.style.display = 'none';
                portfolioContent.classList.remove('hidden');
                portfolioContent.classList.add('visible');
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    });
});