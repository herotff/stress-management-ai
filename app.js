document.getElementById("stressForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get user input
    let response1 = document.getElementById("q1").value.toLowerCase();
    let response2 = document.getElementById("q2").value.toLowerCase();
    let response3 = document.getElementById("q3").value.toLowerCase();

    // Simple AI-based stress analysis
    let stressScore = 0;
    
    // Check for stress indicators
    let stressKeywords = ["stressed", "overwhelmed", "anxious", "tired", "sad", "depressed", "angry"];
    let positiveKeywords = ["happy", "relaxed", "calm", "good", "okay", "fine"];

    stressKeywords.forEach(word => {
        if (response1.includes(word) || response2.includes(word) || response3.includes(word)) {
            stressScore += 2;
        }
    });

    positiveKeywords.forEach(word => {
        if (response1.includes(word) || response2.includes(word) || response3.includes(word)) {
            stressScore -= 1;
        }
    });

    // Determine stress level
    let stressLevel = "";
    let suggestion = "";

    if (stressScore >= 4) {
        stressLevel = "High";
        suggestion = "It looks like you're experiencing high stress. Try deep breathing exercises, meditation, or talking to a friend or professional.";
    } else if (stressScore >= 2) {
        stressLevel = "Moderate";
        suggestion = "You might be feeling a bit stressed. Consider taking a short break, going for a walk, or listening to music.";
    } else {
        stressLevel = "Low";
        suggestion = "You're in a good state! Keep maintaining a balanced lifestyle and practicing self-care.";
    }

    // Display results
    document.getElementById("stressLevel").textContent = stressLevel;
    document.getElementById("suggestion").textContent = suggestion;
});
