function validate() {
    if(document.myform.name.value ==""){
        alert('enter your name')
        document.myform.name.focus()
        return false
    }
    if(document.myform.email.value ==""){
        alert('enter your email')
        document.myform.email.focus()
        return false
    }
    if(document.myform.zipcode.value =="" || isNaN(document.myform.zipcode.value) || document.myform.zipcode.value.length !=5){
        alert('enter your zipcode')
        document.myform.zipcode.focus()
        return false
    }
    if(document.myform.country.value =="-1"){
        alert('enter your country')
        document.myform.country.focus()
        return false
    }
}
function mouseactive() {
    alert('mouse entered')
}
function mouseleft() {
    alert('mouse left')
}

function myfun3(){
    var txt
    var person =prompt('enter name')

    if(person ==null || person=="") {
        txt= 'you cancelled'
    }
    else {
        txt = 'hello ' + person
    }
    document.getElementById('pro').innerHTML=txt
}

function myfun4() {
    var usergrades='a'

    switch(usergrades) {
        case 'a' : document.write('you have good grades')
        break;
        case 'b' : document.write('you have nice grades')
        break;
        default : document.write('grade not found')
    }
}