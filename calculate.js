txt=""

function Get(a){
    txt+=a
    document.getElementById("result").innerHTML=txt;
    if(a=="="){
        txt=eval(txt)
        document.getElementById("result").innerHTML=txt;
    }
    if(a=="C"){
        txt=""
        document.getElementById("result").innerHTML=txt;
    }
}
function eval(txt){
    if(txt[0]=="-" || txt[0]=="+" || txt[0]=="*" || txt[0]=="/" ||txt[0]=="=" 
        ||txt[txt.length-1]=="+"||txt[txt.length-1]=="*"||txt[txt.length-1]=="/"||txt[txt.length-1]=="-"){
        return "Error"
        }
    i=0
    while(i<txt.length){
       
        if(txt[i]=="*"){
            txt=txt.slice(0,i-1)+txt[i-1]*txt[i+1]+txt.slice(i+2)
            i=0
        }
        if(txt[i]=="/"){
            txt=txt.slice(0,i-1)+txt[i-1]/txt[i+1]+txt.slice(i+2)
            i=0
        }
        if(txt[i]=="+"){
            txt=txt.slice(0,i-1)+txt[i-1]*txt[i+1]+txt.slice(i+2)
            i=0
        }
        if(txt[i]=="-"){
            txt=txt.slice(0,i-1)+txt[i-1]/txt[i+1]+txt.slice(i+2)
            i=0
        }
        i++
    }
    return txt
}
