//Question 1
var Is_Array = function(a){
    console.log(Array.isArray(a));
  }
  
  console.log(Is_Array('w3resource'));
  console.log(Is_Array([1, 2, 4, 0]));
  
  //Question 2
  /*function Array_Clone(a){
  return a.slice(0);
  }*/
  
  function Array_Clone(a){
    return a.map((x)=>x);
  }
  
  console.log(Array_Clone([1, 2, 4, 0]));
  console.log(Array_Clone([1, 2, [4, 0]]));
  //Question 3
  
  /*function first(a, n){
   if (a == null) return void 0;
   if(n == null) return a[0];
  if (n < 0)
        return [];
      return a.slice(0, n);
  }*/
  
  function first(a, n){
   var result = [];
   if(n == null) return a[0];
   for (var i = 0; i < n; i++) {
     result.push(a[i]);
   } 
   return result;
  }
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));
  
  //Question 4
  function ToString(a,s){
   if(s === ',') return a.join(',');
   if(s === '+') return a.join('+');
   if (s === '')return a.join('.');
  }
  var myColor = ["Red", "Green", "White", "Black"];
  console.log(ToString(myColor,'+'));
  console.log(ToString(myColor,','));
  console.log(ToString(myColor,''));
  
  //Question 5
  var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  var mf = 1;
  var m = 0;
  var item;
  
  for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) m++;
      if (mf < m) {
        mf = m;
        item = arr1[i];
      }
    }
  
    m = 0;
  }
  
  console.log(item + " ( " + mf + " times ) ");


