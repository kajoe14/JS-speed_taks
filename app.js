/*******
 * 
 * Speed Test Questions
 * 
 *******/

// Task 1 - count 0 - 100 and on 100, repeat the cycle
document.getElementById('count-nums').addEventListener('click', () => {
   let numDisplay = document.getElementById('nums-display');
   let n = 0;
   setInterval(() => {
      n = (n + 1) % 101;
      numDisplay.innerHTML = `<h4>${n}</h4>`;
      console.log(n)

   }, 120)
})



// Task 2 - Animate runner
document.getElementById('start-runner').addEventListener('click', () => {
   let runner = document.getElementById("runner-track");
   let r = 1;
   let noOfImgs = 4;

   let timer = setInterval(() => {
      r = r % noOfImgs;
      r++;
      runner.innerHTML = `<img src=\"img/runner${r}.png\">`;
   }, 60);

   document.getElementById("stop-runner").addEventListener("click", () => clearInterval(timer))
})



// Task 3 - Animate object to 300px
document.getElementById('move-circle').addEventListener('click', () => {
   const limit = 300;
   const circle = document.getElementById("rounded");
   let offset = 0;
   const id = setInterval(frame, 30);

   function frame() {
      if (offset === limit) {
         clearInterval(id);
      } else {
         offset++;
         circle.style.left = offset + 'px';
      }
   }
});



// Task 4 - Display popup on page scroll

const element = document.documentElement.scrollTop;
const topOffset = document.body.scrollTop;
const popItem = document.getElementById('popup');

window.onscroll = () => {
   (topOffset > 200 || element > 200) ? popItem.classList.add = 'show' : popItem.classList.remove = 'show';
}


// Task 5 - Show message on keydown - Press enter on Keyboard

function getKey(e) {
   (e.keyCode === 13) ? alert('Bravo!') : console.log('Try Again!')
}
document.onkeydown = getKey;



// Task 6 - div1 and div2 are equal in width; display div1 width and div2 height

function compareDivs() {

   let container = document.getElementById("divContainers");

   let div2 = document.createElement("div");
   div2.style.width = "100px";
   div2.style.height = "100px";
   div2.style.background = "#e31837";
   div2.id = "div2";

   let div1 = document.createElement("div");
   div1.style.width = "100px";
   div1.style.height = div2.style.width;
   div1.style.background = "blue";
   div1.id = "div1";

   container.appendChild(div2);
   container.appendChild(div1);
}

// compareDivs();


// Task 7 - Disply message on alert confirmation
document.getElementById('js-pro').addEventListener('click', () => {
   if (confirm("Do you know a bit of JS Already?") === true) console.log(':)')
});



// Task 8 - replace all 'e' in a string by 'o'
document.getElementById('string-form').addEventListener('submit', (e) => {
   e.preventDefault();

   let regex = /e/gi;
   let text = document.getElementById('string-text').value;
   let displayString = document.getElementById('string-result');
   displayString.innerHTML = `
      <p>${text.replace(regex, 'o')}</p>   
   `;
   console.log(text.replace(regex, "o"));
   
});



// Task 9 - create new object with re-organized text
document.getElementById('sort-obj').addEventListener('click', () => {
   let langs = {
      "coucou": "hello",
      "comment": "how",
      "va": "are",
      "tu": "you"
   }

   let results = document.getElementById('sort-object');
   let langOne = Object.keys(langs);
   console.log(langOne);

   let langTwo = Object.values(langs);
   console.log(langTwo);

   results.innerHTML = `
      <p class="p-all">${langOne}</p>
      <p class="p-all">${langTwo}</p>
   `
});



// Task 10 - order the transport lines increasingly by their number
document.getElementById('sort-arr').addEventListener('click', () => {
   let trLines = ["line n°1", "bus n°24", "tramway n°3", "line n°2", "bus n°20", "tramway n°312", "line n°130", "bus n°28", "tramway n°20", "line n°101"];
   let result = trLines.filter((line) => {
      return line.includes("line")
   });

   let display = document.getElementById('sort-array');
   result.sort((a, b) => {
      return a.slice(a.indexOf("°") + 1) - b.slice(b.indexOf("°") + 1);
   })
   console.log(result);

   display.innerHTML = `
      <p class="p-all">${result}</p>
   `
});
