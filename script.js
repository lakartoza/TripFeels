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

var inputEmail = 1; 

function addElement() {
    inputEmail++;
    var objNewDiv = document.createElement('div');
    objNewDiv.setAttribute('id', 'div_' + inputEmail);
     objNewDiv.innerHTML = ' ' + ' <p style = "color: #ff5d55;" >' + ' <input type="email" id="email" name="email" required placeholder="Enter a valid email address"> </p>';
    document.getElementById('content').appendChild(objNewDiv);
}


function removeElement() {
    if(0 < inputEmail) {
        document.getElementById('content').removeChild(document.getElementById('div_' + inputEmail));
        inputEmail--;
    } else {
        alert("No textbox to remove");
    }
}


