$(document).ready(function () {

    $(".parent-div").on("click", "button", function () {

        var text = document.getElementById("text").value;

      //  alert(text);

        new_line = $(this).attr('class');

        //alert(new_line);

        if (new_line == 'parent-button') {

            $('.parent-ul').append('<li><a href="#">'+text+'</a><button class="child-button">+</button></li>');

        }

        else if (new_line == 'child-button') {

            $(this).parent().append('<ul><li class="child-ul"><a href="#">'+text+'</a><button class="child-button">+</button></li></ul>');

        }

    });

});