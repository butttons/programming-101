const db = require('./db');
(async () => {
    try {
        await db.schema.dropTableIfExists('users');
        await db.schema.dropTableIfExists('games');
        await db.schema.dropTableIfExists('gamelist');

        await db.schema.createTable('users', (table) => {
            table.increments();
            table.string('name');
            table.string('reddit_name');
            table.string('reddit_token');
            table.timestamps(true, true);
        });

        await db.schema.createTable('games', (table) => {
            table.increments();
            table.string('name');
            table.string('genre');
            table.string('platform');
            table.string('website');
            table.timestamps(true, true);
        });

        await db.schema.createTable('gamelist', (table) => {
            table.increments();
            table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('cascade');
            table.integer('game_id').unsigned().notNullable().references('id').inTable('games').onDelete('cascade');
            table.string('game_handle');
            table.time('time_start');
            table.time('time_end');
            table.string('day_name');
        });
    } catch (err) {
        console.error('Error creating database schema', err);
    }
})();
