$(document).ready(function(){


    var game = {
        'wins': 0,
        'losses': 0,
        'targetScore': 0,
        'userScore': 0,
        'crystalValues': [],
        'crystalImages': ['assets/images/diamond.png', 'assets/images/ruby.png', 'assets/images/sapphire.png', 'assets/images/topaz.png'],


        updateTarget: function () {
            this.targetScore = Math.floor(Math.random() * 50 + 75)
        },

        updateCrystalValues: function() {
            for (var x = 1; x <= this.crystalImages.length;){
                var newNumber =  Math.floor(Math.random() * 15 + 5);
                if (this.crystalValues.indexOf(newNumber) < 0){
                    this.crystalValues.push(newNumber);
                }
            }
        }

};
    game.updateTarget();

    game.updateCrystalValues();



    console.log(game.targetScore)
});