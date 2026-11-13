function addBook(){
    var title=document.getElementById("title").value;
    var author=document.getElementById("author").value;
    if(title && author){
        document.getElementById("conform").innerHTML="added the "+title+"book";
    }
    else{
        document.getElementById("conform").innerHTML="failed to add";
    }
}