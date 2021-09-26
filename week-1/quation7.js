


arr=[1,2,4,5]
 n = arr.length /arr[0];
miss = getMissingNo(arr,n);
console.log(miss) 

 
 
function getMissingNo( a,n)
{
 
     total = (n + 1) * (n + 2) / 2;
    for ( i = 0; i < n; i++)
        total -= a[i];
    return total;
}
 


    