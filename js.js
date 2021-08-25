let nb = Math.floor(Math.random() * 101)
function check(){
    let choix = document.getElementById('choix').value

    if(choix == nb){
        document.getElementById('console').innerHTML = "Vous avez trouvé le nombre mystère !"
    }else if(choix < nb){
        document.getElementById('console').innerHTML = "Le nombre mystère est plus grand que " + choix
    }else if(choix > nb){
        document.getElementById('console').innerHTML = "Le nombre mystère est plus petit que " + choix
    }
}

function reload(){
    document.location.reload();
}