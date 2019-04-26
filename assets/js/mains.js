$(document).ready(function(){
  // Fonction prévenant le rafraichissement de la page à cause du submit
  $("#formAverage").submit(function(e) {
    e.preventDefault();
  });
  $('#average').click(function()
  {
    // Réinitialisation des variables si plusieurs moyennes calculées avant rafraichissement
    // cela évite l'addition de toute les variables entre elles
    var total = 0;
    var nbNote = 0;
    var test = true;
    var average = 0;
    // Fonction faite sur toute les classes nbr, sera répété pour chaque champ de la classe nbr
    $('.nbr').each(function(){
      // On récupère la valeur du champ sur lequel on est
      var note = Number($(this).val());
      // S'il n'est pas valide le test pour la moyenne sera faux
      if ((note < 0) || (note > 20)) {
        test = false;
        // Sinon on additionne la note au total, total s'additionnera avec toute les notes entrées
      } else {
        total += note;
        nbNote++;
      }
    });
    // Calcule de la moyenne
    average = total / nbNote;
    // Si tout les nombres étaient valides
    if (test) {
      if (average >= 0 && average < 10) {
        alert("Moyenne : "+average+" Appréciation : En dessous de la moyenne !");
      }
      if (average >= 10 && average < 13) {
        alert("Moyenne : "+average+" Appréciation : Moyen");
      }
      if (average >= 13 && average < 16) {
        alert("Moyenne : "+average+" Appréciation : Bien");
      }
      if (average >= 16 && average < 20) {
        alert("Moyenne : "+average+" Appréciation : Trés bien");
      }
      if (average == 20) {
        alert("Moyenne : "+average+" Appréciation : Excellent !");
      }
      // Sinon le test est erroné (test = faux)
    } else {
      alert("Veuillez entrer un nombre entre 0 et 20 !");
    }
  });
});
