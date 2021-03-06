"use strict";

let work = [];

let printMyWork = function (workArray) {
    let workDiv = document.querySelector('#myWork');  
    workDiv.innerHTML = '';
    workArray.forEach(e => {
        return (
            workDiv.innerHTML +=
            "\n <div class=\"col-md-4\">\n    <div class=\"icon gradient mb-4\">\n  <i class=\"" + e.icon + "\"></i>\n   </div>\n    <h3>" + e.title + "</h3>     <p>" + e.description + "</p>\n    </div>\n "
            );

    });
};



let myWorkData = function () {
    fetch("js/data.json")
    .then(function(resp) {
        return resp.json()
            .then(function(data) {
                work = data;
                printMyWork(work);
            });
    });
};

myWorkData();






