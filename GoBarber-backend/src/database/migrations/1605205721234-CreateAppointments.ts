import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1605205721234
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // o que vc quer que seja feito no banco de dados quando a migration for executada
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // método para desfazer o que foi feito no up (em caso de erro, por exemplo)

    await queryRunner.dropTable('appointments');
  }
}
