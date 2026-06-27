// প্রশ্ন: কিভাবে স্টুডেন্টদের রোল নাম্বারের একটি অ্যারে (Array) ছোট থেকে বড় ক্রমানুসারে (Ascending order) সাজানো (Sort) যায়?

let studentRoll = [5,2,4,10,3,7,8]

let rollSort = studentRoll.sort(function(a,b){
    return a - b
})

console.log(rollSort);
