function showComparisonScores() {
    var totalVotes = Number(document.getElementById("votes").value)
    var candidate = Number(document.getElementById("candidates").value)
    var str = ""
    var scoreFixed
    // For each candidates
    for (var i = 1; i<=candidate; i++){
        // Calculate comparison score for candidate
        score = totalVotes/i
        scoreFixed = score.toFixed(0)
        str += i+ ". candidate: " + scoreFixed + "<br />"
    }

    // Show scores
document.getElementById("answer").innerHTML = str
}