var blogs = [
    {
        title: "Getting Started with TypeScript",
        date: "October 13, 2025",
        description: "A beginner-friendly guide to TypeScript and why you should learn it.",
        image: "./images/ts-guide.png",
        imageAlt: "TypeScript Guide",
        slug: "getting-started-with-typescript"
    },
    {
        title: "Building Projects with Vanilla JavaScript",
        date: "October 10, 2025",
        description: "Why starting with plain JavaScript makes you a better developer.",
        image: "./images/js-projects.png",
        imageAlt: "JavaScript Projects",
        slug: "building-projects-with-vanilla-js"
    }
];
// DOM manipulation
var blogContainer = document.getElementById("blog-container");
if (blogContainer) {
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement("div");
        blogDiv.className = "blog-post";
        var title = document.createElement("h2");
        var link = document.createElement("a");
        link.href = "blogs/".concat(blog.slug, ".html");
        link.textContent = blog.title;
        title.appendChild(link);
        var date = document.createElement("p");
        date.className = "blog-date";
        date.textContent = blog.date;
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        var desc = document.createElement("p");
        desc.textContent = blog.description;
        blogDiv.appendChild(title);
        blogDiv.appendChild(date);
        blogDiv.appendChild(image);
        blogDiv.appendChild(desc);
        blogContainer.appendChild(blogDiv);
    });
}
