

const slider = document.querySelector('.outline');
let sliderWidth = slider.offsetWidth/3;
const sliderList = document.querySelector('.swiperwrapper');
let items = sliderList.querySelectorAll('.swiperslide').length - 2;
let count = 1;


function prevSlide() {
    if (count > 1) {
        count = count - 2;
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;
    } else if (count == 1) {
        count = items - 1;
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;
    }

}
function nextSlide() {
    if (count < items) {
        sliderList.style.left = '-' + count * sliderWidth + 'px';
        count++;

    } 
    else if (count == items) {
        sliderList.style.left = '0px';
        count = 1;

    }
}
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
// setInterval(function () {
//     nextSlide();
// }, 4000);




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) { slideIndex1 = 1 }
  if (n < 1) { slideIndex1 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1 - 1].style.display = "block";
}

function closeComparisonPopup() {
  location.reload();
}

function removeComparisonPopup() {
  closeComparisonPopup();
}

const products = [
  {
    name: "Samsung 1.5 Ton 5 Star Inverter Split AC ( Convertible 5-in-1 Cooling Mode, 2023 ModelWhite)",
    brand: " Samsung",
    image:
      "https://m.media-amazon.com/images/I/51XI2FLjJ4L._AC_UL480_FMwebp_QL65_.jpg",

    pricef: "42,500",
    pricea: "42,499",
    pricec: "45,490",
    flipkart:
      "https://www.flipkart.com/samsung-convertible-5-in-1-cooling-2023-model-1-5-ton-5-star-split-inverter-ac-white/p/itm8402ff1a817ea?pid=ACNGHRDQFGRZWRK2&lid=LSTACNGHRDQFGRZWRK23E0EE3&marketplace=FLIPKART&q=Air+Conditioners&store=j9e%2Fabm%2Fc54&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=201b7fa7-97bf-4d4b-8dfe-44558f4f0dda.ACNGHRDQFGRZWRK2.SEARCH&ppt=sp&ppn=sp&ssid=n8al7nba5c0000001689224092552&qH=4d224797ad2948df ",
    amazon:
      "https://www.amazon.in/Samsung-Inverter-Convertible-Anti-Bacteria-AR18CYNZABE/dp/B0BRQD9Y92/ref=sr_1_1?pd_rd_r=87dda701-6df2-435b-a151-5e8933049165&pd_rd_w=w2Xrv&pd_rd_wg=31aIK&pf_rd_p=0fbbbf4f-28a3-416c-9a01-83f0ac37db7a&pf_rd_r=MNKT0C08Z6H8KPTP3X6J&qid=1689224299&refinements=p_85%3A10440599031%2Cp_89%3ASamsung&rnid=3837712031&rps=1&s=kitchen&sr=1-1 ",
    croma:
      "https://www.croma.com/samsung-5-in-1-convertible-1-5-ton-5-star-inverter-split-ac-with-copper-anti-bacterial-filter-2023-model-copper-condenser-ar18cy5zawk-/p/268799 ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "Digital LED Panel Display",
      },
      {
        name: "Dehumidification, Inverter",
      },
      {
        name: "Remote Control, Timer",
      },
    ],
    selection2: [
      {
        name: "Turbo Mode, Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
      {
        name: "Auto Air Swing, Auto Restart",
      },
      {
        name: "Self Diagnosis, Memory Feature",
      },
    ],
    category: "AC",
  },
  {
    name: "Panasonic CS/CU-AU18ZKY5F 1.5 Ton 5 Star 2023 Inverter Split AC",
    brand: "panasonic ",

    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/b/j/y/-original-imagmxwtwz65b9hh.jpeg?q=70",

    pricef: "44,490",
    pricea: "44,490",
    pricec: "48,990",
    flipkart:
      "https://www.flipkart.com/panasonic-convertible-7-in-1-additional-ai-mode-cooling-2023-model-1-5-ton-5-star-split-inverter-4-way-swing-pm-0-1-air-purification-filter-ac-wi-fi-connect-white/p/itm86cc4ea6a661d?pid=ACNGHHH2YUCDY9AZ&lid=LSTACNGHHH2YUCDY9AZ1UBDVJ&marketplace=FLIPKART&q=Air+Conditioners&store=j9e%2Fabm%2Fc54&srno=s_2_44&otracker=search&otracker1=search&fm=Search&iid=c93fcd88-ff56-4b3c-bd6e-9b293e4b6c5e.ACNGHHH2YUCDY9AZ.SEARCH&ppt=sp&ppn=sp&qH=4d224797ad2948df ",
    amazon:
      "https://www.amazon.in/Panasonic-Convertible-additional-Purification-CU-NU18YKY5W/dp/B0BRJ1973T/ref=sr_1_3?pd_rd_r=87dda701-6df2-435b-a151-5e8933049165&pd_rd_w=w2Xrv&pd_rd_wg=31aIK&pf_rd_p=0fbbbf4f-28a3-416c-9a01-83f0ac37db7a&pf_rd_r=MNKT0C08Z6H8KPTP3X6J&qid=1689226031&refinements=p_85%3A10440599031%2Cp_89%3ABLUE+STAR%7CDaikin%7CLG%7CLloyd%7CPanasonic%7CVoltas%2Cp_72%3A1318476031&rnid=1318475031&rps=1&s=kitchen&sr=1-3 ",
    croma:
      "https://www.croma.com/panasonic-7-in-1-convertible-1-5-ton-5-star-inverter-split-smart-ac-with-amazon-alexa-and-google-assistant-support-2023-model-copper-condenser-cs-cu-au18zky5f-/p/267632 ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "1.5 Ton Capacity",
      },
      {
        name: "LED Panel Display",
      },
      {
        name: "636 CFM circulation",
      },
    ],
    selection2: [
      {
        name: "Inverter",
      },
      {
        name: "Remote Control, Timer",
      },
      {
        name: "Turbo Mode, Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
    ],
    category: "AC",
  },
  {
    name: "Lloyd GLS18I3LWSBA 1.5 Ton 5 Star 2023 Inverter Split AC",
    brand: "Lloyd ",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/o/q/d/-original-imagmgxyanshq6ph.jpeg?q=70",

    pricef: "39,990",
    pricea: "",
    pricec: "40,990",
    flipkart:
      "https://www.flipkart.com/lloyd-1-5-ton-5-star-split-inverter-ac-white/p/itmcba912275a7d5?pid=ACNGHTGZFZSTDZTH&lid=LSTACNGHTGZFZSTDZTHIENWRE&marketplace=FLIPKART&q=Air+Conditioners&store=j9e%2Fabm%2Fc54&srno=s_3_50&otracker=search&otracker1=search&fm=Search&iid=cd06548b-ca4c-4774-a326-d0ce8d076b0e.ACNGHTGZFZSTDZTH.SEARCH&ppt=sp&ppn=sp&qH=4d224797ad2948df ",
    amazon: " ",
    croma:
      "https://www.croma.com/lloyd-5-in-1-convertible-1-5-ton-5-star-inverter-split-smart-ac-with-rapid-cooling-function-copper-condenser-gls18i5fwrba-/p/271917 ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "1.5 Ton Capacity",
      },
      {
        name: "LED Panel Display",
      },
      {
        name: "Dehumidification, Inverter",
      },
    ],
    selection2: [
      {
        name: "Remote Control, Timer",
      },
      {
        name: "Turbo Mode, Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
      {
        name: "Auto Air Swing, Auto Restart",
      },
    ],
    category: "AC",
  },
  {
    name: "Panasonic CS/CU-TU18ZKYF 1.5 Ton 5 Star Inverter Split AC",
    brand: "Panasonic ",
    image:
      "https://m.media-amazon.com/images/I/61ZzcguzB1L._AC_UL480_QL65_.jpg",

    pricef: "43,990",
    pricea: "44,490 ",
    pricec: "48,990",
    flipkart:
      "https://www.flipkart.com/panasonic-1-5-ton-5-star-split-inverter-ac-wi-fi-connect-white/p/itmf721189c2f0f3?pid=ACNGGX9SRUTPUXZB&lid=LSTACNGGX9SRUTPUXZBSX0ARK&marketplace=FLIPKART&q=Air+Conditioners&store=j9e%2Fabm%2Fc54&srno=s_1_18&otracker=search&otracker1=search&fm=Search&iid=14a76be6-7d60-469b-a3de-a6b3fe9c233b.ACNGGX9SRUTPUXZB.SEARCH&ppt=sp&ppn=sp&qH=4d224797ad2948df ",
    amazon:
      "https://www.amazon.in/Panasonic-Convertible-additional-Purification-CU-NU18YKY5W/dp/B0BRJ1973T/ref=sr_1_3?pd_rd_r=87dda701-6df2-435b-a151-5e8933049165&pd_rd_w=w2Xrv&pd_rd_wg=31aIK&pf_rd_p=0fbbbf4f-28a3-416c-9a01-83f0ac37db7a&pf_rd_r=MNKT0C08Z6H8KPTP3X6J&qid=1689227089&refinements=p_85%3A10440599031%2Cp_89%3ABLUE+STAR%7CDaikin%7CLG%7CLloyd%7CPanasonic%7CVoltas%2Cp_72%3A1318476031&rnid=1318475031&rps=1&s=kitchen&sr=1-3 ",
    croma:
      "https://www.croma.com/panasonic-7-in-1-convertible-1-5-ton-5-star-inverter-split-smart-ac-with-amazon-alexa-and-google-assistant-support-2023-model-copper-condenser-cs-cu-au18zky5f-/p/267632 ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "1.5 Ton Capacity",
      },
      {
        name: "LED Panel Display",
      },
      {
        name: "636 CFM circulation",
      },
    ],
    selection2: [
      {
        name: "Inverter",
      },
      {
        name: "Remote Control, Timer",
      },
      {
        name: "Turbo Mode, Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
    ],
    category: "AC",
  },
  {
    name: "Samsung 2 Ton 3 Star Wi-fi Enabled Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter, 2023 Model",
    brand: " Samsung",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/air-conditioner-new/o/r/3/-original-imagjg73bcfrykkr.jpeg?q=70",

    pricef: "42,999",
    pricea: " --",
    pricec: " --",
    flipkart:
      "https://www.flipkart.com/samsung-convertible-2-ton-3-star-split-inverter-ac-white/p/itm00fcb447f80a2?pid=ACNGGXDFJEYCMAGF&lid=LSTACNGGXDFJEYCMAGF8MPMP1&marketplace=FLIPKART&q=Air+Conditioners&store=j9e%2Fabm%2Fc54&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=af060930-6fc0-46d0-9051-58fa1e65a410.ACNGGXDFJEYCMAGF.SEARCH&ppt=sp&ppn=sp&qH=4d224797ad2948df",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "1.5 Ton Capacity",
      },
      {
        name: "LED Panel Display",
      },
      {
        name: "Inverter",
      },
    ],
    selection2: [
      {
        name: "Remote Control, Timer",
      },
      {
        name: "Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
      {
        name: "Auto Air Swing, Auto Restart",
      },
    ],
    category: "AC",
  },
  {
    name: "Voltas 185V Vectra Eden 1.5 Ton 5 Star 2023 Inverter Split AC",
    brand: "Voltas ",
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681973528/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/271917_b943e9.png?tr=w-400",

    pricef: "",
    pricea: "",
    pricec: "43,490",
    flipkart: " ",
    amazon: " ",
    croma:
      " https://www.croma.com/voltas-vertis-5-in-1-convertible-1-5-ton-5-star-inverter-split-ac-with-4-way-swing-2023-model-copper-condenser-185v-vertis-emerald-marvel-/p/268337 ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "1.5 Ton Capacity",
      },
      {
        name: "Dehumidification, Inverter",
      },
      {
        name: "Remote Control, Timer",
      },
    ],
    selection2: [
      {
        name: "Turbo Mode, Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
      {
        name: "Auto Air Swing",
      },
      {
        name: "Night Glow Buttons",
      },
    ],
    category: "AC",
  },
  {
    name: "Voltas 183V Vertis Emerald 1.5 Ton 3 star 2022 Inverter Split AC",
    brand: "Voltas ",
    image:
      "https://m.media-amazon.com/images/I/41LlSc9YsnL._AC_UL480_QL65_.jpg",

    pricef: "32,790",
    pricea: "36,999",
    pricec: "-- ",
    flipkart:
      "https://www.flipkart.com/voltas-1-5-ton-3-star-split-inverter-ac-white/p/itm7301f4e668090?pid=ACNGHUNGZZKVQZPG&lid=LSTACNGHUNGZZKVQZPG0I1YQW&marketplace=FLIPKART&q=Air+Conditioners&store=j9e%2Fabm%2Fc54&srno=s_1_17&otracker=search&otracker1=search&fm=Search&iid=af060930-6fc0-46d0-9051-58fa1e65a410.ACNGHUNGZZKVQZPG.SEARCH&ppt=sp&ppn=sp&qH=4d224797ad2948df ",
    amazon:
      " https://www.amazon.in/Voltas-Anti-dust-183-Vectra-Elegant/dp/B0BQR2WMHX/ref=sr_1_26?pd_rd_r=87dda701-6df2-435b-a151-5e8933049165&pd_rd_w=w2Xrv&pd_rd_wg=31aIK&pf_rd_p=0fbbbf4f-28a3-416c-9a01-83f0ac37db7a&pf_rd_r=MNKT0C08Z6H8KPTP3X6J&qid=1689228170&refinements=p_85%3A10440599031%2Cp_89%3ABLUE+STAR%7CDaikin%7CLG%7CLloyd%7CPanasonic%7CSamsung%7CVoltas%2Cp_72%3A1318476031&rnid=3837712031&rps=1&s=kitchen&sr=1-26",
    croma: " ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "1.5 Ton Capacity",
      },
      {
        name: "Dehumidification, Inverter",
      },
      {
        name: "Remote Control, Timer",
      },
    ],
    selection2: [
      {
        name: "Turbo Mode, Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
      {
        name: "Auto Air Swing, Auto Restart",
      },
      {
        name: "Night Glow Buttons",
      },
    ],
    category: "AC",
  },
  {
    name: "Sony ILME-FX30 20.1MP Cinema Line Camera (Body Only)",

    brand: "SONY",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-isE7ftf1M-w103-h125/sony-ilme-fx30-20-1m.jpg",

    pricef: "1,80 ,000",
    pricea: "42,499",
    pricec: "45,490",

    flipkart:
      "https://l.smartprix.com/l?k=1271-0yB7y-sW_tanduluKxsrohrhAgTYBOr3Uh7FsuIcYTnacgDZPcnY33s3TaFFcArna3rc6siIcDT3thYTacFCBa3Z4cAsnBrAUcgYTnnrOhNcFcAYuaUhFciCrT6rFaYFsh-hDh8rHl4AGaribPHihmBYihkKmm7dofzvxVf~V1.hrhhaFhrhrhhacBrWahrhrBi5u66iUPPrhrFB5qIu9-unj5Cmg ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "26 MP Camera",
      },
      {
        name: "4K @ 120 fps UHD Video Recording",
      },
      {
        name: "APS-C (23.4 x 15.6 mm) BSI-CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 2.4M dots, Touch Screen Display",
      },
      {
        name: "1/8000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Nikon Z8 45.7MP Mirrorless Camera (Body Only)",
    brand: "Nikon",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iYjJX1tIl-w103-h125/nikon-z8-45-7mp-mirr.jpg",

    pricea: "3,44 ,000",
    pricef: "",
    pricec: "",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12ZvSs1HGUklAQwQVvnAY2Rvu~yhrhArnrysuhyihDRPw4-RzRxxh-hrhhaFhrhrhhacBrWahrhrBi5g5l4YPXChrFB5~kOAK0Aw2XC1 ",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "46 MP Camera",
      },
      {
        name: "8K @ 30 fps UHD Video Recording",
      },
      {
        name: "Full frame (35.9 x 23.9 mm) Stacked CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3.2 in, 2.1M dots, LCD, Touch Screen Display",
      },
      {
        name: "1/32000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Canon EOS R100 24MP Mirrorless Camera (Body Only)",
    brand: " Canon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-i9NEjiMxo-w103-h125/canon-eos-r100-24mp.jpg",

    pricef: "",
    pricea: "56,989",
    pricec: "59,999",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=1257xmZWIG3qjDXG50qHOOEvJ6hrhArnrysuhyihDRPwXSwm~0wh-hrhhaFhrhrhhacBrWahrhrBi5nb3FWss4hrFB5sDrB~oamFb25 ",
    croma:
      "https://l.smartprix.com/l?k=1257qBiG8YHHD878zYQHwV5Zn7hrhAA3snrh7ArusucasFc35PPcoHc5nBciFT3cArna3rc5XcH4cnncTauFciYWYAcXcB3sAaFFs3ch-hDoGHZolhrhhaFhrhrhhacBrWahrhrBi5nb3FWss4hrFB5HGlAQ1WDz2rS ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "24 MP Camera",
      },
      {
        name: "4K @ 24 fps UHD Video Recording",
      },
      {
        name: "APS-C (22.3 x 14.9 mm) CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 1M dots, LCD Display",
      },
      {
        name: "1/4000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Canon EOS 1500D 24.1MP DSLR Camera (EF-S 18-55mm IS II Lens)",
    brand: " Canon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-ioX3htv6I-w103-h125/canon-eos-1500d-24-1.jpg",

    pricef: "38,559",
    pricea: "38,989",
    pricec: "41,999",
    flipkart:
      "https://l.smartprix.com/l?k=12b5Kk.UXH3Tl~drj1SVe9yVphrhAgTYBOr3Uh7ArusucasFc54PPiciFT3cArna3rc6siIc5Xc44cnncYYcTauFh-hDh8PZZ5G4Aa6HiiihmBYihkKmmxjqJqoo.jqv_7hrhhaFhrhrhhacBrWahrhr5HP55GYuy4ahrFB5I71-DgH9q~se ",
    amazon:
      "https://l.smartprix.com/l?k=1257xmZtZkyzXwZeQR7m_Ri68yhrhArnrysuhyihDRPGReHz-HZh-hrhhaFhrhrhhacBrWahrhr5HP55GYuy4ahrFB557Zz4SeszbYC ",
    croma:
      "https://l.smartprix.com/l?k=1257qBiX5yw-2wf.Wf4Xvgt-QWhrhAA3snrh7ArusucasFc54PPicoHc5nBciFT3cArna3rc5Xc44cnncTauFcoocZcDc5HclcnncFauFs3csBUYArTcYnrWacFUr6YTYyrUh3ch-hDobGlblhrhhaFhrhrhhacBrWahrhr5HP55GYuy4ahrFB54yJD9vBmCxPj ",
    selection1: [
      {
        name: "DSLR",
      },
      {
        name: "24.1 MP Camera",
      },
      {
        name: "1080p @ 30 fps FHD Video Recording",
      },
      {
        name: "22.3 x 14.9 mm , APS-C inch CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 920k dots, LCD Display",
      },
      {
        name: "1/4000 sec Max Shutter Speed",
      },
      {
        name: "35x Zoom, f/3.5-f/5.6 Aperture Lens",
      },
      {
        name: "Wifi, Hdmi",
      },
    ],
  },

  {
    name: "Sony a7 IV 33MP Mirrorless Camera",
    brand: " SONY ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iAJlJf4ri-w103-h125/sony-a7-iv-33mp-mirr.jpg",

    pricea: "2,18 ,000",
    pricef: "2,13,490",
    pricec: "",
    flipkart:
      " https://l.smartprix.com/l?k=1271-0yB7yVJfDurSRVAN2p.n_hrhAgTYBOr3Uh7FsuIcrTBtrcYTAacGnHcgCTTcg3rnacnY33s3TaFFcArna3rc6siIcgarUC3hNcaIacrgcHOcns2Yac3aAs3ihNh-hDh8g4Hr6Hir4bgHihmBYihkKmm7RVp.E.VefEEvhrhhaFhrhrhhacBrWahrhrBi5GyCblIOOhrFB52Xo3jj-6DtAW",
    amazon:
      "https://l.smartprix.com/l?k=12ZvSs1HpS4AkdwNFDAk.~rfNnIhrhArnrysuhyihDRPleRbSXGbh-hrhhaFhrhrhhacBrWahrhrBi5GyCblIOOhrFB5AbJrgqPiPdG~ ",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "33 MP Camera",
      },
      {
        name: "4K @ 60 fps UHD Video Recording",
      },
      {
        name: "Full frame (35.6 x 23.8 mm) BSI-CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 1M dots, Touch Screen Display",
      },
      {
        name: "1/8000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },

  {
    name: "Sony ALPHA ILCE-7M2K Mirrorless Camera (Body with SEL28-70 Lens)",
    brand: " SONY ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iAgF6vP9A-w103-h125/sony-alpha-ilce-7m2k.jpg",

    pricef: "77,990",
    pricea: "",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12b5Kk.UXHlzn8Ex7pPf8NXm.hrhAgTYBOr3Uh7FsuIcrTBtrcgCTTcg3rnacYTAacGnoOc6NcYu4cnY33s3TaFFcArna3rc6siIcoXcGPcnncTauFh-hDh8loiglHiAbXggghmBYihkKmmxb~.1dVz~peX-hrhhaFhrhrhhacBrWahrhr5HP5oYgP6DHhrFB55XlemF3OD~rk ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "24.3 MP Camera",
      },
      {
        name: "1080p FHD Video Recording",
      },
      {
        name: "35.8 x 23.9 mm, FullFrame inch CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 1.2M dots, LCD Display",
      },
      {
        name: "1/8000 sec Max Shutter Speed",
      },
      {
        name: "2x Zoom, f/3.5-f/5.6 Aperture Lens",
      },
      {
        name: "Wifi, Hdmi",
      },
    ],
  },
  {
    name: "Canon EOS R100 24MP Mirrorless Camera with RF-S18-45mm F/4.5-6.3 IS STM Lens",
    brand: " Canon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-ip8oX1xwH-w420-h420/canon-eos-r100-24mp.webp",

    pricef: "",
    pricea: "56,989",
    pricec: "59,999",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=1257xmZWIG3qjDXG50qHOOEvJ6hrhArnrysuhyihDRPwXSwm~0wh-hrhhaFhrhrhhacBrWahrhrBi5nb3FWss4hrFB5sDrB~oamFb25 ",
    croma:
      "https://l.smartprix.com/l?k=1257qBiG8YHHD878zYQHwV5Zn7hrhAA3snrh7ArusucasFc35PPcoHc5nBciFT3cArna3rc5XcH4cnncTauFciYWYAcXcB3sAaFFs3ch-hDoGHZolhrhhaFhrhrhhacBrWahrhrBi5nb3FWss4hrFB5HGlAQ1WDz2rS ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "24 MP Camera",
      },
      {
        name: "4K @ 30 fps UHD Video Recording",
      },
      {
        name: "APS-C (22.3 x 14.9 mm) CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 162k dots, LCD, Touch Screen Display",
      },
      {
        name: "1/4000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Canon EOS 3000D DSLR Camera (EF-S 18-55mm kit lens)",
    brand: " Canon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iBjdPISi9-w103-h125/canon-eos-3000d-dslr.jpg",

    pricef: "28,499",
    pricea: "33,490",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12b5Kk.UXHlQdO6zngGNk14WHhrhAgTYBOr3Uh7ArusucasFcZPPPiciFT3cArna3rc5c6siIc5Xc44cnncTauFh-hDh8bgbb4garlG6AohmBYihkwjpxZKS-Ev1qpdvdhrhhaFhrhrhhacBrWahrhr5HP542B5aaghrFB5g_AFlxf5qD9P ",
    amazon:
      " https://l.smartprix.com/l?k=1257xmZtZkITbz3R9xWdTglIbbhrhArnrysuhyihDRPGRvJfb_0h-hrhhaFhrhrhhacBrWahrhr5HP542B5aaghrFB5GwgrwKpU2yQ7",
    croma: " ",
    selection1: [
      {
        name: "DSLR",
      },
      {
        name: "18 MP Camera",
      },
      {
        name: "1080p FHD Video Recording",
      },
      {
        name: "22.3 x 14.9mm CMOS (APS-C) Sensor",
      },
    ],
    selection2: [
      {
        name: "2.7 in, LCD Display",
      },
      {
        name: "1/4000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "View Finder",
      },
    ],
  },
  {
    name: "Sony ZV-E1 12MP Mirrorless Vlog Camera (Body Only)",
    brand: " SONY ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-i00wp5Cnq-w103-h125/sony-zv-e1-12mp-mirr.jpg",

    pricef: "61,489",
    pricea: "61,489",
    pricec: "",
    flipkart:
      " https://l.smartprix.com/l?k=12b5Kk.I1RWgeRKDBxN0oPV.AhrhAgTYBOr3Uh7FsuIcy2ca5PTcnY33s3TaFFcArna3rc6siIc5b4PcnncBs8a3cyssncTauFc2TsWh-hDh8aiPGA66blHHHHhmBYihkKmm7b7XEX1od7qS7hrhhaFhrhrhhacBrWahrhrBi5bPFN5Wn5hrFB5fHJnOBI41srG",
    amazon:
      "https://l.smartprix.com/l?k=1257xmZWIG3qRPrZTpJJmJIO9OhrhArnrysuhyihDRPlxl~GoXGh-hrhhaFhrhrhhacBrWahrhrBi5bPFN5Wn5hrFB5GJ4EmPEWVpZB ",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "12 MP Camera",
      },
      {
        name: "4K @ 60 fps UHD Video Recording",
      },
      {
        name: "Full frame (35.6 x 23.8 mm) BSI-CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 1M dots, LCD, Touch Screen Display",
      },
      {
        name: "1/8000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "GoPro Hero 11 27MP Sports and Action Camera",
    brand: " GoPro ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iUaNjbx5b-w103-h125/gopro-hero-11-27mp-s.jpg",

    pricef: "39,199",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Sports and Action Camera",
      },
      {
        name: "23 MP Camera",
      },
      {
        name: "5.3K @ 60 fps Video Recording",
      },
      {
        name: "20 CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "2.27 in, LCD, Touch Screen Display",
      },
      {
        name: "1/8 to 30 Seconds in Photo Mode, 1/30 to 1/480 Seconds in Video Mode Max Shutter Speed",
      },
      {
        name: "Wifi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Sony a7s III 12MP Mirrorless Camera",
    brand: "SONY",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-ik8c7cieY-w103-h125/sony-a7s-iii-12mp-mi.jpg",

    pricef: "",
    pricea: "4,36,543",
    pricec: "",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12ZvSs1HGUklAISp-nDRuwPaKJghrhArnrysuhyihDRPR_VGmveKh-hrhhaFhrhrhhacBrWahrhrBi5OZCnyUCyhrFB55dIeobwaSffI",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "12 MP Camera",
      },
      {
        name: "4K @ 120 fps UHD Video Recording",
      },
      {
        name: "Full frame (35.6 x 23.8 mm) BSI-CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "1.4M dots, Touch Screen Display",
      },
      {
        name: "1/8000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Sony a7 III 24.2 Mirrorless Camera with FE 28-70mm F/3.5-5.6 OSS Lens",
    brand: " SONY ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iomYRbver-w103-h125/sony-a7-iii-24-2-mir.jpg",

    pricef: "1,60 ,000",
    pricea: "1,59,989",
    pricec: "",
    flipkart:
      " https://l.smartprix.com/l?k=1271-JPZaa3SnDl6H60PEswsmfhrhAgTYBOr3Uh7FsuIcrTBtrcYTAacGnZOcgCTTcg3rnacnY33s3TaFFcArna3rcoXcGPcnncyssncTauFgarUC3hNcaIacrgcHOcns2Yac3aAs3ihNh-hDh84bogGgZora6Z6hmBYihkKmmxG7R7JfdR4e.VhrhhaFhrhrhhacBrWahrhrBi55CIsW2B4hrFB5-EVeQfkxTH~U",
    amazon:
      "https://l.smartprix.com/l?k=12ZvSs1HGU~4AuYNGFKD3X8ED_RhrhArnrysuhyihDRPGK1e~vxxh-hrhhaFhrhrhhacBrWahrhrBi55CIsW2B4hrFB5i_OrW7tjRopV ",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "24.2 MP Camera",
      },
      {
        name: "4K UHD Video Recording",
      },
      {
        name: "35.6 x 23.8 mm, FullFrame inch CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 921.6k dots, LCD, Touch Screen Display",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
      {
        name: "View Finder",
      },
    ],
  },
  {
    name: "Canon EOS R6 Mark II 24MP Mirrorless Camera (RF 24-105mm F/4L IS USM Lens)",
    brand: " Canon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-i9eG8s2MR-w103-h125/canon-eos-r10-24-2mp.jpg",

    pricef: "3,15,990",
    pricea: "2,58,499",
    pricec: "2,71,995",
    flipkart:
      "https://l.smartprix.com/l?k=1271-JP9opVHRH.CgI9uCp-R-uhrhAgTYBOr3Uh7ArusucasFc3bcnr3OcYYcnY33s3TaFFcArna3rc6siIcoHc5P4nncCFncTauFh-hDh8laiAloiaAPAlGhmBYihkKmm7V7Jf_0f~SSxehrhhaFhrhrhhacBrWahrhrBi56WYbCuo8hrFB5OyZPiVN20WgH ",
    amazon:
      " https://l.smartprix.com/l?k=12ZvSs1HGUe5iA0nVjuP9ldevbYhrhArnrysuhyihDRPR~fR~0eHh-hrhhaFhrhrhhacBrWahrhrBi56WYbCuo8hrFB50dKu2.5Se4ue",
    croma:
      "https://l.smartprix.com/l?k=12Zv7~QagolZ_G7.plvYqX_1ZoZhrhAA3snrh7ArusucasFc3bcnr3OcYYcoHconBciFT3cArna3rcoHc5P4cnncTauFcAnsFcFauFs3ciYWYAcDcB3sAaFFs3ch-hDob4blZhrhhaFhrhrhhacBrWahrhrBi56WYbCuo8hrFB5gw88kZ_BvmJx ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "24 MP Camera",
      },
      {
        name: "4K @ 30 fps UHD Video Recording",
      },
      {
        name: "APS-C (22.2 x 14.8 mm) CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "Touch Screen Display",
      },
      {
        name: "1/4000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Canon EOS R5 C 45 MP Mirrorless Camera",
    brand: "Canon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-i5bZCnWXh-w103-h125/canon-eos-r5-c-45-mp.jpg",

    pricef: "out of stock",
    pricea: "out of stock",
    pricec: "out of stock",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "45 MP Camera",
      },
      {
        name: "8192 x 4320 px @ 30 fps Video Recording",
      },
      {
        name: "Full frame (36 x 24 mm) CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3.2 in, 2.1M dots, LCD, Touch Screen Display",
      },
      {
        name: "1/8000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Canon EOS R50 Mark II 24.1MP Mirrorless Camera (EF-M15-45mm F/3.5-6.3 IS STM)",
    brand: " Canon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iKISMPTbQ-w103-h125/canon-eos-m50-mark-i.jpg",

    pricef: "69,989",
    pricea: "69,989",
    pricec: "71,999",
    flipkart:
      "https://l.smartprix.com/l?k=12b5Kk.I1wktRQNH~Xi~NZAEkhrhAgTYBOr3Uh7ArusucasFc34PcnY33s3TaFFcArna3rc6siIc3gcFc5XcH4cnncgcHc4cbcZcFUnh-hDh855Alag5irP6rPhmBYihkKmm7doJR.b--eZ--hrhhaFhrhrhhacBrWahrhrBi5BrQa4ZOFhrFB5kd49xdGXYf~3 ",
    amazon:
      "https://l.smartprix.com/l?k=1257xmZWIG38wOXg3D1-SmooKJhrhArnrysuhyihDRPRf.SKvdbh-hrhhaFhrhrhhacBrWahrhrBi5BrQa4ZOFhrFB5y_rH3OITnalj ",
    croma:
      " https://l.smartprix.com/l?k=1257qBiX5yw-2Eqxq1jW-Vg~tahrhAA3snrh7ArusucasFc34PcoHconBcnY33s3TaFFcArna3rc5XcH4cnncTauFc4crDYFcaTaAU3suYAcYnrWacFUr6YTYyrUh3ch-hDoGPGo5hrhhaFhrhrhhacBrWahrhrBi5BrQa4ZOFhrFB5imO1VKuXTxiS",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "24 MP Camera",
      },
      {
        name: "4K @ 23 fps UHD Video Recording",
      },
      {
        name: "APS-C (22.3 x 14.9 mm) CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "1M dots, Touch Screen Display",
      },
      {
        name: "1/4000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Pict Bridge, Microphone",
      },
    ],
  },
  {
    name: "Canon EOS 200D II 24.1MP DSLR Camera with EF-S 18-55mm F/4-5.6 IS STM Lens",
    brand: " Canon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iB4aIVrKh-w103-h125/canon-eos-200d-ii-24.jpg",

    pricef: "58,989",
    pricea: "58,989",
    pricec: "59,999",
    flipkart:
      "https://l.smartprix.com/l?k=12b5Kk.I1wkt4kJkHfN6XQNwShrhAgTYBOr3Uh7ArusucasFcoPPicYYciFT3cArna3rcagcF5Xc44nncFUnh-hDh84ibaHHgGgilGbhmBYihkKmmxxd0Kf7~dl_wehrhhaFhrhrhhacBrWahrhrBi5PNrbG4Q5hrFB53COirX57NkG4 ",
    amazon:
      "https://l.smartprix.com/l?k=1257xmZWIG38wiupR6BJ~O0js-hrhArnrysuhyihDRPGv-JR4HXh-hrhhaFhrhrhhacBrWahrhrBi5PNrbG4Q5hrFB5dG2YtZN1mITS ",
    croma:
      "https://l.smartprix.com/l?k=1257qBiX5yw-2pHfKRBB0JOyBHhrhAA3snrh7ArusucasFcoPPicYYcoHc5cnBciFT3cArna3rc5Xc44cnncTauFcoocZcDc5HclcnncsBUYArTcYnrWacFUr6YTYyrUh3ch-hDobGlbXhrhhaFhrhrhhacBrWahrhrBi5PNrbG4Q5hrFB5Ib8kCjDXUK1T ",
    selection1: [
      {
        name: "DSLR",
      },
      {
        name: "24.2 MP Camera",
      },
      {
        name: "1080p FHD Video Recording",
      },
      {
        name: "22.3 x 14.9 mm, APS-C inch CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "3 in, 1M dots, LCD, Touch Screen Display",
      },
      {
        name: "1/4000-30 sec Max Shutter Speed",
      },
      {
        name: "f/4-f/5.6 Aperture Lens",
      },
      {
        name: "Wifi, Hdmi",
      },
    ],
  },
  {
    name: "Sony Cybershot DSC-HX9V 16.2 MP Point & Shoot Camera",
    brand: " SONY ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iHdG5us6K-w103-h125/sony-cybershot-dsc-h.jpg",

    pricef: "6,990",
    pricea: "",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12ow2P.C_nGlHRHmSEg_qwkZhrhAgTYBOr3Uh7FsuIcAI6a3FtsUciFAc8XPPc6AcYu4h-hDh8aXWXIgIi3u882hmBYihkwjpK07E7SV_dSf_RhrhhaFhrhrhhacBrWahrhr5HP5aQbgPyahrFB59UC_WA0H3FCf ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Point & Shoot",
      },
      {
        name: "16 MP Camera",
      },
      {
        name: "1080p @ 60 fps FHD Video Recording",
      },
      {
        name: '1/2.3" (6.17 x 4.55 mm) BSI-CMOS Sensor',
      },
    ],
    selection2: [
      {
        name: "3 in, 921k dots, LCD Display",
      },
      {
        name: "1/1600 sec Max Shutter Speed",
      },
      {
        name: "16x Zoom Lens",
      },
      {
        name: "Wifi, Hdmi",
      },
    ],
  },
  {
    name: "Nikon Z50 20.9MP Mirrorless Camera with Nikkor Z 24-200mm F/4-6.3 VR Lens",
    brand: " Nikon ",
    category: "Camera",

    image:
      "https://cdn1.smartprix.com/rx-iQrb6TpMj-w103-h125/nikon-z50-20-9mp-mir.jpg",

    pricea: "1,35 ,000",
    pricef: "",
    pricec: "",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12ZvSs1HGUklAwXnSUkm9FFP68mhrhArnrysuhyihDRPwGSGmxwRh-hrhhaFhrhrhhacBrWahrhrBi5rXPulbighrFB5vISp0Wm17agj",
    croma: " ",
    selection1: [
      {
        name: "Mirrorless",
      },
      {
        name: "21 MP Camera",
      },
      {
        name: "4K @ 30 fps UHD Video Recording",
      },
      {
        name: "APS-C (23.5 x 15.7 mm) CMOS Sensor",
      },
    ],
    selection2: [
      {
        name: "1M dots, Touch Screen Display",
      },
      {
        name: "1/4000 sec Max Shutter Speed",
      },
      {
        name: "Wifi, Hdmi",
      },
      {
        name: "Microphone",
      },
    ],
  },
  {
    name: "Zoonis MA-10 Desktop PC (2nd Gen Core i3/ 8 GB RAM/ 500 GB HDD/ 128 GB SSD/ Win 10)",
    brand: " Zoonis",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1945g9b5b",
    image:
      "https://cdn1.smartprix.com/rx-itnImKezO-w103-h125/zoonis-ma-10-desktop.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1945g9b5b",
    pricef: "13,999",
    pricea: "",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "2nd Gen Intel Core i3 2120",
      },
      {
        name: "Dual Core, 4 Threads",
      },
      {
        name: "8 GB DDR3 RAM",
      },
      {
        name: "500 GB Hard Disk",
      },
    ],
    selection2: [
      {
        name: "128 GB SSD",
      },
      {
        name: "Intel HD Graphics 2000",
      },
      {
        name: "19 inches",
      },
      {
        name: "Windows 10 OS",
      },
    ],
  },
  {
    name: "Asus ROG Strix G10DK-73700X072W Gaming Tower PC (AMD Ryzen7 3700X/ 16GB RAM/ 1 TB HDD/512GB SSD",
    brand: " Asus",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1n3hlkgwk",
    image:
      "https://cdn1.smartprix.com/rx-ikeD8HiZk-w103-h125/asus-rog-strix-g10dk.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1n3hlkgwk",
    pricef: "",
    pricea: "76,990",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12GBtd~Q2GHJUnFzVOlAZwI2NhrhArnrysuhyihDRPRRJHH01ph-hrhhaFhrhrhhacBrWahrhrBi5uZtTOW8OhrFB5oIW9naNSWrJB",
    croma: " ",
    selection1: [
      {
        name: "3rd Gen AMD Ryzen 7 3700X",
      },
      {
        name: "Octa Core, 16 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "1 TB Hard Disk",
      },
    ],
    selection2: [
      {
        name: "512 GB SSD",
      },
      {
        name: "6 GB NVIDIA GeForce GTX 1660 TI",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "Dell All in One Inspiron 5420 (13th Gen Core i5/ 16 GB RAM/ 512 GB SSD/ Win 11/ 2 GB Graphics)",
    brand: "Dell ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1dd69awxr",
    image:
      "https://cdn1.smartprix.com/rx-iL098sfb1-w103-h125/dell-all-in-one-insp.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1dd69awxr",
    pricea: "86,044",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GBtd~Q2GHJymFHrppFdnlprhrhArnrysuhyihDRPw4-_xRH7h-hrhhaFhrhrhhacBrWahrhrBi5iiblr8D3hrFB52b1Dsi7myGt_ ",
    croma: " ",
    selection1: [
      {
        name: "13th Gen Intel Core i5 1335U",
      },
      {
        name: "10 Cores (2P + 8E), 12 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "2 GB NVIDIA GeForce MX550",
      },
      {
        name: "23.8 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "HP Victus 15L TG02-0102in Gaming Tower PC (AMD Ryzen 5 5600G/ 16 GB RAM/ 512 GB SSD/ Win 11/ 4 GB Graphics)",
    brand: "HP ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1hyipt8lt",
    image:
      "https://cdn1.smartprix.com/rx-izLP01X03-w103-h125/hp-victus-15l-tg02-0.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1hyipt8lt",
    pricea: "67,629",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GBtd~Q2GHJsqKEGX_897aQ_hrhArnrysuhyihDRPwoSdG~poh-hrhhaFhrhrhhacBrWahrhrBi5tIYBUXTUhrFB5bByaRWfkdrR4 ",
    croma: " ",
    selection1: [
      {
        name: "5th Gen AMD Ryzen 5 5600G",
      },
      {
        name: "Hexa Core, 12 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "4 GB AMD Radeon RX 6400",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Asus S501MD-512400016W Tower PC (12th Gen Core i5/ 8 GB RAM/ 512 GB SSD/ Win 11)",
    brand: "Asus",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1oh202l9z",
    image:
      "https://cdn1.smartprix.com/rx-im07Urnbb-w103-h125/asus-s501md-51240001.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1oh202l9z",
    pricea: "71,990",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12GBtd~Q2GHJ3J19i6uY8D0.lhrhArnrysuhyihDRPwlw750f0h-hrhhaFhrhrhhacBrWahrhrBi5stoPoTlyhrFB5T3Zw9HwmVCJS",
    croma: " ",
    selection1: [
      {
        name: "12th Gen Intel Core i5 12400",
      },
      {
        name: "Hexa Core, 12 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel UHD Graphics 730",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Lenovo IdeaCentre 3 90MV00MLIN Tower PC (AMD 3020e/ 4 GB RAM/ 256 GB SSD/ DOS)",
    brand: "Lenovo ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1jt51wifu",
    image:
      "https://cdn1.smartprix.com/rx-iE0vyl0Gi-w103-h125/lenovo-ideacentre-3.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1jt51wifu",
    pricea: "20,990",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GBtd~Q2GHJdAwK358rjnP54hrhArnrysuhyihDRPwb4Jd5f1h-hrhhaFhrhrhhacBrWahrhrBi5QU458YgChrFB5dTdC0rIPNk2F ",
    croma: " ",
    selection1: [
      {
        name: "AMD Athlon 3020e",
      },
      {
        name: "Dual Core, 2 Threads",
      },
      {
        name: "4 GB DDR4 RAM",
      },
      {
        name: "256 GB SSD",
      },
    ],
    selection2: [
      {
        name: "AMD Radeon Graphics",
      },
      {
        name: "DOS OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "HP M01-F3486in Tower PC (AMD Ryzen 3 5300G/ 4 GB RAM/ 256 GB SSD/ Win 11)",
    brand: "HP ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1sw4wzooy",
    image:
      "https://cdn1.smartprix.com/rx-iYsmlLc5s-w103-h125/hp-m01-f3486in-tower.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1sw4wzooy",
    pricea: "28,999",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12GBtd~Q2GHJvxHojRtaVw9TZhrhArnrysuhyihDRPRfep__VVh-hrhhaFhrhrhhacBrWahrhrBi5F8H8yssIhrFB5HExwIGnZeqC-",
    croma: " ",
    selection1: [
      {
        name: "5th Gen AMD Ryzen 3 5300G",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "4 GB DDR4 RAM",
      },
      {
        name: "256 GB SSD",
      },
    ],
    selection2: [
      {
        name: "AMD Radeon Graphics",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Dell Vostro 3710 Tower PC (12th Gen Core i3/ 8 GB RAM/ 512 GB SSD/ Win 11)",
    brand: "Dell ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd17vvzccjl",
    image:
      "https://cdn1.smartprix.com/rx-iYftkFqXt-w103-h125/dell-vostro-3710-tow.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd17vvzccjl",
    pricef: "54,500",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=126ka1bmdu~WBaX0n3Y3mlRRhrhAgTYBOr3Uh7iaTTcYZc5o5PPcXcW6c3rncYuUaTcYuUaW3rUaicW3rBtYAFc45ocFFicArBrAYUIc8Yuis8Fc55ctsnacbHc6YUcnYuYcUs8a3cnFcsggYAah-hDh8Po564a5rXXZlXhmBYihkw1E7vfZSwff~S~-JhrhhaFhrhrhhacBrWahrhrBi5G22yAAQThrFB5DdDYjavxDsym ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "12th Gen Intel Core i3 12100",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel UHD Graphics 730",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "Zoonis MA-10 Gaming Tower PC (1st Gen Core i5/ 8 GB RAM/ 256 GB SSD/ Win 10/ 2 GB Graphics)",
    brand: "Zoonis ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1j5he8pak",
    image:
      "https://cdn1.smartprix.com/rx-ifXMiYLJc-w103-h125/zoonis-ma-10-gaming.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1j5he8pak",
    pricef: "13,999",
    pricea: "",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=126ka1bmdu~9ICOYuAUS2elmhrhAgTYBOr3Uh7yssuYFctsnacsggYAacAs3acYZcXcW6cii3Zc4PPcW6c5oXcFFic8Yuis8Fc5PcB3sc5lcYuAtcFA3aaucnrc5Pc6aFUc6aFOUsBcsuTYuac8s3OcaiCArUh3cnFh-hDh8HHZlbo4X66Z6bhmBYihkj9k7.Eb7SJ_~xKvvhrhhaFhrhrhhacBrWahrhrBi5lH4Wl646hrFB5aXj1Kl.pyTk1",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Intel Core i5 750",
      },
      {
        name: "Quad Core, 4 Threads",
      },
      {
        name: "8 GB DDR3 RAM",
      },
      {
        name: "256 GB SSD",
      },
    ],
    selection2: [
      {
        name: "2 GB NVIDIA GeForce GT 610",
      },
      {
        name: "Windows 10 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Zoonis Budget Gaming Desktop PC (1st Gen Core i5/ 8 GB RAM/ 500 GB HDD/ 128 GB SSD/ Win 10/ 2 GB Graphics)",
    brand: "Zoonis ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1gaf0tpd8",
    image:
      "https://cdn1.smartprix.com/rx-i0tnmyCTv-w103-h125/zoonis-budget-gaming.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1gaf0tpd8",
    pricef: "19,999",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=126ka1bmdu~mtzTlTx__.DwvhrhAgTYBOr3Uh7yssuYFc6CiWaUcWrnhNciaFOUsBcgY3acWUrcAs3acY4cXcW6cii3Zc4PPcW6c5oXcFFic8Yuis8Fc5PcB3scocW6c5lcYuAtcFA3aauc6CiWaUcoW6cW3rBtYAFcAr3icnFcsggYAah-hDh8545HgGZ4iXb6XhmBYihkj9k71xxZ-EGpRSJ-hrhhaFhrhrhhacBrWahrhrBi5WrgPUBiXhrFB5R~vNrSbGvE2F ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Intel Core i5 750",
      },
      {
        name: "Quad Core, 4 Threads",
      },
      {
        name: "8 GB DDR3 RAM",
      },
      {
        name: "500 GB Hard Disk",
      },
    ],
    selection2: [
      {
        name: "128 GB SSD",
      },
      {
        name: "2 GB Graphics Card",
      },
      {
        name: "19 inches",
      },
      {
        name: "Windows 10 OS",
      },
    ],
  },
  {
    name: "Zoonis G-01 Desktop PC (2nd Gen Core i5/ 8 GB RAM/ 256 GB SSD/ Win 10)",
    brand: "Zoonis ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1n5y9yqbo",
    image:
      "https://cdn1.smartprix.com/rx-iqn1GxQ4h-w103-h125/zoonis-g-01-desktop.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1n5y9yqbo",
    pricef: "16,999",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=126ka1bmdu~vX6n5WENoFD9ihrhAgTYBOr3Uh7yssuYFcB3anYCncWrnhNciaFOUsBcAs3acY4cbUtcWauc5bcW6cii3Hc45ocFFic8Yuis8Fc5PcB3scHcW6coocYuAtcFA3aaucWcP5cB3anYCncii3cHc5bW6c3rncnFcsggYAah-hDh86Gli56GgGr6iZhmBYihkj9k7vfZ-jvppo-w1hrhhaFhrhrhhacBrWahrhrBi5CtIZHItnhrFB5PNpdg006NnnF ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "2nd Gen Intel Core i5 2400",
      },
      {
        name: "Quad Core, 4 Threads",
      },
      {
        name: "8 GB DDR3 RAM",
      },
      {
        name: "256 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel HD Graphics 2000",
      },
      {
        name: "19 inches",
      },
      {
        name: "Windows 10 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Intel NUC 11 RNUC11PAHi70Z00 Mini PC Barebone Kit (11th Gen Core i7)",
    brand: "Intel",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1ixlhs2wz",
    image:
      "https://cdn1.smartprix.com/rx-i8Di6Xz0r-w103-h125/intel-nuc-11-rnuc11p.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ixlhs2wz",
    pricea: "49,800",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GBtd~Q2GHJi1BWp3QUQAG2ZhrhArnrysuhyihDRPwHZGwwp1h-hrhhaFhrhrhhacBrWahrhrBi5YDTtFo8yhrFB5TfnjH.PwRYQY ",
    croma: " ",
    selection1: [
      {
        name: "11th Gen Intel Core i7 1165G7",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "Intel Iris Xe Graphics",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "Asus AiO A5 A5402WVAT-BA007WS (13th Gen Core i5/ 16 GB RAM/ 512 GB SSD/ Win 11)",
    brand: "Asus ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1fk2anyxm",
    image:
      "https://cdn1.smartprix.com/rx-iEDOWT2ux-w103-h125/asus-aio-a5-a5402wva.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1fk2anyxm",
    pricef: "94,990",
    pricea: "",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=126ka1bmduvHfWq84vdU9CNthrhAgTYBOr3Uh7rFCFcrYscr4cFa3YaFcUsCAtFA3aaucYuUaTcBcFa3YaFcAs3acY4c5bcW6cii3Hc45ocFFic8Yuis8Fc55ctsnacoZcXcYuAtcFA3aaucr4HPo82rUc6rPPG8FcnFcsggYAah-hDh8glbrP6aPll6oAhmBYihkj9k7~Rp7XKefdSXShrhhaFhrhrhhacBrWahrhrBi5gOoruIDnhrFB5JVpUCPZ-Cqy8",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "13th Gen Intel Core i5 1340P",
      },
      {
        name: "12 Cores (4P + 8E), 16 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel Iris Xe Graphics",
      },
      {
        name: "23.8 inches, 1920 x 1080 pixels, Touch Screen",
      },
      {
        name: "Windows 11 OS",
      },
    ],
  },
  {
    name: "1 Year Warranty", // {
    name: "HP M01-F3486in Tower PC (AMD Ryzen 3 5300G/ 4 GB RAM/ 256 GB SSD/ Win 11)",
    brand: "HP ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1sw4wzooy",
    image:
      "https://cdn1.smartprix.com/rx-iYsmlLc5s-w103-h125/hp-m01-f3486in-tower.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1sw4wzooy",
    pricea: "28,999",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12GBtd~Q2GHJvxHojRtaVw9TZhrhArnrysuhyihDRPRfep__VVh-hrhhaFhrhrhhacBrWahrhrBi5F8H8yssIhrFB5HExwIGnZeqC-",
    croma: " ",
    selection1: [
      {
        name: "5th Gen AMD Ryzen 3 5300G",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "4 GB DDR4 RAM",
      },
      {
        name: "256 GB SSD",
      },
    ],
    selection2: [
      {
        name: "AMD Radeon Graphics",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Dell Vostro 3710 Tower PC (12th Gen Core i3/ 8 GB RAM/ 512 GB SSD/ Win 11)",
    brand: "Dell ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd17vvzccjl",
    image:
      "https://cdn1.smartprix.com/rx-iYftkFqXt-w103-h125/dell-vostro-3710-tow.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd17vvzccjl",
    pricef: "54,500",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=126ka1bmdu~WBaX0n3Y3mlRRhrhAgTYBOr3Uh7iaTTcYZc5o5PPcXcW6c3rncYuUaTcYuUaW3rUaicW3rBtYAFc45ocFFicArBrAYUIc8Yuis8Fc55ctsnacbHc6YUcnYuYcUs8a3cnFcsggYAah-hDh8Po564a5rXXZlXhmBYihkw1E7vfZSwff~S~-JhrhhaFhrhrhhacBrWahrhrBi5G22yAAQThrFB5DdDYjavxDsym ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "12th Gen Intel Core i3 12100",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel UHD Graphics 730",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "Zoonis MA-10 Gaming Tower PC (1st Gen Core i5/ 8 GB RAM/ 256 GB SSD/ Win 10/ 2 GB Graphics)",
    brand: "Zoonis ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1j5he8pak",
    image:
      "https://cdn1.smartprix.com/rx-ifXMiYLJc-w103-h125/zoonis-ma-10-gaming.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1j5he8pak",
    pricef: "13,999",
    pricea: "",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=126ka1bmdu~9ICOYuAUS2elmhrhAgTYBOr3Uh7yssuYFctsnacsggYAacAs3acYZcXcW6cii3Zc4PPcW6c5oXcFFic8Yuis8Fc5PcB3sc5lcYuAtcFA3aaucnrc5Pc6aFUc6aFOUsBcsuTYuac8s3OcaiCArUh3cnFh-hDh8HHZlbo4X66Z6bhmBYihkj9k7.Eb7SJ_~xKvvhrhhaFhrhrhhacBrWahrhrBi5lH4Wl646hrFB5aXj1Kl.pyTk1",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Intel Core i5 750",
      },
      {
        name: "Quad Core, 4 Threads",
      },
      {
        name: "8 GB DDR3 RAM",
      },
      {
        name: "256 GB SSD",
      },
    ],
    selection2: [
      {
        name: "2 GB NVIDIA GeForce GT 610",
      },
      {
        name: "Windows 10 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Zoonis Budget Gaming Desktop PC (1st Gen Core i5/ 8 GB RAM/ 500 GB HDD/ 128 GB SSD/ Win 10/ 2 GB Graphics)",
    brand: "Zoonis ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1gaf0tpd8",
    image:
      "https://cdn1.smartprix.com/rx-i0tnmyCTv-w103-h125/zoonis-budget-gaming.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1gaf0tpd8",
    pricef: "19,999",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=126ka1bmdu~mtzTlTx__.DwvhrhAgTYBOr3Uh7yssuYFc6CiWaUcWrnhNciaFOUsBcgY3acWUrcAs3acY4cXcW6cii3Zc4PPcW6c5oXcFFic8Yuis8Fc5PcB3scocW6c5lcYuAtcFA3aauc6CiWaUcoW6cW3rBtYAFcAr3icnFcsggYAah-hDh8545HgGZ4iXb6XhmBYihkj9k71xxZ-EGpRSJ-hrhhaFhrhrhhacBrWahrhrBi5WrgPUBiXhrFB5R~vNrSbGvE2F ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Intel Core i5 750",
      },
      {
        name: "Quad Core, 4 Threads",
      },
      {
        name: "8 GB DDR3 RAM",
      },
      {
        name: "500 GB Hard Disk",
      },
    ],
    selection2: [
      {
        name: "128 GB SSD",
      },
      {
        name: "2 GB Graphics Card",
      },
      {
        name: "19 inches",
      },
      {
        name: "Windows 10 OS",
      },
    ],
  },
  {
    name: "Zoonis G-01 Desktop PC (2nd Gen Core i5/ 8 GB RAM/ 256 GB SSD/ Win 10)",
    brand: "Zoonis ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1n5y9yqbo",
    image:
      "https://cdn1.smartprix.com/rx-iqn1GxQ4h-w103-h125/zoonis-g-01-desktop.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1n5y9yqbo",
    pricef: "16,999",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=126ka1bmdu~vX6n5WENoFD9ihrhAgTYBOr3Uh7yssuYFcB3anYCncWrnhNciaFOUsBcAs3acY4cbUtcWauc5bcW6cii3Hc45ocFFic8Yuis8Fc5PcB3scHcW6coocYuAtcFA3aaucWcP5cB3anYCncii3cHc5bW6c3rncnFcsggYAah-hDh86Gli56GgGr6iZhmBYihkj9k7vfZ-jvppo-w1hrhhaFhrhrhhacBrWahrhrBi5CtIZHItnhrFB5PNpdg006NnnF ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "2nd Gen Intel Core i5 2400",
      },
      {
        name: "Quad Core, 4 Threads",
      },
      {
        name: "8 GB DDR3 RAM",
      },
      {
        name: "256 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel HD Graphics 2000",
      },
      {
        name: "19 inches",
      },
      {
        name: "Windows 10 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Intel NUC 11 RNUC11PAHi70Z00 Mini PC Barebone Kit (11th Gen Core i7)",
    brand: "Intel",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1ixlhs2wz",
    image:
      "https://cdn1.smartprix.com/rx-i8Di6Xz0r-w103-h125/intel-nuc-11-rnuc11p.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ixlhs2wz",
    pricea: "49,800",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GBtd~Q2GHJi1BWp3QUQAG2ZhrhArnrysuhyihDRPwHZGwwp1h-hrhhaFhrhrhhacBrWahrhrBi5YDTtFo8yhrFB5TfnjH.PwRYQY ",
    croma: " ",
    selection1: [
      {
        name: "11th Gen Intel Core i7 1165G7",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "Intel Iris Xe Graphics",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "Asus AiO A5 A5402WVAT-BA007WS (13th Gen Core i5/ 16 GB RAM/ 512 GB SSD/ Win 11)",
    brand: "Asus ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1fk2anyxm",
    image:
      "https://cdn1.smartprix.com/rx-iEDOWT2ux-w103-h125/asus-aio-a5-a5402wva.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1fk2anyxm",
    pricef: "94,990",
    pricea: "",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=126ka1bmduvHfWq84vdU9CNthrhAgTYBOr3Uh7rFCFcrYscr4cFa3YaFcUsCAtFA3aaucYuUaTcBcFa3YaFcAs3acY4c5bcW6cii3Hc45ocFFic8Yuis8Fc55ctsnacoZcXcYuAtcFA3aaucr4HPo82rUc6rPPG8FcnFcsggYAah-hDh8glbrP6aPll6oAhmBYihkj9k7~Rp7XKefdSXShrhhaFhrhrhhacBrWahrhrBi5gOoruIDnhrFB5JVpUCPZ-Cqy8",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "13th Gen Intel Core i5 1340P",
      },
      {
        name: "12 Cores (4P + 8E), 16 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel Iris Xe Graphics",
      },
      {
        name: "23.8 inches, 1920 x 1080 pixels, Touch Screen",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Apple Mac Studio MQH73HN/A (Apple M2 Max/ 32 GB RAM/ 512 GB SSD/ macOS/ 30-core GPU)",
    brand: "Apple ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd1f7akxjb0",
    image:
      "https://cdn1.smartprix.com/rx-ipducWDI5-w103-h125/apple-mac-studio-mqh.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1f7akxjb0",
    pricef: "2,10 ,000",
    pricea: "2,10 ,000",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=125i8wXagyVE31Y.DwwudnCJ_ZhrhAgTYBOr3Uh7rBBTacnocnrDcAtYBcZocW6c3rncYuUaW3rUaicZPcAs3acWBCcW3rBtYAFc45ocFFicArBrAYUIcnrAsFc2auUC3rcnYuYcUs8a3h-hDh84io65PXolHHoXhmBYihkw1E7~jo-E04bGS0vhrhhaFhrhrhhacBrWahrhrBi5gGrODQ6PhrFB5KC-bTGHSSV.o ",
    amazon:
      "https://l.smartprix.com/l?k=12mV_.eR2QYeUaS1vBVV.IfdlOhrhAA3snrh7rBBTacnrAcFUCiYscnocnrDcAtYBcoPoZcnYuYcUs8a3cZoW6c45oW6cFFicrBBTacZPcAs3acWBCcnrAsFcFYThCch-hDoGZXXZhrhhaFhrhrhhacBrWahrhrBi5gGrODQ6PhrFB5PzqlnWjlEXxS ",
    croma: " ",
    selection1: [
      {
        name: "Apple M2 Max",
      },
      {
        name: "12 Cores (8P + 4E)",
      },
      {
        name: "32 GB RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Apple 30-Core Gpu",
      },
      {
        name: "Mac OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Dell Inspiron DT 3891 MT Tower PC (10th Gen Core i3/ 8 GB RAM/ 1 TB HDD/ 256 GB SSD/ Win 11)",
    brand: "Dell ",
    category: "Computer",
    url: "https://www.smartprix.com/nf/pd/pd16pnvlkoj",
    image:
      "https://cdn1.smartprix.com/rx-iwslVF6bQ-w103-h125/dell-inspiron-dt-389.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd16pnvlkoj",
    pricea: "59,500",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12GBtd~Q2GHJQw..m~~~qUIP9hrhArnrysuhyihDRPlbm~bJGxh-hrhhaFhrhrhhacBrWahrhrBi5bBu2TOsQhrFB5b8GT6p_oN3KP",
    croma: " ",
    selection1: [
      {
        name: "10th Gen Intel Core i3 10105",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "1 TB Hard Disk",
      },
    ],
    selection2: [
      {
        name: "256 GB SSD",
      },
      {
        name: "Intel UHD Graphics 630",
      },
      {
        name: "21.5 inches, 1920 x 1080 pixels",
      },
      {
        name: "DOS OS",
      },
    ],
  },
  {
    name: "Crompton Zelus DAC43 43 L Desert Air Cooler",
    brand: "Crompton ",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1c2ciagy4",
    image:
      "https://cdn1.smartprix.com/rx-iHGU1OKa5-w103-h125/crompton-zelus-dac43.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1c2ciagy4",
    pricef: "6,799",
    pricea: "7,387",
    pricec: "",
    flipkart:
      " https://l.smartprix.com/l?k=12H7JRWPXex694tG_JYw6GXehrhAgTYBOr3Uh7A3snBUsucHZcTciaFa3UcrY3cAssTa3h-hDh8iiP4ia4GaoZXPhmBYihkj9w7Rq4xbx~dSd0zhrhhaFhrhrhhacBrWahrhrBi5AoAYrWIHhrFB5QaN6ml.8qwRn",
    amazon:
      "https://l.smartprix.com/l?k=12Ue.noF3eCyur3Fw~.qsgEGhrhArnrysuhyihDRPl_R5w0pxh-hrhhaFhrhrhhacBrWahrhrBi5AoAYrWIHhrFB5CN-b0Ug2Swmr ",
    croma: " ",
    selection1: [
      {
        name: "Desert Air Cooler",
      },
      {
        name: "43 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "Inverter Compatible",
      },
    ],
    selection2: [
      {
        name: "4 Way Air Deflection",
      },
      {
        name: "35 ft Air Throw",
      },
      {
        name: "Ice Chamber",
      },
      {
        name: "Overflow Indicator",
      },
    ],
  },
  {
    name: "Crompton Ginie Neo 10 L Personal Air Cooler",
    brand: " Crompton",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1bypk4pgd",
    image:
      "https://cdn1.smartprix.com/rx-i2aj4ldXX-w103-h125/crompton-ginie-neo-1.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1bypk4pgd",
    pricef: "3,690",
    pricea: "3,490",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12H7JRWoHes~vDp_3068u_TIhrhAgTYBOr3Uh7A3snBUsuc5PcTcUs8a3crY3cAssTa3h-hDh85XZaZgoogiGa4hmBYihkj9w7SV4Zqov_0o-0hrhhaFhrhrhhacBrWahrhrBi56IBOHBWihrFB54sZj0p-rGjlg ",
    amazon:
      " https://l.smartprix.com/l?k=12Ue.noN2epjk6bECdQD-xF1hrhArnrysuhyihDRPXHovRXZzh-hrhhaFhrhrhhacBrWahrhrBi56IBOHBWihrFB5Qd6ytwyntBf_",
    croma: " ",
    selection1: [
      {
        name: "Room Air Cooler",
      },
      {
        name: "10 L Tank Capacity",
      },
      {
        name: "18.58 m² Coverage Area",
      },
      {
        name: "5 Star Energy Rating",
      },
    ],
    selection2: [
      {
        name: "2400 RPM Speed",
      },
      {
        name: "4 Ways Air Deflection",
      },
      {
        name: "35 ft Air Throw",
      },
      {
        name: "Ice Chamber, Auto Fill",
      },
    ],
  },
  {
    name: "Symphony Sumo 75XL 75 L Air Cooler",
    brand: " Symphony",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1aadc5sj6",
    image:
      "https://cdn1.smartprix.com/rx-iprxsDgt6-w103-h125/symphony-sumo-75xl-7.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1aadc5sj6",
    pricef: "12,490",
    pricea: "11,707",
    pricec: "11,999",
    flipkart:
      "https://l.smartprix.com/l?k=12Ri5QBa29n197jzwJsqq_4TAhrhAgTYBOr3Uh7FInBtsuIcG4cTciaFa3UcrY3cAssTa3h-hDh86Gl6Z5bG4bA5ZhmBYihkj9w7S4ZKjEeVeEVXhrhhaFhrhrhhacBrWahrhrBi5rriA4FQbhrFB5uZNQoTtaYHUr ",
    amazon:
      "https://l.smartprix.com/l?k=12ovjU0Dn7iPvu6GHiA_X_6oJjhrhArnrysuhyihDRPR~SvHG7.h-hrhhaFhrhrhhacBrWahrhrBi5rriA4FQbhrFB5ztyKsvRr3ggs ",
    croma:
      "https://l.smartprix.com/l?k=12ovjk4kONB3qTzmof2PyTgP9NhrhAA3snrh7FInBtsuIcFCnscG4cTYU3aFciaFa3UcrY3cAssTa3cYcBC3acUaAtusTsWIcG4cDTchhgch-hDooZo4ZhrhhaFhrhrhhacBrWahrhrBi5rriA4FQbhrFB5KWfEe1IRwjR9 ",
    selection1: [
      {
        name: "Desert Air Cooler",
      },
      {
        name: "75 L Tank Capacity",
      },
      {
        name: "36.98 m² Coverage Area",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
    ],
    selection2: [
      {
        name: "40 ft Air Throw",
      },
      {
        name: "Ice Chamber",
      },
      {
        name: "Empty Tank Alarm",
      },
      {
        name: "Auto Louver Movement",
      },
    ],
  },
  {
    name: "Bajaj PMH 25 DLX 24L Personal Air Cooler",
    brand: "Bajaj ",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1l8wu906f",
    image:
      "https://cdn1.smartprix.com/rx-i9TkBKHSl-w103-h125/bajaj-pmh-25-dlx-24l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1l8wu906f",
    pricef: "4,649",
    pricea: "4,658",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12H7JRWoZTosxOZl~rO6.zdBhrhAgTYBOr3Uh76rQrQcoHcTc3ssncBa3FsurTcrY3cAssTa3h-hDh85Z6APXXbiXi4ghmBYihkj9w7R7bX1d_.fwp1hrhhaFhrhrhhacBrWahrhrBi5TX8ClPbghrFB5a6xkOomEU873 ",
    amazon:
      " https://l.smartprix.com/l?k=12Ue.noN8jGngpCSRajgkuH.hrhArnrysuhyihDRPlvZ-~Z1lh-hrhhaFhrhrhhacBrWahrhrBi5TX8ClPbghrFB5XCu4V~gk-r2n",
    croma: " ",
    selection1: [
      {
        name: "Room Air Cooler",
      },
      {
        name: "24 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "4 Ways Air Deflection",
      },
    ],
    selection2: [
      {
        name: "18 ft Air Throw",
      },
      {
        name: "Overflow Indicator",
      },
      {
        name: "4 Castor Wheels",
      },
      {
        name: "Auto Louver Movement",
      },
    ],
  },
  {
    name: "Symphony Sumo 40XL 40 L Room Air Cooler",
    brand: " Symphony",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1qnmfkk6j",
    image:
      "https://cdn1.smartprix.com/rx-i12IBGjE4-w103-h125/symphony-sumo-40xl-4.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1qnmfkk6j",
    pricef: "",
    pricea: "6,891",
    pricec: "5,999",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12Ue.noF3zRZ-Pv87oNuoC52hrhArnrysuhyihDRPR~S~d77vh-hrhhaFhrhrhhacBrWahrhrBi5NungOObQhrFB5ksYAx5VI5b5l",
    croma:
      "https://l.smartprix.com/l?k=12UekxRApiQFvfPaSR6iND.qhrhAA3snrh7FInBtsuIcFCnscHPcTYU3aFcBa3FsurTcrY3cAssTa3cYcBC3acUaAtusTsWIcrAsBaZXGchhgch-hDoHXXG4hrhhaFhrhrhhacBrWahrhrBi5NungOObQhrFB5D26-aProvuI1 ",
    selection1: [
      {
        name: "Room Air Cooler",
      },
      {
        name: "40 L Tank Capacity",
      },
      {
        name: "16.26 m² Coverage Area",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
    ],
    selection2: [
      {
        name: "Inverter Compatible",
      },
      {
        name: "Ice Chamber, Auto Drain",
      },
      {
        name: "4 Castor Wheels",
      },
      {
        name: "1 year",
      },
    ],
  },
  {
    name: "Novamax Blaze 40 L Desert Air Cooler",
    brand: "Novamax ",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1agoy6tgu",
    image:
      "https://cdn1.smartprix.com/rx-iLdsny7MM-w103-h125/novamax-blaze-40-l-d.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1agoy6tgu",
    pricef: "6,550",
    pricea: "",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12H7JRWPXvyv3xNxuquFJtWphrhAgTYBOr3Uh7us2rnrDc4PcTc3ssncBa3FsurTcrY3cAssTa3h-hDh8ool6Gi44b665rhmBYihkj9w7pdpxpS-Jpd~whrhhaFhrhrhhacBrWahrhrBi5rWsIbUWChrFB5Qs~rJCIb4XN3 ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Desert Air Cooler",
      },
      {
        name: "40 L Tank Capacity",
      },
      {
        name: "46.45 m² Coverage Area",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
    ],
    selection2: [
      {
        name: "Inverter Compatible",
      },
      {
        name: "1400 RPM Speed",
      },
      {
        name: "4 Way Air Deflection",
      },
      {
        name: "55 ft Air Throw",
      },
    ],
  },

  {
    name: "Bajaj Px97 Platini 36 L Room Air Cooler",
    brand: "Bajaj ",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1x1t0d8o7",
    image:
      "https://cdn1.smartprix.com/rx-iIvdgfIuf-w103-h125/bajaj-px97-platini-3.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1x1t0d8o7",
    pricef: "6,340",
    pricea: "",
    pricec: "",
    flipkart:
      " https://l.smartprix.com/l?k=12H7JRWPXvyv3k0RK_qN6S6JhrhAgTYBOr3Uh76rQrQcZbcTc3ssncBa3FsurTcrY3cAssTa3h-hDh85aaPZHXAgAG6ohmBYihkj9w7jfRZeX-oee0ehrhhaFhrhrhhacBrWahrhrBi5D4YZCTtnhrFB5PQN21q2RdsEF",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Height: 40 cm",
      },
      {
        name: "Tank Capacity: 36 L",
      },
      {
        name: "Power Consumption - Cooling: 100 W",
      },
      {
        name: "3 Speed Settings",
      },
    ],
    selection2: [
      {
        name: "Type: Room/Personal",
      },
    ],
  },
  {
    name: "MoonAir Gulmarg 65 L Desert Air Cooler",
    brand: " Moonair",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1fnevzdcs",
    image:
      "https://cdn1.smartprix.com/rx-ivpV84VRo-w103-h125/moonair-gulmarg-65-l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1fnevzdcs",
    pricef: "4,990",
    pricea: "",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12H7JRWPXvyvsXV67.GFmwHahrhAgTYBOr3Uh7nssurY3cb4cTciaFa3UcrY3cAssTa3h-hDh8agH6a6a4GGXG6hmBYihkj9w71RfRJdEw07xjhrhhaFhrhrhhacBrWahrhrBi5gua2yiAFhrFB5B6XoapoKSrFz ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Tower Air Cooler",
      },
      {
        name: "65 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "Inverter Compatible",
      },
    ],
    selection2: [
      {
        name: "Overflow Indicator",
      },
      {
        name: "4 Castor Wheels",
      },
      {
        name: "Auto Louver Movement",
      },
      {
        name: "1 year",
      },
    ],
  },
  {
    name: "Yeti Cube 40 L Tower Air Cooler",
    brand: " Yeti",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd145dmz03l",
    image:
      "https://cdn1.smartprix.com/rx-ikxlb2y4X-w103-h125/yeti-cube-40-l-tower.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd145dmz03l",
    pricef: "4,099",
    pricea: "5,990",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12H7JRWPXex6w6._Gy1CdjDahrhAgTYBOr3Uh7IaUYcHPcTcUs8a3crY3cAssTa3h-hDh8H4l4XHaH6bribhmBYihkj9w7dZj.dxlfxbJ-hrhhaFhrhrhhacBrWahrhrBi5H4inyPZThrFB5mUg3BJJKf7IA ",
    amazon:
      "https://l.smartprix.com/l?k=12Ue.noF3eCyOSbRVUtUQ-RghrhArnrysuhyihDRPRJKSdbJzh-hrhhaFhrhrhhacBrWahrhrBi5H4inyPZThrFB56Qr21PPDVlA8 ",
    croma: " ",
    selection1: [
      {
        name: "Tower Air Cooler",
      },
      {
        name: "40 L Tank Capacity",
      },
      {
        name: "9.29 m² Coverage Area",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
    ],
    selection2: [
      {
        name: "2600 RPM Speed",
      },
      {
        name: "16 ft Air Throw",
      },
      {
        name: "4 Castor Wheels",
      },
      {
        name: "Auto Louver Movement",
      },
    ],
  },
  {
    name: "Novamax Rambo JR 75L Air Cooler",
    brand: "Novamax",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1iyjrrlkw",
    image:
      "https://cdn1.smartprix.com/rx-iySa4Wuut-w103-h125/novamax-rambo-jr-75l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1iyjrrlkw",
    pricef: "",
    pricea: "13,990",
    pricec: "",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12ovjU0Dn7A9j4-qBqP7leWUo.hrhArnrysuhyihDRPRwVHxzK1h-hrhhaFhrhrhhacBrWahrhrBi5YIQ33TO8hrFB5aIxEliTT2J1l ",
    croma: " ",
    selection1: [
      {
        name: "Desert Air Cooler",
      },
      {
        name: "75 L Tank Capacity",
      },
      {
        name: "83.61 m² Coverage Area",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
    ],
    selection2: [
      {
        name: "Inverter Compatible",
      },
      {
        name: "1400 RPM Speed",
      },
      {
        name: "4 Way Air Deflection Air Deflection",
      },
      {
        name: "80 ft Air Throw",
      },
    ],
  },
  {
    name: "Moonair Sumo 65 L Desert Air Cooler",
    brand: " Moonair",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd14n0fdr8z",
    image:
      "https://cdn1.smartprix.com/rx-icfAhqI46-w103-h125/moonair-sumo-65-l-de.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd14n0fdr8z",
    pricea: "5,999",
    pricef: "",
    pricec: "",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12Ue.noN2eb5ZuY5bYDs8g1VhrhArnrysuhyihDRPlz_15Jedh-hrhhaFhrhrhhacBrWahrhrBi5HuPgi3XyhrFB5g-RNbptHTDtf ",
    croma: " ",
    selection1: [
      {
        name: "Desert Air Cooler",
      },
      {
        name: "65 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "Inverter Compatible",
      },
    ],
    selection2: [
      {
        name: "4 Ways Air Deflection",
      },
      {
        name: "4 Castor Wheels",
      },
      {
        name: "1 year",
      },
    ],
  },
  {
    name: "Crompton Optimus 100 L Desert Air Cooler",
    brand: "Crompton ",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1sh7m9dgg",
    image:
      "https://cdn1.smartprix.com/rx-iH0xlIHhL-w103-h125/crompton-optimus-100.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1sh7m9dgg",
    pricef: "13,899",
    pricea: "",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12Ri5QBEdZY5tYvtGlisA-R~RhrhAgTYBOr3Uh7A3snBUsuc5PPcTciaFa3UcrY3cAssTa3cnsUs3cshCTsricB3sUaAUh3crCUsci3rYuh-hDh86H4ZHP6bo5oG6hmBYihkj9wx.HXS7f11d111hrhhaFhrhrhhacBrWahrhrBi5FtGnliWWhrFB5mjJ6TR61SP.V ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Desert Air Cooler",
      },
      {
        name: "100 L Tank Capacity",
      },
      {
        name: "55.74 m² Coverage Area",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
    ],
    selection2: [
      {
        name: "5 Star Energy Rating",
      },
      {
        name: "2000 RPM Speed",
      },
      {
        name: "4 Ways Air Deflection",
      },
      {
        name: "50 ft Air Throw",
      },
    ],
  },
  {
    name: "Croma AZ55 55 L Tower Air Cooler",
    brand: " Croma",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd11hldim1b",
    image:
      "https://cdn1.smartprix.com/rx-i3U48wemB-w103-h125/croma-az55-55-l-towe.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd11hldim1b",
    pricef: "",
    pricea: "",
    pricec: "6,990",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12UekxRApiKg_PkoaGKwt73thrhAA3snrh7A3snrcry44c44cTYU3aFcUs8a3crY3cAssTa3cruUYc6rAhUYrTcthFIAsn6cBricUruOcA3TA44T3AroXH4P5chhgcW3aIch-hDobb4HPhrhhaFhrhrhhacBrWahrhrBi55tTiYn56hrFB5BHn7.OX~~peF ",
    selection1: [
      {
        name: "Tower Air Cooler",
      },
      {
        name: "55 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "Inverter Compatible",
      },
    ],
    selection2: [
      {
        name: "1350 RPM Speed",
      },
      {
        name: "30 ft Air Throw",
      },
      {
        name: "Ice Chamber, Auto Drain",
      },
      {
        name: "4 Castor Wheels",
      },
    ],
  },
  {
    name: "Symphony Winter 80B 80L Personal Air Cooler",
    brand: "Symphony ",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1ddmjsinj",
    image:
      "https://cdn1.smartprix.com/rx-itv0OFlNW-w103-h125/symphony-winter-80b.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ddmjsinj",
    pricef: "18,490",
    pricea: "19,999",
    pricec: "19,999",
    flipkart:
      "https://l.smartprix.com/l?k=12Ri5QBEdZY_NUiPZ3wkfPPJVhrhAgTYBOr3Uh7FInBtsuIcXPcTc3ssncBa3FsurTcrY3cAssTa3h-hDh8XXoPAAZaGHX4XhmBYihkj9w71ol.~pSR-Z11hrhhaFhrhrhhacBrWahrhrBi5iinQFYuQhrFB5rBrnn6oPPQE. ",
    amazon:
      "https://l.smartprix.com/l?k=12ovjU0D8sFH-mks_yz2NmEy1BhrhArnrysuhyihDRPRe_wR470h-hrhhaFhrhrhhacBrWahrhrBi5iinQFYuQhrFB55_06_emftUuW ",
    croma:
      "https://l.smartprix.com/l?k=12ovjk4kONB3qBb4YvUip-gqKnhrhAA3snrh7FInBtsuIc8YuhUcXP6cXPcTYU3aFciaFa3UcrY3cAssTa3c6TiAcUaAtusTsWIcrAsUsHP4chhgch-hDoGPPHbhrhhaFhrhrhhacBrWahrhrBi5iinQFYuQhrFB5TliJA0TyPiDy ",
    selection1: [
      {
        name: "Room Air Cooler",
      },
      {
        name: "80 L Tank Capacity",
      },
      {
        name: "14.49 m² Coverage Area",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
    ],
    selection2: [
      {
        name: "Inverter Compatible, Remote Control",
      },
      {
        name: "4 Ways Air Deflection",
      },
      {
        name: "10 ft Air Throw",
      },
      {
        name: "Ice Chamber, Auto Fill",
      },
    ],
  },
  {
    name: "Symphony Siesta 95 XL 95 L Desert Air Cooler",
    brand: " Symphony",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1l9j2giti",
    image:
      "https://cdn1.smartprix.com/rx-iS1nGWRVI-w103-h125/symphony-siesta-95-x.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1l9j2giti",
    pricef: "11,591",
    pricea: "12,379",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12Ri5QBEdZPJXP4vAuJmQBygbhrhAgTYBOr3Uh7FInBtsuIcl4cTciaFa3UcrY3cAssTa3h-hDh8g656a6barbo4bhmBYihkj9w7d77~dbezeKe4hrhhaFhrhrhhacBrWahrhrBi5TlQoWYUYhrFB5rSYUp1b1VG6q ",
    amazon:
      "https://l.smartprix.com/l?k=12ovjU0D3_QBmFKxvbQdtmf1I_hrhArnrysuhyihDRPR_17SG_oh-hrhhaFhrhrhhacBrWahrhrBi5TlQoWYUYhrFB5ogUAsoTkftGZ ",
    croma: " ",
    selection1: [
      {
        name: "Desert Air Cooler",
      },
      {
        name: "95 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "Inverter Compatible",
      },
    ],
    selection2: [
      {
        name: "Ice Chamber, Auto Drain",
      },
      {
        name: "4 Castor Wheels",
      },
      {
        name: "1 year",
      },
    ],
  },
  {
    name: "Voltas Delite 36 L Personal Air Cooler",
    brand: " Voltas",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd125y3jaxv",
    image:
      "https://cdn1.smartprix.com/rx-imG0w27E4-w103-h125/voltas-delite-36-l-p.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd125y3jaxv",
    pricef: "5,999",
    pricea: "",
    pricec: "",
    flipkart:
      "https://l.smartprix.com/l?k=12H7JRWPXvyvN93307Oy4FCIhrhAgTYBOr3Uh72sTUrFcZbcTc3ssncBa3FsurTcrY3cAssTa3h-hDh8iZGioZo4lgX6AhmBYihkj9w7dXVj.d1j~bfJhrhhaFhrhrhhacBrWahrhrBi5o4IZQrD2hrFB5e-WifysXJY-b",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Room Air Cooler",
      },
      {
        name: "36 L Tank Capacity",
      },
      {
        name: "33.91 m² Coverage Area",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
    ],
    selection2: [
      {
        name: "Inverter Compatible",
      },
      {
        name: "1350 RPM Speed",
      },
      {
        name: "4 Ways Air Deflection",
      },
      {
        name: "23 ft Air Throw",
      },
    ],
  },
  {
    name: "Croma AZ24 24 L Personal Air Cooler",
    brand: "Croma ",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1em77xwwi",
    image:
      "https://cdn1.smartprix.com/rx-ihin8p2i4-w103-h125/croma-az24-24-l-pers.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1em77xwwi",
    pricef: "3,994",
    pricea: "",
    pricec: "",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12UekxRApiKg~Jgzmk~i6u3QhrhAA3snrh7A3snrcryoHcoHcTYU3aFcBa3FsurTcrY3cAssTa3cruUYc6rAhUYrTcthFIAsn6cBricUruOcA3TAoHT3Ar5G4PP5chhgcW3aIch-hDobb4b4hrhhaFhrhrhhacBrWahrhrBi5anGGD88YhrFB5.zoSP~N3ZyQw ",
    selection1: [
      {
        name: "Room Air Cooler",
      },
      {
        name: "24 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "Inverter Compatible",
      },
    ],
    selection2: [
      {
        name: "1300 RPM Speed",
      },
      {
        name: "27 ft Air Throw",
      },
      {
        name: "Ice Chamber, Auto Drain",
      },
      {
        name: "Dust Filter",
      },
    ],
  },
  {
    name: "Croma AZ40 40 L Personal Air Cooler",
    brand: " Croma",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd1kkg47lav",
    image:
      "https://cdn1.smartprix.com/rx-i1MEzxY11-w103-h125/croma-az40-40-l-pers.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1kkg47lav",
    pricef: "",
    pricea: "",
    pricec: "3,994",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12UekxRApiKg~Jgzmk~i6u3QhrhAA3snrh7A3snrcryHPcHPcTYU3aFcBa3FsurTcrY3cAssTa3cruUYc6rAhUYrTcthFIAsn6cBricUruOcA3TAHPT3Ar5G4PP5chhgcW3aIch-hDobb4bXhrhhaFhrhrhhacBrWahrhrBi5OOWHGTr2hrFB5KjJ.RTq3ENek ",
    selection1: [
      {
        name: "Room Air Cooler",
      },
      {
        name: "40 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "Inverter Compatible",
      },
    ],
    selection2: [
      {
        name: "1300 RPM Speed",
      },
      {
        name: "4 Ways Air Deflection",
      },
      {
        name: "27 ft Air Throw",
      },
      {
        name: "Ice Chamber, Auto Drain",
      },
    ],
  },
  {
    name: "Orient Electric Ministorm 22L Personal Air Cooler",
    brand: "Orient ",
    category: "Cooler",
    url: "https://www.smartprix.com/nf/pd/pd13wkgd6qj",
    image:
      "https://cdn1.smartprix.com/rx-ijLhwhR9z-w103-h125/orient-electric-prem.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd13wkgd6qj",
    pricef: "9,090",
    pricea: "",
    pricec: "",
    flipkart:
      " https://l.smartprix.com/l?k=12H7JRWPXvyvDv06Z_dUwC-qhrhAgTYBOr3Uh7s3YauUcaTaAU3YAcoocTc3ssncBa3FsurTcrY3cAssTa3h-hDh8P6ZgZabA5iZ4GhmBYihkj9w7wxzdx7veXVG_hrhhaFhrhrhhacBrWahrhrBi5I3buAbIIhrFB5~BjWlo5441TI",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Room Air Cooler",
      },
      {
        name: "26 L Tank Capacity",
      },
      {
        name: "Honeycomb Cooling Pads",
      },
      {
        name: "Inverter Compatible",
      },
    ],
    selection2: [
      {
        name: "24.93 ft Air Throw",
      },
      {
        name: "Ice Chamber",
      },
      {
        name: "Dust Filter",
      },
      {
        name: "4 Castor Wheels",
      },
    ],
  },
  {
    name: "Huawei Band 8 Fitness Band",
    brand: " Huawei",
    category: "Fitness",
    url: "https://www.smartprix.com/fitness_bands/huawei-band-8-fitness-band-ppd1xgyf2j5a",
    pricef: "2,849",
    pricea: "42,499",
    pricec: "45,490",
    image:
      "https://cdn1.smartprix.com/rx-i5ibE457O-w103-h125/huawei-band-8-fitnes.jpg",
    image_url:
      "https://www.smartprix.com/fitness_bands/huawei-band-8-fitness-band-ppd1xgyf2j5a",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "1.47 in, 194 x 368 pixels, Touch Display",
      },
      {
        name: "Water Resistant 50 m, 5ATM",
      },
      {
        name: "Dust Proof",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor, Calorie Count, Sleep Monitor",
      },
      {
        name: "Step Count, Pedometer",
      },
      {
        name: "AMOLED Display",
      },
      {
        name: "HarmonyOS 2 and above, Android 6.0 and above, iOS 9.0 and above Compatible",
      },
    ],
  },
  {
    name: "Xiaomi Mi Band 7",
    brand: " Xiaomi",
    category: "Fitness",
    url: "https://www.smartprix.com/fitness_bands/xiaomi-mi-band-7-ppd1mkz3wdwg",
    pricef: "2,799",
    pricea: "42,499",
    pricec: "45,490",
    image:
      "https://cdn1.smartprix.com/rx-iDzDzAADz-w103-h125/xiaomi-mi-band-7.jpg",
    image_url:
      "https://www.smartprix.com/fitness_bands/xiaomi-mi-band-7-ppd1mkz3wdwg",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.2",
      },
      {
        name: "1.62 in, 192 x 490 pixels, Touch Display",
      },
      {
        name: "Water Resistant 50 m, IP65",
      },
      {
        name: "Scratch Resistant, Dust Proof",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor, Calorie Count, Sleep Monitor",
      },
      {
        name: "Step Count",
      },
      {
        name: "AMOLED Display",
      },
      {
        name: "Android v4.4, iOS 9.0 or above Compatible",
      },
    ],
  },
  {
    name: "Xiaomi Mi Band 8 NFC",
    brand: " Xiaomi",
    category: "Fitness",
    url: "https://www.smartprix.com/fitness_bands/xiaomi-mi-band-8-nfc-ppd1oqd2fh7o",
    pricef: "3,599",
    pricea: "42,499",
    pricec: "45,490",
    image:
      "https://cdn1.smartprix.com/rx-ipxHq1Bzq-w103-h125/xiaomi-mi-band-8-nfc.jpg",
    image_url:
      "https://www.smartprix.com/fitness_bands/xiaomi-mi-band-8-nfc-ppd1oqd2fh7o",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.1",
      },
      {
        name: "1.62 in, 192 x 490 pixels, Touch Display",
      },
      {
        name: "Water Resistant 50 m, IP65",
      },
      {
        name: "Scratch Resistant, Dust Proof",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor, Calorie Count, Sleep Monitor",
      },
      {
        name: "Step Count",
      },
      {
        name: "AMOLED Display",
      },
      {
        name: "Android v4.4, iOS 9.0 or above Compatible",
      },
    ],
  },
  {
    name: "Amazfit Band 8 Fitness Band",
    brand: "Amazfit ",
    category: "Fitness",
    url: "https://www.smartprix.com/fitness_bands/amazfit-band-8-fitness-band-ppd1856dpy18",
    pricef: "6,999",
    pricea: "42,499",
    pricec: "45,490",
    image:
      "https://cdn1.smartprix.com/rx-ir9bhPo1p-w103-h125/amazfit-band-8-fitne.jpg",
    image_url:
      "https://www.smartprix.com/fitness_bands/amazfit-band-8-fitness-band-ppd1856dpy18",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3",
      },
      {
        name: "1.5 in, 194 x 368 pixels, Touch Display",
      },
      {
        name: "Water Resistant 50 m, IP68",
      },
      {
        name: "Dust Proof",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor, Calorie Count, Sleep Monitor",
      },
      {
        name: "Step Count, Pedometer, Altimeter",
      },
      {
        name: "AMOLED Display",
      },
      {
        name: "Android, iOS Compatible",
      },
    ],
  },
  {
    name: "Honor Band 7",
    brand: "Honor ",
    category: "Fitness",
    url: "https://www.smartprix.com/fitness_bands/honor-band-7-ppd131iptx0s",
    pricef: "2,799",
    pricea: "42,499",
    pricec: "45,490",
    image:
      "https://cdn1.smartprix.com/rx-i4xOdw3az-w103-h125/honor-band-7.jpg",
    image_url:
      "https://www.smartprix.com/fitness_bands/honor-band-7-ppd131iptx0s",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "1.47 in, 194 x 368 pixels, Touch Display",
      },
      {
        name: "Water Resistant 50 m, 5ATM",
      },
      {
        name: "Dust Proof",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor, Calorie Count, Sleep Monitor",
      },
      {
        name: "Step Count, Pedometer",
      },
      {
        name: "OLED Display",
      },
      {
        name: "Android 6.0 or later, iOS 9.0 or later Compatible",
      },
    ],
  },
  {
    name: "Xiaomi Redmi Band 2",
    brand: "Xiaomi ",
    category: "Fitness",
    url: "https://www.smartprix.com/fitness_bands/xiaomi-redmi-band-2-ppd1tsz0ku26",
    pricef: "1,999",
    pricea: "42,499",
    pricec: "45,490",
    image:
      "https://cdn1.smartprix.com/rx-iZIENf8E8-w103-h125/xiaomi-redmi-band-2.jpg",
    image_url:
      "https://www.smartprix.com/fitness_bands/xiaomi-redmi-band-2-ppd1tsz0ku26",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "1.47 in, 172 x 320 pixels, Touch Display",
      },
      {
        name: "Water Resistant",
      },
      {
        name: "Dust Proof",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor, Calorie Count, Sleep Monitor",
      },
      {
        name: "Step Count, Altimeter",
      },
      {
        name: "TFT Display",
      },
      {
        name: "Android, iOS Compatible",
      },
    ],
  },
  {
    name: "Fitbit Charge 6 Fitness Band",
    brand: "Fitbit ",
    category: "Fitness",
    url: "https://www.smartprix.com/fitness_bands/fitbit-charge-6-fitness-band-ppd10ccze2vi",
    pricef: "13,999",
    pricea: "42,499",
    pricec: "45,490",
    image:
      "https://cdn1.smartprix.com/rx-iJSFZHXmG-w103-h125/fitbit-charge-6-fitn.jpg",
    image_url:
      "https://www.smartprix.com/fitness_bands/fitbit-charge-6-fitness-band-ppd10ccze2vi",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth",
      },
      {
        name: "Touch Display",
      },
      {
        name: "Water Resistant",
      },
      {
        name: "Shock Resistant",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor, Calorie Count, Sleep Monitor",
      },
      {
        name: "Step Count, Pedometer",
      },
      {
        name: "Android & iOS Compatible",
      },
      {
        name: "Elastomer Build",
      },
    ],
  },
  {
    name: "Noise NoiseFit Halo Smartwatch",
    brand: "Noise ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/noise-noisefit-halo-smartwatch-ppd1qx27s135",
    image:
      "https://cdn1.smartprix.com/rx-ipoHdFFo7-w103-h125/noise-noisefit-halo.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/noise-noisefit-halo-smartwatch-ppd1qx27s135",
    pricef: "3,499",
    pricea: "2,499",
    pricec: "5,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.43 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Hunter Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-hunter-smartwatch-ppd12ddg99bz",
    image:
      "https://cdn1.smartprix.com/rx-ie7Gs3ac5-w103-h125/fire-boltt-hunter-sm.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-hunter-smartwatch-ppd12ddg99bz",
    pricef: "1,699",
    pricea: "2,499",
    pricec: "1,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "2.01 inches Touch Display",
      },
      {
        name: "Water Resistant, 1 m, IP67",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
      {
        name: "6 days Battery",
      },
    ],
  },
  {
    name: "Amazfit Cheetah Smartwatch",
    brand: "Amazfit ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/amazfit-cheetah-smartwatch-ppd1bn446k5v",
    image:
      "https://cdn1.smartprix.com/rx-ivlqxHL4N-w103-h125/amazfit-cheetah-smar.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/amazfit-cheetah-smartwatch-ppd1bn446k5v",
    pricef: "7,499",
    pricea: "4,499",
    pricec: "4,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3, GPS",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.43 inches Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor, Blood Pressure Monitor",
      },
      {
        name: "Altimeter, Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Noise ColorFit Ultra 3 Smartwatch",
    brand: "Noise ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/noise-colorfit-ultra-3-smartwatch-ppd1xsm4cowr",
    image:
      "https://cdn1.smartprix.com/rx-ioeRR8gSC-w103-h125/noise-colorfit-ultra.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/noise-colorfit-ultra-3-smartwatch-ppd1xsm4cowr",
    pricef: "4,499",
    pricea: "4,499",
    pricec: "4,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.96 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Sphere Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-sphere-smartwatch-ppd1hgcdujg2",
    image:
      "https://cdn1.smartprix.com/rx-idPCqd9rz-w103-h125/fire-boltt-sphere-sm.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-sphere-smartwatch-ppd1hgcdujg2",
    pricef: "2,499",
    pricea: "2,499",
    pricec: "5,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.6 inches Touch Display",
      },
      {
        name: "Water Resistant, 1 m, IP68",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant, Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Supernova Smartwatch",
    brand: " ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-supernova-smartwatch-ppd18evgaxfz",
    image:
      "https://cdn1.smartprix.com/rx-i8e4GZvVM-w103-h125/fire-boltt-supernova.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-supernova-smartwatch-ppd18evgaxfz",
    pricef: "2,699",
    pricea: "2,499",
    pricec: "5,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.78 inches Touch Display",
      },
      {
        name: "Water Resistant, 1 m, IP67",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Xiaomi Pad 6 Tablet",
    brand: "Xiaomi ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/xiaomi-pad-6-tablet-wi-fi-128gb-ppd12f1qypqj",
    image:
      "https://cdn1.smartprix.com/rx-iQwExqBew-w103-h125/xiaomi-pad-6-tablet.jpg",
    image_url:
      "https://www.smartprix.com/tablets/xiaomi-pad-6-tablet-wi-fi-128gb-ppd12f1qypqj",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Wi-Fi",
      },
      {
        name: "No 3G",
      },
      {
        name: "Snapdragon 870, Octa Core, 3.2 GHz Processor",
      },
      {
        name: "6 GB RAM, 128 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "8840 mAh Battery with 33W Fast Charging",
      },
      {
        name: "11 inches, 1800 x 2880 px, 144 Hz Display",
      },
      {
        name: "13 MP Rear & 8 MP Front Camera",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Xiaomi Pad 6 Pro Tablet",
    brand: "Xiaomi ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/xiaomi-pad-6-pro-tablet-ppd1z19z38ym",
    image:
      "https://cdn1.smartprix.com/rx-iCOfK7z6T-w103-h125/xiaomi-pad-6-pro-tab.jpg",
    image_url:
      "https://www.smartprix.com/tablets/xiaomi-pad-6-pro-tablet-ppd1z19z38ym",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Wi-Fi",
      },
      {
        name: "No 3G",
      },
      {
        name: "Snapdragon 8+ Gen1, Octa Core, 3.19 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "8600 mAh Battery with 67W Fast Charging",
      },
      {
        name: "11 inches, 1800 x 2880 px, 144 Hz Display",
      },
      {
        name: "50 MP + 2 MP Dual Rear & 20 MP Front Camera",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Samsung Galaxy Tab A9 Tablet",
    brand: "Samsung ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/samsung-galaxy-tab-a9-tablet-ppd1x6ta8hpv",
    image:
      "https://cdn1.smartprix.com/rx-iemNikZaC-w103-h125/samsung-galaxy-tab-a.jpg",
    image_url:
      "https://www.smartprix.com/tablets/samsung-galaxy-tab-a9-tablet-ppd1x6ta8hpv",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Single Sim",
      },
      {
        name: "3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Dimensity 700 5G, Octa Core, 2.2 GHz Processor",
      },
      {
        name: "4 GB RAM, 64 GB inbuilt",
      },
    ],
    selection3: [
      {
        name: "8160 mAh Battery with 25W Fast Charging",
      },
      {
        name: "10.58 inches, 1200 x 2000 px, 120 Hz Display",
      },
      {
        name: "13 MP Rear & 5 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
    ],
  },
  {
    name: "Xiaomi Pad 6 Tablet (8GB RAM + 256GB)",
    brand: " Xiaomi",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/xiaomi-pad-6-tablet-8gb-ram-256gb-ppd1apei9st9",
    image:
      "https://cdn1.smartprix.com/rx-i8Nq2WSEZ-w103-h125/xiaomi-pad-6-tablet.jpg",
    image_url:
      "https://www.smartprix.com/tablets/xiaomi-pad-6-tablet-8gb-ram-256gb-ppd1apei9st9",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Wi-Fi",
      },
      {
        name: "No 3G",
      },
      {
        name: "Snapdragon 870, Octa Core, 3.2 GHz Processor",
      },
      {
        name: "8 GB RAM, 256 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "8840 mAh Battery with 33W Fast Charging",
      },
      {
        name: "11 inches, 1800 x 2880 px, 144 Hz Display",
      },
      {
        name: "13 MP Rear & 8 MP Front Camera",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Samsung Galaxy Tab S9 Tablet",
    brand: "Samsung ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/samsung-galaxy-tab-s9-tablet-ppd1cgzpr3gi",
    image:
      "https://cdn1.smartprix.com/rx-iDgHrNUWr-w103-h125/samsung-galaxy-tab-s.jpg",
    image_url:
      "https://www.smartprix.com/tablets/samsung-galaxy-tab-s9-tablet-ppd1cgzpr3gi",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Single Sim",
      },
      {
        name: "3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Snapdragon 8 Gen2, Octa Core, 3.2 GHz Processor",
      },
      {
        name: "12 GB RAM, 256 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "11200 mAh Battery with 45W Fast Charging",
      },
      {
        name: "14.8 inches, 1848 x 2960 px, 120 Hz Display",
      },
      {
        name: "13 MP + 6 MP Dual Rear & 12 MP + 12 MP Dual Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
    ],
  },
  {
    name: "Realme Pad X Tablet (6GB RAM+ 128GB)",
    brand: "Realme",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/realme-pad-x-tablet-6gb-ram-128gb-ppd1mj7dchuo",
    image:
      "https://cdn1.smartprix.com/rx-iicXW8d3O-w103-h125/realme-pad-x-tablet.jpg",
    image_url:
      "https://www.smartprix.com/tablets/realme-pad-x-tablet-6gb-ram-128gb-ppd1mj7dchuo",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim",
      },
      {
        name: "3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Snapdragon 695, Octa Core, 2.2 GHz Processor",
      },
      {
        name: "6 GB RAM, 128 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "8340 mAh Battery with 33W Fast Charging",
      },
      {
        name: "10.95 inches, 1200 x 2000 px Display",
      },
      {
        name: "13 MP Rear & 8 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 512 GB",
      },
    ],
  },
  {
    name: "Realme Pad Mini Tablet (6GB RAM + 128GB)",
    brand: " Realme",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/realme-pad-mini-tablet-6gb-ram-128gb-ppd18e9oybum",
    image:
      "https://cdn1.smartprix.com/rx-iZgmv9ZqT-w103-h125/realme-pad-mini-tabl.jpg",
    image_url:
      "https://www.smartprix.com/tablets/realme-pad-mini-tablet-6gb-ram-128gb-ppd18e9oybum",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim",
      },
      {
        name: "3G, 4G, VoLTE, Wi-Fi",
      },
      {
        name: "Tiger T616, Octa Core, 2 GHz Processor",
      },
      {
        name: "6 GB RAM, 128 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "6400 mAh Battery with 18W Fast Charging",
      },
      {
        name: "8.68 inches, 800 x 1340 px Display",
      },
      {
        name: "8 MP Rear & 5 MP Front Camera",
      },
      {
        name: "Memory Card (Hybrid), upto 1 TB",
      },
    ],
  },
  {
    name: "Xiaomi Redmi Pad (6GB RAM + 128GB)",
    brand: "Xiaomi ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/xiaomi-redmi-pad-6gb-ram-128gb-ppd1axkv9shg",
    image:
      "https://cdn1.smartprix.com/rx-ijZ9h7Ava-w103-h125/xiaomi-redmi-pad-6gb.jpg",
    image_url:
      "https://www.smartprix.com/tablets/xiaomi-redmi-pad-6gb-ram-128gb-ppd1axkv9shg",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Wi-Fi",
      },
      {
        name: "No 3G",
      },
      {
        name: "Helio G99, Octa Core, 2.2 GHz Processor",
      },
      {
        name: "6 GB RAM, 128 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "8000 mAh Battery with 18W Fast Charging",
      },
      {
        name: "10.61 inches, 1200 x 2000 px, 90 Hz Display",
      },
      {
        name: "8 MP Rear & 8 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
    ],
  },
  {
    name: "Nubia Redmagic Gaming Tablet",
    brand: "Nubia ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/nubia-redmagic-gaming-tablet-ppd16sror36c",
    image:
      "https://cdn1.smartprix.com/rx-ik0JtRaoF-w103-h125/nubia-redmagic-gamin.jpg",
    image_url:
      "https://www.smartprix.com/tablets/nubia-redmagic-gaming-tablet-ppd16sror36c",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "3G, 4G, 5G, Wi-Fi",
      },
      {
        name: "Snapdragon 8+ Gen1, Octa Core, 3.2 GHz Processor",
      },
      {
        name: "12 GB RAM, 256 GB inbuilt",
      },
      {
        name: "10000 mAh Battery with 80W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "12.1 inches, 1600 x 2560 px, 144 Hz Display",
      },
      {
        name: "13 MP Rear & 16 MP Front Camera",
      },
      {
        name: "Android v13",
      },
      {
        name: "No FM Radio",
      },
    ],
  },
  {
    name: "Honor Pad X8 Pro",
    brand: " Honor",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/honor-pad-x8-pro-ppd16pgkoug1",
    image:
      "https://cdn1.smartprix.com/rx-it5LJ0Kl9-w103-h125/honor-pad-x8-pro.jpg",
    image_url:
      "https://www.smartprix.com/tablets/honor-pad-x8-pro-ppd16pgkoug1",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Wi-Fi",
      },
      {
        name: "No 3G",
      },
      {
        name: "Snapdragon 685, Octa Core, 2.8 GHz Processor",
      },
      {
        name: "4 GB RAM, 128 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "7250 mAh Battery with Fast Charging",
      },
      {
        name: "11.5 inches, 2000 x 1200 px, 120 Hz Display",
      },
      {
        name: "5 MP Rear & 5 MP Front Camera",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Realme Pad 5G Tablet",
    brand: "Realme ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/realme-pad-5g-tablet-ppd10y99lm6d",
    image:
      "https://cdn1.smartprix.com/rx-iJYkF5Scd-w103-h125/realme-pad-5g-tablet.jpg",
    image_url:
      "https://www.smartprix.com/tablets/realme-pad-5g-tablet-ppd10y99lm6d",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim",
      },
      {
        name: "3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Snapdragon 870, Octa Core, 3.2 GHz Processor",
      },
      {
        name: "8 GB RAM, 256 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "8360 mAh Battery with 18W Fast Charging",
      },
      {
        name: "10.4 inches, 1080 x 2560 px, 120 Hz Display",
      },
      {
        name: "8 MP Rear & 8 MP Front Camera",
      },
      {
        name: "Memory Card Supported",
      },
    ],
  },
  {
    name: "Samsung Galaxy Tab A7 Lite",
    brand: "Samsung ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/samsung-galaxy-tab-a7-lite-ppd1kunav0mh",
    image:
      "https://cdn1.smartprix.com/rx-i0t6mgQx6-w103-h125/samsung-galaxy-tab-a.jpg",
    image_url:
      "https://www.smartprix.com/tablets/samsung-galaxy-tab-a7-lite-ppd1kunav0mh",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Single Sim",
      },
      {
        name: "3G, 4G, VoLTE, Wi-Fi",
      },
      {
        name: "Helio P22T, Octa Core, 2.4 GHz Processor",
      },
      {
        name: "3 GB RAM, 32 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "5100 mAh Battery with 15W Fast Charging",
      },
      {
        name: "8.7 inches, 800 x 1340 px Display",
      },
      {
        name: "8 MP Rear & 2 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
    ],
  },
  {
    name: "Google Pixel Tablet",
    brand: "Google ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/google-pixel-tablet-ppd1yc180e3f",
    image:
      "https://cdn1.smartprix.com/rx-iGR0WINig-w103-h125/google-pixel-tablet.jpg",
    image_url:
      "https://www.smartprix.com/tablets/google-pixel-tablet-ppd1yc180e3f",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Wi-Fi",
      },
      {
        name: "No 3G",
      },
      {
        name: "Tensor G2, Octa Core, 2.85 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "10.95 inches, 1600 x 2560 px, 90 Hz Display",
      },
      {
        name: "8 MP Rear & 8 MP Front Camera",
      },
      {
        name: "Android v13",
      },
      {
        name: "No FM Radio",
      },
    ],
  },
  {
    name: "Samsung Galaxy Tab A8 10.5 2021 Tablet (4GB RAM + 64GB)",
    brand: " Samsung",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/samsung-galaxy-tab-a8-10-5-2021-tablet-4gb-ppd114i67b81",
    image:
      "https://cdn1.smartprix.com/rx-i8aobHEon-w103-h125/samsung-galaxy-tab-a.jpg",
    image_url:
      "https://www.smartprix.com/tablets/samsung-galaxy-tab-a8-10-5-2021-tablet-4gb-ppd114i67b81",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Single Sim",
      },
      {
        name: "3G, 4G, VoLTE, Wi-Fi",
      },
      {
        name: "Tiger T618, Octa Core, 2 GHz Processor",
      },
      {
        name: "4 GB RAM, 64 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "7040 mAh Battery with 15W Fast Charging",
      },
      {
        name: "10.5 inches, 1200 x 1920 px Display",
      },
      {
        name: "8 MP Rear & 5 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
    ],
    price: "19,499",
  },
  {
    name: "Realme Pad Tablet (4GB RAM + 64GB)",
    brand: " Realme",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/realme-pad-tablet-4gb-ram-64gb-ppd1avj5fu8z",
    image:
      "https://cdn1.smartprix.com/rx-iaPB34yXP-w103-h125/realme-pad-tablet-4g.jpg",
    image_url:
      "https://www.smartprix.com/tablets/realme-pad-tablet-4gb-ram-64gb-ppd1avj5fu8z",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim",
      },
      {
        name: "3G, 4G, VoLTE, Wi-Fi",
      },
      {
        name: "Helio G80, Octa Core, 2 GHz Processor",
      },
      {
        name: "4 GB RAM, 64 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "7100 mAh Battery with 18W Fast Charging",
      },
      {
        name: "10.4 inches, 1200 x 2000 px Display",
      },
      {
        name: "8 MP Rear & 8 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
    ],
  },
  {
    name: "Realme Pad Tablet",
    brand: " ",
    category: "Tablet",
    url: "https://www.smartprix.com/tablets/realme-pad-tablet-ppd1bavaxel6",
    image:
      "https://cdn1.smartprix.com/rx-imDNpnwzd-w103-h125/realme-pad-tablet.jpg",
    image_url:
      "https://www.smartprix.com/tablets/realme-pad-tablet-ppd1bavaxel6",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim",
      },
      {
        name: "3G, 4G, VoLTE, Wi-Fi",
      },
      {
        name: "Helio G80, Octa Core, 2 GHz Processor",
      },
      {
        name: "3 GB RAM, 32 GB inbuilt",
      },
    ],
    selection2: [
      {
        name: "7100 mAh Battery with 18W Fast Charging",
      },
      {
        name: "10.4 inches, 1200 x 2000 px Display",
      },
      {
        name: "8 MP Rear & 8 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
    ],
  },
  {
    name: "Motorola Envision X 55 inch Ultra HD 4K Smart QLED TV (55UHDGQMWS5Q)",
    brand: "Motorola ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/motorola-envision-x-55-inch-ultra-hd-4k-smart-ppd1ke2po25s",
    image:
      "https://cdn1.smartprix.com/rx-iu4tDpLSx-w103-h125/motorola-envision-x.jpg",
    image_url:
      "https://www.smartprix.com/tvs/motorola-envision-x-55-inch-ultra-hd-4k-smart-ppd1ke2po25s",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "55 in, QLED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "MediaTek Processor, 2 GB RAM",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 2 USB Ports",
      },
    ],
    pricef: "35,999",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Samsung UA32T4380AKXXL 32-inch HD Ready Smart LED TV",
    brand: "Samsung ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/samsung-ua32t4380akxxl-32-inch-hd-ready-smart-ppd1j6msilxs",
    image:
      "https://cdn1.smartprix.com/rx-i2VtbWzA1-w103-h125/samsung-ua32t4380akx.jpg",
    image_url:
      "https://www.smartprix.com/tvs/samsung-ua32t4380akxxl-32-inch-hd-ready-smart-ppd1j6msilxs",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "32 in, LED TV",
      },
      {
        name: "1366 x 768 pixels",
      },
      {
        name: "Wifi",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "2 HDMI Ports, 1 USB Ports",
      },
      {
        name: "Screen Mirroring / Miracast Support",
      },
      {
        name: "50 Hz",
      },
    ],
    pricef: "11,999",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Sony Bravia X82L 65 inch Ultra HD 4K Smart LED TV (KD-65X82L)",
    brand: "SONY ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/sony-bravia-x82l-65-inch-ultra-hd-4k-smart-ppd1fmijn58w",
    image:
      "https://cdn1.smartprix.com/rx-iWOdjXYgT-w103-h125/sony-bravia-x82l-65.jpg",
    image_url:
      "https://www.smartprix.com/tvs/sony-bravia-x82l-65-inch-ultra-hd-4k-smart-ppd1fmijn58w",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "65 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 10 W Output",
      },
      {
        name: "32 GB Storage",
      },
      {
        name: "4 HDMI Ports, 2 USB Ports",
      },
      {
        name: "Supports Apps & Games",
      },
    ],
    pricef: "1,18 ,000",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Motorola Envision X 65 inch Ultra HD 4K Smart QLED TV (65UHDGQMWS5Q)",
    brand: " Motorola",
    category: "TV",
    url: "https://www.smartprix.com/tvs/motorola-envision-x-65-inch-ultra-hd-4k-smart-ppd1hwn399l1",
    image:
      "https://cdn1.smartprix.com/rx-im2ewrr0f-w103-h125/motorola-envision-x.jpg",
    image_url:
      "https://www.smartprix.com/tvs/motorola-envision-x-65-inch-ultra-hd-4k-smart-ppd1hwn399l1",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "65 in, QLED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "MediaTek Processor, 2 GB RAM",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 2 USB Ports",
      },
    ],
    pricef: "49,999",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Sony Bravia X75L 55 inch Ultra HD 4K Smart LED TV (KD-55X75L)",
    brand: "SONY ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/sony-bravia-x75l-55-inch-ultra-hd-4k-smart-ppd1gu0b7w9d",
    image:
      "https://cdn1.smartprix.com/rx-ieot5Aa64-w103-h125/sony-bravia-x75l-55.jpg",
    image_url:
      "https://www.smartprix.com/tvs/sony-bravia-x75l-55-inch-ultra-hd-4k-smart-ppd1gu0b7w9d",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "55 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 10 W Output",
      },
      {
        name: "16 GB Storage",
      },
      {
        name: "3 HDMI Ports, 2 USB Ports",
      },
      {
        name: "Supports Apps & Games",
      },
    ],
    pricef: "67,430",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "TCL T6G 55 inch Ultra HD 4K Smart QLED TV (55T6G)",
    brand: " TCL",
    category: "TV",
    url: "https://www.smartprix.com/tvs/tcl-t6g-55-inch-ultra-hd-4k-smart-qled-tv-ppd13w1x9d06",
    image:
      "https://cdn1.smartprix.com/rx-iSODBSW9S-w103-h125/tcl-t6g-55-inch-ultr.jpg",
    image_url:
      "https://www.smartprix.com/tvs/tcl-t6g-55-inch-ultra-hd-4k-smart-qled-tv-ppd13w1x9d06",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "55 in, QLED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 30 W Output",
      },
      {
        name: "Quad Core Processor, 2 GB RAM, 16 GB Storage",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 1 USB Ports",
      },
    ],
    pricef: "54,990",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Samsung UA43AU7600KXXL 43 inch Ultra HD 4K Smart LED TV",
    brand: "Samsung ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/samsung-ua43au7600kxxl-43-inch-ultra-hd-4k-ppd17u64oq4i",
    image:
      "https://cdn1.smartprix.com/rx-iX4gILFT0-w103-h125/samsung-ua43au7600kx.jpg",
    image_url:
      "https://www.smartprix.com/tvs/samsung-ua43au7600kxxl-43-inch-ultra-hd-4k-ppd17u64oq4i",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "43 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "Crystal Processor 4K Processor",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 1 USB Ports",
      },
    ],
    pricef: "32,490",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Sony Bravia X70L 43 inch Ultra HD 4K Smart LED TV (KD-43X70L)",
    brand: "SONY ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/sony-bravia-x70l-43-inch-ultra-hd-4k-smart-ppd17r4c6t5b",
    image:
      "https://cdn1.smartprix.com/rx-iDrQzBJim-w103-h125/sony-bravia-x70l-43.jpg",
    image_url:
      "https://www.smartprix.com/tvs/sony-bravia-x70l-43-inch-ultra-hd-4k-smart-ppd17r4c6t5b",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "43 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 1 USB Ports",
      },
      {
        name: "Supports Apps & Games",
      },
    ],
    pricef: "47,490",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "OnePlus Y1S Pro 43 inch Ultra HD 4K Smart LED TV",
    brand: " OnePlus",
    category: "TV",
    url: "https://www.smartprix.com/tvs/oneplus-y1s-pro-43-inch-ultra-hd-4k-smart-ppd1lnqf2mon",
    image:
      "https://cdn1.smartprix.com/rx-iEotS5pml-w103-h125/oneplus-y1s-pro-43-i.jpg",
    image_url:
      "https://www.smartprix.com/tvs/oneplus-y1s-pro-43-inch-ultra-hd-4k-smart-ppd1lnqf2mon",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "43 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 24 W Output",
      },
      {
        name: "2 GB RAM, 8 GB Storage",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 2 USB Ports",
      },
    ],
    pricef: "28,888",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Xiaomi Smart TV 5A 32 inch HD Ready Smart LED TV",
    brand: "Xiaomi ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/xiaomi-smart-tv-5a-32-inch-hd-ready-smart-ppd1zicae1ig",
    image:
      "https://cdn1.smartprix.com/rx-iBKCrHI7G-w103-h125/xiaomi-smart-tv-5a-3.jpg",
    image_url:
      "https://www.smartprix.com/tvs/xiaomi-smart-tv-5a-32-inch-hd-ready-smart-ppd1zicae1ig",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "32 in, LED TV",
      },
      {
        name: "1366 x 768 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "Cortex A35 64-bit Quad Core Processor, 1 GB RAM, 8 GB Storage",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "2 HDMI Ports, 2 USB Ports",
      },
    ],
    pricef: "11,999",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Xiaomi Mi TV 4A 40-inch Full HD Smart LED TV",
    brand: "Xiaomi ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/xiaomi-mi-tv-4a-40-inch-full-hd-smart-led-ppd1w1ncczod",
    image:
      "https://cdn1.smartprix.com/rx-iCN61fOge-w103-h125/xiaomi-mi-tv-4a-40-i.jpg",
    image_url:
      "https://www.smartprix.com/tvs/xiaomi-mi-tv-4a-40-inch-full-hd-smart-led-ppd1w1ncczod",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "40 in, LED TV",
      },
      {
        name: "Full HD, 1920 x 1080 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "Quad Core Processor, 1 GB RAM, 8 GB Storage",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 2 USB Ports",
      },
    ],
    pricef: "13,999",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Sony Bravia X75L 43 inch Ultra HD 4K Smart LED TV (KD-43X75L)",
    brand: " SONY",
    category: "TV",
    url: "https://www.smartprix.com/tvs/sony-bravia-x75l-43-inch-ultra-hd-4k-smart-ppd1vzwuqyj8",
    image:
      "https://cdn1.smartprix.com/rx-iVWdttClB-w103-h125/sony-bravia-x75l-43.jpg",
    image_url:
      "https://www.smartprix.com/tvs/sony-bravia-x75l-43-inch-ultra-hd-4k-smart-ppd1vzwuqyj8",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "43 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 10 W Output",
      },
      {
        name: "16 GB Storage",
      },
      {
        name: "3 HDMI Ports, 2 USB Ports",
      },
      {
        name: "Supports Apps & Games",
      },
    ],
    pricef: "49,390",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Xiaomi Redmi X43 43 inch Ultra HD 4K Smart LED TV",
    brand: " Xiaomi",
    category: "TV",
    url: "https://www.smartprix.com/tvs/xiaomi-redmi-x43-43-inch-ultra-hd-4k-smart-ppd1z6gy76ne",
    image:
      "https://cdn1.smartprix.com/rx-izPb1yqdh-w103-h125/xiaomi-redmi-x43-43.jpg",
    image_url:
      "https://www.smartprix.com/tvs/xiaomi-redmi-x43-43-inch-ultra-hd-4k-smart-ppd1z6gy76ne",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "43 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 30 W Output",
      },
      {
        name: "Cortex-A55 Processor, 2 GB RAM, 16 GB Storage",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 2 USB Ports",
      },
    ],
    pricef: "24,999",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Xiaomi Mi TV 5 65-inch Ultra HD 4K Smart QLED TV",
    brand: "Xiaomi ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/xiaomi-mi-tv-5-65-inch-ultra-hd-4k-smart-ppd19zzr6wjh",
    image:
      "https://cdn1.smartprix.com/rx-iMDNYlo9A-w103-h125/xiaomi-mi-tv-5-65-in.jpg",
    image_url:
      "https://www.smartprix.com/tvs/xiaomi-mi-tv-5-65-inch-ultra-hd-4k-smart-ppd19zzr6wjh",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "65 in, QLED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "4 Speakers",
      },
      {
        name: "Amlogic T972 Processor, 3 GB RAM, 32 GB Storage",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 2 USB Ports",
      },
    ],
    pricef: "40,990",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Samsung CU7700 43 inch Ultra HD 4K Smart LED TV (UA43CU7700KLXL)",
    brand: "Samsung ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/samsung-7-series-ua43cu7700klxl-43-inch-ultra-ppd1xbnyv8fr",
    image:
      "https://cdn1.smartprix.com/rx-iwIescSce-w103-h125/samsung-cu7700-43-in.jpg",
    image_url:
      "https://www.smartprix.com/tvs/samsung-7-series-ua43cu7700klxl-43-inch-ultra-ppd1xbnyv8fr",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "43 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "2 HDMI Ports, 1 USB Ports",
      },
      {
        name: "Supports Apps & Games",
      },
    ],
    pricef: "43,990",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "LG 43UQ8050PSB 43 inch Ultra HD 4K LED Smart TV",
    brand: " LG",
    category: "TV",
    url: "https://www.smartprix.com/tvs/lg-43uq8050psb-53-inch-ultra-hd-4k-led-smart-ppd1dqxvyth4",
    image:
      "https://cdn1.smartprix.com/rx-i05LRufSa-w103-h125/lg-43uq8050psb-43-in.jpg",
    image_url:
      "https://www.smartprix.com/tvs/lg-43uq8050psb-53-inch-ultra-hd-4k-led-smart-ppd1dqxvyth4",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "43 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "4 HDMI Ports, 3 USB Ports",
      },
      {
        name: "Screen Mirroring / Miracast Support",
      },
    ],
    pricef: "40,990",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "TCL C645 55 inch Ultra HD 4K Smart QLED TV (55C645)",
    brand: "TCL ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/tcl-c645-55-inch-ultra-hd-4k-smart-qled-tv-ppd11shh78g3",
    image:
      "https://cdn1.smartprix.com/rx-i5HbH2DtP-w103-h125/tcl-c645-55-inch-ult.jpg",
    image_url:
      "https://www.smartprix.com/tvs/tcl-c645-55-inch-ultra-hd-4k-smart-qled-tv-ppd11shh78g3",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "55 in, QLED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "56 W Output",
      },
      {
        name: "Quad Core Processor, 2 GB RAM, 16 GB Storage",
      },
      {
        name: "Ultra Slim",
      },
      {
        name: "3 HDMI Ports, 1 USB Ports",
      },
    ],
    pricef: "56,990",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "TCL T6G 43 inch Ultra HD 4K Smart QLED TV (43T6G)",
    brand: " TCL",
    category: "TV",
    url: "https://www.smartprix.com/tvs/tcl-t6g-43-inch-ultra-hd-4k-smart-qled-tv-ppd108fbc7xh",
    image:
      "https://cdn1.smartprix.com/rx-ipCHEwSL7-w103-h125/tcl-t6g-43-inch-ultr.jpg",
    image_url:
      "https://www.smartprix.com/tvs/tcl-t6g-43-inch-ultra-hd-4k-smart-qled-tv-ppd108fbc7xh",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "43 in, QLED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 30 W Output",
      },
      {
        name: "Quad Core Processor, 2 GB RAM, 16 GB Storage",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "3 HDMI Ports, 1 USB Ports",
      },
    ],
    pricef: "38,990",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "LG 55UQ8050PSB 55 inch Ultra HD 4K LED Smart TV",
    brand: "LG ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/lg-55uq8050psb-55-inch-ultra-hd-4k-led-smart-ppd1q9d7ekh3",
    image:
      "https://cdn1.smartprix.com/rx-irpp4TXM9-w103-h125/lg-55uq8050psb-55-in.jpg",
    image_url:
      "https://www.smartprix.com/tvs/lg-55uq8050psb-55-inch-ultra-hd-4k-led-smart-ppd1q9d7ekh3",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "55 in, LED TV",
      },
      {
        name: "4K Resolution, 3840 x 2160 pixels",
      },
      {
        name: "Wifi, Ethernet",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "2 Speakers, 20 W Output",
      },
      {
        name: "178 ° Viewing Angle",
      },
      {
        name: "4 HDMI Ports, 3 USB Ports",
      },
      {
        name: "Screen Mirroring / Miracast Support",
      },
    ],
    pricef: "57,490",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Samsung The Wall Luxury 292-inch Ultra HD 8K Smart MicroLED TV",
    brand: "Samsung ",
    category: "TV",
    url: "https://www.smartprix.com/tvs/samsung-the-wall-luxury-292-inch-ultra-hd-ppd1jcdv3ltf",
    image:
      "https://cdn1.smartprix.com/rx-iYDrAGWDj-w103-h125/samsung-the-wall-lux.jpg",
    image_url:
      "https://www.smartprix.com/tvs/samsung-the-wall-luxury-292-inch-ultra-hd-ppd1jcdv3ltf",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "292 in, MicroLED TV",
      },
      {
        name: "8K Resolution, 7680 x 4320 pixels",
      },
      {
        name: "Wifi",
      },
      {
        name: "Smart TV",
      },
    ],
    selection2: [
      {
        name: "Ultra Slim, 178 ° Viewing Angle",
      },
      {
        name: "3D TV: No",
      },
      {
        name: "Screen Mirroring / Miracast Support",
      },
      {
        name: "120 Hz",
      },
    ],
    pricef: "88 ,000",
    pricea: "42,499",
    pricec: "45,490",
  },
  {
    name: "Xiaomi MIJIA Natural Wind 1.5HP AC",
    brand: " Xiaomi",
    category: "WahingMachine",
    url: "https://www.smartprix.com/air_conditioners/xiaomi-mijia-natural-wind-1-5hp-ac-ppd1btll5xjw",
    image:
      "https://cdn1.smartprix.com/rx-iS4cAEnc1-w103-h125/xiaomi-mijia-natural.jpg",
    image_url:
      "https://www.smartprix.com/air_conditioners/xiaomi-mijia-natural-wind-1-5hp-ac-ppd1btll5xjw",
    pricef: "25,499",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "Digital LED Panel Display",
      },
      {
        name: "Dehumidification, Inverter",
      },
      {
        name: "Remote Control, Timer",
      },
    ],
    selection2: [
      {
        name: "Turbo Mode, Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
      {
        name: "Auto Air Swing, Auto Restart",
      },
      {
        name: "Self Diagnosis, Memory Feature",
      },
    ],
  },
  {
    name: "Panasonic CS/CU-AU18ZKY5F 1.5 Ton 5 Star 2023 Inverter Split AC",
    brand: "Panasonic ",
    category: "WahingMachine",
    url: "https://www.smartprix.com/air_conditioners/panasonic-cs-cu-au18zky5f-1-5-ton-5-star-ppd1tvtfdcho",
    image:
      "https://cdn1.smartprix.com/rx-i52PcFAuN-w103-h125/panasonic-cs-cu-au18.jpg",
    image_url:
      "https://www.smartprix.com/air_conditioners/panasonic-cs-cu-au18zky5f-1-5-ton-5-star-ppd1tvtfdcho",
    pricef: "48,990",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Split AC",
      },
      {
        name: "1.5 Ton Capacity",
      },
      {
        name: "LED Panel Display",
      },
      {
        name: "636 CFM circulation",
      },
    ],
    selection2: [
      {
        name: "Inverter",
      },
      {
        name: "Remote Control, Timer",
      },
      {
        name: "Turbo Mode, Sleep Mode",
      },
      {
        name: "Dust Filter",
      },
    ],
  },
  {
    name: "Samsung Ecobubble WA80BG4441BD 8 kg Fully Automatic Top Load Washing Machine",
    brand: " Samsung",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/samsung-ecobubble-wa80bg4441bd-8-kg-fully-ppd1kn65g8g8",
    image:
      "https://cdn1.smartprix.com/rx-iEcKgUwcq-w103-h125/samsung-ecobubble-wa.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/samsung-ecobubble-wa80bg4441bd-8-kg-fully-ppd1kn65g8g8",
    pricef: "19,900",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Top load",
      },
      {
        name: "8 kg",
      },
      {
        name: "PP Dual Wing Pulsator",
      },
    ],
    selection2: [
      {
        name: "Red LED Display",
      },
      {
        name: "Timer, Self Clean",
      },
      {
        name: "Child Lock",
      },
      {
        name: "Quick Wash, Water Level Selector",
      },
    ],
  },
  {
    name: "Samsung Ecobubble WA70BG4441BY 7 kg Fully Automatic Top Load Washing Machine",
    brand: " Samsung",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/samsung-ecobubble-wa70bg4441by-7-kg-fully-ppd1pp5iqgo8",
    image:
      "https://cdn1.smartprix.com/rx-i9gwhc5IT-w103-h125/samsung-ecobubble-wa.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/samsung-ecobubble-wa70bg4441by-7-kg-fully-ppd1pp5iqgo8",
    pricef: "18,100",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Top load",
      },
      {
        name: "7 kg",
      },
      {
        name: "PP Dual Wing Pulsator",
      },
    ],
    selection2: [
      {
        name: "Red LED Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Timer, Self Clean",
      },
      {
        name: "Child Lock",
      },
    ],
  },

  {
    name: "Croma CRLW080FAF202302 8 kg Fully Automatic Top Load Washing Machine",
    brand: " Croma",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/croma-crlw080faf202302-8-kg-fully-automatic-ppd1fbxhkncx",
    image:
      "https://cdn1.smartprix.com/rx-iP35wEH83-w103-h125/croma-crlw080faf2023.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/croma-crlw080faf202302-8-kg-fully-automatic-ppd1fbxhkncx",
    pricef: "19,490",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Top load",
      },
      {
        name: "8 kg",
      },
      {
        name: "Digital Display",
      },
    ],
    selection2: [
      {
        name: "Steel Inner Drum | Crescent Bubble Drum tub",
      },
      {
        name: "Inbuilt Heater, Timer, Self Clean",
      },
      {
        name: "Door Lock, Child Lock",
      },
      {
        name: "Spin Only, Water Level Selector",
      },
    ],
  },
  {
    name: "Samsung WW80T4040CX1TL 8 kg Front Load Washing Machine",
    brand: "Samsung ",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/samsung-ww80t4040cx1tl-8-kg-fully-automatic-ppd1rl5rw0te",
    image:
      "https://cdn1.smartprix.com/rx-iGs9GKJ21-w103-h125/samsung-ww80t4040cx1.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/samsung-ww80t4040cx1tl-8-kg-fully-automatic-ppd1rl5rw0te",
    pricef: "38,500",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "8 kg",
      },
      {
        name: "Pulsator",
      },
    ],
    selection2: [
      {
        name: "Yes Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Timer, Self Clean",
      },
      {
        name: "Child Lock",
      },
    ],
  },
  {
    name: "Samsung WT70M3200HB 7 kg Semi Automatic Washing Machine",
    brand: " Samsung",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/samsung-wt70m3200hb-7-kg-semi-automatic-top-ppd1sfhmvqk3",
    image:
      "https://cdn1.smartprix.com/rx-iM6JwZZo0-w103-h125/samsung-wt70m3200hb.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/samsung-wt70m3200hb-7-kg-semi-automatic-top-ppd1sfhmvqk3",
    pricef: "8,390",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Semi Automatic, Top load",
      },
      {
        name: "7 kg",
      },
      {
        name: "Pulsator",
      },
    ],
    selection2: [
      {
        name: "Rust Free Body, Fibre tub",
      },
      {
        name: "Timer",
      },
      {
        name: "Shock Proof",
      },
      {
        name: "Quick Wash, Spin Only",
      },
    ],
  },
  {
    name: "IFB Senator Neo SXS 8012 8 Kg Fully Automatic Front Loading Washing Machine",
    brand: "IFB ",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/ifb-senator-neo-sxs-8012-8-kg-fully-automatic-ppd18a0enqjw",
    image:
      "https://cdn1.smartprix.com/rx-iVKT4ZJZT-w103-h125/ifb-senator-neo-sxs.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/ifb-senator-neo-sxs-8012-8-kg-fully-automatic-ppd18a0enqjw",
    pricef: "32,990",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "8 kg",
      },
      {
        name: "Tumble Wash",
      },
    ],
    selection2: [
      {
        name: "Yes Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer",
      },
      {
        name: "Door Lock, Child Lock, Shock Proof",
      },
    ],
  },
  {
    name: "IFB Executive MXC 9014 9 kg Fully Automatic Front Load Washing Machine",
    brand: "IFB ",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/ifb-executive-mxc-9014-9-kg-fully-automatic-ppd1wjdiahg0",
    image:
      "https://cdn1.smartprix.com/rx-iUQjtaZan-w103-h125/ifb-executive-mxc-90.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/ifb-executive-mxc-9014-9-kg-fully-automatic-ppd1wjdiahg0",
    pricef: "48,792",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "9 kg",
      },
      {
        name: "Tumble Wash",
      },
    ],
    selection2: [
      {
        name: "LED Touch Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer, Self Clean",
      },
      {
        name: "Door Lock, Child Lock, Shock Proof",
      },
    ],
  },
  {
    name: "IFB Executive Plus MXC 1014 10 kg Fully Automatic Front Load Washing Machine",
    brand: " IFB",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/ifb-executive-plus-mxc-10-kg-fully-automatic-ppd1tqubk9w6",
    image:
      "https://cdn1.smartprix.com/rx-iiDh98bI1-w103-h125/ifb-executive-plus-m.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/ifb-executive-plus-mxc-10-kg-fully-automatic-ppd1tqubk9w6",
    pricef: "49,990",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "10 kg",
      },
      {
        name: "Tumble Wash",
      },
    ],
    selection2: [
      {
        name: "LED Touch Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer, Self Clean",
      },
      {
        name: "Door Lock, Child Lock, Shock Proof",
      },
    ],
  },
  {
    name: "LG FHM1409BDM 9 Kg Fully Automatic Front Load Washing Machine",
    brand: "LG",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/lg-fhm1409bdm-9-kg-fully-automatic-front-ppd1qdpaqbj1",
    image:
      "https://cdn1.smartprix.com/rx-iKN56gjvS-w103-h125/lg-fhm1409bdm-9-kg-f.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/lg-fhm1409bdm-9-kg-fully-automatic-front-ppd1qdpaqbj1",
    pricef: "37,990",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "9 kg",
      },
      {
        name: "Tumble",
      },
    ],
    selection2: [
      {
        name: "Digital Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer, Self Clean",
      },
      {
        name: "Door Lock, Child Lock, Shock Proof",
      },
    ],
  },
  {
    name: "LG FHP1208A5M 8 kg Fully Automatic Front Load Washing Machine",
    brand: " LG",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/lg-fhp1208a5m-8-kg-fully-automatic-front-ppd1mj5uhujf",
    image:
      "https://cdn1.smartprix.com/rx-ia5VZYZ7U-w103-h125/lg-fhp1208a5m-8-kg-f.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/lg-fhp1208a5m-8-kg-fully-automatic-front-ppd1mj5uhujf",
    pricef: "39,990",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "8 kg",
      },
      {
        name: "Steam + Turbo Wash",
      },
    ],
    selection2: [
      {
        name: "LED Display",
      },
      {
        name: "Steel Rust Proof Body, Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer",
      },
      {
        name: "Door Lock, Child Lock",
      },
    ],
  },
  {
    name: "IFB Executive Plus MXS 9014 9 kg Fully Automatic Front Load Washing Machine",
    brand: "IFB ",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/ifb-executive-plus-mxs-9014-9-kg-fully-automatic-ppd14h38pc8s",
    image:
      "https://cdn1.smartprix.com/rx-iUxquB5Xb-w103-h125/ifb-executive-plus-m.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/ifb-executive-plus-mxs-9014-9-kg-fully-automatic-ppd14h38pc8s",
    pricef: "42,990",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "9 kg",
      },
      {
        name: "Tumble Wash",
      },
    ],
    selection2: [
      {
        name: "LED Touch Display",
      },
      {
        name: "Stainless Steel body, Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer, Self Clean",
      },
      {
        name: "Door Lock, Child Lock, Shock Proof",
      },
    ],
  },
  {
    name: "Whirlpool Whitemagic Elite Plus 7 kg Fully Automatic Top Load Washing Machine",
    brand: " Whirlpool",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/whirlpool-whitemagic-elite-plus-7-kg-fully-ppd1vtgj0asr",
    image:
      "https://cdn1.smartprix.com/rx-iyiPFd5QP-w103-h125/whirlpool-whitemagic.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/whirlpool-whitemagic-elite-plus-7-kg-fully-ppd1vtgj0asr",
    pricef: "19,490",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Top load",
      },
      {
        name: "7 kg",
      },
      {
        name: "Spiro Wash Action",
      },
    ],
    selection2: [
      {
        name: "Yes Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer",
      },
      {
        name: "Child Lock, Shock Proof",
      },
    ],
  },
  {
    name: "Bosch WAJ2846MIN 8 kg Fully Automatic Front Load Washing Machine",
    brand: "Bosch ",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/bosch-waj2846min-8-kg-fully-automatic-front-ppd160k9i29n",
    image:
      "https://cdn1.smartprix.com/rx-iw71PQgJW-w103-h125/bosch-waj2846min-8-k.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/bosch-waj2846min-8-kg-fully-automatic-front-ppd160k9i29n",
    pricef: "41,939",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "8 kg",
      },
      {
        name: "Pulsator",
      },
    ],
    selection2: [
      {
        name: "Digital Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Timer",
      },
      {
        name: "Child Lock",
      },
    ],
  },
  {
    name: "LG T80SKSF1Z 8 kg Fully Automatic Top Load Washing Machine",
    brand: " LG",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/lg-t80sksf1z-8-kg-fully-automatic-top-load-ppd1m8p80uk7",
    image:
      "https://cdn1.smartprix.com/rx-iv4dKr65j-w103-h125/lg-t80sksf1z-8-kg-fu.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/lg-t80sksf1z-8-kg-fully-automatic-top-load-ppd1m8p80uk7",
    pricef: "19,990",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Top load",
      },
      {
        name: "8 kg",
      },
      {
        name: "Pulsator",
      },
    ],
    selection2: [
      {
        name: "Digital Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Timer",
      },
      {
        name: "Child Lock, Shock Proof",
      },
    ],
  },
  {
    name: "LG FHV1207Z4M 7 Kg Fully Automatic Front Load Washing Machine",
    brand: "LG ",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/lg-fhv1207z4m-7-kg-fully-automatic-front-ppd1mmz9wxl7",
    image:
      "https://cdn1.smartprix.com/rx-iFqsbHmUO-w103-h125/lg-fhv1207z4m-7-kg-f.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/lg-fhv1207z4m-7-kg-fully-automatic-front-ppd1mmz9wxl7",
    pricef: "34,600",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Front load",
      },
      {
        name: "7 kg",
      },
      {
        name: "LED Display",
      },
    ],
    selection2: [
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer, Self Clean",
      },
      {
        name: "Door Lock, Child Lock, Shock Proof",
      },
      {
        name: "Spin Only, Water Level Selector",
      },
    ],
  },
  {
    name: "Samsung Ecobubble WA70BG4582BR 7 kg Fully Automatic Top Load Washing Machine",
    brand: " Samsung",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/samsung-ecobubble-wa70bg4582br-7-kg-fully-ppd1zj1hvw5z",
    image:
      "https://cdn1.smartprix.com/rx-iyUqh65yR-w103-h125/samsung-ecobubble-wa.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/samsung-ecobubble-wa70bg4582br-7-kg-fully-ppd1zj1hvw5z",
    pricef: "22,700",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Top load",
      },
      {
        name: "7 kg",
      },
      {
        name: "PP Dual Wing Pulsator",
      },
    ],
    selection2: [
      {
        name: "Red LED Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer, Self Clean",
      },
      {
        name: "Child Lock",
      },
    ],
  },
  {
    name: "Samsung Ecobubble WA90BG4686BR 9 kg Fully Automatic Top Load Washing Machine",
    brand: " ",
    category: "WahingMachine",
    url: "https://www.smartprix.com/washing_machines/samsung-ecobubble-wa90bg4686br-9-kg-fully-ppd1srx0m6ps",
    image:
      "https://cdn1.smartprix.com/rx-ixtiHoQkx-w103-h125/samsung-ecobubble-wa.jpg",
    image_url:
      "https://www.smartprix.com/washing_machines/samsung-ecobubble-wa90bg4686br-9-kg-fully-ppd1srx0m6ps",
    pricef: "28,800",
    pricea: "42,499",
    pricec: "45,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Washing Machine with dryer",
      },
      {
        name: "Fully Automatic, Top load",
      },
      {
        name: "9 kg",
      },
      {
        name: "PP Dual Wing Pulsator",
      },
    ],
    selection2: [
      {
        name: "Red LED Display",
      },
      {
        name: "Stainless Steel tub",
      },
      {
        name: "Inbuilt Heater, Timer, Self Clean",
      },
      {
        name: "Child Lock",
      },
    ],
  },

  {
    name: "SanDisk Ultra 128GB UHS-I SDXC SD Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd11q7l0rbm",
    image:
      "https://cdn1.smartprix.com/rx-idpVwQuIv-w103-h125/sandisk-ultra-128gb.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd11q7l0rbm",
    pricef: "1,219",
    pricea: "1,490",
    pricec: "1,490",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12H-FFAmUCZ_rm6x2sDUTOJ.hrhAA3snrh7FhYYFOcCTU3rc5oXW6cATrFFc5PcFiDAcCtFcYcFicnans3IcAr3ic5HPcn6BFc3aricFBaaicFiFiCu6c5oXWcWubYuchnch-hDobG4GHhrhhaFhrhrhhacBrWahrhrBi55NGTP36nhrFB5-rZeGq9Hkwmq ",
    selection1: [
      {
        name: "SDXC SD Memory Card",
      },
      {
        name: "128 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "Read Speed-Up to 140Mbps",
      },
    ],
    selection2: [
      {
        name: "X-ray Proof, Water Proof, Heat Resistant, Shock Proof",
      },
      {
        name: "5 years",
      },
    ],
  },
  {
    name: "SanDisk Ultra 64GB UHS-I SDXC SD Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd19kz4dohw",
    image:
      "https://cdn1.smartprix.com/rx-iBZDSEdO7-w103-h125/sandisk-ultra-64gb-u.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd19kz4dohw",
    pricec: "659",
    pricea: "490",
    pricef: " --",
    flipkart: " ",
    amazon: " ",
    croma:
      " https://l.smartprix.com/l?k=125rSwVgnOIQ1KFnjS8mmtThrhAA3snrh7FhYYFOcCTU3rcbHW6cATrFFc5PcFiDAcCtFcYcFicnans3IcAr3ic5HPcn6BFc3aricFBaaicFiFiCu6cPbHWcWubYuchnch-hDobG4GZhrhhaFhrhrhhacBrWahrhrBi5lOyHist8hrFB5z-SwlA-n-Fql",
    selection1: [
      {
        name: "SDXC SD Memory Card",
      },
      {
        name: "64 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "Read Speed-Up to 140Mbps",
      },
    ],
    selection2: [
      {
        name: "X-ray Proof, Water Proof, Heat Resistant, Shock Proof",
      },
      {
        name: "5 years",
      },
    ],
  },
  {
    name: "SanDisk Ultra 512GB UHS-I SDXC SD Memory Card",
    brand: " SanDisk",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1l6bueppq",
    image:
      "https://cdn1.smartprix.com/rx-irB4nJviu-w103-h125/sandisk-ultra-512gb.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1l6bueppq",
    pricef: "4,879",
    pricea: "4,490",
    pricec: "4,879",
    flipkart: " ",
    amazon: " ",
    croma:
      " https://l.smartprix.com/l?k=12H-FFAmUCZ_tClyVjGErjzxhrhAA3snrh7FhYYFOcCTU3rc45oW6cATrFFc5PcFiDAcCtFcYcFicnans3IcAr3ic54Pcn6BFc3aricFBaaicFiFiCuAc45oWcWubYuchnch-hDobG4GbhrhhaFhrhrhhacBrWahrhrBi5Tb6CaBBNhrFB5RQX3WidErnu7",
    selection1: [
      {
        name: "SDXC SD Memory Card",
      },
      {
        name: "512 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "Read Speed-Up to 150Mbps",
      },
    ],
    selection2: [
      {
        name: "X-ray Proof, Water Proof, Heat Resistant, Shock Proof",
      },
      {
        name: "1 year",
      },
    ],
  },
  {
    name: "SanDisk Ultra 256GB UHS-I SDXC SD Memory Card",
    brand: " SanDisk",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1d438qod6",
    image:
      "https://cdn1.smartprix.com/rx-ixBTezXN0-w103-h125/sandisk-ultra-256gb.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1d438qod6",
    pricef: "2,439",
    pricea: "2,490",
    pricec: "2,439",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12H-FFAmUCZ_A3nBQ7W~tUjuhrhAA3snrh7FhYYFOcCTU3rco4bW6cATrFFc5PcFiDAcCtFcYcFicnans3IcAr3ic54Pcn6BFc3aricFBaaicFiFiCuAco4bWcWubYuchnch-hDobG4G4hrhhaFhrhrhhacBrWahrhrBi5iHZXNsibhrFB5EIx91CpPeGn7 ",
    selection1: [
      {
        name: "SDXC SD Memory Card",
      },
      {
        name: "256 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "Read Speed-Up to 150Mbps",
      },
    ],
    selection2: [
      {
        name: "X-ray Proof, Water Proof, Heat Resistant, Shock Proof",
      },
      {
        name: "1 year",
      },
    ],
  },
  {
    name: "SanDisk Extreme Pro 64GB UHS-1 200MB/s SDXC Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1fu1flyvw",
    image:
      "https://cdn1.smartprix.com/rx-i84i4Zx1B-w103-h125/sandisk-extreme-pro.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1fu1flyvw",
    pricef: "1,199",
    pricea: "1,490",
    pricec: " 1,490",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12H-FFAmUCZ_rSizsr1Y30BdhrhAA3snrh7FhYYFOcaDU3anacB3scFiDAcbHW6cATrFFc5PcoPPn6cFcnans3IcAr3ih-hDobZoZPhrhhaFhrhrhhacBrWahrhrBi5gC5gTI28hrFB5XdXQIoJ6zBD0 ",
    selection1: [
      {
        name: "SDXC Memory Card",
      },
      {
        name: "64 GB",
      },
      {
        name: "UHS Speed Class 3 | Video Speed Class 30 Memory Card",
      },
      {
        name: "Read Speed-Up to 200MB/s",
      },
    ],
    selection2: [
      {
        name: "8.25 years",
      },
    ],
  },
  {
    name: "SanDisk High Endurance 128GB Class 10 Micro SDXC Memory Card",
    brand: "SanDisk",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1qyb5ftgm",
    image:
      "https://cdn1.smartprix.com/rx-iHk6T9rCf-w103-h125/sandisk-high-enduran.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1qyb5ftgm",
    pricef: "1,688",
    pricea: "1,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12Vi-zOf3Xwub92pfm54VtnhrhAgTYBOr3Uh7FhYYFOctYWtcauiC3ruAacAr3icnYA3sFiDAcrirBhUcirFtcArnFctsnacFaAC3YUIcArna3rFc5oXcW6cATrFFc5Pc5PPcn6cFcnans3Ih-hDh85H6lAgi5Z44HAhmBYihkjwwx_Jw..0x.ef~~hrhhaFhrhrhhacBrWahrhrBi5NI64gUWnhrFB57aJdDymPqpVH ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "128 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "Read Speed: 100 MB/s",
      },
      {
        name: "Because sometimes you need to capture footage in less than ideal conditions, the SanDisk…",
      },
    ],
    selection2: [
      {
        name: "2 years",
      },
    ],
  },
  {
    name: "SanDisk Extreme PRO A2 512GB Class 3 UHS-I Micro SDXC Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1coq41ig6",
    image:
      "https://cdn1.smartprix.com/rx-i4nwGqzPO-w103-h125/sandisk-extreme-pro.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1coq41ig6",
    pricef: "1,089",
    pricea: "1,490",
    pricec: "1,669",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12H-FFAmUCZ_6Hubetx0-xgdhrhAA3snrh7FhYYFOcaDU3anacB3scnYA3sFiDAc5oXW6cATrFFcZcoPPn6cFcnans3IcAr3ih-hDobZ5l4hrhhaFhrhrhhacBrWahrhrBi5U6uDDDC3hrFB5QdbKVUQE_Inn ",
    selection1: [
      {
        name: "512 GB",
      },
      {
        name: "class 3 Memory Card",
      },
      {
        name: "Read Speed Up to 200MB/s; Write Speed Up to 140MB/s",
      },
      {
        name: "8.25 years",
      },
    ],
  },
  {
    name: "SanDisk Extreme PRO A2 128GB Class 3 UHS-I Micro SDXC Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1tbnxxxur",
    image:
      "https://cdn1.smartprix.com/rx-iJd0otd03-w103-h125/sandisk-extreme-pro.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1tbnxxxur",
    pricef: "1,669",
    pricea: "1,490",
    pricec: "1,490",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12H-FFAmUCZ_6Hubetx0-xgdhrhAA3snrh7FhYYFOcaDU3anacB3scnYA3sFiDAc5oXW6cATrFFcZcoPPn6cFcnans3IcAr3ih-hDobZ5l4hrhhaFhrhrhhacBrWahrhrBi5U6uDDDC3hrFB5QdbKVUQE_Inn ",
    selection1: [
      {
        name: "128 GB",
      },
      {
        name: "class 3 Memory Card",
      },
      {
        name: "Read Speed Up to 200MB/s; Write Speed Up to 140MB/s",
      },
      {
        name: "8.25 years",
      },
    ],
  },
  {
    name: "SanDisk Extreme A2 512GB Class 3 UHS-I Micro SDXC Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1p7vyj5tq",
    image:
      "https://cdn1.smartprix.com/rx-ilBcAiYsy-w103-h125/sandisk-extreme-a2-5.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1p7vyj5tq",
    pricef: "6,594",
    pricea: "6,490",
    pricec: " 6,490",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12H-FFAmUCZ_TOEunu1uRGDdhrhAA3snrh7FhYYFOcaDU3anacnYA3sFiDAc45oW6cATrFFcZc5bPn6cFcnans3IcAr3ih-hDoH54PPhrhhaFhrhrhhacBrWahrhrBi5BG2IQ4UNhrFB5xQFt4KWSy9wA ",
    selection1: [
      {
        name: "512 GB",
      },
      {
        name: "Class 3 Memory Card",
      },
      {
        name: "Read Speed Up to 190MB/s; Write Speed Up to 130MB/s",
      },
      {
        name: "Water Resistant | Shock Resistant | X-ray Resistant",
      },
    ],
    selection2: [
      {
        name: "8.25 years",
      },
    ],
  },
  {
    name: "SanDisk Extreme A2 1TB Class 3 UHS-I Micro SDXC Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1our759sv",
    image:
      "https://cdn1.smartprix.com/rx-iNtRLY3D1-w103-h125/sandisk-extreme-a2-1.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1our759sv",
    pricef: "14,994",
    pricea: "16,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "1 TB",
      },
      {
        name: "Class 3 Memory Card",
      },
      {
        name: "Read Speed Up to 190MB/s; Write Speed Up to 130MB/s",
      },
      {
        name: "Water Resistant | Shock Resistant | X-ray Resistant",
      },
    ],
    selection2: [
      {
        name: "8.25 years",
      },
    ],
  },
  {
    name: "Lexar 633x Blue Series 64GB Class A1 Micro SDXC Memory Card",
    brand: " Lexar",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1n9hx2xsq",
    image:
      "https://cdn1.smartprix.com/rx-isqO0SoXY-w103-h125/lexar-633x-blue-seri.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1n9hx2xsq",
    pricef: "729",
    pricea: "490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Class A1 Micro SDHC/SDXC Memory Card",
      },
      {
        name: "64 GB",
      },
      {
        name: "Class A1 Memory Card",
      },
      {
        name: "Read Speed-100MB/s",
      },
    ],
    selection2: [
      {
        name: "RoHS compliant",
      },
      {
        name: "2 years",
      },
    ],
  },
  {
    name: "SanDisk Extreme PRO 64GB Micro SDXC V90 UHS-II Class 10 Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1ilty05c9",
    image:
      "https://cdn1.smartprix.com/rx-ip150B5cj-w103-h125/sandisk-extreme-pro.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ilty05c9",
    pricef: "8,349",
    pricea: "8,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "SDXC Version 90 Class 10",
      },
      {
        name: "64 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "300 MB/s",
      },
    ],
    selection2: [
      {
        name: "3 years, Carry-In Warranty",
      },
    ],
  },
  {
    name: "SanDisk Extreme Pro 32GB Class 10 V90 300 MB/s Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1bxacw5ar",
    image:
      "https://cdn1.smartprix.com/rx-iZKF8qPqu-w103-h125/sandisk-extreme-pro.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1bxacw5ar",
    pricef: "4,319",
    pricea: "4,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "SDHC Version 90 Class 10",
      },
      {
        name: "32 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "300 MB/s",
      },
    ],
    selection2: [
      {
        name: "3 years, Carry-In Warranty",
      },
    ],
  },
  {
    name: "Lexar Professional 128GB SDXC UHS-II/U3 1800x Memory Card",
    brand: "Lexar ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1120rj2bc",
    image:
      "https://cdn1.smartprix.com/rx-iqeAZizaA-w103-h125/lexar-professional-1.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1120rj2bc",
    pricef: "5,169",
    pricea: "5,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Class 3 Memory Card",
      },
      {
        name: "128 GB",
      },
      {
        name: "Class 3 Memory Card",
      },
      {
        name: "Write Speed- 180MB/s; Read Speed- 270MB/s",
      },
    ],
    selection2: [
      {
        name: "2 years",
      },
    ],
  },
  {
    name: "Lexar Professional 64GB SDXC UHS-I/U3 1066x Memory Card",
    brand: " Lexar",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1udmn5qvh",
    image:
      "https://cdn1.smartprix.com/rx-ioj6WoEMC-w103-h125/lexar-professional-6.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1udmn5qvh",
    pricef: "1,399",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Class 3 Memory Card",
      },
      {
        name: "64 GB",
      },
      {
        name: "Class 3 Memory Card",
      },
      {
        name: "Write Speed- 120MB/s; Read Speed- 160MB/s",
      },
    ],
    selection2: [
      {
        name: "Shock Proof, Vibration Proof, X-ray Proof, Temperature-Proof",
      },
      {
        name: "2 years",
      },
    ],
  },
  {
    name: "SanDisk Extreme PRO 128GB Micro SDXC UHS-II Class 10 Memory Card",
    brand: "SanDisk ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd11ibz1wos",
    image:
      "https://cdn1.smartprix.com/rx-imDxOKCA4-w103-h125/sandisk-extreme-pro.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd11ibz1wos",
    pricef: "15,114",
    pricea: "16,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "SDXC",
      },
      {
        name: "128 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "260 Mbps",
      },
    ],
    selection2: [
      {
        name: "Lifetime Limited Warranty",
      },
    ],
  },
  {
    name: "SanDisk Extreme A2 64GB Class 3 UHS-I Micro SDXC Memory Card",
    brand: " SanDisk",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1d9auh6ln",
    image:
      "https://cdn1.smartprix.com/rx-iQjNrph27-w103-h125/sandisk-extreme-a2-6.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1d9auh6ln",
    pricef: "569",
    pricea: "490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Memory Card",
      },
      {
        name: "64 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "60 Mbps",
      },
    ],
    selection2: [
      {
        name: "Lifetime Limited Warranty",
      },
    ],
  },
  {
    name: "SanDisk Ultra 512GB Class 10 UHS Micro SDXC Memory Card",
    brand: " SanDisk",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1k0kyztw7",
    image:
      "https://cdn1.smartprix.com/rx-iMmzgk9L6-w103-h125/sandisk-ultra-512gb.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1k0kyztw7",
    pricef: "3,718",
    pricea: "3,490",
    pricec: "4,290",
    flipkart:
      "https://l.smartprix.com/l?k=12Vi-zOf3a0t18vrriU1O5khrhAgTYBOr3Uh7FhYYFOcCTU3rc45ocW6cnYA3sFitAcATrFFc5Pc5oPcn6BFcnans3IcAr3ih-hDh8b54ZbZPrXP5ZbhmBYihkjwwx_d7fzKe.edfxhrhhaFhrhrhhacBrWahrhrBi5OPOIyU8GhrFB5miD~dJgOiS_k ",
    amazon:
      " https://l.smartprix.com/l?k=12HVH1zAkO55m7xnxf0stomUhrhArnrysuhyihDRPXmXG0H1Sh-hrhhaFhrhrhhacBrWahrhrBi5OPOIyU8GhrFB5z2bWibe1FYw9",
    croma:
      "https://l.smartprix.com/l?k=12H-FFA1T2t0ZUzQu_S56_3lhrhAA3snrh7FhYYFOcCTU3rcnYA3sFiDAc45oW6cATrFFc5Pc5oPn6cFcnans3IcAr3ih-hDoH545lhrhhaFhrhrhhacBrWahrhrBi5OPOIyU8GhrFB5_CTtDGId8l-i ",
    selection1: [
      {
        name: "Memory Card",
      },
      {
        name: "512 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "120 MB/s",
      },
    ],
    selection2: [
      {
        name: "10 years, Warranty",
      },
    ],
  },
  {
    name: "Samsung Pro Endurance MB-MJ128KA/AM 128GB Memory Card",
    brand: "Samsung ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd15u0o2pnw",
    image:
      "https://cdn1.smartprix.com/rx-idHlC7ssP-w103-h125/samsung-pro-enduranc.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd15u0o2pnw",
    pricef: "2,130",
    pricea: "2,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Micro SD",
      },
      {
        name: "128 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "100 Mb/s",
      },
    ],
  },
  {
    name: "Samsung Pro Endurance MB-MJ128GA/AM 128GB SDXC Memory Card",
    brand: "Samsung ",
    category: "MemoryCard",
    url: "https://www.smartprix.com/nf/pd/pd1rs6ptq1i",
    image:
      "https://cdn1.smartprix.com/rx-iRbVOGBBC-w103-h125/samsung-pro-enduranc.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1rs6ptq1i",
    pricef: "9,350",
    pricea: "9,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12HVH1zreY2U~uRU9WSyiBw4hrhArnrysuhyihDRPGRlXHS-4h-hrhhaFhrhrhhacBrWahrhrBi53FbBUN5YhrFB5eqWl.5kTZPIi",
    croma: " ",
    selection1: [
      {
        name: "Micro SDXC",
      },
      {
        name: "128 GB",
      },
      {
        name: "Class 10 Memory Card",
      },
      {
        name: "100 MB/s",
      },
    ],
    selection2: [
      {
        name: "5 years",
      },
    ],
  },

  {
    name: "OnePlus Nord CE 3 Lite 5G",
    brand: "OnePlus ",
    category: "Mobile",
    brand: " ",
    category: "OnePlus",
    url: "https://www.smartprix.com/mobiles/oneplus-nord-ce-3-lite-5g-ppd11rema1vf",
    image:
      "https://cdn1.smartprix.com/rx-iAf9Lqlrt-w103-h125/oneplus-nord-ce-3-li.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/oneplus-nord-ce-3-lite-5g-ppd11rema1vf",
    pricef: "19,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Snapdragon 695 5G, Octa Core, 2.2 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 67W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.72 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "108 MP + 2 MP + 2 MP Triple Rear & 16 MP Front Camera",
      },
      {
        name: "Memory Card (Hybrid), upto 1 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Samsung Galaxy M34 5G",
    brand: "Samsung ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/samsung-galaxy-m34-5g-ppd1qx01h741",
    image:
      "https://cdn1.smartprix.com/rx-iRTKzK37t-w103-h125/samsung-galaxy-m34-5.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/samsung-galaxy-m34-5g-ppd1qx01h741",
    pricef: "18,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC",
      },
      {
        name: "Exynos 1280 , Octa Core, 2.4 GHz Processor",
      },
      {
        name: "6 GB RAM, 128 GB inbuilt",
      },
      {
        name: "6000 mAh Battery with 25W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.5 inches, 1080 x 2340 px, 120 Hz Display with Water Drop Notch",
      },
      {
        name: "50 MP + 8 MP + 2 MP Triple Rear & 13 MP Front Camera",
      },
      {
        name: "Memory Card (Hybrid), upto 1 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Realme Narzo 60 5G",
    brand: "Realme ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/realme-narzo-60-5g-ppd1dtt5t2x9",
    image:
      "https://cdn1.smartprix.com/rx-i2KfXqT6S-w103-h125/realme-narzo-60-5g.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/realme-narzo-60-5g-ppd1dtt5t2x9",
    pricef: "17,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Dimensity 6020, Octa Core, 2.2 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 33W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.43 inches, 1080 x 2400 px, 90 Hz Display with Punch Hole",
      },
      {
        name: "64 MP + 2 MP Dual Rear & 16 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Realme Narzo 60 Pro 5G",
    brand: "Realme ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/realme-narzo-60-pro-5g-ppd1kgdagy2o",
    image:
      "https://cdn1.smartprix.com/rx-iNlT9UoMT-w103-h125/realme-narzo-60-pro.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/realme-narzo-60-pro-5g-ppd1kgdagy2o",
    pricef: "23,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Dimensity 7050, Octa Core, 2.6 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 67W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.7 inches, 1080 x 2412 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "100 MP + 2 MP Dual Rear & 16 MP Front Camera",
      },
      {
        name: "Android v13",
      },
      {
        name: "No FM Radio",
      },
    ],
  },
  {
    name: "Realme 11 Pro",
    brand: "Realme ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/realme-11-pro-ppd1a0nt0jgz",
    image:
      "https://cdn1.smartprix.com/rx-iHqylMYl8-w103-h125/realme-11-pro.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/realme-11-pro-ppd1a0nt0jgz",
    pricef: "23,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC",
      },
      {
        name: "Dimensity 7050, Octa Core, 2.6 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 67W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.7 inches, 1080 x 2412 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "100 MP + 2 MP Dual Rear & 16 MP Front Camera",
      },
      {
        name: "Android v13",
      },
      {
        name: "No FM Radio",
      },
    ],
  },
  {
    name: "Realme 11 Pro Plus",
    brand: "Realme ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/realme-11-pro-plus-5g-ppd1x5qpqidg",
    image:
      "https://cdn1.smartprix.com/rx-iNrcJDIDI-w103-h125/realme-11-pro-plus.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/realme-11-pro-plus-5g-ppd1x5qpqidg",
    pricef: "27,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Vo5G, Wi-Fi, NFC",
      },
      {
        name: "Dimensity 7050, Octa Core, 2.6 GHz Processor",
      },
      {
        name: "8 GB RAM, 256 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 100W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.7 inches, 1080 x 2412 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "200 MP + 8 MP + 2 MP Triple Rear & 32 MP Front Camera",
      },
      {
        name: "Memory Card Not Supported",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "OnePlus 11R 5G",
    brand: " OnePlus",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/oneplus-11r-5g-ppd13nudxzb0",
    image:
      "https://cdn1.smartprix.com/rx-iTWs9Sy4Y-w103-h125/oneplus-11r-5g.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/oneplus-11r-5g-ppd13nudxzb0",
    pricef: "38,339",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster",
      },
      {
        name: "Snapdragon 8+ Gen1, Octa Core, 3.2 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 100W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "50 MP + 8 MP + 2 MP Triple Rear & 16 MP Front Camera",
      },
      {
        name: "Android v13",
      },
      {
        name: "No FM Radio",
      },
    ],
  },
  {
    name: "OnePlus Nord 3 5G",
    brand: "OnePlus ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/oneplus-nord-3-5g-ppd1mxnblktf",
    image:
      "https://cdn1.smartprix.com/rx-irPFo8esu-w103-h125/oneplus-nord-3-5g.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/oneplus-nord-3-5g-ppd1mxnblktf",
    pricef: "33,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster",
      },
      {
        name: "Dimensity 9000, Octa Core, 3.05 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 80W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "50 MP + 8 MP + 2 MP Triple Rear & 16 MP Front Camera",
      },
      {
        name: "Android v13",
      },
      {
        name: "No FM Radio",
      },
    ],
  },
  {
    name: "OnePlus Nord CE 3 Lite 5G (8GB RAM + 256GB)",
    brand: "OnePlus ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/oneplus-nord-ce-3-lite-5g-8gb-ram-256gb-ppd13h9ngff4",
    image:
      "https://cdn1.smartprix.com/rx-icoGLev3N-w103-h125/oneplus-nord-ce-3-li.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/oneplus-nord-ce-3-lite-5g-8gb-ram-256gb-ppd13h9ngff4",
    pricef: "21,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Snapdragon 695 5G, Octa Core, 2.2 GHz Processor",
      },
      {
        name: "8 GB RAM, 256 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 67W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.72 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "108 MP + 2 MP + 2 MP Triple Rear & 16 MP Front Camera",
      },
      {
        name: "Memory Card (Hybrid), upto 1 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Samsung Galaxy S20 FE 5G",
    brand: "Samsung ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/samsung-galaxy-s20-fe-5g-ppd1up4uh3hs",
    image:
      "https://cdn1.smartprix.com/rx-i2KgV4jIM-w103-h125/samsung-galaxy-s20-f.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/samsung-galaxy-s20-fe-5g-ppd1up4uh3hs",
    pricef: "26,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC",
      },
      {
        name: "Snapdragon 865, Octa Core, 2.84 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "4500 mAh Battery with Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.5 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "12 MP + 12 MP + 8 MP Triple Rear & 32 MP Front Camera",
      },
      {
        name: "Memory Card (Hybrid)",
      },
      {
        name: "Android v10",
      },
    ],
  },
  {
    name: "Samsung Galaxy M34 5G (8GB RAM + 128GB)",
    brand: " Samsung",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/samsung-galaxy-m34-5g-8gb-ram-128gb-ppd1vqk43t57",
    image:
      "https://cdn1.smartprix.com/rx-iBEoYKhnm-w103-h125/samsung-galaxy-m34-5.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/samsung-galaxy-m34-5g-8gb-ram-128gb-ppd1vqk43t57",
    pricef: "20,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC",
      },
      {
        name: "Exynos 1280 , Octa Core, 2.4 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "6000 mAh Battery with 25W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.5 inches, 1080 x 2340 px, 120 Hz Display with Water Drop Notch",
      },
      {
        name: "50 MP + 8 MP + 2 MP Triple Rear & 13 MP Front Camera",
      },
      {
        name: "Memory Card (Hybrid), upto 1 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Realme Narzo 60 Pro (12GB RAM + 1TB)",
    brand: "Realme ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/realme-narzo-60-pro-12gb-ram-1tb-ppd10zmak9j1",
    image:
      "https://cdn1.smartprix.com/rx-i7OKBSEm3-w103-h125/realme-narzo-60-pro.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/realme-narzo-60-pro-12gb-ram-1tb-ppd10zmak9j1",
    pricef: "29,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Dimensity 7050, Octa Core, 2.6 GHz Processor",
      },
      {
        name: "12 GB RAM, 1 TB inbuilt",
      },
      {
        name: "5000 mAh Battery with 67W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.7 inches, 1080 x 2400 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "100 MP + 2 MP Dual Rear & 16 MP Front Camera",
      },
      {
        name: "Android v13",
      },
      {
        name: "No FM Radio",
      },
    ],
  },
  {
    name: "OnePlus Nord CE 3 5G",
    brand: " OnePlus",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/oneplus-nord-ce-3-5g-ppd1p2vvw021",
    image:
      "https://cdn1.smartprix.com/rx-ivcnV6G5S-w103-h125/oneplus-nord-ce-3-5g.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/oneplus-nord-ce-3-5g-ppd1p2vvw021",
    pricef: "26,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster",
      },
      {
        name: "Snapdragon 782G, Octa Core, 2.7 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 80W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.7 inches, 1080 x 2412 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "50 MP + 8 MP + 2 MP Triple Rear & 16 MP Front Camera",
      },
      {
        name: "Memory Card (Hybrid), upto 1 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Apple iPhone 15 Pro",
    brand: "Apple ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/apple-iphone-15-pro-ppd10tsnqr74",
    image:
      "https://cdn1.smartprix.com/rx-iZy25vD3t-w103-h125/apple-iphone-15-pro.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/apple-iphone-15-pro-ppd10tsnqr74",
    pricef: "1,31 ,000",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC",
      },
      {
        name: "Bionic A16, Hexa Core, 3.46 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "4852 mAh Battery with Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.06 inches, 1170 x 2532 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "50 MP + 12 MP + 12 MP Triple Rear & 12 MP Front Camera",
      },
      {
        name: "Memory Card Not Supported",
      },
      {
        name: "iOS v15",
      },
    ],
  },
  {
    name: "Samsung Galaxy S22 Ultra 5G",
    brand: "Samsung",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/samsung-galaxy-s22-ultra-5g-ppd1ovlxy9nr",
    image:
      "https://cdn1.smartprix.com/rx-izOADfKsq-w103-h125/samsung-galaxy-s22-u.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/samsung-galaxy-s22-ultra-5g-ppd1ovlxy9nr",
    pricef: "85,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Vo5G, Wi-Fi, NFC",
      },
      {
        name: "Snapdragon 8 Gen1, Octa Core, 3 GHz Processor",
      },
      {
        name: "12 GB RAM, 256 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 45W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.8 inches, 1440 x 3080 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "108 MP Quad Rear & 40 MP Front Camera",
      },
      {
        name: "Android v12",
      },
      {
        name: "Bluetooth",
      },
    ],
  },
  {
    name: "Samsung Galaxy F54",
    brand: " Samsung",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/samsung-galaxy-f54-ppd1n8r3iy4m",
    image:
      "https://cdn1.smartprix.com/rx-iflC8vwCe-w103-h125/samsung-galaxy-f54.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/samsung-galaxy-f54-ppd1n8r3iy4m",
    pricef: "29,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC",
      },
      {
        name: "Exynos 1380, Octa Core, 2.4 GHz Processor",
      },
      {
        name: "8 GB RAM, 256 GB inbuilt",
      },
      {
        name: "6000 mAh Battery with 25W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.7 inches, 1080 x 2408 px, 120 Hz Display with Punch Hole",
      },
      {
        name: "108 MP + 8 MP + 2 MP Triple Rear & 32 MP Front Camera",
      },
      {
        name: "Memory Card (Hybrid), upto 1 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Realme Narzo N53",
    brand: "Realme ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/realme-narzo-n53-ppd1u4wnikml",
    image:
      "https://cdn1.smartprix.com/rx-iK33utT7h-w103-h125/realme-narzo-n53.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/realme-narzo-n53-ppd1u4wnikml",
    pricef: "8,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, VoLTE, Wi-Fi",
      },
      {
        name: "Unisoc T612, Octa Core, 1.8 GHz Processor",
      },
      {
        name: "4 GB RAM, 64 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 33W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.74 inches, 720 x 1600 px, 90 Hz Display with Punch Hole",
      },
      {
        name: "50 MP + Depth Sensor Dual Rear & 8 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 2 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Realme 12",
    brand: "Realme ",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/realme-12-ppd1y7xtyx0f",
    image:
      "https://cdn1.smartprix.com/rx-i1nFbzsSM-w103-h125/realme-12.jpg",
    image_url: "https://www.smartprix.com/mobiles/realme-12-ppd1y7xtyx0f",
    pricef: "14,990",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Dimensity 810 5G, Octa Core, 2.4 GHz Processor",
      },
      {
        name: "8 GB RAM, 128 GB inbuilt",
      },
      {
        name: "5000 mAh Battery with 67W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.67 inches, 1080 x 2408 px, 120 Hz Display with Water Drop Notch",
      },
      {
        name: "50 MP + 2 MP Triple Rear & 16 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
      {
        name: "Android v14",
      },
    ],
  },
  {
    name: "Samsung Galaxy M14 (6GB RAM + 128GB)",
    brand: "Samsung",
    category: "Mobile",
    url: "https://www.smartprix.com/mobiles/samsung-galaxy-m14-6gb-ram-128gb-ppd1a8ag4z34",
    image:
      "https://cdn1.smartprix.com/rx-irbDTgHsB-w103-h125/samsung-galaxy-m14-6.jpg",
    image_url:
      "https://www.smartprix.com/mobiles/samsung-galaxy-m14-6gb-ram-128gb-ppd1a8ag4z34",
    pricef: "15,490",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi",
      },
      {
        name: "Exynos 1330, Octa Core, 2.4 GHz Processor",
      },
      {
        name: "6 GB RAM, 128 GB inbuilt",
      },
      {
        name: "6000 mAh Battery with 25W Fast Charging",
      },
    ],
    selection2: [
      {
        name: "6.6 inches, 1080 x 2408 px, 90 Hz Display with Water Drop Notch",
      },
      {
        name: "50 MP + 2 MP + 2 MP Triple Rear & 13 MP Front Camera",
      },
      {
        name: "Memory Card Supported, upto 1 TB",
      },
      {
        name: "Android v13",
      },
    ],
  },
  {
    name: "Synology DiskStation DS223j Network Attached Storage Drive",
    brand: "Synology ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1o7qr8481",
    image:
      "https://cdn1.smartprix.com/rx-iQAsVNAx7-w103-h125/synology-diskstation.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1o7qr8481",
    pricef: "34,999",
    pricea: "upcoming",
    pricec: "upcoming",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "NAS",
      },
      {
        name: "Desktop Hard Drive",
      },
      {
        name: "Warranty",
      },
      {
        name: "880 g",
      },
    ],
    selection2: [
      {
        name: "Wired",
      },
      {
        name: "Cloud Backup",
      },
      {
        name: "CPU Model: Realtek RTD1619B",
      },
      {
        name: "AES-NI Encryption",
      },
    ],
  },
  {
    name: "Synology DiskStation DS224 Plus Network Attached Storage Drive",
    brand: "Synology ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1b64ga5c8",
    image:
      "https://cdn1.smartprix.com/rx-itA6YV3er-w103-h125/synology-diskstation.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1b64ga5c8",
    pricef: "47,999",
    pricea: "upcoming",
    pricec: "upcoming",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "NAS",
      },
      {
        name: "Desktop Hard Drive",
      },
      {
        name: "Warranty",
      },
      {
        name: "2180 g",
      },
    ],
    selection2: [
      {
        name: "Wired",
      },
      {
        name: "Cloud Backup",
      },
      {
        name: "CPU Model: Intel Celeron J4125",
      },
      {
        name: "AES-NI Encryption",
      },
    ],
  },
  {
    name: "Synology DiskStation DS423 Plus Network Attached Storage Drive",
    brand: " Synology",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd10m9daf6r",
    image:
      "https://cdn1.smartprix.com/rx-icJvAh1LV-w103-h125/synology-diskstation.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd10m9daf6r",
    pricea: "50,935",
    pricef: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12VTfKzYQ_XVTTgf7J_kIQNVXhrhArnrysuhyihDRPR_pel7xxh-hrhhaFhrhrhhacBrWahrhrBi5Pnlirgb3hrFB54SaRdTdnPmSG ",
    croma: " ",
    selection1: [
      {
        name: "NAS",
      },
      {
        name: "Desktop Hard Drive",
      },
      {
        name: "Warranty",
      },
      {
        name: "2180 g",
      },
    ],
    selection2: [
      {
        name: "Wired",
      },
      {
        name: "Cloud Backup",
      },
      {
        name: "CPU Model: Intel Celeron J4125",
      },
      {
        name: "AES-NI Encryption",
      },
    ],
  },
  {
    name: "Synology DiskStation DS723 Plus Network Attached Storage Drive",
    brand: "Synology ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1pg07ppwz",
    image:
      "https://cdn1.smartprix.com/rx-iNvpvd8MZ-w103-h125/synology-diskstation.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1pg07ppwz",
    pricea: "51,711",
    pricef: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12VTfKzYQ_XVnlZA2O6.WS05XhrhArnrysuhyihDRPRvdl-5-dh-hrhhaFhrhrhhacBrWahrhrBi5BWPGBB8yhrFB55Psj0B5dFXaT ",
    croma: " ",
    selection1: [
      {
        name: "NAS",
      },
      {
        name: "Desktop Hard Drive",
      },
      {
        name: "Warranty",
      },
      {
        name: "1510 g",
      },
    ],
    selection2: [
      {
        name: "Wired",
      },
      {
        name: "Cloud Backup",
      },
      {
        name: "CPU Model: AMD Ryzen R1600",
      },
      {
        name: "AES-NI Encryption",
      },
    ],
  },
  {
    name: "Synology DiskStation DS923 Plus Network Attached Storage Drive",
    brand: "Synology ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1yotdhp1o",
    image:
      "https://cdn1.smartprix.com/rx-icrEYpjel-w103-h125/synology-diskstation.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1yotdhp1o",
    pricea: "62,027",
    pricef: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12VTfKzYQ_XVFxEeOrlEsrdJfhrhArnrysuhyihDRPRpGVKdbvh-hrhhaFhrhrhhacBrWahrhrBi5IsUitB5shrFB5.j5XjVvWfpSX",
    croma: " ",
    selection1: [
      {
        name: "NAS",
      },
      {
        name: "Desktop Hard Drive",
      },
      {
        name: "Warranty",
      },
      {
        name: "2240 g",
      },
    ],
    selection2: [
      {
        name: "Wired",
      },
      {
        name: "Cloud Backup",
      },
      {
        name: "CPU Model: AMD Ryzen R1600",
      },
      {
        name: "AES-NI Encryption",
      },
    ],
  },
  {
    name: "WD My Cloud Expert 24 TB External Hard Disk Drive",
    brand: "WD ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd102ex0yik",
    image:
      "https://cdn1.smartprix.com/rx-iTL86gYIV-w103-h125/wd-my-cloud-expert-2.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd102ex0yik",
    pricef: "1,19 ,000",
    pricea: "1,19 ,000",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12HpHSZSmmJpn6-aS4rDSdtRUFhrhAgTYBOr3Uh78icnIcATsCicaDBa3UcoHcU6caDhUurTctr3iciYFOci3Y2actiicFUs3rWah-hDh8gAWACoDyZuZ3ahmBYihkjwwxw7wEH7KHKKKzhrhhaFhrhrhhacBrWahrhrBi5PoaDPIYOhrFB5br9t4miwuE36 ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12Crq6V-nvFdjSE_XYqH5stzJShrhAA3snrh78aFhUuciYWYUrTcnIcATsCicoHcU6cCF6cZcPcuaU8s3OcrUUrAtaicFUs3rWacQ6sicarFIcFaUcCBc8i68yaPoHPO6Oc6aFuchnch-hDoHPGX4hrhhaFhrhrhhacBrWahrhrBi5PoaDPIYOhrFB52KSBJVBDfFP0 ",
    selection1: [
      {
        name: "24 TB Storage",
      },
      {
        name: "115 Mbps (USB 3.0)",
      },
      {
        name: "USB 1.1",
      },
      {
        name: "HDD",
      },
    ],
    selection2: [
      {
        name: "3.5 Inches Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "7780 g",
      },
      {
        name: "Cloud Backup",
      },
    ],
  },
  {
    name: "Consistent 1TB External Hard Drive",
    brand: "Consistent ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd19iwcu9ux",
    image:
      "https://cdn1.smartprix.com/rx-igeEz9Glt-w103-h125/consistent-1tb-exter.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd19iwcu9ux",
    pricea: "7,000",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GAp4W41XNDZ5RvEzmz4RazhrhArnrysuhyihDRPX~pSm7x.h-hrhhaFhrhrhhacBrWahrhrBi5lY8AClCDhrFB5JBrjWBBJZC0n ",
    croma: " ",
    selection1: [
      {
        name: "1 TB Storage",
      },
      {
        name: "eSATA",
      },
      {
        name: "External Hard Drive",
      },
      {
        name: "2.5 Inches Hard Drive",
      },
    ],
    selection2: [
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "220 g",
      },
      {
        name: "Wired",
      },
      {
        name: "Hybrid Drive",
      },
    ],
  },
  {
    name: "Seagate Backup Plus Hub 14TB External Hard Drive",
    brand: "Seagate ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1you1bpi1",
    image:
      "https://cdn1.smartprix.com/rx-iYblFa1Sl-w103-h125/seagate-backup-plus.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1you1bpi1",
    pricea: "25,499",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12VTfKzYQ_XV021fDe~bQAdYYhrhArnrysuhyihDRPXGvoGS~0h-hrhhaFhrhrhhacBrWahrhrBi5IsC56BY5hrFB58saZ.ok.vYCr ",
    croma: " ",
    selection1: [
      {
        name: "14 TB Storage",
      },
      {
        name: "USB 3.0",
      },
      {
        name: "External Hard Drive",
      },
      {
        name: "2.5 Inches Hard Drive",
      },
    ],
    selection2: [
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "1060 g",
      },
      {
        name: "Wired",
      },
      {
        name: "Data Recovery Services",
      },
    ],
  },
  {
    name: "Seagate Ultra Touch 5TB External Hard Drive",
    brand: " Seagate",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1xiif7zpn",
    image:
      "https://cdn1.smartprix.com/rx-iJ2pp5aKw-w103-h125/seagate-ultra-touch.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1xiif7zpn",
    pricea: "14,499",
    pricef: "16,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12VTfKzYQ_XV13k.ePpkBQbfuhrhArnrysuhyihDRPRdHK_vwbh-hrhhaFhrhrhhacBrWahrhrBi5DYYgGyBuhrFB5O9QjCTAB0EiI",
    croma: " ",
    selection1: [
      {
        name: "5 TB Storage",
      },
      {
        name: "USB 3.0",
      },
      {
        name: "HDD",
      },
      {
        name: "2.5 Inches Hard Drive",
      },
    ],
    selection2: [
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "267 g",
      },
      {
        name: "Wired",
      },
      {
        name: "5400 RPM",
      },
    ],
  },
  {
    name: "Toshiba Canvio Partner USB-C 1 TB External Hard Disk Drive",
    brand: " Toshiba",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1lxfrwtjv",
    image:
      "https://cdn1.smartprix.com/rx-iSTCjh8TN-w103-h125/toshiba-canvio-partn.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1lxfrwtjv",
    pricef: "3,750",
    pricea: "3,490",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=12rm6ob5wwryi5Z2p~COi7khrhAgTYBOr3Uh7UsFtY6rcAru2YscBr3Uua3cCF6cAc5cU6caDhUurTctr3iciYFOci3Y2actiih-hDh8aZHbbAiH6ZGlghmBYihkjww7dREzKREHHR7lhrhhaFhrhrhhacBrWahrhrBi5TDg38UQ2hrFB5ZsNXk~jHXUJN",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "1 TB Storage",
      },
      {
        name: "5 Gbps (USB 3.0)",
      },
      {
        name: "Plastic Body",
      },
      {
        name: "HDD",
      },
    ],
    selection2: [
      {
        name: "Portable Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "149 g",
      },
      {
        name: "Wired",
      },
    ],
  },
  {
    name: "Seagate One Touch Hub 6TB External Hard Drive (STLC6000400)",
    brand: "Seagate ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1st2zr9sa",
    image:
      "https://cdn1.smartprix.com/rx-iWQvqkAR1-w103-h125/seagate-one-touch-hu.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1st2zr9sa",
    pricef: "11,999",
    pricea: "11,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12VTfKzYTzllSzj-oIVtqlZyPhrhArnrysuhyihDRPlZJ_Vpmeh-hrhhaFhrhrhhacBrWahrhrBi5FUoy3lFrhrFB55oIf5gEziJzF ",
    croma:
      "https://l.smartprix.com/l?k=1256H38uazwEs13HHP1ugdYTIhrhAgTYBOr3Uh7FarWrUacbcU6caDhUurTctr3iciYFOci3Y2actiih-hDh84i5rZrGolg5rXhmBYihkjww7SG_HwJqX4E-phrhhaFhrhrhhacBrWahrhrBi5FUoy3lFrhrFB5j-3IQ5vQnDvX ",
    selection1: [
      {
        name: "6 TB Storage",
      },
      {
        name: "HDD",
      },
      {
        name: "Desktop Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
    ],
    selection2: [
      {
        name: "1240 g",
      },
      {
        name: "Wired",
      },
      {
        name: "5400 RPM",
      },
      {
        name: "Seagate",
      },
    ],
  },
  {
    name: "Seagate Game Drive 4TB External Hard Drive (STLL4000200)",
    brand: "Seagate ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1ydqmqd4a",
    image:
      "https://cdn1.smartprix.com/rx-ik8vRCpxX-w103-h125/seagate-game-drive-4.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ydqmqd4a",
    pricef: "9,699",
    pricea: "7,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12rm6ob5weaQKDBewHHJWOPhrhAgTYBOr3Uh7FarWrUacHcU6caDhUurTctr3iciYFOci3Y2actiih-hDh8GblXHHPiAXX5HhmBYihkjww7SG_HVzo.7jSzhrhhaFhrhrhhacBrWahrhrBi5IiNnNiHrhrFB5fGRPKBdWfgjv ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "4 TB Storage",
      },
      {
        name: "120 Mbps (USB 3.0)",
      },
      {
        name: "5400 RPM Body",
      },
      {
        name: "HDD",
      },
    ],
    selection2: [
      {
        name: "Portable Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "249 g",
      },
      {
        name: "Wired",
      },
    ],
  },
  {
    name: "Seagate One Touch Hub 8TB External Hard Drive (STLC8000400)",
    brand: "Seagate ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1vjkclfqe",
    image:
      "https://cdn1.smartprix.com/rx-inBKloU5T-w103-h125/seagate-one-touch-hu.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1vjkclfqe",
    pricef: "15,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "8 TB Storage",
      },
      {
        name: "HDD",
      },
      {
        name: "Desktop Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
    ],
    selection2: [
      {
        name: "1240 g",
      },
      {
        name: "Wired",
      },
      {
        name: "Seagate",
      },
    ],
  },
  {
    name: "Seagate One Touch Hub 10TB External Hard Drive (STLC10000400)",
    brand: " Seagate",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1j8y0lq25",
    image:
      "https://cdn1.smartprix.com/rx-i0WYQhzPG-w103-h125/seagate-one-touch-hu.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1j8y0lq25",
    pricef: "20,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "10 TB Storage",
      },
      {
        name: "160 Mbps (USB 2.0)",
      },
      {
        name: "HDD",
      },
      {
        name: "Desktop Hard Drive",
      },
    ],
    selection2: [
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "1240 g",
      },
      {
        name: "Wired",
      },
      {
        name: "7200 RPM",
      },
    ],
  },
  {
    name: "Seagate One Touch Hub 18TB External Hard Drive (STLC18000402)",
    brand: "Seagate ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd187dbfncv",
    image:
      "https://cdn1.smartprix.com/rx-iEqXga28o-w103-h125/seagate-one-touch-hu.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd187dbfncv",
    pricef: "35,499",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "18 TB Storage",
      },
      {
        name: "120 Mbps (USB 2.0)",
      },
      {
        name: "HDD",
      },
      {
        name: "Desktop Hard Drive",
      },
    ],
    selection2: [
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "1240 g",
      },
      {
        name: "Wired",
      },
      {
        name: "5400 RPM",
      },
    ],
  },
  {
    name: "Toshiba Canvio Partner USB-C 2 TB External Hard Disk Drive",
    brand: "Toshiba ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1gl38zvgj",
    image:
      "https://cdn1.smartprix.com/rx-iC4YmuPpZ-w103-h125/toshiba-canvio-partn.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1gl38zvgj",
    pricef: "4,454",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "2 TB Storage",
      },
      {
        name: "5 Gbps (USB 2.0)",
      },
      {
        name: "Plastic Body",
      },
      {
        name: "HDD",
      },
    ],
    selection2: [
      {
        name: "Portable Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "149 g",
      },
      {
        name: "Wired",
      },
    ],
  },
  {
    name: "Toshiba Canvio Partner USB-C 4 TB External Hard Disk Drive",
    brand: "Toshiba ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd15lxiuqeu",
    image:
      "https://cdn1.smartprix.com/rx-ix4j78kkq-w103-h125/toshiba-canvio-partn.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd15lxiuqeu",
    pricef: "7,589",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "4 TB Storage",
      },
      {
        name: "5 Gbps (USB 2.0)",
      },
      {
        name: "Plastic Body",
      },
      {
        name: "HDD",
      },
    ],
    selection2: [
      {
        name: "Portable Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "217.5 g",
      },
      {
        name: "Wired",
      },
    ],
  },
  {
    name: "Toshiba Canvio Advance 4TB USB 3.0 External Hard Disk Drive",
    brand: " Toshiba ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd10wby9bhe",
    image:
      "https://cdn1.smartprix.com/rx-iq0WJI0AI-w103-h125/toshiba-canvio-advan.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd10wby9bhe",
    pricef: "7,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "4 TB Storage",
      },
      {
        name: "5 Gbps (USB 2.0)",
      },
      {
        name: "Textured Finish Body",
      },
      {
        name: "External Hard Disk Drive",
      },
    ],
    selection2: [
      {
        name: "2.5 Inches Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "218 g",
      },
      {
        name: "Wired",
      },
    ],
  },
  {
    name: "Toshiba Canvio Partner 2TB External Hard Disk Drive",
    brand: "Toshiba ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd1nsejowl0",
    image:
      "https://cdn1.smartprix.com/rx-iBVfStlD1-w103-h125/toshiba-canvio-partn.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1nsejowl0",
    pricef: "5,304",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "2 GB Storage",
      },
      {
        name: "5 Gbps (USB 2.0)",
      },
      {
        name: "Plastic Body",
      },
      {
        name: "HDD",
      },
    ],
    selection2: [
      {
        name: "Portable Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "149 g",
      },
      {
        name: "Wired",
      },
    ],
  },
  {
    name: "Toshiba Canvio Partner 1TB External Hard Disk Drive",
    brand: "Toshiba ",
    category: "Harddisk",
    url: "https://www.smartprix.com/nf/pd/pd133js03q9",
    image:
      "https://cdn1.smartprix.com/rx-iInMJsb1T-w103-h125/toshiba-canvio-partn.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd133js03q9",
    pricef: "3,903",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "1 TB Storage",
      },
      {
        name: "5 Gbps (USB 2.0)",
      },
      {
        name: "Plastic Body",
      },
      {
        name: "HDD",
      },
    ],
    selection2: [
      {
        name: "Portable Hard Drive",
      },
      {
        name: "Manufacturer Warranty",
      },
      {
        name: "149 g",
      },
      {
        name: "Wired",
      },
    ],
  },
  {
    name: "OPPO Enco Air 3 Pro True Wireless Earbuds",
    brand: "OPPO",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/oppo-enco-air-3-pro-true-wireless-earbuds-ppd1zbqfzz5d",
    pricef: "4,999",
    pricea: "4,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12VPm7PJK~TBXEm_.B0uUH2hrhAgTYBOr3Uh7sBBscauAscrY3ZcB3scYuiCFU3IcgY3FUcAsnBsFhsc6rn6sscgY6a3cruAcZPtcBTrIUYnacgrFUcAtr3Wac6TCaUssUtctariFaUh-hDh8ZXabaZZoZgZbbhmBYihkjww7~~ZVSEJwX7-EhrhhaFhrhrhhacBrWahrhrBi5y6Ngyy4ihrFB5y9HJqP2J4Ol7 ",
    amazon:
      " https://l.smartprix.com/l?k=12HRUnrJOqkiOqFGr3tzq1IQhrhArnrysuhyihDRPwl~4XK7~h-hrhhaFhrhrhhacBrWahrhrBi5y6Ngyy4ihrFB5b2PYKWVmwx9w",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iQLfb8EAE-w103-h125/oppo-enco-air-3-pro.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/oppo-enco-air-3-pro-true-wireless-earbuds-ppd1zbqfzz5d",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Active Noise Cancellation",
      },
      {
        name: "Microphone",
      },
      {
        name: "20 m Range",
      },
      {
        name: "10 Hz (Min) - 40 kHz (Max) Frequency Response",
      },
    ],
  },
  {
    name: "Realme Buds Wireless 3 Neckband",
    brand: "Realme ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/realme-buds-wireless-3-ppd1xo0h5rhs",
    pricef: "1,799",
    pricea: "1,490",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=12VPm7PJK~TY-CA9THp-~PUhrhAgTYBOr3Uh73arTnac6CiFc8Y3aTaFFcZcZPi6cruAcZbPciaW3aacFBrUYrTcrCiYscCBUscHPctsC3FcBTrI6huc6TCaUssUtctariFaUh-hDh8iob5P4ZaPXHGohmBYihkjww7~_0-Xf-SKSZHhrhhaFhrhrhhacBrWahrhrBi5DsPt43tFhrFB5Y2T9a58Pa75_",
    amazon:
      "https://l.smartprix.com/l?k=12HRUnrJOqkii~9kpo8-Q8CthrhArnrysuhyihDRPwX0-57~~h-hrhhaFhrhrhhacBrWahrhrBi5DsPt43tFhrFB5aQEmp0wTU_fs ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-ihFxXCkF0-w103-h125/realme-buds-wireless.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/realme-buds-wireless-3-ppd1xo0h5rhs",
    selection1: [
      {
        name: "Neckband",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Active Noise Cancellation",
      },
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
    ],
  },
  {
    name: "boAt Airdopes Alpha True Wireless Earbuds",
    brand: " Boat",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-airdopes-alpha-true-wireless-earbuds-ppd1riko2hjm",
    pricef: "999",
    pricea: "990",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=12Gmo9VTolJjQE.7ossXYyhrhAgTYBOr3Uh76srUcrY3isBaFcrTBtrcZ4ct3FcBTrI6huc5Znnci3YhCFciCrTcnYAFcauDc6arFUcnsiac6TCaUssUtctariFaUh-hDh855X5gl546X5aAhmBYihkjww71oS-jZSVSzxHhrhhaFhrhrhhacBrWahrhrBi53YOsotQnhrFB5wzXaAn_avBRV",
    amazon:
      " https://l.smartprix.com/l?k=12-IYOOpYmCyIf8m~uw2JmZhrhA6srUcTYgaFUITah7hhaFh-rY3isBaFcrTBtrcU3Cac8Y3aTaFFcar36CiFhrhhaFhrhrhhacBrWahrhrBi53YOsotQnhrFB5u~2Idkgon9Pu",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iyJOgVi9s-w103-h125/boat-airdopes-alpha.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-airdopes-alpha-true-wireless-earbuds-ppd1riko2hjm",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "13 mm Driver",
      },
    ],
  },
  {
    name: "boAt Airdopes Max True Wireless Earbuds",
    brand: " Boat",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-airdopes-max-true-wireless-earbuds-ppd1jk92a51x",
    pricef: "1,199",
    pricea: "1,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12HRUnrJOqXk-xlCGduv514ghrhArnrysuhyihDRPwGwpp0z-h-hrhhaFhrhrhhacBrWahrhrBi5QOlor45DhrFB5.HrEqwKwrVR~",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-is3a7Cr6c-w103-h125/boat-airdopes-max-tr.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-airdopes-max-true-wireless-earbuds-ppd1jk92a51x",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "13 mm Driver",
      },
    ],
  },
  {
    name: "OnePlus Nord Buds 2R True Wireless Earbuds",
    brand: "OnePlus ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/oneplus-nord-buds-2r-true-wireless-earbuds-ppd15t83jbh5",
    pricef: "2,199",
    pricea: "2,490",
    pricec: "2,199",
    flipkart:
      "https://l.smartprix.com/l?k=12VPm7o~sY0D-d7UgkQyISShrhAgTYBOr3Uh7hFBTCFcus3ic6CiFco3cU3Cac8Y3aTaFFcar3car36CiFc5ocHnnci3YhCFcYB44c3rUhNc6TCaUssUtctariFaUh-hDh8o4bPgbgl65i46hmBYihkjww7~vwovS--eVEjhrhhaFhrhrhhacBrWahrhrBi54UXZQ6t4hrFB5sj1AyZ6iUQIu ",
    amazon:
      " https://l.smartprix.com/l?k=12HRUnrfW8yq.k7i9QZ9-0AehrhArnrysuhyihDRPwX-RZ74Jh-hrhhaFhrhrhhacBrWahrhrBi54UXZQ6t4hrFB5lKT4728qFzBj",
    croma:
      "https://l.smartprix.com/l?k=12FvrmXRREB.qi3Im.iqGYRqhrhAnIuU3rh7SarihOFh-kua1TCFh-kua1TCFcds3icRCiFco3cz3CacJY3aTaFFcYucqr3cqr36CiFc8YUtcpYAh-oZGZXoZPh-6CIhrhhaFhrhrhhacBrWahrhrBi54UXZQ6t4hrFB5.-GNnos5dbKv",
    image:
      "https://cdn1.smartprix.com/rx-iohUgHCUd-w103-h125/oneplus-nord-buds-2r.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/oneplus-nord-buds-2r-true-wireless-earbuds-ppd15t83jbh5",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Active Noise Cancellation",
      },
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
    ],
  },
  {
    name: "OnePlus Bullets Z3 Wireless Neckband",
    brand: " OnePlus",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/oneplus-bullets-z3-wireless-neckband-ppd1w8betmnh",
    pricef: "2,599",
    pricea: "3,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-ip8260eL5-w103-h125/oneplus-bullets-z3-w.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/oneplus-bullets-z3-wireless-neckband-ppd1w8betmnh",
    selection1: [
      {
        name: "Neckband",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Active Noise Cancellation",
      },
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
    ],
  },
  {
    name: "Xiaomi Buds 4 Pro",
    brand: "Xiaomi ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/xiaomi-buds-4-pro-ppd1fnz8zhbo",
    pricef: "15,999",
    pricea: "16,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-im7tbBaN5-w103-h125/xiaomi-buds-4-pro.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/xiaomi-buds-4-pro-ppd1fnz8zhbo",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Active Noise Cancellation",
      },
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 2 kHz (Max) Frequency Response",
      },
    ],
  },
  {
    name: "boAt Airdopes Atom 81 True Wireless Earbuds",
    brand: "Boat ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-airdopes-atom-81-true-wireless-earbuds-ppd18we03q7w",
    pricef: "899",
    pricea: "1,190",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12HRQduYT9r8I7JAqznjH1UnhrhA6srUcTYgaFUITah7hhaFh-rY3isBaFcrUsncX5cU3Cac8Y3aTaFFcar36CiFhrhhaFhrhrhhacBrWahrhrBi5X8aPZNG8hrFB5W~p0UlYbT-F. ",
    amazon:
      "https://l.smartprix.com/l?k=125_m.HqK9G._tIilfWBt8YhrhArnrysuhyihDRPRV741~bzh-hrhhaFhrhrhhacBrWahrhrBi5X8aPZNG8hrFB5aaKCJHUu7WzG ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iVm3mzVwd-w103-h125/boat-airdopes-atom-8.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-airdopes-atom-81-true-wireless-earbuds-ppd18we03q7w",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "13 mm Driver",
      },
    ],
  },
  {
    name: "iQOO TWS Air Gaming True Wireless Earbuds",
    brand: "IQOO ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/iqoo-tws-air-gaming-true-wireless-earbuds-ppd13anhd0es",
    pricef: "1,599",
    pricea: "Upcoming",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iWWzjCfOd-w103-h125/iqoo-tws-air-gaming.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/iqoo-tws-air-gaming-true-wireless-earbuds-ppd13anhd0es",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "Deep Bass",
      },
      {
        name: "Sweat Proof",
      },
    ],
  },
  {
    name: "OPPO Enco Buds 2 True Wireless Earbuds",
    brand: "OPPO ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/oppo-enco-buds-2-true-wireless-earbuds-ppd1cmhx8njv",
    pricef: "1,499",
    pricea: "1,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12VPmxIrw6u5mZVJuPRFBqlhrhAgTYBOr3Uh7sBBscauAsc6CiFcocoXctsC3Fc6rUhUIcTYgaciaaBcusYFacAruAaTTrUh3c6TCaUssUtctariFaUh-hDh8ZZHHgrob45XaihmBYihkjww7SGf.fbjS7wS-hrhhaFhrhrhhacBrWahrhrBi5AntDXuQ2hrFB5fXeRFx0Oad.K ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-injFnRDpj-w103-h125/oppo-enco-buds-2-tru.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/oppo-enco-buds-2-true-wireless-earbuds-ppd1cmhx8njv",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.2",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "10 mm Driver",
      },
    ],
  },
  {
    name: "boAt Nirvana Ion True Wireless Earbuds",
    brand: "Boat ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-nirvana-ion-true-wireless-earbuds-ppd1c7ybeq48",
    pricef: "2,299",
    pricea: "2,490",
    pricec: "2,299",
    flipkart:
      "https://l.smartprix.com/l?k=12Fe0y~mIUDuFt-zAmmd-IaohrhA6srUcTYgaFUITah7hhaFh-uY32rurch3c6TCaUssUtc8Y3aTaFFcar36CiFhrhhaFhrhrhhacBrWahrhrBi5AGI6aNHXhrFB53-V.v_YsP0DU ",
    amazon:
      " https://l.smartprix.com/l?k=12HRUnrrA79fgqk~.i~xgeQQhrhArnrysuhyihDRPRJXz_--oh-hrhhaFhrhrhhacBrWahrhrBi5AGI6aNHXhrFB5G03JkfYb3s1k",
    croma:
      "https://l.smartprix.com/l?k=12HRYxQVG~3dBTl4bHei3iWehrhAA3snrh76srUcuY32rurch3cU8Fcar36CiFc8YUtcau2Y3suh2UrTcusYFacAruAaTTrUh3cYBDHc8rhUc3aFYFUruUc5oPctsC3FcBTrI6huchhgch-hDoGPHZXhrhhaFhrhrhhacBrWahrhrBi5AGI6aNHXhrFB5buIbbOmu1wbz ",
    image:
      "https://cdn1.smartprix.com/rx-iE7VOgOjb-w103-h125/boat-nirvana-ion-tru.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-nirvana-ion-true-wireless-earbuds-ppd1c7ybeq48",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.2",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "10 mm Driver",
      },
    ],
  },
  {
    name: "iQOO TWS 1 True Wireless Earbuds",
    brand: "IQOO ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/iqoo-tws-1-true-wireless-earbuds-ppd1cjzebhhc",
    pricef: "4,199",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iaAPWCyJF-w103-h125/iqoo-tws-1-true-wire.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/iqoo-tws-1-true-wireless-earbuds-ppd1cjzebhhc",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth",
      },
    ],
    selection2: [
      {
        name: "Active Noise Cancellation",
      },
      {
        name: "Microphone",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "12.2 mm Driver",
      },
    ],
  },
  {
    name: "OnePlus Bullets Z2 Wireless Neckband",
    brand: "OnePlus ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/oneplus-bullets-wireless-z2-ppd1z0feb199",
    pricef: "1,999",
    pricea: "1,490",
    pricec: "1,599",
    flipkart:
      "https://l.smartprix.com/l?k=12FvrmXRjuVbkngyff6C8CtxhrhAnIuU3rh7SarihOFh-kua1TCFh-kua1TCFcRCTTaUFc.ocRTCaUssUtcJY3aTaFFcYucqr3cqr3hOFc8YUtcpYAh-oZo5XHbbh-6CIhrhhaFhrhrhhacBrWahrhrBi5yPga65llhrFB5UmA36blnPjRl ",
    amazon:
      "https://l.smartprix.com/l?k=12HRUnrrA7o6PZfBHtAW_V~HhrhArnrysuhyihDRPRZpdf7zJh-hrhhaFhrhrhhacBrWahrhrBi5yPga65llhrFB5pZopI7ouwT.O ",
    croma:
      " https://l.smartprix.com/l?k=12HRYxQVG~6~jr-z6XaRJn_WhrhAA3snrh7hFBTCFc6CTTaUFcyocuaAO6hYc8YUtcrYcusYFacAruAaTTrUh3cYB44c8rhUc3aFYFUruUcgrFUcAtr3WhNcQryycW3aauch-hDoGZoZohrhhaFhrhrhhacBrWahrhrBi5yPga65llhrFB5dofRBFa6KvRd",
    image:
      "https://cdn1.smartprix.com/rx-i4dJm1ukh-w103-h125/oneplus-bullets-z2-w.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/oneplus-bullets-wireless-z2-ppd1z0feb199",
    selection1: [
      {
        name: "Neckband",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.0",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "12.4 mm Driver",
      },
    ],
  },
  {
    name: "pTron PlayBuds 1 Pro True Wireless Earbuds",
    brand: "pTron ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/ptron-playbuds-pro-2-true-wireless-earbuds-ppd1zvpw8lmz",
    pricef: "1,199",
    pricea: "1,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12HRUnrJOqXEwzPKBNlk5uOQhrhArnrysuhyihDRPwZfvp-Z0h-hrhhaFhrhrhhacBrWahrhrBi5y2B8XTnyhrFB5CtBKBs41xseX ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iUu7Qossc-w103-h125/ptron-playbuds-1-pro.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/ptron-playbuds-pro-2-true-wireless-earbuds-ppd1zvpw8lmz",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "13 mm Driver",
      },
    ],
  },
  {
    name: "JBL Tour Pro 2 True Wireless Earbuds",
    brand: "JBL ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/jbl-tour-pro-2-true-wireless-earbuds-ppd1m2bsa76q",
    pricef: "18,990",
    pricea: "16,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-i1mZY3w79-w103-h125/jbl-tour-pro-2-true.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/jbl-tour-pro-2-true-wireless-earbuds-ppd1m2bsa76q",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "10 mm Driver",
      },
    ],
  },
  {
    name: "boAt Airdopes Kick True Wireless Earbuds",
    brand: " Boat",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-airdopes-kick-true-wireless-earbuds-ppd148o0z4c4",
    pricef: "1,499",
    pricea: "1,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iMBntpRpU-w103-h125/boat-airdopes-kick-t.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-airdopes-kick-true-wireless-earbuds-ppd148o0z4c4",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "13 mm Driver",
      },
    ],
  },
  {
    name: "boAt Immortal 171 True Wireless Earbuds",
    brand: "Boat ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-immortal-171-true-wireless-earbuds-ppd1pfeke8cj",
    pricef: "1,499",
    pricea: "1,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iXOJnkGk5-w103-h125/boat-immortal-171-tr.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-immortal-171-true-wireless-earbuds-ppd1pfeke8cj",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "40 hours Battery Life with Case",
      },
    ],
  },
  {
    name: "boAt Airdopes Crude True Wireless Earbuds",
    brand: "Boat ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-airdopes-crude-true-wireless-earbuds-ppd1nd0jv87h",
    pricef: "1,499",
    pricea: "1,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iYOPveu0B-w103-h125/boat-airdopes-crude.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-airdopes-crude-true-wireless-earbuds-ppd1nd0jv87h",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "10 mm Driver",
      },
    ],
  },
  {
    name: "boAt Airdopes 141 True Wireless Earbuds",
    brand: "Boat ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-airdopes-141-true-wireless-earbuds-ppd11sdvwvpt",
    pricef: "999",
    pricea: "1,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iP8UNBXrc-w103-h125/boat-airdopes-141-tr.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-airdopes-141-true-wireless-earbuds-ppd11sdvwvpt",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.0",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "8 mm Driver",
      },
    ],
  },
  {
    name: "boAt Immortal 150 True Wireless Earbuds",
    brand: "Boat ",
    category: "Headphone",
    url: "https://www.smartprix.com/mobile_headphones/boat-immortal-150-true-wireless-earbuds-ppd1giwtbbmi",
    pricef: "1,199",
    pricea: "1,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-ilJhT4uBV-w103-h125/boat-immortal-150-tr.jpg",
    image_url:
      "https://www.smartprix.com/mobile_headphones/boat-immortal-150-true-wireless-earbuds-ppd1giwtbbmi",
    selection1: [
      {
        name: "TWS Earbuds",
      },
      {
        name: "In the Ear",
      },
      {
        name: "Wireless Headphones",
      },
      {
        name: "Bluetooth 5.3",
      },
    ],
    selection2: [
      {
        name: "Microphone",
      },
      {
        name: "10 m Range",
      },
      {
        name: "20 Hz (Min) - 20 kHz (Max) Frequency Response",
      },
      {
        name: "10 mm Driver",
      },
    ],
  },
  {
    name: "Racold Omnis RS 10L Storage Water Geyser",
    brand: "Racold ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1b70iycvv",
    image:
      "https://cdn1.smartprix.com/rx-iz0zlN27F-w103-h125/racold-omnis-rs-10l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1b70iycvv",
    pricec: "9,599",
    pricea: "",
    pricef: " --",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12nmXdqd6sR8vfk7IQ1s3dHdhrhAA3snrh73rAsTicsnuYFc3Fc5PcTYU3aFc4cFUr3cFUs3rWac8rhUcWaIFa3coPPPc8rUUFcZ5XPXHPchhgch-hDoGZbbohrhhaFhrhrhhacBrWahrhrBi56GPYIA22hrFB5R7EXXTCPzb_- ",
    selection1: [
      {
        name: "10 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "18 min Heating Time",
      },
      {
        name: "Rust Resistant",
      },
      {
        name: "Thermostat, Temperature Control",
      },
    ],
  },
  {
    name: "Racold Omnis DG 25L Storage Water Geyser",
    brand: "Racold ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd14ofht1be",
    image:
      "https://cdn1.smartprix.com/rx-iof95hPmz-w103-h125/racold-omnis-dg-25l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd14ofht1be",
    pricef: "out of stock",
    pricea: "out of stock",
    pricec: "out of atock",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "25 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "18 min Heating Time",
      },
      {
        name: "Rust Resistant",
      },
      {
        name: "Thermostat, Indicator, Temperature Control",
      },
    ],
  },
  {
    name: "V-Guard Vistora 25 L Storage Water Geyser",
    brand: "V-Guard ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1em733c03",
    image:
      "https://cdn1.smartprix.com/rx-inkBf9dWU-w103-h125/v-guard-vistora-25-l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1em733c03",
    pricef: "8,299",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12ZY.QWK-lTP6WGtF--fPGkWhrhAgTYBOr3Uh72cWCr3ico4cTcFUs3rWac8rhUcWaIFa3c2YFUs3rchhgh-hDh8lGoigHZ4G5HlbhmBYihkJ7f7pZ1bKJv~17zJhrhhaFhrhrhhacBrWahrhrBi5anGZZAPZhrFB5RXKKqtAK5YDf ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "25 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "Thermostat",
      },
      {
        name: "Enamel Coating Insulation Material",
      },
      {
        name: "Steel Tank Material",
      },
    ],
  },
  {
    name: "Bajaj Caldia NXG 10 L Storage Water Geyser",
    brand: "Bajaj ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1cusb5rpm",
    image:
      "https://cdn1.smartprix.com/rx-i1WJv39jB-w103-h125/bajaj-caldia-nxg-10.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1cusb5rpm",
    pricef: "6,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "10 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "15 seconds Heating Time",
      },
      {
        name: "Rust Resistant",
      },
      {
        name: "Thermostat, Indicator, Temperature Control",
      },
    ],
  },
  {
    name: "Havells Fabia 10 L Storage Water Geyser",
    brand: " Havells",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1htgv8rco",
    image:
      "https://cdn1.smartprix.com/rx-ifpx6GMUC-w103-h125/havells-fabia-10-l-s.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1htgv8rco",
    pricef: "9,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "10 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "15 min Heating Time",
      },
      {
        name: "Thermostat, Indicator",
      },
      {
        name: "Ultra Thick Steel Tank Material",
      },
    ],
  },
  {
    name: "Racold CDR DLX Plus 15 L Storage Water Geyser",
    brand: "Racold ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1pzahgzr4",
    image:
      "https://cdn1.smartprix.com/rx-iGGNKwS2W-w103-h125/racold-cdr-dlx-plus.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1pzahgzr4",
    pricef: "9,199",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "15 L Capacity",
      },
      {
        name: "8.5 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "2 years Warranty",
      },
    ],
  },
  {
    name: "Bajaj Caldia NXG 25L Water Geyser",
    brand: "Bajaj ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1utslmnfj",
    image:
      "https://cdn1.smartprix.com/rx-in85dqsR1-w103-h125/bajaj-popular-plus-1.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1utslmnfj",
    pricef: "11,500",
    pricea: "",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=12jX01JHSK6GINUOw3x00Sv68hrhAgTYBOr3Uh76rQrQco4cTcFUs3rWac8rhUcWaIFa3cArTiYrcuDWco4Tchhgc6TCah-hDh8AZGZa6X54bP4ghmBYihkJ7f7XKfvRjVqefE7hrhhaFhrhrhhacBrWahrhrBi5CIHTHCiAhrFB5g..YqrOpkZ5~",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "15 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "4 Star Rating",
      },
      {
        name: "Rust Resistant",
      },
      {
        name: "Thermostat, Temperature Control",
      },
      {
        name: "Powder Coated Metal Body",
      },
    ],
  },
  {
    name: "V-Guard Vistora 10 L Storage Water Geyser",
    brand: " V-Guard",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1pgfp7em4",
    image:
      "https://cdn1.smartprix.com/rx-iu6QQhZki-w103-h125/v-guard-vistora-10-l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1pgfp7em4",
    pricef: "6,799",
    pricea: "",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=12ZY.QWK-lTPfRWVttK_gIfYhrhAgTYBOr3Uh72cWCr3ic5PcTcFUs3rWac8rhUcWaIFa3c2YFUs3rchhgh-hDh8iGbGoHrbZ4gr6hmBYihkJ7f7pZ1Zww7evzv4hrhhaFhrhrhhacBrWahrhrBi5BWgBGanHhrFB5em~Ny6UE4UsO",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "10 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "Thermostat, Temperature Control",
      },
      {
        name: "Enamel Coating Insulation Material",
      },
      {
        name: "Steel With Glass Lined AC Coating Tank Material",
      },
    ],
  },
  {
    name: "Jaquar Elena Prime 10L Water Geyser",
    brand: "Jaquar",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd150qwhwsb",
    image:
      "https://cdn1.smartprix.com/rx-iv1TQnUps-w420-h420/jaquar-elena-prime-1.webp",
    image_url: "https://www.smartprix.com/nf/pd/pd150qwhwsb",
    pricef: "",
    pricea: "9,500",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12nm-C4AjiH9Pdz5kbsXOwGohrhArnrysuhyihDRPXKmJ1xRzh-hrhhaFhrhrhhacBrWahrhrBi52yyUPDlUhrFB5AIVx58WmVHT4",
    croma: " ",
    selection1: [
      {
        name: "15 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "Rust Resistant",
      },
      {
        name: "Temperature Control",
      },
      {
        name: "2 years Warranty",
      },
    ],
  },
  {
    name: "Alvis Expert 15 L Water Geyser",
    brand: "Alvis ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1q4mamypl",
    image:
      "https://cdn1.smartprix.com/rx-iF721HJuU-w103-h125/alvis-expert-15-l-wa.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1q4mamypl",
    pricef: "4,699",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12ZY.QWK-j5HPvP64CpqlC-zhrhAgTYBOr3Uh7rT2YFc54cTcFUs3rWac8rhUcWaIFa3caDBa3UcFa3YaFchhgcY2s3Ih-hDh8ialoZiXil56AZhmBYihkJ7f77j.w1vvzSvK1hrhhaFhrhrhhacBrWahrhrBi5NHnrnIBThrFB5woU-YWP_7awR ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "15 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "Indicator",
      },
      {
        name: "Copper Heating Element",
      },
      {
        name: "1 year Warranty",
      },
    ],
  },
  {
    name: "Glen Smart 25L Water Geyser",
    brand: "Glen ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1tz9lwpzt",
    image:
      "https://cdn1.smartprix.com/rx-ilaIkcNRu-w103-h125/glen-smart-25l-water.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1tz9lwpzt",
    pricea: "12,997",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12oGnGxU-oIEW9FsjV~aRuDOekhrhArnrysuhyihDRPR7ol4JHKh-hrhhaFhrhrhhacBrWahrhrBi5UylT8ByUhrFB52ymKRPFSfFq7",
    croma: " ",
    selection1: [
      {
        name: "25 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Instant Type",
      },
    ],
    selection2: [
      {
        name: "Temperature Control",
      },
      {
        name: "Steel Tank Material",
      },
      {
        name: "ABS Plastic Body",
      },
      {
        name: "Incoloy Heating Element",
      },
    ],
  },
  {
    name: "Bajaj Maestro 15L Storage Water Heater",
    brand: "Bajaj ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1dtgwgoif",
    image:
      "https://cdn1.smartprix.com/rx-iopk26pO1-w103-h125/bajaj-maestro-15l-st.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1dtgwgoif",
    pricec: "9,900",
    pricea: "",
    pricef: " --",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12nmXdqd6sR8e42CURlTTJD3hrhAA3snrh76rQrQcnraFU3sc54cThs3Fc4cFUr3cFUs3rWac8rhUctarhUcoPPPc8rUUFc54PXlXchhgc63s8uch-hDobbPbHhrhhaFhrhrhhacBrWahrhrBi5iUW8WsYghrFB5lOYOtFm_vEm1 ",
    selection1: [
      {
        name: "15 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "Rust Resistant",
      },
      {
        name: "Titanium Armour Technology - Titanium Glass lined enamel coated tank for longer life Ins…",
      },
      {
        name: "Magnesium Anode Rod to protect tank from corrossion Tank Material",
      },
    ],
  },
  {
    name: "Faber FWG AGNES Instant Water Geyser",
    brand: "Faber ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1ac4vyp2l",
    image:
      "https://cdn1.smartprix.com/rx-ix16eJKBH-w103-h125/faber-fwg-agnes-inst.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ac4vyp2l",
    pricef: "out of stock",
    pricea: "out of stock",
    pricec: "out of atock",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Instant Type",
      },
      {
        name: "2 years Warranty",
      },
    ],
  },
  {
    name: "Orient Electric Cronos 6L Water Geyser",
    brand: " Orient",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1h003w63r",
    image:
      "https://cdn1.smartprix.com/rx-i8gZgh8M6-w103-h125/orient-electric-cron.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1h003w63r",
    pricef: "4,890",
    pricea: "6,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "6 L Capacity",
      },
      {
        name: "6.5 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "Rust Resistant",
      },
      {
        name: "Indicator",
      },
      {
        name: "PUF Insulation Material",
      },
      {
        name: "Stainless Steel Tank Material",
      },
    ],
  },
  {
    name: "Polycab Emerald 3L Water Geyser",
    brand: " Polycab",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1s9fpligw",
    image:
      "https://cdn1.smartprix.com/rx-izycLe7JQ-w103-h125/polycab-emerald-3l-w.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1s9fpligw",
    pricea: "3,900",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12nm-C4AjiVmVsdv2orJnTXmhrhArnrysuhyihDRPXe~J05.wh-hrhhaFhrhrhhacBrWahrhrBi5FlgBTYW8hrFB5Fj4VguzOYFgs",
    croma: " ",
    selection1: [
      {
        name: "25 L Capacity",
      },
      {
        name: "5 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "Thermostat, Indicator",
      },
      {
        name: "Poly Urethane Foam (PUF) Insulation Material",
      },
      {
        name: "Metal Body",
      },
    ],
  },
  {
    name: "Panasonic Delsy 15L Water Geyser",
    brand: "Panasonic ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1q9o80wvm",
    image:
      "https://cdn1.smartprix.com/rx-inQUURQBw-w103-h125/panasonic-delsy-15l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1q9o80wvm",
    pricea: "5,649",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12nm-C4AjiVmktl0W~yfxoTHhrhArnrysuhyihDRPlx~ZGx~vh-hrhhaFhrhrhhacBrWahrhrBi5NlsXP82nhrFB5KwrYWP063J9G",
    croma: " ",
    selection1: [
      {
        name: "25 L Capacity",
      },
      {
        name: "5 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "Rust Resistant",
      },
      {
        name: "Metal Body",
      },
      {
        name: "Copper Heating Element",
      },
      {
        name: "2 years Warranty",
      },
    ],
  },
  {
    name: "Venus Brio 6L Water Geyser",
    brand: " Venus",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1ku6bpytm",
    image:
      "https://cdn1.smartprix.com/rx-iBP6cw8gk-w103-h125/venus-brio-6l-water.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ku6bpytm",
    pricef: "6,299",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12ZY.QWK-lTP_plxRaZxFU0whrhAgTYBOr3Uh72auCFc4c4cTcWrFc8rhUcWaIFa3cYuFUruUctarhUchhgh-hDh8gAoloXg5AoZgXhmBYihkJ7f77ZK7jfq70jSjhrhhaFhrhrhhacBrWahrhrBi5OCb6BIUnhrFB5SPR3ICrDBQ9P ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "6 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Gas Type",
      },
    ],
    selection2: [
      {
        name: "5 Star Rating",
      },
      {
        name: "Thermostat, Temperature Control",
      },
      {
        name: "Copper Insulation Material",
      },
      {
        name: "Metal Body",
      },
    ],
  },
  {
    name: "Blowhot Mercure 10L Water Geyser",
    brand: "Blowhot ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1pm4716dw",
    image:
      "https://cdn1.smartprix.com/rx-i8u2cGtr2-w103-h125/blowhot-mercure-10l.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1pm4716dw",
    pricef: "out of stock",
    pricea: "out of stock",
    pricec: "out of atock",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "10 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Storage Type",
      },
    ],
    selection2: [
      {
        name: "4 Star Rating",
      },
      {
        name: "Temperature Control",
      },
      {
        name: "PUF Insulation Material",
      },
      {
        name: "ABS Body",
      },
    ],
  },
  {
    name: "Crompton Insta Bliss 3L Water Geyser",
    brand: "Crompton ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1031ds2rs",
    image:
      "https://cdn1.smartprix.com/rx-i3b4SMJZj-w103-h125/crompton-insta-bliss.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1031ds2rs",
    pricea: "2,749",
    pricef: "",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12nm-C4AjiHSTiU4.ftXz1frhrhArnrysuhyihDRPlJpz-17Gh-hrhhaFhrhrhhacBrWahrhrBi5PZ5iFo3FhrFB5vybXOV_HBNz- ",
    croma: " ",
    selection1: [
      {
        name: "3 L Capacity",
      },
      {
        name: "6.5 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Instant Type",
      },
    ],
    selection2: [
      {
        name: "Rust Resistant",
      },
      {
        name: "Thermostat, Indicator",
      },
      {
        name: "Copper Heating Element",
      },
      {
        name: "Thermostat",
      },
    ],
  },
  {
    name: "Orient Electric Bahubali 6L Water Geyser",
    brand: "Orient ",
    category: "Geyser",
    url: "https://www.smartprix.com/nf/pd/pd1g7rog5dz",
    image:
      "https://cdn1.smartprix.com/rx-iVSDQsLOS-w103-h125/orient-electric-bahu.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1g7rog5dz",
    pricef: "6,369",
    pricea: "",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=12ZY.QWK-lTP_EHu~Gl6tpUrhrhAgTYBOr3Uh7s3YauUcaTaAU3YAcbcTcWrFc8rhUcWaIFa3c6rtC6rTYchhgh-hDh8AbirbPiiZA6iPhmBYihkJ7f7VooZ-7dSSjx1hrhhaFhrhrhhacBrWahrhrBi5WG3sW4iyhrFB5rUlvsaRHECBC",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "6 L Capacity",
      },
      {
        name: "8 Bar Rated Pressure",
      },
      {
        name: "Vertical Mounting",
      },
      {
        name: "Gas Type",
      },
    ],
    selection2: [
      {
        name: "Rust Resistant",
      },
      {
        name: "Thermostat, Indicator, Temperature Control",
      },
      {
        name: "Metal Body",
      },
      {
        name: "Copper Heating Element",
      },
    ],
  },
  {
    name: "HP Victus 16-d0333TX Gaming Laptop (11th Gen Core i5/ 16GB/ 512GB SSD/ Win11/ 4GB Graph)",
    brand: "HP ",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/hp-victus-16-d0333tx-gaming-laptop-11th-gen-ppd1b9x46zbs",
    image:
      "https://cdn1.smartprix.com/rx-ig5tK2dFn-w103-h125/hp-victus-16-d0333tx.jpg",
    image_url:
      "https://www.smartprix.com/laptops/hp-victus-16-d0333tx-gaming-laptop-11th-gen-ppd1b9x46zbs",
    pricea: "55,990",
    pricef: "63,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbbZ3GgQ~0i94AeZ1s10hrhAgTYBOr3Uh7tBc2YAUCFcAs3acY4c55UtcWauc5bcW6c45ocW6cFFic8Yuis8Fc55ctsnacHcW3rBtYAFcu2YiYrcWags3AacWUDc5b4Pc5bciPZZZUDcWrnhNcTrBUshDhDh8GbA65ir4iAHaHhmBYihkwkp7.deR1qqfdl7dhrhhaFhrhrhhacBrWahrhrBi56lDHby6FhrFB57XnQKgFQJykv ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~.a_UqpD5qkuiyUgITShrhArnrysuhyihDRPwo.bfGHoh-hrhhaFhrhrhhacBrWahrhrBi56lDHby6FhrFB5vCGd9Wp8D_zI ",
    croma: " ",
    selection1: [
      {
        name: "11th Gen Intel Core i5 11400H",
      },
      {
        name: "Hexa Core, 12 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "4 GB NVIDIA GeForce GTX 1650",
      },
      {
        name: "16.1 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Asus Vivobook 16X 2022 M1603QA-MB502WS Laptop (Ryzen 5-5600H/ 8GB/ 512GB SSD/ Win11 Home)",
    brand: " Asus",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/asus-vivobook-16x-2022-m1603qa-mb502ws-laptop-ppd1pul9mnne",
    image:
      "https://cdn1.smartprix.com/rx-iRUMXjHn3-w103-h125/asus-vivobook-16x-20.jpg",
    image_url:
      "https://www.smartprix.com/laptops/asus-vivobook-16x-2022-m1603qa-mb502ws-laptop-ppd1pul9mnne",
    pricef: "46,990",
    pricea: "46,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~.a_Rw.TgxXy2eYNU4XhrhArnrysuhyihDRPRG-K507_h-hrhhaFhrhrhhacBrWahrhrBi5BCTlnuuahrFB5UfV3m1EFZ0sV ",
    croma: " ",
    selection1: [
      {
        name: "5th Gen AMD Ryzen 5 5600H",
      },
      {
        name: "Hexa Core, 12 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "AMD Radeon Vega 7",
      },
      {
        name: "16 inches, 1920 x 1200 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "HP 15s-fq2717TU Laptop (11th Gen Core i3/ 8GB/ 512GB SSD/ Win11 Home)",
    brand: "HP ",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/hp-15s-fq2717tu-laptop-11th-gen-core-i3-8gb-ppd1mbr97mxl",
    image:
      "https://cdn1.smartprix.com/rx-i8CnXpWCB-w103-h125/hp-15s-fq2717tu-lapt.jpg",
    image_url:
      "https://www.smartprix.com/laptops/hp-15s-fq2717tu-laptop-11th-gen-core-i3-8gb-ppd1mbr97mxl",
    pricef: "37,490",
    pricea: "37,490",
    pricec: "39,490",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbbZ3Btl-6tKBNtSgr8BhrhAgTYBOr3Uh7tBcTrBUsBcAs3acYZc55UtcWaucXcW6c45ocW6cFFic8Yuis8Fc55ctsnac54FcgNoG5GUCcUtYucTYWtUh-hDh8oGXoiHHirra6ghmBYihkwkp7Sj7d1VSHjvX0hrhhaFhrhrhhacBrWahrhrBi5n63lGnDThrFB5YFr_Qi0GgO9r ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~.af6x3gPTqrV8XgFHYhrhArnrysuhyihDRPR~d5Zmz~h-hrhhaFhrhrhhacBrWahrhrBi5n63lGnDThrFB5bpaHu2NTPkA. ",
    croma:
      "https://l.smartprix.com/l?k=12GbaP3i0FIIrkX-JoGx7r33fhrhAA3snrh7tBc54FcgNoG5GUCcYuUaTcAs3acYZc55UtcWauc54cbcYuAtcXW6c45oW6c8Yuis8Fc55ctsnacnFcsggYAacoPo5cYuUaTcCticgticiYFBTrIcurUC3rTcFYThCcGWbtZBrcrAQch-hDobXoXHhrhhaFhrhrhhacBrWahrhrBi5n63lGnDThrFB5WSar6.WRDSld ",
    selection1: [
      {
        name: "11th Gen Intel Core i3 1115G4",
      },
      {
        name: "Dual Core, 4 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel UHD Graphics",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Acer One 14 Z8-415 Laptop (11th Gen Core i3 / 8GB/ 512GB SSD/ Win11 Home)",
    brand: "Acer",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/acer-one-14-z8-415-laptop-11th-gen-core-i3-ppd164x4cqgs",
    image:
      "https://cdn1.smartprix.com/rx-ioXEIfxVI-w103-h125/acer-one-14-z8-415-l.jpg",
    image_url:
      "https://www.smartprix.com/laptops/acer-one-14-z8-415-laptop-11th-gen-core-i3-ppd164x4cqgs",
    pricef: "28,990",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "11th Gen Intel Core i3 1115G4",
      },
      {
        name: "Dual Core, 4 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "‎Intel Iris Xe Graphics",
      },
      {
        name: "14 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Lenovo E41-55 Laptop (Athlon Silver 3050U/ 8GB/ 256 SSD/ Win11)",
    brand: " Lenovo",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/lenovo-e41-55-laptop-athlon-silver-3050u-ppd11g66cius",
    image:
      "https://cdn1.smartprix.com/rx-iHJ0zmLA4-w103-h125/lenovo-e41-55-laptop.jpg",
    image_url:
      "https://www.smartprix.com/laptops/lenovo-e41-55-laptop-athlon-silver-3050u-ppd11g66cius",
    pricea: "20,500",
    pricef: "21,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~.a_Rwd4W-7jV1SnIUKhrhArnrysuhyihDRPlJomxpxZh-hrhhaFhrhrhhacBrWahrhrBi55WbbAYCFhrFB56XN7PXg06~Cp ",
    croma: " ",
    selection1: [
      {
        name: "3rd Gen AMD Athlon Silver 3050U",
      },
      {
        name: "Dual Core, 2 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "256 GB SSD",
      },
    ],
    selection2: [
      {
        name: "AMD Radeon Graphics",
      },
      {
        name: "14 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Dell Inspiron 5630 Laptop (13th Gen Core i5/ 16GB/ 512GB SSD/ Win11)",
    brand: " Dell",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/dell-inspiron-5630-laptop-13th-gen-core-i5-ppd13pep48xo",
    image:
      "https://cdn1.smartprix.com/rx-i66WzFcoY-w103-h125/dell-inspiron-5630-l.jpg",
    image_url:
      "https://www.smartprix.com/laptops/dell-inspiron-5630-laptop-13th-gen-core-i5-ppd13pep48xo",
    pricea: "76,251",
    pricef: "76,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~.a_RwF1dboj9wNZ93rhrhArnrysuhyihDRPw5HZbZRph-hrhhaFhrhrhhacBrWahrhrBi5ZBaBHXDshrFB5SdxPn8-v3K86 ",
    croma: " ",
    selection1: [
      {
        name: "13th Gen Intel Core i5 1340P",
      },
      {
        name: "12 Cores (4P + 8E), 16 Threads",
      },
      {
        name: "16 GB LPDDR5 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel Iris Xe Graphics",
      },
      {
        name: "16 inches, 2560 x 1600 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Asus Vivobook 15 X1502ZA-EJ532WS Laptop (12th Gen Core i5/ 8GB/ 512GB SSD/ Win11)",
    brand: "Asus ",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/asus-vivobook-15-x1502za-ej532ws-laptop-12th-ppd1tsh0r7y7",
    image:
      "https://cdn1.smartprix.com/rx-i8rSgIyFE-w103-h125/asus-vivobook-15-x15.jpg",
    image_url:
      "https://www.smartprix.com/laptops/asus-vivobook-15-x1502za-ej532ws-laptop-12th-ppd1tsh0r7y7",
    pricef: "49,990",
    pricea: "49,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~.afry24Bd.bAHUXBfUhrhArnrysuhyihDRPw4ZxR-5lh-hrhhaFhrhrhhacBrWahrhrBi5UFtP3GIGhrFB5W7g5T4xgTiyU ",
    croma:
      "https://l.smartprix.com/l?k=12GbaP3fqTvnFFFxWSRN93.vzhrhAA3snrh7rFCFcD54PoyrcYuUaTcAs3acY4c5oUtcWauc54cYuAtcXW6c45oW6c8Yuis8Fc55cnFcsggYAacoPo5cYuUaTcY3YFcDacW3rBtYAFcTaic6huTYWtUciYFBTrIcNCYaUc6TCacD54PoyrcaQ4Zo8Fch-hDoGoo4ZhrhhaFhrhrhhacBrWahrhrBi5UFtP3GIGhrFB55b2emb9vIFfv ",
    selection1: [
      {
        name: "12th Gen Intel Core i5 1235U",
      },
      {
        name: "10 Cores (2P + 8E), 12 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel Iris Xe",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Asus Vivobook 16X 2022 M1603QA-MB711WS Laptop (Ryzen 7-5800H/ 16GB/ 512GB SSD/ Win11 Home)",
    brand: "Asus ",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/asus-vivobook-16x-2022-m1603qa-mb711ws-laptop-ppd12rzd1s1d",
    image:
      "https://cdn1.smartprix.com/rx-iVvwR1dwc-w103-h125/asus-vivobook-16x-20.jpg",
    image_url:
      "https://www.smartprix.com/laptops/asus-vivobook-16x-2022-m1603qa-mb711ws-laptop-ppd12rzd1s1d",
    pricef: "60,990",
    pricea: "57,490",
    pricec: "57,490",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbRVypiX5I.rWoy.kqo5hrhAgTYBOr3Uh7rFCFc2Y2s6ssOc5bDc3IyaucGcsAUrcAs3ac4XPPtc5bcW6c45ocW6cFFic8Yuis8Fc55ctsnacn5bPZNrcn6G558FcUtYucTYWtUcTrBUshDhDh84oraig55lb45rhmBYihkwkp7qxKE~wRRjfwfhrhhaFhrhrhhacBrWahrhrBi5o3yi5F5ihrFB53gs1eCZ.Srfz ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~a2WXRuasi9n896-60FhrhArnrysuhyihDRPRSb~100xh-hrhhaFhrhrhhacBrWahrhrBi5o3yi5F5ihrFB5-03~x7HZu8~b ",
    croma:
      "https://l.smartprix.com/l?k=12GbaP3eDi2GSp4uTwiuWSGEYhrhAA3snrh7rFCFcrnic3IyaucGc5bcYuAtc5bW6c45oW6c8Yuis8Fc55ctsnacnFcsggYAacoPo5crnic3riasuc2aWrcGc8CDWrcYBFciYFBTrIcNCYaUc6TCaclPu6PIX5cnPPo3Pch-hDob4bbZhrhhaFhrhrhhacBrWahrhrBi5o3yi5F5ihrFB56K-qYQeYJI_Z ",
    selection1: [
      {
        name: "5th Gen AMD Ryzen 7 5800H",
      },
      {
        name: "Octa Core, 16 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "AMD Radeon Vega 7",
      },
      {
        name: "16 inches, 1920 x 1200 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "HP Pavilion 15-eg3081TU Laptop (13th Gen Core i5/ 16GB/ 512GB SSD/ Win11 Home)",
    brand: " HP",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/hp-pavilion-15-eg3081tu-laptop-13th-gen-core-ppd19cikb8j4",
    image:
      "https://cdn1.smartprix.com/rx-iwTKv09Ye-w103-h125/hp-pavilion-15-eg308.jpg",
    image_url:
      "https://www.smartprix.com/laptops/hp-pavilion-15-eg3081tu-laptop-13th-gen-core-ppd19cikb8j4",
    pricec: "76,990",
    pricea: "",
    pricef: " --",
    flipkart: " ",
    amazon: " ",
    croma:
      "https://l.smartprix.com/l?k=12GbaP3eDA0HGjVgIIrCUC1g7hrhAA3snrh7tBcBr2YTh3c54caWZPX5UCcYuUaTcAs3acY4c5ZUtcWauc54cbcYuAtc5bW6c45oW6c8Yuis8Fc55ctsnacnFcsggYAacoPo5cYuUaTcY3YFcDacgCTTcticYBFciYFBTrIcgsWc6TCacXG4ubBrch-hDoGoGG5hrhhaFhrhrhhacBrWahrhrBi5lAYO6XQHhrFB55mV6AdNkKv_N ",
    selection1: [
      {
        name: "13th Gen Intel Core i5 1340P",
      },
      {
        name: "12 Cores (4P + 8E), 16 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel Integrated Integrated",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Primebook 4G Android Laptop (MediaTek Kompanio 500/ 4GB/ 64GB eMMC/ Android 11)",
    brand: " Primebook",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/primebook-4g-android-laptop-mediatek-kompanio-ppd1n0eewaga",
    image:
      "https://cdn1.smartprix.com/rx-i6vI2Dy7k-w103-h125/primebook-4g-android.jpg",
    image_url:
      "https://www.smartprix.com/laptops/primebook-4g-android-laptop-mediatek-kompanio-ppd1n0eewaga",
    pricef: "13,990",
    pricea: "",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=12_IwbPnYFtNV2dZZuR2nJbRhrhAgTYBOr3Uh7B3Yna6ssOcHWchY3sYic6rFaicnaiYrUaOcnUXGXXcHcW6cbHcW6cannAcFUs3rWacB3YnacsFcUtYucTYWtUcTrBUshDhDh8APaPZ6g5oii6AhmBYihkwkp7SodVSZ1Rfd1phrhhaFhrhrhhacBrWahrhrBi5uPaa8rWrhrFB5r5yVr3wGZY-~",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "MediaTek MTK8788",
      },
      {
        name: "Octa Core",
      },
      {
        name: "4 GB LPDDR4 RAM",
      },
      {
        name: "64 GB Hard Disk",
      },
    ],
    selection2: [
      {
        name: "ARM Mali G72",
      },
      {
        name: "11.6 inches, 1366 x 768 pixels",
      },
      {
        name: "Android 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Infinix INBook X2 Slim Series XL23 Laptop (11th Gen Core i5/ 16GB/ 512GB SSD/ Win 11 Home)",
    brand: " Infinix",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/infinix-inbook-x2-slim-series-xl23-laptop-ppd17iaww5ix",
    image:
      "https://cdn1.smartprix.com/rx-ixrS2go2p-w103-h125/infinix-inbook-x2-sl.jpg",
    image_url:
      "https://www.smartprix.com/laptops/infinix-inbook-x2-slim-series-xl23-laptop-ppd17iaww5ix",
    pricef: "38,990",
    pricea: "",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbPnYFYHdNqDtRKqaT3RhrhAgTYBOr3Uh7YugYuYDcDocFTYncYuUaTcAs3acY4c55UtcWauc5bcW6c45ocW6cFFic8Yuis8Fc55ctsnacDToZcUtYucTYWtUcTrBUshDhDh8AGgliP6XXPoHHhmBYihkwkp71EHG.efeZxw_hrhhaFhrhrhhacBrWahrhrBi5GYr884YDhrFB5l2P1bS-C3opg ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "11th Gen Intel Core i5 1155G7",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "16 GB LPDDR4X RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel Integrated Iris Xe",
      },
      {
        name: "14 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "HP Victus 15-fa0555TX Laptop (12th Gen Core i5/ 16GB/ 512GB SSD/ Win11 Home/ 4GB Graph)",
    brand: " HP",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/hp-victus-15-fa0555tx-laptop-12th-gen-core-ppd1edlxbh2o",
    image:
      "https://cdn1.smartprix.com/rx-iBfuDJxSK-w103-h125/hp-victus-15-fa0555t.jpg",
    image_url:
      "https://www.smartprix.com/laptops/hp-victus-15-fa0555tx-laptop-12th-gen-core-ppd1edlxbh2o",
    pricef: "74,300",
    pricea: "76,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbPnYFY1UUA5DTyu5rnUhrhAgTYBOr3Uh7tBcAs3acY4c5oUtcWauc5bcW6c45ocW6cFFic8Yuis8Fc55ctsnacHcW3rBtYAFcu2YiYrcWags3Aac3UDcZP4PcHW6cW3rBtYAFcAr3ic54cgrP444UDcWrnhNcTrBUshDhDh8ia5ZrGiGP5aHHhmBYihkwkp71fxKEJexJVJvhrhhaFhrhrhhacBrWahrhrBi5aiTD6toshrFB51ZI2edpA0Wek ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "12th Gen Intel Core i5 12450H",
      },
      {
        name: "Octa Core (4P + 4E), 12 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "4 GB NVIDIA GeForce RTX RTX 3050",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Dell G15-5520 Gaming Laptop (12th Gen Core i5/ 8GB/ 512GB SSD/ Win11/ 4GB Graph)",
    brand: " Dell",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/dell-g15-5520-gaming-laptop-12th-gen-core-ppd15mvwrf1g",
    image:
      "https://cdn1.smartprix.com/rx-iXDHYXcGv-w103-h125/dell-g15-5520-gaming.jpg",
    image_url:
      "https://www.smartprix.com/laptops/dell-g15-5520-gaming-laptop-12th-gen-core-ppd15mvwrf1g",
    pricef: "67,990",
    pricea: "71,490",
    pricec: " --",
    flipkart:
      " https://l.smartprix.com/l?k=12_IwbPnQrO5pzvWHpnOr0vzhrhAgTYBOr3Uh7iaTTcAs3acY4c5oUtcWaucXcW6c45ocW6cFFic8Yuis8Fc55ctsnacHcW3rBtYAFcu2YiYrcWags3Aac3UDcZP4PcWrnhNc44oPcTrBUshDhDh8PPbliZr4oZ65ZhmBYihkwkp71l.0Hxe07071hrhhaFhrhrhhacBrWahrhrBi54n283g5WhrFB59SFWU66.obox",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~a2g~j7nBUxFT2~WZYmhrhArnrysuhyihDRPR~-K414oh-hrhhaFhrhrhhacBrWahrhrBi54n283g5WhrFB5-no6XnCsGIO0 ",
    croma: " ",
    selection1: [
      {
        name: "12th Gen Intel Core i5 12500H",
      },
      {
        name: "12 Cores (4P + 8E), 16 Threads",
      },
      {
        name: "8 GB DDR5 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "4 GB NVIDIA GeForce RTX 3050",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "HP 15s-fq5007TU Laptop (12th Gen Core i3/ 8GB/ 512GB SSD/ Win11 Home)",
    brand: " HP",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/hp-15s-fq5007tu-laptop-12th-gen-core-i3-8gb-ppd1w8yii9kt",
    image:
      "https://cdn1.smartprix.com/rx-icLedCxeu-w103-h125/hp-15s-fq5007tu-lapt.jpg",
    image_url:
      "https://www.smartprix.com/laptops/hp-15s-fq5007tu-laptop-12th-gen-core-i3-8gb-ppd1w8yii9kt",
    pricef: "40,990",
    pricea: "40,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbPnQrO5pzvWHpnOr0vzhrhAgTYBOr3Uh7iaTTcAs3acY4c5oUtcWaucXcW6c45ocW6cFFic8Yuis8Fc55ctsnacHcW3rBtYAFcu2YiYrcWags3Aac3UDcZP4PcWrnhNc44oPcTrBUshDhDh8PPbliZr4oZ65ZhmBYihkwkp71l.0Hxe07071hrhhaFhrhrhhacBrWahrhrBi54n283g5WhrFB59SFWU66.obox ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "12th Gen Intel Core i3 1215U",
      },
      {
        name: "Hexa Core (2P + 4E), 8 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel UHD Graphics",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Lenovo V15 82KDA01BIH Laptop (AMD Ryzen 3 5300U/ 8GB/ 512GB SSD/ Win11 Home)",
    brand: " Lenovo",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/lenovo-v15-82kda01bih-laptop-amd-ryzen-3-ppd1lenn9shh",
    image:
      "https://cdn1.smartprix.com/rx-iHKD1sf2i-w103-h125/lenovo-v15-82kda01bi.jpg",
    image_url:
      "https://www.smartprix.com/laptops/lenovo-v15-82kda01bih-laptop-amd-ryzen-3-ppd1lenn9shh",
    pricef: "33,890",
    pricea: "36,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbPnQrza-JD870budHw8hrhAgTYBOr3Uh7Taus2sc254c3IyaucZctaDrcAs3ac4ZPPCcXcW6c45ocW6cFFic8Yuis8Fc55ctsnacWocrTAcUtYucTYWtUcTrBUshDhDh8r6Ab55XA6raiXhmBYihkwkp7.Ze104S-eGlRhrhhaFhrhrhhacBrWahrhrBi5TauulFtthrFB5_3KNzdsGZTPG ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "5th Gen AMD Ryzen 3 5300U",
      },
      {
        name: "Quad Core, 8 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "AMD Radeon Graphics",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Asus TUF Gaming A15 2022 FA577RE-HN055WS Gaming Laptop (AMD Ryzen 7 6800H/ 16GB/ 512GB SSD/ Win11/ 4GB Graph)",
    brand: "Asus",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/asus-tuf-gaming-a15-2022-fa577re-hn055ws-ppd1qscnrual",
    image:
      "https://cdn1.smartprix.com/rx-iBCHsbyMm-w103-h125/asus-tuf-gaming-a15.jpg",
    image_url:
      "https://www.smartprix.com/laptops/asus-tuf-gaming-a15-2022-fa577re-hn055ws-ppd1qscnrual",
    pricef: "81,990",
    pricea: "81,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbbZ3Gg8Qd_NRDV2~4D7hrhAgTYBOr3Uh7rFCFc3IyaucGciCrTcAs3ac5PUtcWauc5bcW6c45ocW6cFFic8Yuis8Fc55ctsnacHcW3rBtYAFcgr4GG3actuP448FcTrBUshDhDh8r56Pl4rPX6AZXhmBYihkwkp77KK4vK77vd.ZhrhhaFhrhrhhacBrWahrhrBi5NFAu3CrThrFB5_9JsNgd_AzsB ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~.a_UqAs-v7OGX7RDdehrhArnrysuhyihDRPR4b_fHHHh-hrhhaFhrhrhhacBrWahrhrBi5NFAu3CrThrFB5CYzpPiVVDuse ",
    croma: " ",
    selection1: [
      {
        name: "6th Gen AMD Ryzen 7 6800H",
      },
      {
        name: "Octa Core, 16 Threads",
      },
      {
        name: "16 GB DDR5 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "4 GB NVIDIA GeForce RTX 3050 Ti",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Dell Inspiron 3511 Laptop (11th Gen Core i3/ 8GB/ 512GB SSD/ Win11 Home)",
    brand: "Dell ",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/dell-inspiron-3511-laptop-11th-gen-core-i3-8gb-512gb-ppd1q30mo346",
    image:
      "https://cdn1.smartprix.com/rx-iVpi6VSGr-w103-h125/dell-inspiron-3511-l.jpg",
    image_url:
      "https://www.smartprix.com/laptops/dell-inspiron-3511-laptop-11th-gen-core-i3-8gb-512gb-ppd1q30mo346",
    pricef: "86,990",
    pricea: "89,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      "https://l.smartprix.com/l?k=12GGlv~.a_RKPiQE8uBugqEfThrhArnrysuhyihDRPwH.X~.J4h-hrhhaFhrhrhhacBrWahrhrBi55btHgbilhrFB5nCfroBxOqplB ",
    croma: " ",
    selection1: [
      {
        name: "11th Gen Intel Core i3 1115G4",
      },
      {
        name: "Dual Core, 4 Threads",
      },
      {
        name: "8 GB DDR4 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel UHD Graphics",
      },
      {
        name: "15.56 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Dell Inspiron 5630 Laptop (13th Gen Core i7/ 16GB/ 512GB SSD/ Win11)",
    brand: "Dell ",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/dell-inspiron-5630-laptop-13th-gen-core-i7-ppd116h4f6d9",
    image:
      "https://cdn1.smartprix.com/rx-ieTAlbooR-w103-h125/dell-inspiron-5630-l.jpg",
    image_url:
      "https://www.smartprix.com/laptops/dell-inspiron-5630-laptop-13th-gen-core-i7-ppd116h4f6d9",
    pricef: "89,884",
    pricea: "89,490",
    pricec: " --",
    flipkart: " ",
    amazon:
      " https://l.smartprix.com/l?k=12GGlv~.a_RKPiQE8uBugqEfThrhArnrysuhyihDRPwH.X~.J4h-hrhhaFhrhrhhacBrWahrhrBi55btHgbilhrFB5nCfroBxOqplB",
    croma: " ",
    selection1: [
      {
        name: "13th Gen Intel Core i7 1360P",
      },
      {
        name: "12 Cores (4P + 8E), 16 Threads",
      },
      {
        name: "16 GB LPDDR5 RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel Iris Xe Graphics",
      },
      {
        name: "16 inches, 2560 x 1600 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Infinix Zerobook 13 ZL513 Laptop (13th Gen Core i7/ 16GB/ 512GB SSD/ Win 11 Home)",
    brand: "Infinix ",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/infinix-zerobook-13-zl513-laptop-13th-gen-ppd1xmz8vpxy",
    image:
      "https://cdn1.smartprix.com/rx-iyB9kXdd0-w103-h125/infinix-zerobook-13.jpg",
    image_url:
      "https://www.smartprix.com/laptops/infinix-zerobook-13-zl513-laptop-13th-gen-ppd1xmz8vpxy",
    pricef: "64,990",
    pricea: "66,490",
    pricec: " --",
    flipkart:
      "https://l.smartprix.com/l?k=12_IwbPnYFYVxXvBiaVtI5axhrhAgTYBOr3Uh7YugYuYDcya3s6ssOc5ZcYuUaTcAs3acYGc5ZUtcWauc5bcW6c45ocW6cFFic8Yuis8Fc55ctsnacyT45ZcUtYucTYWtUcTrBUshDhDh8Z4AooPX46ZoZrhmBYihkwkp7vx17KSw-Jjp_hrhhaFhrhrhhacBrWahrhrBi5DnyX2BDIhrFB5prPQwPtSm7Vd ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "13th Gen Intel Core i7 13700H",
      },
      {
        name: "14 Cores (6P + 8E), 20 Threads",
      },
      {
        name: "16 GB LPDDR5X RAM",
      },
      {
        name: "512 GB SSD",
      },
    ],
    selection2: [
      {
        name: "Intel Integrated Iris Xe",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "MSI Thin GF63 12VF-268IN Laptop (12th Gen Core i5/ 16GB/ 1TB 256GB SSD/ Win11/ 8GB Graph)",
    brand: "MSI ",
    category: "Laptop",
    url: "https://www.smartprix.com/laptops/msi-thin-gf63-12vf-268in-laptop-12th-gen-ppd1t4ikpvgj",
    image:
      "https://cdn1.smartprix.com/rx-iRlb5mdiu-w103-h125/msi-thin-gf63-12vf-2.jpg",
    image_url:
      "https://www.smartprix.com/laptops/msi-thin-gf63-12vf-268in-laptop-12th-gen-ppd1t4ikpvgj",
    pricef: "86,990",
    pricea: "86,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "12th Gen Intel Core i5 12450H",
      },
      {
        name: "Octa Core (4P + 4E), 12 Threads",
      },
      {
        name: "16 GB DDR4 RAM",
      },
      {
        name: "1 TB Hard Disk",
      },
    ],
    selection2: [
      {
        name: "256 GB SSD",
      },
      {
        name: "8 GB NVIDIA GeForce RTX 4060",
      },
      {
        name: "15.6 inches, 1920 x 1080 pixels",
      },
      {
        name: "Windows 11 OS",
      },
    ],
  },
  {
    name: "Samsung ViewFinity S9 27 inch 5K OLED Gaming Monitor",
    brand: "Samsung ",
    category: "Monitor",
    url: "https://www.smartprix.com/monitors/samsung-viewfinity-s9-5k-oled-gaming-monitor-ppd1s0gyq1bf",
    pricef: "1,19 ,000",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iLeZY2s57-w103-h125/samsung-viewfinity-s.jpg",
    image_url:
      "https://www.smartprix.com/monitors/samsung-viewfinity-s9-5k-oled-gaming-monitor-ppd1s0gyq1bf",
    selection1: [
      {
        name: "27 in Display",
      },
      {
        name: "5120 x 2880 pixels (5K UHD+)",
      },
      {
        name: "Flat Monitor",
      },
      {
        name: "2 x USB Type-C",
      },
    ],
    selection2: [
      {
        name: "Display Port",
      },
      {
        name: "HDMI",
      },
      {
        name: "Anti Glare",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Acer SA241Y H 23.8 Inch Full HD Monitor",
    brand: "Acer ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1coj137a2",
    pricef: "8,149",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-izDFVt3u8-w103-h125/acer-sa241y-h-23-8-i.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1coj137a2",
    selection1: [
      {
        name: "23.8 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1 x HDMI v1.4",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "Acer EK240Y H 23.8 inch Full HD Monitor",
    brand: "Acer ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1nkqqfi8a",
    pricef: "6,793",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iPEJTJQaX-w103-h125/acer-ek240y-h-23-8-i.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1nkqqfi8a",
    selection1: [
      {
        name: "23.8 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1 x HDMI v1.4",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "LG UltraFine 27BQ85U 27 inch Ultra HD 4K Monitor",
    brand: "LG ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd117cc76tc",
    pricef: "49,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iCs5XsMgW-w103-h125/lg-ultrafine-27bq85u.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd117cc76tc",
    selection1: [
      {
        name: "27 in Display",
      },
      {
        name: "3840 x 2160 pixels (4K UHD)",
      },
      {
        name: "1.07 B Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1400:1 (Min), 2000:1 (Typ) Contrast Ratio",
      },
      {
        name: "1 x USB Type-C",
      },
      {
        name: "1 x Display Port v1.4",
      },
      {
        name: "2 x HDMI v2.0",
      },
    ],
  },
  {
    name: "LG 43SQ700 43 inch Ultra HD 4K Smart Monitor",
    brand: "LG ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1kk6vscyw",
    pricef: "36,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iPkYyWD0B-w103-h125/lg-43sq700-43-inch-u.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1kk6vscyw",
    selection1: [
      {
        name: "43 in Display",
      },
      {
        name: "3840 x 2160 pixels (4K UHD)",
      },
      {
        name: "Flat Monitor",
      },
      {
        name: "1200:1 Contrast Ratio",
      },
    ],
    selection2: [
      {
        name: "1 x USB Type-C",
      },
      {
        name: "2 x HDMI",
      },
      {
        name: "Wi-Fi",
      },
      {
        name: "Bluetooth",
      },
    ],
  },
  {
    name: "LG 27QN850 27 inch Quad HD Monitor",
    brand: "LG ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1ffsawqqz",
    pricef: "25,899",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iMNzvngdw-w103-h125/lg-27qn850-27-inch-q.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ffsawqqz",
    selection1: [
      {
        name: "27 in Display",
      },
      {
        name: "2560 x 1440 pixels (QHD)",
      },
      {
        name: "Flat Monitor",
      },
      {
        name: "1000:1 Contrast Ratio",
      },
    ],
    selection2: [
      {
        name: "1 x USB Type-C",
      },
      {
        name: "1 x Display Port",
      },
      {
        name: "2 x HDMI",
      },
      {
        name: "Plug And Play",
      },
    ],
  },
  {
    name: "ViewSonic VA2432-H-W 24 Inch Full HD Monitor",
    brand: "ViewSonic ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1ilurs2q8",
    pricef: "21,800",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-ilG0Ohu0Y-w103-h125/viewsonic-va2432-h-w.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1ilurs2q8",
    selection1: [
      {
        name: "24 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1300:1 (Typ), 50M:1 (Dynamic) Contrast Ratio",
      },
      {
        name: "1 x HDMI v1.4",
      },
      {
        name: "Anti Glare",
      },
      {
        name: "5 Year Warranty",
      },
    ],
  },
  {
    name: "Asus TUF Gaming VG34VQL3A 34 inch WQHD Monitor",
    brand: "Asus ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd16c2df822",
    pricef: "35,000",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iOmbOLu3x-w103-h125/asus-tuf-gaming-vg34.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd16c2df822",
    selection1: [
      {
        name: "34 in Display",
      },
      {
        name: "3440 x 1440 pixels (WQHD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Curved Monitor",
      },
    ],
    selection2: [
      {
        name: "4000:1 Contrast Ratio",
      },
      {
        name: "2 x Display Port v1.4",
      },
      {
        name: "2 x HDMI v2.0",
      },
      {
        name: "Anti Glare",
      },
    ],
  },
  {
    name: "HP E273D 27 inch Full HD Monitor",
    brand: "HP ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1po6fzp3c",
    pricef: "47,700",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-i1tDzu4jd-w103-h125/hp-e273d-27-inch-ful.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1po6fzp3c",
    selection1: [
      {
        name: "27 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1000:1 Contrast Ratio",
      },
      {
        name: "1 x USB Type-C",
      },
      {
        name: "1 x Display Port v1.2",
      },
      {
        name: "HDMI",
      },
    ],
  },
  {
    name: "Samsung ViewFinity S5 LS34C500GAW 34 inch WQHD Monitor",
    brand: " Samsung",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1cw1nmz7e",
    pricef: "33,899",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iov0eev0y-w103-h125/samsung-viewfinity-s.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1cw1nmz7e",
    selection1: [
      {
        name: "34 in Display",
      },
      {
        name: "3440 x 1440 pixels (WQHD)",
      },
      {
        name: "1.07 B Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "3000:1 Contrast Ratio",
      },
      {
        name: "1 x Display Port v1.2",
      },
      {
        name: "2 x HDMI v2.0",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "Samsung LS24C310EAW 24 inch Full HD Monitor",
    brand: "Samsung ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd19gjw0uvz",
    pricef: "8,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-izpPprMc0-w103-h125/samsung-ls24c310eaw.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd19gjw0uvz",
    selection1: [
      {
        name: "24 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1000:1 Contrast Ratio",
      },
      {
        name: "1 x HDMI v1.4",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "MarQ by Flipkart 27FHDMIQII2G 27 inch Full HD Monitor",
    brand: "MarQ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1tempi5ac",
    pricef: "11,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-i2h4mMepk-w103-h125/marq-by-flipkart-27f.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1tempi5ac",
    selection1: [
      {
        name: "27 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1000:1 Contrast Ratio",
      },
      {
        name: "1 x Display Port v1.2",
      },
      {
        name: "2 x HDMI v1.4",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "ViewSonic ColorPro VP-16 15.6 inch Full HD Portable OLED Monitor",
    brand: "ViewSonic ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd15zbrdpxq",
    pricef: "49,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iXFcQwQBc-w103-h125/viewsonic-colorpro-v.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd15zbrdpxq",
    selection1: [
      {
        name: "15.6 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "1.07 B Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "100,000:1 Contrast Ratio",
      },
      {
        name: "Touch Screen",
      },
      {
        name: "2 x USB Type-C",
      },
      {
        name: "1 x Micro HDMI",
      },
    ],
  },
  {
    name: "Acer DA430 43 Inch Full HD Smart Monitor",
    brand: "Acer ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1rklhuxhg",
    pricef: "21,599",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-itwhViv4e-w103-h125/acer-da430-43-inch-f.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1rklhuxhg",
    selection1: [
      {
        name: "43 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "3 x HDMI v1.4",
      },
      {
        name: "Wi-Fi",
      },
      {
        name: "Bluetooth",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "ViewSonic VX2428 24 Inch Full HD Gaming Monitor",
    brand: " ViewSonic",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1iazi6aue",
    pricef: "16,782",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-ic4j27hDa-w103-h125/viewsonic-vx2428-24.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1iazi6aue",
    selection1: [
      {
        name: "24 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1000:1 (Typ), 80M:1 (Dynamic) Contrast Ratio",
      },
      {
        name: "1 x Display Port v1.4",
      },
      {
        name: "2 x HDMI v1.4",
      },
      {
        name: "Anti Glare",
      },
    ],
  },
  {
    name: "Acer CB342CK 34 inch Quad HD Monitor",
    brand: "ACer",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1syoszh8a",
    pricef: "29,999",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-i9eKS4ohH-w103-h125/acer-cb342ck-34-inch.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1syoszh8a",
    selection1: [
      {
        name: "34 in Display",
      },
      {
        name: "3440 x 1440 pixels (WQHD)",
      },
      {
        name: "16.7 Million Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "100,000,000:1 Contrast Ratio",
      },
      {
        name: "1 x Display Port",
      },
      {
        name: "1 x HDMI",
      },
      {
        name: "3 Year Warranty",
      },
    ],
  },
  {
    name: "ViewSonic VX2728J 27 inch Full HD Gaming Monitor",
    brand: " ViewSonic",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd13bf7ff88",
    pricef: "21,902",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iJbolDCmR-w103-h125/viewsonic-vx2728j-27.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd13bf7ff88",
    selection1: [
      {
        name: "27 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1000:1 (Typ), 80M:1 (Dynamic) Contrast Ratio",
      },
      {
        name: "1 x Display Port v1.4",
      },
      {
        name: "2 x HDMI v1.4",
      },
      {
        name: "Anti Glare",
      },
    ],
  },
  {
    name: "Philips 242E2FA/94 24 inch Full HD Monitor",
    brand: "Philips ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1bi541a5g",
    pricef: "12,943",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iqCmPGjgc-w103-h125/philips-242e2fa-94-2.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1bi541a5g",
    selection1: [
      {
        name: "23.8 in Display",
      },
      {
        name: "1920 x 1080 pixels (Full HD)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1000:1 Contrast Ratio",
      },
      {
        name: "1 x Display Port",
      },
      {
        name: "1 x HDMI",
      },
      {
        name: "Plug And Play",
      },
    ],
  },
  {
    name: "Frontech MON-0058 22 Inch HD+ Monitor",
    brand: "Frontech ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1z2jx9yba",
    pricef: "4,577",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iUbdw0WJH-w103-h125/frontech-mon-0058-22.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1z2jx9yba",
    selection1: [
      {
        name: "22 in Display",
      },
      {
        name: "1680 x 1050 pixels (HD+)",
      },
      {
        name: "16.7 M Colors",
      },
      {
        name: "Flat Monitor",
      },
    ],
    selection2: [
      {
        name: "1 x HDMI",
      },
      {
        name: "1 Year Warranty",
      },
    ],
  },
  {
    name: "Lenovo ThinkVision P49w-30 49 inch Dual Quad HD Curved Monitor",
    brand: " ",
    category: "Monitor",
    url: "https://www.smartprix.com/nf/pd/pd1mhutgx01",
    pricef: "1,56 ,000",
    pricea: "36,490",
    pricec: " --",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    image:
      "https://cdn1.smartprix.com/rx-iS4xCQhzS-w103-h125/lenovo-thinkvision-p.jpg",
    image_url: "https://www.smartprix.com/nf/pd/pd1mhutgx01",
    selection1: [
      {
        name: "49 in Display",
      },
      {
        name: "5120 x 1440 pixels",
      },
      {
        name: "1.07 B Colors",
      },
      {
        name: "Curved Monitor",
      },
    ],
    selection2: [
      {
        name: "2000:1 Contrast Ratio",
      },
      {
        name: "3 x USB Type-C",
      },
      {
        name: "1 x Display Port v1.4",
      },
      {
        name: "2 x HDMI v2.1",
      },
    ],
  },
  {
    name: "Noise NoiseFit Vortex Smartwatch",
    brand: "Noise",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/noise-noisefit-vortex-smartwatch-ppd1w5hoqmsa",
    image:
      "https://cdn1.smartprix.com/rx-iXTARhtiE-w103-h125/noise-noisefit-vorte.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/noise-noisefit-vortex-smartwatch-ppd1w5hoqmsa",
    pricef: "2,499",
    pricea: "2,499",
    pricec: "2,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.46 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Dagger Luxe Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-dagger-luxe-smartwatch-ppd13eth1lt0",
    image:
      "https://cdn1.smartprix.com/rx-i4ib0S0jj-w103-h125/fire-boltt-dagger-lu.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-dagger-luxe-smartwatch-ppd13eth1lt0",
    pricef: "3,999",
    pricea: "4,499",
    pricec: "4,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.43 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Amazfit Pop 3S Smartwatch",
    brand: "Amazefit ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/amazfit-pop-3s-smartwatch-ppd12pje7hzc",
    image:
      "https://cdn1.smartprix.com/rx-i0El0MdPk-w103-h125/amazfit-pop-3s-smart.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/amazfit-pop-3s-smartwatch-ppd12pje7hzc",
    pricef: "4,999",
    pricea: "4,499",
    pricec: "4,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.96 inches Touch Display",
      },
      {
        name: "Water Resistant",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Quantum Smartwatch",
    brand: " Fireboltt",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-quantum-smartwatch-ppd1f515skgi",
    image:
      "https://cdn1.smartprix.com/rx-iLJv75lQb-w103-h125/fire-boltt-quantum-s.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-quantum-smartwatch-ppd1f515skgi",
    pricef: "2,999",
    pricea: "2,499",
    pricec: "2,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "128 MB Inbuilt",
      },
      {
        name: "1.28 inches Touch Display",
      },
    ],
    selection2: [
      {
        name: "Water Resistant, IP67",
      },
      {
        name: "Scratch Resistant, Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor, Blood Pressure Monitor",
      },
    ],
  },
  {
    name: "Noise ColorFit Icon 2 Smartwatch",
    brand: "Noise ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/noise-colorfit-icon-2-smartwatch-ppd10elxjjlo",
    image:
      "https://cdn1.smartprix.com/rx-iN6MkniET-w103-h125/noise-colorfit-icon.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/noise-colorfit-icon-2-smartwatch-ppd10elxjjlo",
    pricef: "1,599",
    pricea: "1,499",
    pricec: "1,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.8 inches Touch Display",
      },
      {
        name: "Water Resistant, IP67",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant, Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor, Blood Pressure Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Ninja Call 2 Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-ninja-calling-smartwatch-ppd1by9fiwe5",
    image:
      "https://cdn1.smartprix.com/rx-idcbAzKFm-w103-h125/fire-boltt-ninja-cal.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-ninja-calling-smartwatch-ppd1by9fiwe5",
    pricef: "1,499",
    pricea: "1,499",
    pricec: "1,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.69 inches Touch Display",
      },
      {
        name: "Water Resistant, IP67",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Orion Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-orion-smartwatch-ppd1aeadgvvs",
    image:
      "https://cdn1.smartprix.com/rx-irO9eut45-w103-h125/fire-boltt-orion-sma.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-orion-smartwatch-ppd1aeadgvvs",
    pricef: "1,399",
    pricea: "1,499",
    pricec: "1,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "128 MB Inbuilt",
      },
      {
        name: "1.3 inches Touch Display",
      },
    ],
    selection2: [
      {
        name: "Water Resistant, IP67",
      },
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
    ],
  },
  {
    name: "Fire Boltt Invincible Plus Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-invincible-plus-smartwatch-ppd1wizxapdv",
    image:
      "https://cdn1.smartprix.com/rx-i3Q5f6bA8-w103-h125/fire-boltt-invincibl.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-invincible-plus-smartwatch-ppd1wizxapdv",
    pricef: "4,499",
    pricea: "4,499",
    pricec: "4,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "4 GB Inbuilt",
      },
      {
        name: "1.43 inches Touch Display",
      },
    ],
    selection2: [
      {
        name: "Water Resistant, IP67",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Apple Watch Ultra",
    brand: " Apple",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/apple-watch-ultra-ppd1o0b8p3q3",
    image:
      "https://cdn1.smartprix.com/rx-iGjLy2u73-w103-h125/apple-watch-ultra.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/apple-watch-ultra-ppd1o0b8p3q3",
    pricef: "79,999",
    pricea: "72,499",
    pricec: "75,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Wi-Fi, Bluetooth 5.3, GPS, NFC",
      },
      {
        name: "GPRS, 3G, 4G",
      },
      {
        name: "Voice Calling, Bluetooth Calling",
      },
      {
        name: "32 GB Inbuilt",
      },
    ],
    selection2: [
      {
        name: "1.92 inches Touch Display",
      },
      {
        name: "Water Resistant, 100 m, WR100",
      },
      {
        name: "Scratch Resistant, Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
    ],
  },
  {
    name: "Crossbeats Armour Dive Smartwatch",
    brand: " Crossbeat",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/crossbeats-armour-dive-smartwatch-ppd14kxs9wkr",
    image:
      "https://cdn1.smartprix.com/rx-ic00m50ie-w103-h125/crossbeats-armour-di.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/crossbeats-armour-dive-smartwatch-ppd14kxs9wkr",
    pricef: "3,999",
    pricea: "3,499",
    pricec: "3,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.43 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68, MLT-STD 810H",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant, Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor, Blood Pressure Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Phoenix Pro Smartwatch",
    brand: " Fireboltt",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-phoenix-pro-smartwatch-ppd1d6fo8a7b",
    image:
      "https://cdn1.smartprix.com/rx-i7GAHviv9-w103-h125/fire-boltt-phoenix-p.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-phoenix-pro-smartwatch-ppd1d6fo8a7b",
    pricef: "1,699",
    pricea: "1,499",
    pricec: "1,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.39 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Noise NoiseFit Evolve 3 Smartwatch",
    brand: "Noise ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/noise-noisefit-evolve-3-smartwatch-ppd13f1se0pc",
    image:
      "https://cdn1.smartprix.com/rx-iRjdUltOT-w103-h125/noise-noisefit-evolv.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/noise-noisefit-evolve-3-smartwatch-ppd13f1se0pc",
    pricef: "2,999",
    pricea: "2,499",
    pricec: "2,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.43 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor, Blood Pressure Monitor",
      },
      {
        name: "Altimeter, Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Legacy Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-legacy-smartwatch-ppd1716ktmnt",
    image:
      "https://cdn1.smartprix.com/rx-i1DBK6xkR-w103-h125/fire-boltt-legacy-sm.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-legacy-smartwatch-ppd1716ktmnt",
    pricef: "3,399",
    pricea: "3,499",
    pricec: "3,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.43 inches Touch Display",
      },
      {
        name: "Water Resistant, 1 m, IP68",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "beatXP Flux Smartwatch",
    brand: "BeatXP ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/beatxp-flux-smartwatch-ppd1zdwt53oq",
    image:
      "https://cdn1.smartprix.com/rx-idxkVcrp9-w103-h125/beatxp-flux-smartwat.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/beatxp-flux-smartwatch-ppd1zdwt53oq",
    pricef: "2,999",
    pricea: "2,499",
    pricec: "2,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.45 inches Touch Display",
      },
      {
        name: "Water Resistant, IP67",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Noise NoiseFit Halo Smartwatch",
    brand: "Noise ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/noise-noisefit-halo-smartwatch-ppd1qx27s135",
    image:
      "https://cdn1.smartprix.com/rx-ipoHdFFo7-w103-h125/noise-noisefit-halo.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/noise-noisefit-halo-smartwatch-ppd1qx27s135",
    pricef: "3,499",
    pricea: "2,499",
    pricec: "5,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.43 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Hunter Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-hunter-smartwatch-ppd12ddg99bz",
    image:
      "https://cdn1.smartprix.com/rx-ie7Gs3ac5-w103-h125/fire-boltt-hunter-sm.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-hunter-smartwatch-ppd12ddg99bz",
    pricef: "1,699",
    pricea: "2,499",
    pricec: "1,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "2.01 inches Touch Display",
      },
      {
        name: "Water Resistant, 1 m, IP67",
      },
    ],
    selection2: [
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
      {
        name: "6 days Battery",
      },
    ],
  },
  {
    name: "Amazfit Cheetah Smartwatch",
    brand: "Amazfit ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/amazfit-cheetah-smartwatch-ppd1bn446k5v",
    image:
      "https://cdn1.smartprix.com/rx-ivlqxHL4N-w103-h125/amazfit-cheetah-smar.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/amazfit-cheetah-smartwatch-ppd1bn446k5v",
    pricef: "7,499",
    pricea: "4,499",
    pricec: "4,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3, GPS",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.43 inches Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor, Blood Pressure Monitor",
      },
      {
        name: "Altimeter, Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Noise ColorFit Ultra 3 Smartwatch",
    brand: "Noise ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/noise-colorfit-ultra-3-smartwatch-ppd1xsm4cowr",
    image:
      "https://cdn1.smartprix.com/rx-ioeRR8gSC-w103-h125/noise-colorfit-ultra.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/noise-colorfit-ultra-3-smartwatch-ppd1xsm4cowr",
    pricef: "4,499",
    pricea: "4,499",
    pricec: "4,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.3",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.96 inches Touch Display",
      },
      {
        name: "Water Resistant, IP68",
      },
    ],
    selection2: [
      {
        name: "Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Sphere Smartwatch",
    brand: "Fireboltt ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-sphere-smartwatch-ppd1hgcdujg2",
    image:
      "https://cdn1.smartprix.com/rx-idPCqd9rz-w103-h125/fire-boltt-sphere-sm.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-sphere-smartwatch-ppd1hgcdujg2",
    pricef: "2,499",
    pricea: "2,499",
    pricec: "5,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.6 inches Touch Display",
      },
      {
        name: "Water Resistant, 1 m, IP68",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant, Dust Proof",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Pedometer, Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
  {
    name: "Fire Boltt Supernova Smartwatch",
    brand: " ",
    category: "Smartwatch",
    url: "https://www.smartprix.com/smartwatches/fire-boltt-supernova-smartwatch-ppd18evgaxfz",
    image:
      "https://cdn1.smartprix.com/rx-i8e4GZvVM-w103-h125/fire-boltt-supernova.jpg",
    image_url:
      "https://www.smartprix.com/smartwatches/fire-boltt-supernova-smartwatch-ppd18evgaxfz",
    pricef: "2,699",
    pricea: "2,499",
    pricec: "5,490",
    flipkart: " ",
    amazon: " ",
    croma: " ",
    selection1: [
      {
        name: "Bluetooth 5.0",
      },
      {
        name: "Bluetooth Calling",
      },
      {
        name: "1.78 inches Touch Display",
      },
      {
        name: "Water Resistant, 1 m, IP67",
      },
    ],
    selection2: [
      {
        name: "Scratch Resistant",
      },
      {
        name: "Heart Rate Monitor",
      },
      {
        name: "SpO2 (Blood Oxygen) Monitor",
      },
      {
        name: "Sleep Monitor, Calorie Count, Step Count",
      },
    ],
  },
];


let selectedProducts = [];

function updateComparisonButton(productIndex) {
  const addButton = document.getElementById(`addButton${productIndex}`);
  addButton.classList.toggle('added');

  if (addButton.classList.contains('added')) {
    selectedProducts.push(products[productIndex]);
  } else {
    selectedProducts = selectedProducts.filter(
      (product) => product !== products[productIndex]
    );
  }

  if (selectedProducts.length >= 2) {
    openComparisonPopup();
    const comparisonDetails = document.getElementById('comparison-container');
    comparisonDetails.innerHTML = '';
    selectedProducts.forEach((product) => {
        const productCard = createComparisonCard(product);
        comparisonDetails.appendChild(productCard);
    });
  }
}


const categoryFilter = document.getElementById('category-filter');
const searchButton = document.getElementById('searchButton');
const productsContainer = document.getElementById('productsContainer');
const priceFilter = document.getElementById('priceFilter');
const minPriceInput = document.getElementById('minPricef');
const minPriceInput1 = document.getElementById('minPricea');
const minPriceInput2 = document.getElementById('minPricec');
const maxPriceInput = document.getElementById('maxPricef');
const maxPriceInput1 = document.getElementById('maxPricea');
const maxPriceInput2 = document.getElementById('maxPricec');
const applyFilterButton = document.getElementById('applyFilter');

const searchBox = document.getElementById('searchBox');
const suggestionContainer = document.getElementById('suggestionContainer');
suggestionContainer.addEventListener("click", onSuggestionClick);


function onSuggestionClick(event) {
  const clickedSuggestion = event.target.textContent;
  searchBox.value = clickedSuggestion;
  hideSuggestions();
  // Perform search action based on the selected suggestion (Here you can implement your own search functionality)
  console.log("Searching for:", clickedSuggestion);
}




function clearSearchInput() {
  searchBox.value = '';
  hideSuggestions();
}
// Function to display search suggestions
function showSuggestions() {
  const searchTerm = searchBox.value.toLowerCase();
  const suggestions = products.filter(product => product.name.toLowerCase().includes(searchTerm));
  

  if (suggestions.length > 0) {
    suggestionContainer.innerHTML = suggestions.map(product => `<p>${product.name}</p>`).join('');
    suggestionContainer.style.display = 'block';
  } else {
    suggestionContainer.innerHTML = '';
    suggestionContainer.style.display = 'none';
  }
}

function hideSuggestions() {
  suggestionContainer.style.display = "none";
}

// Function to render product cards
function renderProducts(productsToShow) {

  const sections = document.getElementsByClassName("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add("hidden");
  }

  const productCont = document.getElementById("filters1");
  productCont.classList.remove("hidden");

  productsContainer.innerHTML = '';
  productsToShow.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.src = product.image;
    productImage.alt = "Product Image";
    productCard.appendChild(productImage);

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");


    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productDetails.appendChild(productName);

    const flipkartPrice = document.createElement("a");
    flipkartPrice.classList.add("flipkart");
    flipkartPrice.href = product.flipkart;
    flipkartPrice.textContent = "" + product.pricef;
    productCard.appendChild(flipkartPrice);

    const amazonPrice = document.createElement("a");
    amazonPrice.classList.add("amazon");
    amazonPrice.href = product.amazon;
    amazonPrice.textContent = "" + product.pricea;
    productCard.appendChild(amazonPrice);

    const cromaPrice = document.createElement("a");
    cromaPrice.classList.add("croma");
    cromaPrice.href = product.croma;
    cromaPrice.textContent = "" + product.pricec;
    productCard.appendChild(cromaPrice);

    const addButton = document.createElement('button');
    addButton.id = `addButton${index}`;
    addButton.textContent = 'Add to Compare';
    addButton.addEventListener('click', () => updateComparisonButton(index));
    productCard.appendChild(addButton);

    const selection1 = document.createElement("div");
    selection1.classList.add("product-selection1");
    product.selection1.forEach((selection) => {
      const selectionItem = document.createElement("span");
      selectionItem.textContent = selection.name;
      selection1.appendChild(selectionItem);
    });
    productDetails.appendChild(selection1);

    const selection2 = document.createElement("div");
    selection2.classList.add("product-selection2");
    product.selection2.forEach((selection) => {
      const selectionItem = document.createElement("span");
      selectionItem.textContent = selection.name;
      selection2.appendChild(selectionItem);
    });
    productDetails.appendChild(selection2);
    productCard.appendChild(productDetails);
    productsContainer.appendChild(productCard);
  });
}

// Function to filter products based on search term and price range
function filterProducts() {
  const searchTerm = searchBox.value.toLowerCase();
  const categoryFilter1 = categoryFilter.value.toLowerCase();
  const minPrice = parseFloat(minPriceInput.value);
  const minPrice1 = parseFloat(minPriceInput1.value);
  const minPrice2 = parseFloat(minPriceInput2.value);
  const maxPrice = parseFloat(maxPriceInput.value);
  const maxPrice1 = parseFloat(maxPriceInput1.value);
  const maxPrice2 = parseFloat(maxPriceInput2.value);

  const filteredProducts = products.filter(product => {
    const productPrice = parseFloat(product.pricef.replace(',', ''));
    const productPrice1 = parseFloat(product.pricea.replace(',', ''));
    const productPrice2 = parseFloat(product.pricec.replace(',', ''));
    const matchSearchTerm = product.name.toLowerCase().includes(searchTerm);
    const matchSearchTerm1 = product.category.toLowerCase().includes(categoryFilter1);
    const withinPriceRange = (isNaN(minPrice) || productPrice >= minPrice) && (isNaN(maxPrice) || productPrice <= maxPrice);
    const withinPriceRange1 = (isNaN(minPrice1) || productPrice1 >= minPrice1) && (isNaN(maxPrice1) || productPrice1 <= maxPrice1);
    const withinPriceRange2 = (isNaN(minPrice2) || productPrice2 >= minPrice2) && (isNaN(maxPrice2) || productPrice2 <= maxPrice2);
    return matchSearchTerm && matchSearchTerm1 && withinPriceRange && withinPriceRange1 && withinPriceRange2;
  });

  renderProducts(filteredProducts);
  suggestionContainer.style.display = 'none';
  menuIcon2.style.display='none';
  
}

function search() {
  const searchInput = document.getElementById("searchBox").value.trim();

  if (searchInput !== "") {
      filterProducts();
      
  } else {
   
  }
}

// Event listeners for search and price filter
searchButton.addEventListener('click', search);
searchBox.addEventListener('input', showSuggestions);
searchBox.addEventListener('blur', () => {
  setTimeout(() => suggestionContainer.style.display = 'none', 200);
});
applyFilterButton.addEventListener('click', filterProducts);
document.getElementById("removeFilters").addEventListener("click", removeFilters)

function removeFilters() {

  document.getElementById('minPricef').value = '';
  document.getElementById('maxPricef').value = '';
  document.getElementById('minPricea').value = '';
  document.getElementById('maxPricea').value = '';
  document.getElementById('minPricec').value = '';
  document.getElementById('maxPricec').value = '';

  filterProducts();
}

function createComparisonCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card1');

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productCard.appendChild(productImage);

  const productName = document.createElement('h3');
  productName.textContent = product.name;
  productCard.appendChild(productName);

  const productBrand = document.createElement('p');
  productBrand.textContent = product.brand.toUpperCase();
  productCard.appendChild(productBrand);

  const flipkartPrice = document.createElement("a");
  flipkartPrice.classList.add("flipkart1");
  flipkartPrice.href = product.flipkart;
  flipkartPrice.textContent = "" + product.pricef;
  productCard.appendChild(flipkartPrice);

  const amazonPrice = document.createElement("a");
  amazonPrice.classList.add("amazon1");
  amazonPrice.href = product.amazon;
  amazonPrice.textContent = "" + product.pricea;
  productCard.appendChild(amazonPrice);

  const cromaPrice = document.createElement("a");
  cromaPrice.classList.add("croma1");
  cromaPrice.href = product.croma;
  cromaPrice.textContent = "" + product.pricec;
  productCard.appendChild(cromaPrice);

  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");

  const selection1 = document.createElement("div");
  selection1.classList.add("product-selection1");
  product.selection1.forEach((selection) => {
      const selectionItem = document.createElement("span");
      selectionItem.textContent = selection.name;
      selection1.appendChild(selectionItem);
  });
  productDetails.appendChild(selection1);

  const selection2 = document.createElement("div");
  selection2.classList.add("product-selection2");
  product.selection2.forEach((selection) => {
      const selectionItem = document.createElement("span");
      selectionItem.textContent = selection.name;
      selection2.appendChild(selectionItem);
  });
  productDetails.appendChild(selection2);
  productCard.appendChild(productDetails);

  return productCard;
}

function openComparisonPopup() {
  const comparisonPopup = document.getElementById('comparisonPopup');
  comparisonPopup.style.display = 'flex';
  comparisonPopup.style.position = 'fixed';
  document.getElementById('popupBackground').style.display = 'block';
}

function closeComparisonPopup() {
  const comparisonPopup = document.getElementById('comparisonPopup');
  comparisonPopup.style.display = 'none';
  location.reload();
  document.getElementById('popupBackground').style.display = 'none';
}

function removeComparisonPopup() {
  closeComparisonPopup();
}

function openPopup() {
  const comparisonPopup = document.getElementById('box');
  comparisonPopup.style.display = 'flex';
  comparisonPopup.style.position = 'fixed';
  document.getElementById('popupBackground').style.display = 'block';
}

function closePopup() {
  const comparisonPopup = document.getElementById('box');
  comparisonPopup.style.display = 'none';
  document.getElementById('popupBackground').style.display = 'none';
}

function removePopup() {
  closePopup();
}
function openPopup2() {
  const comparisonPopup = document.getElementById('hotdeals');
  comparisonPopup.style.display = 'block';
  comparisonPopup.style.position = 'fixed';
  document.getElementById('popupBackground').style.display = 'block';
  document.getElementsByClassName('body').style.overflow='hidden';
}

function closePopup2() {
  const comparisonPopup = document.getElementById('hotdeals');
  comparisonPopup.style.display = 'none';
  document.getElementById('popupBackground').style.display = 'none';
}

function removePopup2() {
  closePopup2();
}



const menuIcon= document.querySelector('#menu-icon');
const navBar= document.querySelector('.menu');

menuIcon.onclick=()=>{
  navBar.style.display='block';
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}

const menuIcon2= document.querySelector('.logintap');
const navBar1= document.querySelector('.login');

menuIcon2.onclick=()=>{
  navBar1.style.display='flex';
  // menuIcon2.classList.toggle('logintap');
  navBar1.classList.toggle('active');
}

const menuIcon4 = document.querySelector("#menuicon2");
const navBar2 = document.querySelector("#filters1");
let isCross = false;

menuIcon4.onclick = () => {
  navBar2.style.display = "block";
  isCross = !isCross;
  menuIcon4.className = isCross ?  'uil uil-times':'uil uil-filter';
  navBar2.classList.toggle("active");
};