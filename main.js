function getReplyForContactSubmit(event){
    event.preventDefault();

    var input1 = document.getElementById("name").value;
    var input2 = document.getElementById("email").value;
    var input3 = document.getElementById("message").value;

    if(input1!="" && input2!="" && input3!=""){
        var element = document.getElementById("submit-response");
        element.textContent = "Thanks for contacing me! I will reply as soon as possible";
    }

}

