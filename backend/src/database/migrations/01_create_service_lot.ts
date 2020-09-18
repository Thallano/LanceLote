import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('services', table => {
        table.string('idService').primary();
        table.string('service').notNullable();
        table.decimal('cost').notNullable();
        table.string('modality').notNullable();
        table.string('description').notNullable();
        table.decimal('rate').notNullable();
        table.decimal('loted').notNullable();
        table.decimal('ratetotal').notNullable();
        table.string('whatsapp').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('services');
}
