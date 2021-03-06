import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    host: 'localhost',
    database: 'beaute_de_lorient', 
    schema: 'beaute_de_lorient',
    synchronize: true,
    entities: ["dist/**/entities/*.entity{.ts,.js}"]
};

// export const config: TypeOrmModuleOptions = {
//     type: 'postgres',
//     url: process.env.DATABASE_URL,
//     schema: 'beaute_de_lorient',
//     synchronize: true,
//     entities: ["dist/**/entities/*.entity{.ts,.js}"],
//     ssl: {
//         rejectUnauthorized: false
//     }
// };