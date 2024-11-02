let istatus = document.querySelector("h5");
let btn = document.querySelector(".btn");
let flag = 1

btn.addEventListener("click", () => {
    if (flag == 1) {
        istatus.innerText = "Friend";
        istatus.style.color = "Green"
        btn.innerText = "Remove";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "#000"
        flag = 0
    }
    else {
        flag = 1
        istatus.innerText = "Stranger";
        istatus.style.color = "red"
        btn.innerText = "Add";
        btn.style.backgroundColor = "cadetblue";
        btn.style.color = "aliceblue"
    }
})


