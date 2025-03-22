function calculateProfit() {
    // Read value of rounds from the input field
    var rounds = Number(document.getElementById("rounds").value)
    var win
    var bet = 1
    var betTotal = bet*rounds
    var profit
    let pips
    // Make a loop which is executed as many times as was set through the input field.
    for (var i = 1; i<=rounds; i++){
    // Let win counter cumulating during every round of the loop.

        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
        pips = Math.round( (Math.random( ) * 5) + 1 )
        // If the randomized pips is 1, 3 or 5,  no pay
        if (pips == 1 || pips == 3 || pips == 5) {
            win = 0
        }
         // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
        else if (pips == 2 || pips == 4) {
            win = 1.25*bet
        }
        // Otherwise the pips 6 returns the inserted bet 150%
        else {
            win = 1.5*bet
        }

    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
        win += win
    }
    // Write the answer on the page, to the answer div, as content of the div
    profit = betTotal - win
    document.getElementById("answer").innerHTML = "Bets were altogether " + betTotal + " euros" + "<br />" + "Wins were " + win  +" euros" + "<br />" +"Profit was "  + profit + " euros"
}

