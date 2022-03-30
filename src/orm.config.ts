import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT),
    host: process.env.PROSTGRES_HOST,
    database: process.env.POSTGRES_DB, 
    schema: 'beaute_de_lorient',
    synchronize: true,
    entities: ["dist/**/entities/*.entity{.ts,.js}"]
};
