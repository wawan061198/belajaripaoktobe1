
const questions = [
  { q: "1. Energi digunakan untuk ...", a: "Melakukan usaha" },
  { q: "2. Matahari adalah sumber energi ...", a: "Panas dan cahaya" },
  { q: "3. Energi tidak dapat ...", a: "Diciptakan dan dimusnahkan" },
  { q: "4. Benda yang bergerak memiliki energi ...", a: "Kinetik" },
  { q: "5. Energi kimia tersimpan dalam ...", a: "Makanan" },
  { q: "6. Energi panas dapat dihasilkan oleh ...", a: "Gesekan" },
  { q: "7. Sumber energi listrik di rumah adalah ...", a: "PLN" },
  { q: "8. Lampu menyala karena energi ...", a: "Listrik" },
  { q: "9. Contoh energi terbarukan adalah ...", a: "Matahari" },
  { q: "10. Energi gerak dimiliki oleh ...", a: "Benda yang bergerak" },
  { q: "11. Bunyi membutuhkan ... untuk merambat.", a: "Medium" },
  { q: "12. Energi dapat ... bentuk.", a: "Berubah" },
  { q: "13. Kompor gas menghasilkan energi ...", a: "Panas" },
  { q: "14. Baterai menyimpan energi ...", a: "Kimia" },
  { q: "15. Manusia membutuhkan energi untuk ...", a: "Beraktivitas" }
];

const container = document.getElementById("quiz-container");
questions.forEach((item, index) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${item.q}</p><input type="text" id="answer${index}" />`;
  container.appendChild(div);
});

function checkAnswers() {
  let correct = 0;
  questions.forEach((item, index) => {
    const userAnswer = document.getElementById("answer" + index).value.trim().toLowerCase();
    if (userAnswer === item.a.toLowerCase()) correct++;
  });
  document.getElementById("result").innerText = `Kamu menjawab benar ${correct} dari 15 soal.`;
}
