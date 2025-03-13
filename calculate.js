txt = ""

function Get(a) {
    txt += a
    document.getElementById("result").innerHTML = txt;
    if (a == "=") {
        if(txt.includes("+")==false && txt.includes("-")==false && txt.includes("*")==false && txt.includes("/")==false){
           newtxt="There is no operation so the result is the number itself"+ " "+txt.substring(0, txt.length - 1)
           document.getElementById("result").innerHTML = newtxt;
           return 
        }
        txt = evaltxt(txt.substring(0, txt.length - 1))
        document.getElementById("result").innerHTML = txt;
    }
    if (a == "C") {
        txt = ""
        document.getElementById("result").innerHTML = txt;
    }
}
function evaltxt(txt) {
    const invalidEndings = ["=", "+", "-", "*", "/"];
    if (invalidEndings.includes(txt[txt.length - 1])|| invalidEndings.includes(txt[0])) {
        return "Error";
    }
   
    prev = ""
    for (i = 0; i < txt.length; i++) {
        if (txt[i] == "+") {
            return parseFloat(prev) + parseFloat(evaltxt(txt.substring(i + 1)))

        }
        else if (txt[i] == "-") {
            return parseFloat(prev) - parseFloat(evaltxt(txt.substring(i + 1)))

        }
        else if (txt[i] == "*") {
            return  parseFloat(prev) * parseFloat(evaltxt(txt.substring(i + 1)))

        }
        else if (txt[i] == "/") {
            return  parseFloat(prev) / parseFloat(evaltxt(txt.substring(i + 1)))

        }
        else {
            prev += txt[i]
        }
    }
    return prev
}
