//const MY_WORK = 'data.json'
"use strict";
const workContainer = document.querySelector('#myWork');

async function getWork() {
    const res = await fetch("js/data.json");
    const {results} = await res.json();
    showWork(results);
}

getWork();

function showWork(works) {
    workContainer.innerHTML = '';
    works.forEach((work) => {
        const workEl = document.createElement('div');
        workEl.className = 'work';
        workEl.innerHTML = "\n <div class=\"col-md-4\">\n    <div class=\"icon gradient mb-4\">\n  <i class=\"" + e.icon + "\"></i>\n   </div>\n    <h3>" + e.title + "</h3>     <p>" + e.description + "</p>\n    </div>\n"
        workContainer.appendChild(workEl);
    })
}
console.log("try");



