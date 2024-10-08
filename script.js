document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const toggleButton = document.getElementById("toggle");

    let show = false; // Variable pour suivre l'état

    toggleButton.addEventListener("click", function() {
        show = !show; // Inverse l'état "show" à chaque clic

        // Ajoute ou retire la classe "apparent"
        if (show) {
            menu.classList.add("apparent");
        } else {
            menu.classList.remove("apparent");
        }
    });
});
// Sélectionner le bouton et le lien
const downloadBtn = document.getElementById('downloadBtn');
const pdfUrl = 'fichiers/CV MERN STACK.pdf'; // Remplace ceci par le chemin correct

// Ajouter un événement de clic au bouton
downloadBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV MERN STACK.pdf'; // Nom du fichier lors du téléchargement

    // Ajouter le lien à la page
    document.body.appendChild(link);
    
    // Simuler le clic sur le lien
    link.click();

    // Retirer le lien de la page
    document.body.removeChild(link);

});



// contact //
function validerFormulaire() {
     // Efface les messages d'erreur existants
     document.getElementById("errorNom").innerText ="";
     document.getElementById("errorEmail").innerText ="";
     document.getElementById("errorMessage").innerText ="";
    // Récupération des champs du formulaire
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var valide = true;

    // Vérification des champs obligatoires
    if (nom ===" ") {
        document.getElementById("errorNom").innerText = "Le champ Nom est obligatoire.";
        valide = false;
    }
    if (email ===" ") {
        document.getElementById("errorEmail").innerText = "Le champ Email est obligatoire.";
        valide = false;
    } else if (!validateEmail(email)) {
        document.getElementById("errorEmail").innerText = "L'email est invalide.";
        valide = false;
    }
    if (message ===" ") {
        document.getElementById("errorMessage").innerText = "Le champ Message est obligatoire.";
        valide = false;
    }

     // Si le formulaire n'est pas valide, empêche la soumission
     return valide;
    
   
}

// Fonction pour valider l'adresse e-mail avec une expression régulière
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}