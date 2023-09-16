let string = "";
let b = document.querySelectorAll(".button");
Array.from(b).forEach(button => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "=")
        {
            string = eval(string);
           document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "AC")
        {
            string = "";
            document.querySelector("input").value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
});