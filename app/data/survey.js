$(document).ready(function() {
    
    // Gather survey data
    const gatherData = function() {
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#profilePicture").val().trim(),
            scores: []
        };

        $(".score").each(function() {
            newFriend.scores.push(parseInt($(this).val()));
        })
    };

    const postData = function() {
        $.post(`${window.location.origin}/api/friends`, newFriend, function(data) {
            $( ".result" ).html( data );
        })
    }

    // Events
    $(".btn").on("click", function() {
        gatherData();
        postData();
    });

});