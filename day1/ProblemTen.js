// প্রশ্ন ১০: কিভাবে একটি অ্যারে থেকে ডুপ্লিকেট (Duplicate) আইটেমগুলো বাদ দিয়ে শুধুমাত্র ইউনিক (Unique) আইটেমগুলো রাখা যায়?
// Question 10: How to remove duplicate items from an array and keep only the unique items?

const DuplicateValue = ['shanto', 'kumar', 'poli', 'sohel','poli', 'kumar']

let duplicateBox = []

DuplicateValue.forEach(function(value){
    if( !duplicateBox.includes(value)){
        duplicateBox.push(value) 
    }
    else{
        console.log(`This value ${value} is Duplicate`);
    }
})

console.log('--------------------');
console.log('--------------------');
console.log(`${duplicateBox}`);