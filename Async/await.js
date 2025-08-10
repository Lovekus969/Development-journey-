async function getUser() {
    try {
        const response = await fetch("https://api.example.com/user");
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}
