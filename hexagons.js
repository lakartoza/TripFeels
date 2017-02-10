$('#showEmail').on('click','.tripName',function() {
        
         var text = $(this).text();
         $(this).text('').append($('<input />',{'value' : text}));
         $('input').focus();
         
       
});

// $('#hoverelement').hover(function(){
// 	$main_text=$(this).text();
// 	$(this).text("Create New Plan");
// },function(){
// 	$(this).text($main_text);
// 	});

function add_idea() {
    var ideaTitle = document.getElementById('form_title').value;
    $( "#app-holder" ).append( " <div> <span class='ideaTitle'>"+ ideaTitle +"</span> <img class='rss opacity' src='hexagon.png'> </div>" );
}


var hexagonIndex = 1; 

function addHexagon(ideaTitle) {
    $( "#app-holder" ).append( " <div> <span class='ideaTitle'>A great idea!</span> <img src='hexagon.png'> </div>" );
    
    
    hexagonIndex++;
    var objNewDiv = document.createElement('img');
    objNewDiv.setAttribute('class', 'hexagon');    
    objNewDiv.setAttribute('id', 'hex_' + hexagonIndex);
     objNewDiv.innerHTML = ' ' + ' <p style = "color: #ffffff;" > <b>' + ideaTitle +'</b></p>';
    document.getElementById('app-holder').appendChild(objNewDiv);
}


function removeHexagon() {
    if(0 < hexagonIndex) {
        document.getElementById('app-holder').removeChild(document.getElementById('hex_' + hexagonIndex));
        hexagonIndex--;
    } else {
        alert("No textbox to remove");
    }
}


