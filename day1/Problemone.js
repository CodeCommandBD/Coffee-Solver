// প্রশ্ন: কিভাবে একটি নির্দিষ্ট সর্বনিম্ন এবং সর্বোচ্চ সংখ্যার মাঝে একটি র্যান্ডম (random) সংখ্যা তৈরি করা যায়?

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let result = randomNumber(1, 6)

console.log(result);
