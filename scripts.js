function setTheme(mode) {
  localStorage.setItem("theme", mode);
  applyTheme();
}

function applyTheme() {
  const userTheme = localStorage.getItem("theme") || "system";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = userTheme === "system" ? (prefersDark ? "dark" : "light") : userTheme;
  document.documentElement.setAttribute("data-theme", theme);
}

function handleThemeChange(value) {
  setTheme(value);
}


// Jalankan saat pertama kali
applyTheme();

const themeSelect = document.getElementById("theme-select");
if (themeSelect) {
  const savedTheme = localStorage.getItem("theme") || "system";
  themeSelect.value = savedTheme;
}

// Fitur Checklist Tugas
function simpanChecklist() {
  const checkboxes = document.querySelectorAll("#tugasList input[type='checkbox']");
  const status = Array.from(checkboxes).map(checkbox => checkbox.checked);
  localStorage.setItem("tugasChecklist", JSON.stringify(status));
}

function muatChecklist() {
  const status = JSON.parse(localStorage.getItem("tugasChecklist")) || [];
  const checkboxes = document.querySelectorAll("#tugasList input[type='checkbox']");
  checkboxes.forEach((checkbox, index) => {
    checkbox.checked = status[index] || false;
  });
}

if (document.getElementById("tugasList")) {
  window.addEventListener("load", muatChecklist);
}


// Modal Galeri
function bukaModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerText = img.alt;
}

function tutupModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}


const soalList = [
  {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
    {
    question: "Apa fungsi tag <head> dalam HTML?",
    options: [
      "Menampilkan isi utama halaman", //0
      "Tempat skrip dan metadata halaman", //1
      "Menampilkan gambar", //2
      "Tempat input pengguna" //3
    ],
    correct: 1,  // Jawaban yang Benar adalah 1
  },
  // Tambahkan 9 Soal dibawah ini:
  
];

let current = 0;
let score = 0;

// Menampilkan soal
function loadQuestion() {
  const soal = soalList[current];
  document.getElementById("question-number").textContent = `Soal ${current + 1} dari ${soalList.length}`;
  document.getElementById("question").textContent = soal.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  soal.options.forEach((opt, idx) => {
    optionsContainer.innerHTML += `
      <label><input type="radio" name="quiz" value="${idx}" /> ${opt}</label>
    `;
  });

  document.getElementById("result").textContent = "";
}

// Cek jawaban dan lanjut
function nextQuestion() {
  const selected = document.querySelector('input[name="quiz"]:checked');
  const result = document.getElementById("result");

  if (!selected) {
    result.textContent = "❗ Silakan pilih salah satu jawaban.";
    result.style.color = "orange";
    return;
  }

  const jawaban = parseInt(selected.value);
  if (jawaban === soalList[current].correct) {
    score++;
  }

  current++;

  if (current < soalList.length) {
    loadQuestion();
  } else {
    tampilkanSkor();
  }
}

// Menampilkan skor akhir
function tampilkanSkor() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>🎉 Kuis Selesai!</h2>
    <p>Nilai Anda: <strong>${score} / ${soalList.length}</strong></p>
    <p>Persentase: <strong>${Math.round((score / soalList.length) * 100)}%</strong></p>
    <button onclick="location.reload()">Ulangi Kuis</button>
  `;
}

// Jalankan pertama kali
if (document.querySelector("#question")) {
  loadQuestion();
}

