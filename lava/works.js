document.addEventListener('DOMContentLoaded', () => {
  // ⭐ STAR RATING SYSTEM (localStorage)
  const starGroups = document.querySelectorAll('.stars');

  starGroups.forEach(group => {
    const id = group.getAttribute('data-id');
    const stars = group.querySelectorAll('.star');

    // загрузка сохранённого рейтинга
    const savedRating = parseInt(localStorage.getItem(id) || '0', 10);

    if (savedRating > 0) {
      stars.forEach((star, index) => {
        if (index < savedRating) {
          star.classList.add('selected');
        }
      });
    }

    // клик по звезде
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        const rating = index + 1;

        // визуально обновляем
        stars.forEach((s, i) => {
          s.classList.toggle('selected', i < rating);
        });

        // сохраняем в localStorage
        localStorage.setItem(id, rating);
      });
    });
  });

  // 🎮 LITERARY QUIZ
  const quizData = [
    {
      question: "Who wrote “Қара сөздер” (The Book of Words)?",
      answers: ["Abai Kunanbayev", "Haruki Murakami", "Leo Tolstoy"],
      correct: 0
    },
    {
      question: "Which novel includes the character Kafka Tamura?",
      answers: ["Kafka on the Shore", "1Q84", "The Wind-Up Bird Chronicle"],
      correct: 0
    },
    {
      question: "What theme is central to Abai’s philosophy?",
      answers: ["Wealth and Power", "Knowledge and Morality", "Dreams and Fate"],
      correct: 1
    },
    {
      question: "Murakami often blends which two genres?",
      answers: ["Surrealism and Realism", "Romance and War", "Drama and Comedy"],
      correct: 0
    }
  ];

  const questionText = document.getElementById('question-text');
  const answerButtons = document.getElementById('answer-buttons');
  const nextBtn = document.getElementById('next-btn');
  const resultDiv = document.getElementById('result');

  if (!questionText || !answerButtons || !nextBtn || !resultDiv) {
    // тихий выход, если викторина не на этой странице
    return;
  }

  let currentQuestion = 0;
  let score = 0;

  function showQuestion() {
    nextBtn.style.display = "none";
    resultDiv.textContent = "";
    const q = quizData[currentQuestion];
    questionText.textContent = q.question;
    answerButtons.innerHTML = "";

    q.answers.forEach((a, index) => {
      const btn = document.createElement('button');
      btn.classList.add('btn', 'btn-outline-light');
      btn.textContent = a;
      btn.onclick = () => checkAnswer(index);
      answerButtons.appendChild(btn);
    });
  }

  function checkAnswer(index) {
    const q = quizData[currentQuestion];
    if (index === q.correct) {
      score++;
      resultDiv.textContent = "✅ Correct!";
      resultDiv.style.color = "lightgreen";
    } else {
      resultDiv.textContent = "❌ Wrong!";
      resultDiv.style.color = "red";
    }
    nextBtn.style.display = "block";
  }

  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      questionText.textContent = "Quiz Completed!";
      answerButtons.innerHTML = "";
      nextBtn.style.display = "none";
      resultDiv.textContent = `Your score: ${score}/${quizData.length}`;
      resultDiv.style.color = "gold";
    }
  });

  showQuestion();
});
