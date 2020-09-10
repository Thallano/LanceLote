import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('loted', table => {
        table.increments('id').primary();
        table.integer('rated').notNullable();
        table.string('review').notNullable();

        table.integer('idService')
            .notNullable()
            .references('idService')
            .inTable('services')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.integer('review_name')
            .notNullable()
            .references('name')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('loted');
}
