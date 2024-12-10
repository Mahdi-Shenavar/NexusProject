document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'user1' && password === 'pass1') {
      window.location.href = '../3. admin panel/admin.html';
    } else if (username === 'user2' && password === 'pass2') {
      window.location.href = '../3.1 .super admin/sadmin.html';
    } else {
      alert('Invalid username or password!');
    }
  });
  