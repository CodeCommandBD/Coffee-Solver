// প্রশ্ন: কিভাবে একটি সংখ্যার অ্যারে (Array) থেকে জোড় (Even) এবং বেজোড় (Odd) সংখ্যাগুলোকে আলাদা করা যায়?

const numbers = [12, 5, 8, 13, 20, 21, 30];

const evenNumber = [];
const oddNumber = [];


function separateNumbers(arr) {

    arr.forEach(function(value){
        if(value % 2 == 0 ){
            evenNumber.push(value);
            
        }else{
             oddNumber.push(value); 
        }
    })

    console.log(evenNumber);
    console.log(oddNumber);
    
    
}

separateNumbers(numbers);