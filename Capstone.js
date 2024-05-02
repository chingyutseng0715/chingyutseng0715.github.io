window.onload = function() {
    changeContent('preparation');
};
function changeContent(contentType) {
    var contentArea = document.getElementById("contentArea");
    switch (contentType) {
        case 'Basic information':
            contentArea.innerHTML = contentArea.innerHTML = `
            <div class="BI"><h2>Basic information</h2></div>
            <ul>
                <li>Name: Ching-yu Tseng/Eugene/曾井昱</li>
                <li>Things I love: Family, friends, piano, Japanese culture and programming</li>
                <li>My most cherished experience: the chance of coming to Canada and visiting Switzerland last year</li>
                <li>My upbringing: Born in Taiwan, and come to Canada at 12th grade</li>
                <li>My beliefs: Blieve that I can change my fate by working hard</li>
                <li>My strengths: Math, programming, piano</li>
                <li>My challenges: Applying for university, finishing Capstone, etc.</li>
            </ul>
            <br><br>
            <img src="Parachute.jpg" alt="Parachute" width="550" height="350">
        `;
        break;
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
        case 'Core':
            contentArea.innerHTML = "<p>Core Competency reflections</p>";
            break;

        }
}