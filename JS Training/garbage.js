// // A FAIRE A CHAQUE FOIS
// SERT A EVITER LES CONFLITS
(function () {
    var PremiereVariable = "Hello world";
    // alert(PremiereVariable);

    // DEUXIEME
    // var Cake=prompt("Voulez vous du gateau?");
    // console.log(Cake)
    // if(Cake=="oui") {
    //     alert( "Eh bah non ")
    // } else {
    //     alert("Eh ben si")
    // }
// EXO 3
//     function ASV() {
//         var Age = prompt("Age?");
//         console.log(Age)
//         var Sexe = prompt("Seks?");
//         console.log(Sexe)
//         var Ville = prompt("Ville?");
//         console.log(Ville)
//         var Confirmation = confirm("C'est les bonnes réponses enculé?\n" + Age + "\n" + Sexe + "\n" + Ville);
//         if (Confirmation == true) {
//             alert("Bravo bg")
//         } else {
//             ASV()
//         }
//     }

// ASV()

function performOperation ( operation, opOne, opTwo ) {
    console.log(operation, opOne, opTwo)
    switch ( operation ) {
        case 'addition': return alert( opOne + opTwo );
            break;
        case 'substraction': return alert( opOne - opTwo );
            break;
        case 'multiplication': return alert( opOne * opTwo );
            break;
        case 'division': return alert( opOne / opTwo );
            break;
        default: return 0;
    }
}


function checkNumbers ( operation ) {
    console.log(operation)
    var opOne = Number( document.getElementById( "op-one" ).value );
    var opTwo = Number( document.getElementById( "op-two" ).value );
    performOperation(operation, opOne, opTwo)
}

function isInteger ( number ) {}

Array.from( document.querySelectorAll( "button" ) ).forEach( function( $btn ) {
    $btn.addEventListener( "click", function() {
        console.log("coucou", $btn.id)
        checkNumbers( $btn.id );
    } );
} );


})();