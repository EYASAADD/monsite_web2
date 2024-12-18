
    function corrigerQuizz(event) {
        event.preventDefault(); // Empêche le rechargement de la page
    
        const reponsesCorrectes = {
            q1: "La Vie en rose", 
            q2: "Edith Piaf",
            q3: "Ne me quitte pas", 
            q4: "Johnny Hallyday", 
            q5: "Céline Dion", 
            q6: "Tourner dans le vide", 
            q7: "Les Lacs du Connemara", 
            q8: "Daniel Lavoie",
            q9: "Je t'aime... moi non plus", 
            q10: "Coeur de Pirate"
        };
    
        let score = 0;
        let reponses = "";
    
        const form = document.getElementById("quizForm");
    
        for (const question in reponsesCorrectes) {
            const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === reponsesCorrectes[question]) {
                    score++;
                }
            }
            reponses += `Question ${question}: La bonne réponse est "${reponsesCorrectes[question]}"\n`;
        }
    
        alert(`Votre score : ${score} / 10\n\n${reponses}`);
    }
    