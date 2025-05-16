function handleCredentialResponse(response) {
    // Decode the ID token
    const userObject = parseJwt(response.credential);
    console.log('User  Info:', userObject);

    // Here you can send the token to your server for verification and sign-in
    // Example:
    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ token: response.credential })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // });
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}