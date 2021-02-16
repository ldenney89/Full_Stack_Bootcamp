function validate() {
    if(document.myform.name.value ==""){
        alert('enter your name')
        document.myform.name.focus()
        return false
    }
}