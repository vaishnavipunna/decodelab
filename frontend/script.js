console.log("JavaScript Loaded");

// Theme Toggle
  document.getElementById('themeToggle').onclick = ()=>document.body.classList.toggle('dark');

  // Movies Data
//   const MOVIES = [
//     {id:1,title:'Iron Man',img:'https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man-infinity-war.webp',desc:'The genius billionaire Tony Stark becomes Iron Man.'},
//     {id:2,title:'Avengers: Endgame',img:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',desc:'The Avengers assemble for their biggest battle.'},
//     {id:3,title:'Black Panther',img:'https://m.media-amazon.com/images/I/81QMYs0LcLL._UF1000,1000_QL80_.jpg',desc:'T’Challa returns as Black Panther to defend Wakanda.'},
//     {id:4,title:'Spider-Man: No Way Home',img:'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',desc:'Spider-Man faces multiverse threats'},
//     {id:5,title:'Doctor Strange',img:'https://images-cdn.ubuy.co.in/665896547feb56370858cb22-doctor-strange-dvd-disney-action.jpg',desc:'A world-famous neurosurgeon loses the use of his hands in a horrific car accident. '},
//     {id:6,title:'Thor: Ragnarok',img:'https://m.media-amazon.com/images/I/91+NY2WOP8L._UF1000,1000_QL80_.jpg',desc:'Norse god of thunder, storms, strength, and the protection of humankind'},
//     {id:7,title:'Shang-Chi and the Legend of the Ten Rings',img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKL61IZLRPaJwrToED03LNDy64vTMHhFCbbknO8BIwOLalnywr1Whfw8yra_ZAv7cJZVZSaw',desc:'The Ten Rings are a set of ten hung gar iron rings of unknown ancient origin, that provide the user a series of mystical powers.'},
//     {id:8,title:'Avengers: Infinity War',img:'https://m.media-amazon.com/images/S/pv-target-images/3307ca0df325da35692128a6703a4bff5a5cf8c60bb719f221cadd6c03834358.jpg',desc:'The Avengers and their allies face their most powerful enemy yet, the cosmic warlord Thanos, who seeks to collect all six Infinity Stones to wipe out half of all life in the universe.'},
//     {id:9,title:'Ant-Man and the Wasp: Quantumania',img:'https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg',desc:'Scott Lang, Hope van Dyne, Hank Pym, Janet van Dyne, and Scotts daughter Cassie are accidentally transported to the Quantum Realm.'},
//     {id:10,title:'The Incredible Hulk',img:'https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg',desc:'An immense, green-skinned, hulking brute, possessing a limitless degree of physical strength.'},
//     {id:11,title:'Spider-Man: Far from Home',img:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',desc:'The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe.'},
//     {id:12,title:'Deadpool & Wolverine',img:'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/250px-Deadpool_%26_Wolverine_poster.jpg',desc:'Deadpool works with a reluctant Wolverine from another universe to stop the Time Variance Authority (TVA) from destroying his own universe.'},
//     {id:13,title:'Guardians of the Galaxy Vol. 2',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ebekjY7d5iawT4n8VKacuVH73ojWZCT0bA&s',desc:'A team of intergalactic mercenaries who primarily defend the Andromeda galaxy.'},
//     {id:14,title:'Avengers: Age of Ultron',img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5HI3nlN9yhLTTOn8qXJzXK6sLnW5PrLKXohQO6UY27lz7IYLQsR70-yrN8XZe1LfyVo1X',desc:'A highly intelligent self-aware artificial intelligence in a robot body who develops a god complex and a grudge against his creator Hank Pym.'},
//     {id:15,title:'Deadpool',img:'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png',desc:'Can heal wounds very quickly and regenerate severed limbs and destroyed internal organs.'},
//   ];

let MOVIES = [];

const API_URL = "http://127.0.0.1:5000";

