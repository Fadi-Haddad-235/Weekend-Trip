window.onload=function(){
    const sort_btn=document.getElementById("sort-btn");
    const sort_result=document.getElementById("sort-result")
    sort_btn.addEventListener("click",sortNumbers);

    const pal_btn=document.getElementById("pal-btn");
    pal_btn.addEventListener("click",checkPalindrome);
    const pal_result= document.getElementById("pal-result");


    
    function sortNumbers(){
        unsorted_nums=[]
        var final_result=[]
        for (let i=1;i<=10;i++){
            n=prompt("enter number"+i);
            if(!isNaN(n)) unsorted_nums.push(n);
        }

        function mergeSort(input) {
            const {length:arraySize} = input;
            if (arraySize < 2) return input;
            const mid = Math.floor(arraySize/2);
            const sortedLeftArray = mergeSort(input.slice(0,mid));
            const sortedRightArray = mergeSort(input.slice(mid, arraySize));
            return merge(sortedLeftArray, sortedRightArray);
          }
          function merge (left, right){
            let result = []
            while(left.length && right.length){
              if(left[0]< right[0]){
                result.push(left.shift())
              }else{
                result.push(right.shift())
              }
            }
            final_result = [...result, ...left, ...right];
            return final_result;
          }
           
          sort_result.value=mergeSort(unsorted_nums);
    }
    function isPalindrome(str){
        if (str[0] === str[str.length - 1] && str.length > 1) {
            isPalindrome(str.substring(1, str.length -1)) 
            return true
          }
          else{
            return false
          }
        }

    function checkPalindrome(){
        const pal_input=document.getElementById("pal-input").value;
        if(isPalindrome(pal_input)){
            pal_result.value="String is Palindromic"
        }else{
            pal_result.value="String is NOT Palindromic"
        }
    }

}


