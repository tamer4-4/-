let contetnTime = document.getElementById("contetn-time");
let contetnCity = document.getElementById("contetn-city");
let inputCity = document.getElementById("input1");
let submit = document.getElementById("submit");

contetnCity.innerHTML = " القاهرة ";
let valueInput;
function submitCity() {
  submit.addEventListener("click", () => {
    if (inputCity.value == "") {
      return alert("الرجاء ادخال اسم المحافظة ");
    }

     valueInput = inputCity.value;
    contetnCity.innerHTML = valueInput;
    inputCity.value = " ";

    GetTimePray(valueInput);
  });
}

submitCity();

function GetTimePray(valueInput) {
  document.getElementById("content-pray").innerHTML = " ";
  let params = {
    address: `${valueInput},Egypt`,
    method: 5,
  };
  axios
    .get("https://api.aladhan.com/v1/timingsByAddress", {
      params: params
    })
    .then((response) => {
      let timeings = response.data.data.timings;     
      let readable = response.data.data.date.readable;
      let weekday = response.data.data.date.hijri.weekday.ar;
      let date = weekday + " " + readable;
      const desiredPrayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

 
      // تغير التاريخ 
      contetnTime.innerHTML = date;

     //  object   جديد لتحويل الاسماء اللى عربى من الاوبجكت اللى جاى من الAPi 
      const prayerNamesArabic = {
        Fajr: "الفجر",
        Dhuhr: "الظهر",
        Asr: "العصر",
        Maghrib: "المغرب",
        Isha: "العشاء",
      };
       
      for (const prayerNameEnglish of desiredPrayers) {
        let prayerNameArabic = prayerNamesArabic[prayerNameEnglish]; 
        let timePray = timeings[prayerNameEnglish]; // بتجيب مواقيت الصلاة 
        document.getElementById("content-pray").innerHTML += `
    <div class="name-time">
        <h2 id="name-pray">${prayerNameArabic}</h2>
        <p id="time-pray">${timePray}</p>
      </div>
  
  `;
      }
    });


         //  const filteredTimings = Object.keys(timeings).filter((e)=> {
      //   return  desiredPrayers.includes(e)

      // }).reduce((acc , ele)=>{

      //         acc[ele] = timeings[ele]
      //        return acc

      //  },{})
      
}
GetTimePray("القاهرة")