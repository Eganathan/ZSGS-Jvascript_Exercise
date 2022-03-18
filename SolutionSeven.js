const nums = [1,4,3,-2,5,-6];
filterNegatives(nums);

//filter negative numbers
function filterNegatives(arr)
{
    for(let i = 0; i <= arr.length; i++)
    {
        if(arr[i] > 0)
        {
            console.log(arr[i]);
        }
    }
}
