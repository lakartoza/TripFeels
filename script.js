//GETTERS AND SETTERS

//return or set a dynamically computed value 
// without explicitly setting it on the object 

// var obj = {
// 	firstName: 'Mike', 
// 	lastName: 'Adams',
// 	get fullName(){
// 		return this.firstName + ' ' + this.lastName; 
// 		},
// 		set fullName(value) {
// 			var fullNameArray = value.split(' ');
// 			this.firstname = fullNameArray [0]; 
// 			this.lastName = fullNameArray [1];
// 		}
// 	}

// console.log(obj.fullName);

// obj.fullName = "Scott Moss"; 

// console.log(obj.firstName);
// console.log(obj.lastName);
// console.log(obj.firstName);

//OBJECT.KEYS 
// var obj = {
// 	"one": 1, 
// 	"two": 2, 
// 	"four": 4, 
// }

// var keys = Object.keys(obj);

// var timesThree = keys.map(function(key){
// 	return obj[key]*3; 
// })

// console.log(timesThree);

// $(document).ready(function(){

//     $("#show").click(function(){
//         $("p").show();

//     });



// });



$('#showEmail').on('click','.tripName',function() {
        
         var t = $(this).text();
         $(this).text('').append($('<input />',{'value' : t}));
         $('input').focus();
         
       
});

// $('#hoverelement').hover(function(){
// 	$main_text=$(this).text();
// 	$(this).text("Create New Plan");
// },function(){
// 	$(this).text($main_text);
// 	});

var intTextBox = 1; 

function addElement() {
    intTextBox++;
    var objNewDiv = document.createElement('div');
    objNewDiv.setAttribute('id', 'div_' + intTextBox);
     objNewDiv.innerHTML = ' ' + ' <p style = "color: #ff5d55;" >' + ' <input type="email" id="email" name="email" required placeholder="Enter a valid email address"> </p>';
    document.getElementById('content').appendChild(objNewDiv);
}


function removeElement() {
    if(0 < intTextBox) {
        document.getElementById('content').removeChild(document.getElementById('div_' + intTextBox));
        intTextBox--;
    } else {
        alert("No textbox to remove");
    }
}


