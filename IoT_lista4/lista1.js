function mudar(){
    for(var i = 1; i <= 10; i++)
    {
        if(i == 1)
            alert("Mudou " + i + " vez");
        else
            alert("Mudou " + i + " vezes");
     
    }
    document.getElementById("result").innerHTML = "mudou!"

}