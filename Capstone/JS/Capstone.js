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
            <img src="MEDIA/Photos/Parachute.jpg" alt="Parachute" width="550" height="350">
        `;
        break;
        case 'Programming':
            contentArea.innerHTML = `
            <div class="BI"><h2>Programming</h2></div>
            <p>I started cultivating my skills when I was in Grade10 when I
             first learned that I have a massive interest in programming. I studied Python, C, Javascript, HTML and several languages. Also using the knowledge that I learned to build an accounting book and website, and now 
             I’m building this new website to review my skills but also dive into these areas deeper.</p>
             <img src="MEDIA/Photos/Programming.png" alt="Parachute" width="550" height="350">
            `;
            break;
        case 'Piano':
            contentArea.innerHTML = `
            <div class="BI"><h2>Piano</h2></div>
            <p>I started to learn piano when I was only 4. On my 9th birthday, my aunt, who is a musician and a 
            professional opera singer (diva) introduced me to the pianist Franz Liszt. Who is now still one of my favourite composers. After 
            learning piano for 11 years, when I was in 10th grade, I considered myself to have enough skills to challenge the most difficult piano pieces in the world. Among Franz Liszt's most well-known series, Paganini. 
            I learned how to play La Campanella, La Chasse and Tremolo. It went out perfectly and did not face any huge obstacles when learning La Chasse and Tremolo. However, it took me over 10 months to learn because 
            the right hand must repeatedly jump more than one octave for most of the part in a remarkably short time with no rests, performers need to practise continuously until they have the muscle memory. In order to meet the deadline before 
            performing in front of my classmates, I extended my timeline from 1 hour to 2 hours per day, trying to increase the effectiveness. However, I found out that it didn’t work out as I supposed, I didn’t hit the balance between rest and work. I changed my schedule from 2 hours 
            to 2 and a half hours, because I added a 30 minute rest after the first hour. Though it still ended up taking me 10 months to finish the song, I can feel the massive improvement after I make the changes.
            </p>
            <a rel="nofollow noopener" href="https://www.instagram.com/tv/CfbQ6OEJoqV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/">Some of my pieces</a>
            `;
            break;
        case 'Basketball':
            contentArea.innerHTML = `
            <div class="BI"><h2>Basketball</h2></div>
            <p>I started playing basketball when I was 14, before playing basketball I was a very weak kid. I can’t even jump straight
             up over 30 cm from the floor. Because my friends are encouraging and everyone is trying to dunk on the basket, everyone is competing 
             to see who can jump higher everyday. I didn’t play much basketball as before, but now I can jump at a height of 305 centimetres, which is 5 centimetres away from the basket.</p>
             <br><br>
             <img src="MEDIA/Photos/luka.jpeg" alt="Luka Donciv" width="550" height="300"/>
            `;
            break;
        case 'Why Project':
            contentArea.innerHTML = `
            <div class="BI"><h2> What did I do? Why? What did I gain from it?</h2></div>
            <p>This website is my final product of the capstone. I chose to design this website for two reasons. </p>
            <ol>
            <li>Building a website makes me feel comfortable and passionate when I am doing the work.</li>
            <li>I decided to learn things related to computer science in university; in order to be 
            a well-rounded programmer, I want to strengthen my front-end skills.</li>
            </ol>
            <div class="BI"><h2>How It went/ What it made me think of</h2></div>
            <p>I confronted several problems, errors and obstacles in designing this website. I bought a book teaching 
            HTML and CSS from Indigo, but later got stuck because of not knowing how to code with Javascript. I built 
            several websites before, but I haven't used these skills for a long time. Building this website is just as 
            exciting as when I first learned programming and posting the website.</p>


            
            `;
            break;
        case 'UBC':
            contentArea.innerHTML = `
            <div class="BI"><h2>UofA (cs)</h2></div>
            <ol>
            <li>Applied through school official website</li>
            <li>Tuition fee: 33968.40 every year (Total of 135,873.60 for four years)</li>
            <li>Applied at late November to early December</li>
            <li>Why: Applied it as a backup</li>
            </ol>
            <a href="MEDIA/Photos/UofA.pdf"><img src="MEDIA/Photos/UofA.jpeg" width="450" height="300"></a>
            <div class="BI"><h2>UBC (cs)</h2></div>
            <ol>
            <li>Applied through school website (Login through EPBC)</li>
            <li>Tuition fee: approximately 43000 to 65000 depending on program. Tuition fees change annually.</li>
            <li>Applied at late November to early December (Early application)</li>
            <li>Why: located in Vancouver, milder weather for some physical issues, high reputation cafeteria, restaurants in campus, high quality post-secondary education</li>
            <li>Housing: year round, winter/summer session</li>
            </ol>
            <a href="MEDIA/Photos/UBC.pdf"><img src="MEDIA/Photos/UBC.jpeg" width="500" height="300"></a>
            `;
            break;
        case 'UofA':
            contentArea.innerHTML= `
            <div class="BI"><h2>UWaterloo (CS coop -> Mathematics coop)</h2></div>
            <ol>
            <li>Applied through OPAC</li>
            <li>Tuition fee:49000 to 75000, includes tuitions and incidental fees</li>
            <li>Applied at late November to early December (Early application)</li>
            <li>Why: Waterloo is well-known for its Mathematics faculty and invention 
            of the coop system. As a person who has a big interest in Math, UWaterloo is the rank 1 option in my mind. </li>
            <li>Housing: year round, winter/summer session</li>
            </ol>
            `;
            break;
        case 'World':
            contentArea.innerHTML = "<p>World</p>";
            break;
        case 'Core':
            contentArea.innerHTML = "<p>Core Competency reflections</p>";
            break;

        }
}