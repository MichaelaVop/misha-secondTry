//const MY_WORK = 'data.json'
// const myWork = document.querySelector('#myWork');
console.log("js funguje");
let work = [];

let printMyWork = function (workArray) {
    let workDiv = document.querySelector('#myWork');
    workDiv.innerHTML = '';
    console.log("after print");
    workArray.forEach(e => {
        return (
            document.querySelector('#myWork').innerHTML +=
            "\n <div class=\"col-md-4\">\n    <div class=\"icon gradient mb-4\">\n  <i class=\"" + e.icon + "\"></i>\n   </div>\n    <h3>" + e.title + "</h3>     <p>" + e.description + "</p>\n    </div>\n "
            );
    });
    console.log("after element each");
};

let myWorkData = function () {
    fetch("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        work = data;
        printMyWork(work);
        console.log("data", work);
    });

}

console.log("js konec");


