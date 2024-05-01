window.onload = function() {
    changeContent('preparation');
};
function changeContent(contentType) {
    var contentArea = document.getElementById("contentArea");
    switch (contentType) {
        case 'Basic informations':
            contentArea.innerHTML = "<p>This is preparation content.</p>";
            break;
        case 'Hobbies and Personalities':
            contentArea.innerHTML = "<p>This is courses content.</p>";
            break;
        case 'Programming':
            contentArea.innerHTML = "<p>This is accommodation content.</p>";
            break;
        case 'Piano':
            contentArea.innerHTML = "<p>f</p>";
            break;
        case 'Basketball':
            contentArea.innerHTML = "<p>g</p>";
            break;
        case 'Why Project':
            contentArea.innerHTML = "<p>h</p>";
            break;
        case 'Post-secondary':
            contentArea.innerHTML = "<p>My post-secondary</p>";
            break;
        case 'UBC':
            contentArea.innerHTML = "<p>UBC</p>";
            break;
        case 'UofA':
            contentArea.innerHTML= "<p>UofA</p>";
            break;
        case 'World':
            contentArea.innerHTML = "<p>World</p>";
            break;

        

        }
}