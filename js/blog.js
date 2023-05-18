var blogTitle;
var blogDescription;
var blogContent;

window.onload = function () {

    // Send Request

    fetch('https://localhost:7252/api/Blog/Get/1006')
        .then(response => response.json())
        .then(data => {
            // API'den dönen veriyi alırken yapmak istediğiniz işlemleri burada gerçekleştirin
            blogTitle = document.getElementById("blog-title");
            blogDescription = document.getElementById("blog-description");
            blogContent = document.getElementById("blog-content");

            blogTitle.textContent = data.title;
            blogDescription.textContent = data.description;

            // atob() is for decode BASE64 to raw string
            // use innerHTML function to inject data
            blogContent.innerHTML = atob(data.text);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}