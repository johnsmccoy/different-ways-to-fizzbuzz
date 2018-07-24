
//different ways to do fizzbuzz


//how to do fizzbuzz
var i, values = [, , 'fizz', , 'buzz', 'fizz', , , 'fizz', 'buzz', , 'fizz', , , 'fizzbuzz'];

for (i = 0; i < 100; console.log(values[i++ % 15] || i));



//shortest way to do it
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)

//another way to do fizzbuzz

for (var i=1; i<=101; i++)(function(i){
    var output = ""
  
    if (i % 5 == 0)
     output += "fizz"
  
    if (i % 7 == 0)
     output += "buzz"

     if (i % 35 == 0)
     output += "fizzbuzz"
  
    console.log(output || i)
  })(i)