async function loadMovies() {
  try {

    console.log("Fetching movies...");

    const response = await fetch(
      "http://127.0.0.1:5000/movies"
    );

    console.log("Response Status:", response.status);

    MOVIES = await response.json();

    console.log("Movies Loaded:", MOVIES);
    console.log("Movies Count:", MOVIES.length);

    renderMovies();          // IMPORTANT
    populateMovieDropdown(); // IMPORTANT

  } catch (error) {

    console.error(error);

  }
}

  // Movies grid (all movies)

  const POPULAR_MOVIES = [
  {id:1,title:'Iron Man',img:'https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man-infinity-war.webp',desc:'The genius billionaire Tony Stark becomes Iron Man.'},
  {id:2,title:'Avengers: Endgame',img:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',desc:'The Avengers assemble for their biggest battle.'},
  {id:3,title:'Black Panther',img:'https://m.media-amazon.com/images/I/81QMYs0LcLL._UF1000,1000_QL80_.jpg',desc:'T’Challa returns as Black Panther to defend Wakanda.'},
  {id:4,title:'Spider-Man: No Way Home',img:'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',desc:'Spider-Man faces multiverse threats'},
  {id:5,title:'Doctor Strange',img:'https://images-cdn.ubuy.co.in/665896547feb56370858cb22-doctor-strange-dvd-disney-action.jpg',desc:'A world-famous neurosurgeon loses the use of his hands in a horrific car accident.'}, 
  {id:6,title:'Thor: Ragnarok',img:'https://m.media-amazon.com/images/I/91+NY2WOP8L._UF1000,1000_QL80_.jpg',desc:'Norse god of thunder, storms, strength, and the protection of humankind'},
  {id:7,title:'Shang-Chi and the Legend of the Ten Rings',img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKL61IZLRPaJwrToED03LNDy64vTMHhFCbbknO8BIwOLalnywr1Whfw8yra_ZAv7cJZVZSaw',desc:'The Ten Rings are a set of ten hung gar iron rings of unknown ancient origin, that provide the user a series of mystical powers.'},
  {id:8,title:'Avengers: Infinity War',img:'https://m.media-amazon.com/images/S/pv-target-images/3307ca0df325da35692128a6703a4bff5a5cf8c60bb719f221cadd6c03834358.jpg',desc:'The Avengers and their allies face their most powerful enemy yet, the cosmic warlord Thanos, who seeks to collect all six Infinity Stones to wipe out half of all life in the universe.'},
  {id:9,title:'Ant-Man and the Wasp: Quantumania',img:'https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg',desc:'Scott Lang, Hope van Dyne, Hank Pym, Janet van Dyne, and Scotts daughter Cassie are accidentally transported to the Quantum Realm.'},
  {id:10,title:'The Incredible Hulk',img:'https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg',desc:'An immense, green-skinned, hulking brute, possessing a limitless degree of physical strength.'},
  {id:11,title:'Spider-Man: Far from Home',img:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',desc:'The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe.'},
  {id:12,title:'Deadpool & Wolverine',img:'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/250px-Deadpool_%26_Wolverine_poster.jpg',desc:'Deadpool works with a reluctant Wolverine from another universe to stop the Time Variance Authority (TVA) from destroying his own universe.'},
  {id:13,title:'Guardians of the Galaxy Vol. 2',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ebekjY7d5iawT4n8VKacuVH73ojWZCT0bA&s',desc:'A team of intergalactic mercenaries who primarily defend the Andromeda galaxy.'},
  {id:14,title:'Avengers: Age of Ultron',img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5HI3nlN9yhLTTOn8qXJzXK6sLnW5PrLKXohQO6UY27lz7IYLQsR70-yrN8XZe1LfyVo1X',desc:'A highly intelligent self-aware artificial intelligence in a robot body who develops a god complex and a grudge against his creator Hank Pym.'},
  {id:15,title:'Deadpool',img:'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png',desc:'Can heal wounds very quickly and regenerate severed limbs and destroyed internal organs.'},
];


// Slideshow (only featured movies)
const FEATURED_MOVIES = [
  POPULAR_MOVIES[0], // Iron Man
  POPULAR_MOVIES[1], // Endgame
  POPULAR_MOVIES[2], // Black Panther
  POPULAR_MOVIES[3], // Spider-Man: No Way Home
  POPULAR_MOVIES[6], // Doctor Strange
];


  // Render Movies
 const moviesGrid = document.getElementById('moviesGrid');

function renderMovies(){

  console.log("Rendering Movies");
  console.log(moviesGrid);
  console.log(MOVIES);

  moviesGrid.innerHTML = MOVIES.map(m=>`
    
    <div class="movie-card">
      <img src="${m.img}" alt="${m.title}">
      <div class="movie-title">${m.title}</div>
      <div class="stars">
        ${Array.from({length:5}, (_,i)=>`<div class="star" onclick="rateMovie(${m.id},${i+1},this)">&#9733;</div>`).join('')}
      </div>
      <p style="font-size:.9rem;opacity:.85">${m.desc}</p>
    </div>
  `).join('');
}
  renderMovies();
  function rateMovie(id,rating,el){
    const stars=el.parentNode.querySelectorAll('.star');
    stars.forEach((s,i)=>s.classList.toggle('active',i<rating));
  }
  
    // Slideshow
  const slidesContainer = document.getElementById('slides');
  const dotsContainer = document.getElementById('dots');
  let currentSlide = 0;
  function initSlideshow(){
  slidesContainer.innerHTML = FEATURED_MOVIES.map(m=>`
    <div class="slide">
      <img src="${m.img}" alt="${m.title}">
      <div class="slide-info">
        <h3>${m.title}</h3>
        <p>${m.desc}</p>
      </div>
    </div>
  `).join('');

  dotsContainer.innerHTML = FEATURED_MOVIES.map((_,i)=>`<div class="dot ${i===0?'active':''}" onclick="gotoSlide(${i})"></div>`).join('');
  setInterval(nextSlide,5000);
}
  function nextSlide(){
    currentSlide =
    (currentSlide + 1) %
    FEATURED_MOVIES.length;

    updateSlide();
}
  function gotoSlide(i){currentSlide=i;updateSlide();}
  function updateSlide(){
    slidesContainer.style.transform=`translateX(-${currentSlide*100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===currentSlide));
  }
  initSlideshow();

  const recommendedGrid = document.getElementById('recommendedGrid');

function renderRecommendedMovies() {
  const feedbacks = getFeedback(); // get all feedbacks
  const ratingMap = {};
  POPULAR_MOVIES.forEach(m => ratingMap[m.id] = []);

  feedbacks.forEach(fb => {
    const movie = POPULAR_MOVIES.find(m => m.title === fb.movie);
    if (movie) ratingMap[movie.id].push(fb.rating || 0);
  });

  const moviesWithAvgRating = POPULAR_MOVIES.map(m => {
    const ratings = ratingMap[m.id];
    const avg = ratings.length ? ratings.reduce((a,b)=>a+b,0)/ratings.length : 0;
    return {...m, avgRating: avg};
  });

  const topMovies = moviesWithAvgRating.sort((a,b) => b.avgRating - a.avgRating).slice(0,1);

  recommendedGrid.innerHTML = topMovies.map(m=>`
  <div class="movies-grid">
  <!-- Avengers: Endgame -->
  <div class="movie-card">
    <img src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg" alt="Avengers Endgame">
    <p class="movie-title">Avengers: Endgame</p>
    <button class="btn" onclick="window.open('https://youtu.be/TcMBFSGVi1c','_blank')">▶ Watch Trailer</button>
  </div>

  <!-- Iron Man -->
  <div class="movie-card">
    <img src="https://images-cdn.ubuy.co.in/66c44a8253416647e77210f3-iron-man-dvd-disney-action.jpg" alt="Iron Man">
    <p class="movie-title">Iron Man</p>
    <button class="btn" onclick="window.open('https://youtu.be/8ugaeA-nMTc','_blank')">▶ Watch Trailer</button>
  </div>

  <!-- Spider-Man: No Way Home -->
  <div class="movie-card">
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg" alt="Spider-Man No Way Home">
    <p class="movie-title">Spider-Man: No Way Home</p>
    <button class="btn" onclick="window.open('https://youtu.be/JfVOs4VSpmA','_blank')">▶ Watch Trailer</button>
  </div>

  <!-- Doctor Strange in the Multiverse of Madness -->
  <div class="movie-card">
    <img src="https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" alt="Doctor Strange">
    <p class="movie-title">Doctor Strange in the Multiverse of Madness</p>
    <button class="btn" onclick="window.open('https://youtu.be/aWzlQ2N6qqg','_blank')">▶ Watch Trailer</button>
  </div>

  <!-- Black Panther -->
  <div class="movie-card">
    <img src="https://m.media-amazon.com/images/I/81QMYs0LcLL._UF1000,1000_QL80_.jpg" alt="Black Panther">
    <p class="movie-title">Black Panther</p>
    <button class="btn" onclick="window.open('https://youtu.be/xjDjIWPwcPU?feature=shared','_blank')">▶ Watch Trailer</button>
  </div>

  <!-- Captain Marvel -->
  <div class="movie-card">
    <img src="https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_.jpg" alt="Captain Marvel">
    <p class="movie-title">Captain Marvel</p>
    <button class="btn" onclick="window.open('https://youtu.be/Z1BCujX3pw8?feature=shared','_blank')">▶ Watch Trailer</button>
  </div>

  <!-- Captain America -->
  <div class="movie-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOLzHZwZwkRm0vMUKv9QakfsKk6gUBhWQFA&s" alt="Captain America">
    <p class="movie-title">Captain America</p>
    <button class="btn" onclick="window.open('https://youtu.be/qi5UTD7kEr0?feature=shared','_blank')">▶ Watch Trailer</button>
  </div>

  <!-- Thor Ragnarok -->
  <div class="movie-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB06zANAWkdMC2XZazOOJKxtCR7JvgTml-wQ&s" alt="Thor Ragnarok">
    <p class="movie-title">Thor Ragnarok</p>
    <button class="btn" onclick="window.open('https://youtu.be/ue80QwXMRHg?feature=shared','_blank')">▶ Watch Trailer</button>
  </div>

    <!-- Avengers: Age of Ultron -->
  <div class="movie-card">
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5HI3nlN9yhLTTOn8qXJzXK6sLnW5PrLKXohQO6UY27lz7IYLQsR70-yrN8XZe1LfyVo1X" alt="Avengers: Age of Ultron">
    <p class="movie-title">Avengers: Age of Ultron</p>
    <button class="btn" onclick="window.open('https://youtu.be/tmeOjFno6Do?feature=shared','_blank')">▶ Watch Trailer</button>
  </div>

    <!-- Avengers: Infinity War -->
  <div class="movie-card">
    <img src="https://m.media-amazon.com/images/S/pv-target-images/3307ca0df325da35692128a6703a4bff5a5cf8c60bb719f221cadd6c03834358.jpg" alt="Avengers: Infinity War">
    <p class="movie-title">Avengers: Infinity War</p>
    <button class="btn" onclick="window.open('https://youtu.be/6ZfuNTqbHE8?feature=shared','_blank')">▶ Watch Trailer</button>
  </div>
</div>
  

  `).join('');
}

renderRecommendedMovies();

  // Quiz
  const QUIZ=[{q:"Who is the first Avenger?",opts:["Iron Man","Captain America","Thor","Hulk"],ans:1},{q:"Wakanda is the home of which hero?",opts:["Black Panther","Doctor Strange","Scarlet Witch","Ant-Man"],ans:0},{q:"Which Infinity Stone does Vision have?",opts:["Mind","Time","Soul","Space"],ans:0}];
  let quizIndex=0, score=0;
  const quizCard=document.getElementById('quizCard');
  function renderQuiz(){
    if(quizIndex>=QUIZ.length){
      quizCard.innerHTML=`<h3>Quiz Completed! Your Score: ${score}/${QUIZ.length}</h3>
      <button class="btn" onclick="restartQuiz()">Restart Quiz</button>`; return;
    }
    const q=QUIZ[quizIndex];
    quizCard.innerHTML=`<div class="q">${q.q}</div>` + q.opts.map((o,i)=>
      `<div class="opt" onclick="selectOption(${i})">${o}</div>`).join('');
  }
  function selectOption(i){if(i===QUIZ[quizIndex].ans) score++; quizIndex++; renderQuiz();}
  function restartQuiz(){quizIndex=0; score=0; renderQuiz();}
  renderQuiz();

  // Feedback
  const fbList = document.getElementById('fb-list');
  const fbName = document.getElementById('name');
  const fbComment = document.getElementById('comment');
  const fbEmail = document.getElementById('email');
  const fbCategory = document.getElementById('category');
  const fbMovie = document.getElementById('fb-movie');
  let fbSelectedRating = 0;

  function populateMovieDropdown(){

    fbMovie.innerHTML =
    '<option value="">--Select Movie--</option>';

    MOVIES.forEach(m=>{

        const opt =
        document.createElement('option');

        opt.value = m.title;
        opt.textContent = m.title;

        fbMovie.appendChild(opt);

    });

}
  const fbStarsContainer = document.getElementById('fb-stars');
  fbStarsContainer.innerHTML = Array.from({length:5},(_,i)=>`<span class="star" data-star="${i+1}">&#9733;</span>`).join('');
  fbStarsContainer.querySelectorAll('.star').forEach(s=>{
    s.addEventListener('click',()=>{
      fbSelectedRating=parseInt(s.getAttribute('data-star')); 
      fbStarsContainer.querySelectorAll('.star').forEach(st=>st.classList.toggle('active',parseInt(st.getAttribute('data-star'))<=fbSelectedRating));
    });
  });

  function getFeedback(){return JSON.parse(localStorage.getItem('feedbacks')||'[]');}
  function saveFeedback(fb){localStorage.setItem('feedbacks',JSON.stringify(fb));}

  document.getElementById('submitFeedback').onclick = async () => {

    const name = fbName.value.trim();
    const comment = fbComment.value.trim();
    const category = fbCategory.value;
    const email = fbEmail.value.trim();
    const movie = fbMovie.value;

    if (!name || !comment || !movie) {
        alert("Please fill all required fields");
        return;
    }

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/feedback",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    movie,
                    rating: fbSelectedRating,
                    category,
                    comment
                })
            }
        );

        const result = await response.json();

        alert(result.message);

        await renderFeedback();


        fbName.value = "";
        fbComment.value = "";
        fbEmail.value = "";
        fbMovie.value = "";
        fbSelectedRating = 0;

        fbStarsContainer
            .querySelectorAll('.star')
            .forEach(s => s.classList.remove('active'));

    }
    catch (error) {

        console.error(error);

        alert("Failed to submit feedback");

    }
};

  async function renderFeedback() {

    try {

        const response =
            await fetch(
                "http://127.0.0.1:5000/feedback"
            );

        const arr =
            await response.json();

        if(!arr.length){

            fbList.innerHTML =
                '<div class="small">No feedback yet.</div>';

            return;
        }

        fbList.innerHTML =
            arr.reverse().map(f => `

            <div style="
                margin-bottom:12px;
                padding:10px;
                border-radius:10px;
                background:var(--chip);
            ">

                <b>${f.name}</b>

                <span class="small">
                    [${f.category} - ${f.movie}]
                    ${f.created_at}
                </span>

                <div class="stars">

                    ${Array.from(
                        {length:5},
                        (_,i)=>`
                        <span class="star"
                        style="
                        font-size:14px;
                        ${i<f.rating?'color:gold':''}
                        ">
                        ★
                        </span>`
                    ).join('')}

                </div>

                <p>${f.comment}</p>

                <small>
                    Email:
                    ${f.email}
                </small>

            </div>

        `).join('');

    }
    catch(error){

        console.error(
            "Feedback Load Error:",
            error
        );
    }
}
  

  // Scroll to top
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.id = 'scrollTop';
  scrollTopBtn.textContent = '↑';
  scrollTopBtn.style.cssText = `position:fixed; bottom:30px; right:30px; padding:12px 16px; font-size:18px; border:none; border-radius:50%; background:var(--accent); color:#fff; cursor:pointer; display:none; box-shadow:var(--shadow); z-index:999;`;
  document.body.appendChild(scrollTopBtn);
  window.onscroll=()=>scrollTopBtn.style.display=(document.body.scrollTop>300||document.documentElement.scrollTop>300)?'block':'none';
  scrollTopBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

  // Hero buttons navigation
  document.getElementById('btn-feature').onclick = ()=>location.href="#movies";
  document.getElementById('btn-write').onclick = ()=>location.href="#feedback";

  // Characters Section with all movies
  const CHARACTERS = [
    {name:"Iron Man", movies:[1,2,8,14]},
    {name:"Captain America", movies:[2,8,14]},
    {name:"Black Panther", movies:[3,2,8]},
    {name:"Spider-Man", movies:[4,2,8,11]},
    {name:"Deadpool",movies:[12,15]},
    {name:"Ant-Man",movies:[9,8,2]},
    {name:"Doctor Strange",movies:[5,2,8,4]},
    {name:"Thor",movies:[6,2,8,14]},
    {name:"Hulk",movies:[10,8,2,6,14]},
    {name:"Shang-Chi",movies:[7]},
    {name:"Thanos",movies:[2,8,14]},
    {name:"Wanda",movies:[2,8,14]},
    {name:"Natasha Romanoff",movies:[2,8,14]},
    {name:"Clint Barton",movies:[2,8,14]},
    {name:"Nick Fury",movies:[2,8,14,11]},
  ];

  const charactersGrid = document.getElementById('charactersGrid');
  const charModal = document.getElementById('charModal');
  const modalCharName = document.getElementById('modalCharName');
  const modalMoviesGrid = document.getElementById('modalMoviesGrid');

  function openCharModal(movieIds, name){
    modalCharName.textContent = name;
    const moviesArr = MOVIES.filter(m => movieIds.includes(m.id));
    modalMoviesGrid.innerHTML = moviesArr.map(m=>`
      <div class="movie-card">
        <img src="${m.img}" alt="${m.title}">
        <div class="movie-title">${m.title}</div>
        <p>${m.desc}</p>
      </div>
    `).join('');
    charModal.style.display = 'flex';
  }

  async function loadDashboard() {

    try {

        const response =
            await fetch(
                "http://127.0.0.1:5000/admin/stats"
            );

        const data =
            await response.json();

        document.getElementById(
            "totalMovies"
        ).textContent =
            data.total_movies;

        document.getElementById(
            "totalFeedback"
        ).textContent =
            data.total_feedback;

        document.getElementById(
            "avgRating"
        ).textContent =
            data.avg_rating + " ⭐";

    }
    catch(error){

        console.error(
            "Dashboard Error:",
            error
        );

    }

}

async function loadAdminFeedback() {

    try {

        const response =
            await fetch(
                "http://127.0.0.1:5000/feedback"
            );

        const feedbacks =
            await response.json();

        const tableBody =
            document.getElementById(
                "feedbackTableBody"
            );

        tableBody.innerHTML =
            feedbacks.map(f => `
                <tr>
                    <td>${f.id}</td>
                    <td>${f.name}</td>
                    <td>${f.movie}</td>
                    <td>${f.rating}</td>
                    <td>${f.comment}</td>
                    <td>
                        <button
                            class="delete-btn"
                            onclick="deleteFeedback(${f.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `).join("");

    }
    catch(error){

        console.error(error);

    }

}

async function deleteFeedback(id) {

    if(
        !confirm(
            "Delete this feedback?"
        )
    ) return;

    try {

        const response =
            await fetch(
                `http://127.0.0.1:5000/feedback/${id}`,
                {
                    method:"DELETE"
                }
            );

        const data =
            await response.json();

        alert(data.message);

        loadAdminFeedback();
        renderFeedback();
        loadDashboard();

    }
    catch(error){

        console.error(error);

    }

}

  function closeCharModal(){ charModal.style.display='none'; }

  charactersGrid.innerHTML = CHARACTERS.map(c=>`
    <div class="movie-card" onclick="openCharModal([${c.movies}], '${c.name}')">
      <div class="movie-title">${c.name}</div>
    </div>
  `).join('');


  const movieModal = document.getElementById('movieModal');
const modalTitle = document.getElementById('modalTitle');
const modalImg = document.getElementById('modalImg');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');

function openMovieModal(movieId) {
  const movie = POPULAR_MOVIES.find(m => m.id === movieId);
  if(movie){
    modalTitle.textContent = movie.title;
    modalImg.src = movie.img;
    modalDesc.textContent = movie.desc;
    movieModal.style.display = 'flex';
  }
}

closeModal.onclick = () => { movieModal.style.display = 'none'; }
window.onclick = (e) => { if(e.target === movieModal) movieModal.style.display = 'none'; }

loadMovies();
renderFeedback();
loadDashboard();
loadAdminFeedback();