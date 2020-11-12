function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

$( document ).ready(function() {


    $('.menu .item').tab();
    $('.ui.modal').modal();

    $(function(){
        $("#create-book-btn").click(function(){
            $(".create-book-modal").modal('show');
        });
        $("#delete-book-btn").click(function(){
            $(".delete-book-modal").modal('show');
        });
        $("#edit-book-btn").click(function(){
            $(".edit-book-modal").modal('show');
        });
        $("#details-book-btn").click(function(){
            $(".details-book-modal").modal('show');
        });


        $("#create-author-btn").click(function(){
            $(".create-author-modal").modal('show');
        });
        $("#edit-author-btn").click(function(){
            $(".edit-author-modal").modal('show');
        });
        $("#delete-author-btn").click(function(){
            $(".delete-author-modal").modal('show');
        });

        $("#create-edition-btn").click(function(){
            $(".create-edition-modal").modal('show');
        });
        $("#edit-edition-btn").click(function(){
            $(".edit-edition-modal").modal('show');
        });
        $("#delete-edition-btn").click(function(){
            $(".delete-edition-modal").modal('show');
        });
        
    });


});


