SitePersoApp.controller('RecommendationController', function RecommendationController() {

    var data = {
        original: {
            cnieg: {
                text: 'Au cours de son stage, Arthur Rio a su montrer des capacités à différents niveaux&nbsp;:<ul class="dash"><li>prise en compte les exigences clients,</li><li>prise en compte des contraintes techniques exigées par le service informatique</li><li>aptitudes à assimiler et utiliser de nouvelles technologies</li><li>communication aisée&nbsp;: formulation du discours en fonction du public visé lors de démonstrations ou explications</li></ul>',
                author: 'Intégrateur à la CNIEG'
            },
            capgemini: {
                text: 'Arthur a produit une excellente prestation lors de son stage de fin d\'études chez Capgemini. Il a démontré une vraie maturité, avec des réflexes déjà professionnel, et a très bien su s\'adapter au contexte projet qui était le sien. Sa route professionnelle l\'a emmenée loin de France, cependant nous aurions apprécié le conserver dans l\'entreprise à la suite de son stage.',
                author: 'Chef de projet sénior chez Capgemini'
            },
            button: 'Translation'
        },
        translated: {
            cnieg: {
                text: 'During his internship, Arthur Rio has demonstrated capabilities at different levels:<ul class="dash"><li>taking into account customer requirements,</li><li>taking into account technical constraints required by the IT department</li><li>ability to assimilate and use new technologies</li><li>ease of communication: adaptation of the speech according to the audience during demonstrations or explanations</li></ul>',
                author: 'IT integrator at CNIEG'
            },
            capgemini: {
                text: 'Arthur has produced an excellent performance during his graduation internship at Capgemini. He showed a real maturity, with reflexes already professional, and knew very well how to fit onto the context of the project. His career path took him away from France, however we would have liked to keep him in the company after his internship.',
                author: 'Senior project manager at Capgemini'
            },
            button: 'Original version'
        }
    };

    this.cnieg = data.original.cnieg;
    this.cnieg.button = data.original.button;

    this.capgemini = data.original.capgemini;
    this.capgemini.button = data.original.button;

    this.changeVersion = function (element) {
        var newState = this[element].button === data.original.button ? 'translated' : 'original';
        this[element] = data[newState][element];
        this[element].button = data[newState].button;
    };
});
