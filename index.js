//perulangan if else
console.log(`IF ELSE`);
const age = 18;
if (age < 17) {
  console.log(
    age +
      " tahun Maaf Umur anda belum cukup untuk menonton bioskop tayangan ini"
  );
} else {
  console.log(age + " tahun Silakan masuk");
}

//perulangan nested if
console.log(`NESTED IF`);
const babyGrowth = 1;
if (babyGrowth >= 4) {
  console.log(
    babyGrowth + "tahun Menceritakan kembali kisah yang dibaca atau didengar"
  );
} else if (babyGrowth >= 3) {
  console.log(babyGrowth + "tahun Menyebutkan jenis warna");
} else if (babyGrowth >= 2) {
  console.log(babyGrowth + "Tahun Mengucapkan nama");
} else if (babyGrowth >= 1) {
  console.log(babyGrowth + " Tahun Berpindah posisi dari berbaring lalu duduk");
} else {
  console.log(babyGrowth + "tahun Hanya bisa disusui");
}

//perulangan for
console.log(`FOR STATMENT`);
for (var child = 0; child <= 9; child++) {
  console.log("Anak ke -", child);
}

//while
console.log(`WHILE`);
let absen = 1;
while (absen <= 10) {
  if (absen % 2 !== 0) {
    console.log("Absen ke -", absen);
  }
  absen++;
}

// do while
console.log(`DO WHILE`);
let count = 1;
do {
  console.log("Jumlah ke -", count);
  count++;
} while (count < 6);

//switch case
console.log(`SWITCH CASE`);
const AgeGroup = "dewasa";
switch (AgeGroup) {
  case "balita":
    console.log("menuju anak anak yang berusia antara 1 hingga 3 tahun.");
    break;
  case "anak-anak":
    console.log(
      "mencakup rentang usia dari balita hingga remaja, umumnya dari 1 hingga 18 tahun."
    );
    break;
  case "remaja":
    console.log(
      "merujuk kepada individu yang berusia antara 13 hingga 19 tahun."
    );
    break;
  case "dewasa":
    console.log(
      "mencakup orang yang telah mencapai usia di atas remaja hingga sekitar pertengahan tahun 60-an."
    );
    break;
  case "lansia":
    console.log("merujuk kepada orang-orang yang berusia 60 tahun ke atas.");
    break;
  default:
    console.log("Kelompok usia tidak valid.");
}

// function perkalian
console.log(`FUNCTION`);
function kali(angka1, angka2) {
  return angka1 * angka2;
}

var angka1 = 4;
var angka2 = 6;

var hasilPerkalian = kali(angka1, angka2);
console.log(angka1, angka2, "Hasil perkalian: " + hasilPerkalian);
