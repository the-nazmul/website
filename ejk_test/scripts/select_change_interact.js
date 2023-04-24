// document.querySelector('h1');
// document.getElementById('subhed-1');
// document.querySelector('#subhed-1');
// document.querySelector('p');
// document.querySelector('p:nth-of-type(2)');





// document.querySelector('h1').innerHTML = 'Changing the headline for fun';




// Learn how to use console.log();

// console.log(document.getElementById('alrt'));
// console.log(document.getElementById('alert'));
// console.log(document.getElementById('alert').clientWidth);
// console.log(document.getElementById('alert').clientHeight);






// Use an event listener to make something happen when you
// interact with an element. Below, we “listen” for a “click”
// on an element with an ID of “alert”:

document.getElementById('alert').addEventListener('click', function(event) {
	alert('Hello!');
});

document.getElementById('alert').innerHTML='Click this paragraph to get an alert'


// document.getElementById('alert').innerHTML = 'Click this paragraph to get an alert.';