const db = require('../db');

const handles = {
    games: {
        addNewGame: async ({ name, genre, platform, website }) => {
            const row = await db.table('games').insert({
                name,
                genre,
                platform,
                website
            });
            return row;
        }
    }
};
module.exports = handles;
