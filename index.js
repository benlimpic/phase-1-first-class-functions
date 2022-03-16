// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }

// function liftWeights() {
//   console.log("Pump iron");
// }

// function swimFortyLaps() {
//   console.log("Swim 40 laps");
// }

// function goFishing() {
//   console.log("Holy cow we got a MaRLinnnNnNn!!");
// }

// function eatFortyPizzas() {
//   console.log("Nom Nom Nom Imma big ol' boy ~gurrrrrrp~");
// }

// function Monday() {
//   runFiveMiles();
//   liftWeights();
// }

// //********************************************

// //this is IMPORTANT!

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }


// //********************************************


// function Monday() {
//   exerciseRoutine(liftWeights);
// }

// function Wednesday() {
//   exerciseRoutine(goFishing);
// }

// function Saturday() {
//   exerciseRoutine(eatFortyPizzas);
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

// Monday();
// Wednesday();
// Saturday();

// exerciseRoutine(function () {
//   console.log("Touch those damn toes big boi!");
// });

// exerciseRoutine(() => {
//     console.log("You can run but you toes cant hide!!! stretch boi!");
// });


// exerciseRoutine(() => console.log("God that burns!"))


// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//         breakfast = "kale smoothie";
//     } else {
//         breakfast = "granola";
//     }
//     exerciseRoutine(exercise);
//     return function () {
//         console.log(`Nom Nom Nom, this ${breakfast} is delicious!`);
//     };
// }
// morningRoutine();

// const afterExercise = morningRoutine(liftWeights);

// afterExercise;

// afterExercise();


// recieves a function and then calls it
const hereIsAFunction = () => console.log("May I take your hat sir?");

function receivesAFunction(hereIsAFunction) {
    hereIsAFunction();
}
receivesAFunction(hereIsAFunction);

// returns a named function

const returnsANamedFunction = function squidward(param1 = "Spongebob", param2 = "Patrick") {
    console.log(`Hey ${param1}... Yes, ${param2}?`);
    return squidward;
}

returnsANamedFunction();

// returns an anonymous function

function returnsAnAnonymousFunction() {
    return function() {
        console.log("My Leg!!");
    }
}

returnsAnAnonymousFunction()();