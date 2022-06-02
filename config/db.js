const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0p7.khnl7.mongodb.net/P7',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Attention, ne plus utiliser ces deux options car plus supporter d'après la doc -------------------
            // useCreateIndex: true, 
            // useFindAndModify: false,
            // --------------------------------------------------------------------------------------------------
        }
    )
    .then(() => console.log('connecté à MongoDB'))
    .catch((err) => console.log('Erreur connexion à mongoDB', err));