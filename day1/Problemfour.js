// প্রশ্ন: কিভাবে নির্ণয় করা যায় যে একটি নির্দিষ্ট সাল লিপ ইয়ার (Leap year) কিনা?

function leapyear(year){
    if((year % 400 === 0 ) || (year % 4 === 0) && (year % 100 !== 0)){
        console.log(`${year} is a leapyear`);
    }else{
        console.log(`${year} is not a leapyear`);
    }
}

leapyear(2028)