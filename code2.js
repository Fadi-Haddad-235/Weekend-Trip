window.onload=function(){
    const sort_btn=document.getElementById("sort-btn");
    const sort_result=document.getElementById("sort-result")
    sort_btn.addEventListener("click",sortNumbers);

    const pal_btn=document.getElementById("pal-btn");
    pal_btn.addEventListener("click",checkPalindrome);
    const pal_result= document.getElementById("pal-result");

    const prime_btn= document.getElementById("prime-btn");
    prime_btn.addEventListener("click",checkIfPrime);
    prime_output=document.getElementById("prime-output");
    reverse_num_btn=document.getElementById("reverse-num-btn");
    reverse_num_btn.addEventListener("click",reverseNumbersInString);
    // console.log(prime_output)
    
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
    
    function checkIfPrime(){
        const current_year = new Date().getFullYear()
        const prime_input = current_year - document.getElementById("prime-input").value;
        console.log(prime_input)
        let isPrime = true;
        if (prime_input == 1) {
            prime_output.innerHTML = "Undefined";
        }

        else if (prime_input > 1) {
            for (let i = 2; i < prime_input; i++) {
                if (prime_input % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            prime_output.innerHTML = `${prime_input} is Primary`;}
            else {
                prime_output.innerHTML = `${prime_input} is Not Primary`;
            }
        
    }
    function extractNumbers(str){
        numbers_array=[];
        str2=[]
        for(let i=0;i<str.length;i++){
            if(!isNaN(str[i]))
            {numbers_array.push(str[i])}
        }
        numbers_array.reverse();

        for (let j=0;j<str.length;j++){
            if (!isNaN(str[j])){
                str2.push(numbers_array[0])
                numbers_array.shift();
            }else{
                str2.push(str[j]);
            }
        }
        return str2.join("");
    }
    function reverseNumbersInString(){
        reverse_num_input=document.getElementById("reverse-num-input").value;
        reverse_num_output=document.getElementById("reverse-num-output");
        // console.log(reverse_num_input);
        const reversed_number=extractNumbers(reverse_num_input);
        console.log(reversed_number);
        reverse_num_output.innerHTML=reversed_number;
    }
}


