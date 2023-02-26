function add(){
    const a = document.getElementById("aVal").value;
    const b = document.getElementById("bVal").value;

    res = eval(a+'+'+b);
    
    // document.getElementById("result").innerHTML = res;
    x = document.getElementsByClassName("result")[0];
    x.innerHTML = res;
}

// document.getElementById("submitButton").addEventListener("click", () => {
//     // add();
//     document.getElementById("result").innerHTML = "Hi";
// });

document.getElementById("submitButton").onclick = add;
// document.getElementById("submitButton").addEventListener("mouseover", add);
