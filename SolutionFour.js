//sum of array
const nums = [5,5,5,2,3];

sumOfArray(nums);
function sumOfArray(arr)
{
    let sum = 0;
    for(let i =0; i < nums.length;i++)
    {
        sum += arr[i];
    }
    console.log(sum);
}
