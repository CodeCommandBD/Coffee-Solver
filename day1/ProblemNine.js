// প্রশ্ন ৯: কিভাবে একটি স্ট্রিং (String) কে সম্পূর্ণ উল্টে (Reverse) দেওয়া যায়?
// Question 9: How to reverse a string?

function StringReverse(value){
    let reverseString =  value.split('').reverse().join('')
    console.log(reverseString);
}

StringReverse('shanto')