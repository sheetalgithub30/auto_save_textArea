const textarea = document.getElementById("text");
const button = document.getElementById("color");

window.addEventListener("load",()=>{
    if(localStorage.getItem("text")){
        textarea.value = localStorage.getItem("text");
    }
    if(localStorage.getItem("bg")){
        textarea.style.backgroundColor = localStorage.getItem("bg");
    }
    if(localStorage.getItem("tc")){
        textarea.style.color = localStorage.getItem("tc");
    }
})

textarea.addEventListener("input",()=>{
    // console.log(textarea.value);
    localStorage.setItem("text",textarea.value);
})

button.addEventListener("click",()=>{
    const textColor = document.getElementById("tc");
    const backColor = document.getElementById("bg");
    textarea.style.backgroundColor = backColor.value;
    textarea.style.color = textColor.value;

    localStorage.setItem("bg",backColor.value);
    localStorage.setItem("tc",textColor.value);
})

