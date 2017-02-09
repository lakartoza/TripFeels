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

$(document).ready(function(){

    $("#show").click(function(){
        $("p").show();

    });



});

$('#showEmail').on('click','.tripName',function() {
        
         var t = $(this).text();
         $(this).text('').append($('<input />',{'value' : t}));
         $('input').focus();
         
       
});

