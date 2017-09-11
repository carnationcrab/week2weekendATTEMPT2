console.log('js');
var peopleArray = [];

function onReady() {
    console.log('ready')
    $('#addPersonButton').on('click', addPersonClicked);
}

function addPersonClicked() {
    var onePerson = {
        name: $('#name').val(),
        fact: $('#fact').val(),
    };

    

    $.ajax({
         type: 'POST',
         url: '/people',
         data: onePerson,
         success: function (res) {
            console.log(res);
            domAppend();
        }
    });
    //reset values

    $('#name').val("");
    $('#fact').val("");
    console.log('current list of people ->', peopleArray);
}

 function domAppend() {
     $.ajax({
         type: 'GET',
         url: '/people',
         success: function(res) {
             $('#peopleList').empty();
             peopleArray.push(res);
             console.log('people resp ->', res);
             for (var i = 0; i < res.length; i++) {
                 $('#peopleList').append('<p>'+ res[i].name + ':' + ' ' + res[i].fact +'</p>');
             }
         }
     });
 }

// function domAppendCarousel() {
//     $.ajax({
//         type: 'GET',
//         url: '/people',
//         success: function(res) {
//             $('#peopleList').empty();
//             peopleArray.push(res);
//             console.log('people resp ->', res);
//             $('#peopleList').append(peopleArray[1]);
//         }
//     });
// }

// function next() {
//     $('#peopleList').empty();
//     $('#peopleList').append(peopleArray[i + 1])
// }
$(document).ready(onReady);
