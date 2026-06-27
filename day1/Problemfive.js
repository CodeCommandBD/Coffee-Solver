// প্রশ্ন: কিভাবে একটি স্ট্রিং (String) থেকে শুধুমাত্র ভাওয়েল (Vowel) গুলো খুঁজে বের করা যায়?

const vowel = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E' ,'I', 'O', 'U']

function findVowel(get){
    let count = 0;
    const getSingleChar = get.split('');

    getSingleChar.forEach(function(value){
        
        if(vowel.includes(value)){
            console.log(`${value} is a vowel`);
        }else{
            console.log(`${value}`);
            
        }
    })
}

findVowel('shanto')