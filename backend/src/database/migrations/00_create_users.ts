import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('bio').notNullable();
        table.string('instagram').notNullable();
        table.string('web').notNullable();
        table.string('password').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}