// Example JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
    // Fetch menu items from an API or define them here
    const menuItems = [
        { name: "Seeraga Samba Chicken Biriyani", price: "120 rs", imageurl: "https://i.ytimg.com/vi/WkV5n-Y36CU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCwTjHiFD0RGAKR8rulTi7jbUkYpg/hq720.jpg" },
        { name: "Seeraga Samba Kuskha", price: "100 rs", imageurl: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2020/04/Kuska-5.jpg?resize=683%2C1024&ssl=1/Kuska-5.webp" },
        { name: "Chicken 65", price: "120 rs", imageurl: "https://i.pinimg.com/564x/38/52/6a/38526a5175e0711fadf94e718832e271.jpg" },
    ];

    // Dynamically generate menu items with images
    const menuContainer = document.querySelector('.menu-items');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.imageurl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        menuContainer.appendChild(menuItem);
    });

    console.log("Page loaded");
    // You can add more JavaScript functionality here
});
