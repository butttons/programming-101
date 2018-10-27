const handles = require('./index');

(async () => {
    const newGame = {
        name: 'Battlefield V',
        genre: 'shooter',
        platform: 'pc',
        website: 'http://www.battlefield.com/'
    };
    const out = await handles.games.addNewGame(newGame);
    console.log('output', out);
})();
