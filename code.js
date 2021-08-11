let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let largestNumber = 0;
// Your Code Here!

//Roll 6 sided Die
function rollDie(){
    
   return (Math.floor(Math.random() * 6) +1);
}

//Adds the sum of two die roll
function addDie(){

    let sum = rollDie() + rollDie();
    return sum;  

}

function findLargest(arr){

    for(let index = 0; index < arr.length; index++){

        if(arr[index] > largestNumber)
                largestNumber = arr[index];
    }
    console.log(largestNumber);
}

//Deletes all children in parent tag.
function deleteAllChildren(parentTag){
    while(parentTag.firstChild){
        parentTag.removeChild(parentTag.firstChild);
    }
}

//Draws Graph
function renderGraph(){


    //Gets the graph tag and delete all the previous child divs from 
    let graph = document.getElementById("graph");
    deleteAllChildren(graph);
    findLargest(results);

    for(let index = 0; index < results.length; index++){

        
        //Display every div except the first two since they are null
        if(results[index] !== null)
        {
          /*   //Creates 3 divs. A gray box which holds the bar graph and the text. 
            The bar graph for amount of times the dice was rolled 
            A text div to hold the text displaying the number of times it was rolled*/

            let graybox = document.createElement("div");
            let dieDiv = document.createElement("div");
            let textdiv = document.createTextNode("You rolled " + index + ". " + "\n" + results[index] + " times!");

            //Creates the size of each div in proportion to the largest number in results;
            let barsize = (results[index]/largestNumber) * 300;
            
            
            dieDiv.className = "dieDiv barDiv";
            graybox.className = "dieDiv";
            //The extra 50 px is to compensate for the text.

            graybox.style.height = 350 + "px";
            dieDiv.style.height = barsize + "px";

            graybox.append(dieDiv);
            graybox.append(textdiv);
            
            graph.append(graybox);
        }
        

    }
}

let button = document.getElementById('roll');
button.addEventListener('click',function(event){

    let resultag = document.getElementById("result");
    let sum = addDie();
    results[sum] +=1;

    resultag.innerText = "You rolled a " + sum +"!";
    renderGraph();
    console.log(results);
});

let button2 = document.getElementById('1000roll');
button2.addEventListener('click',function(event){

    let count = 0;

    while(count <1000){

        let resultag = document.getElementById("result");
        let sum = addDie();
        results[sum] +=1;
        count++;
    }

    console.log(count);
    renderGraph();

    
})






