import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    schema: 'beaute_de_lorient',
    synchronize: true,
    entities: ["dist/**/entities/*.entity{.ts,.js}"],
    ssl: {
        rejectUnauthorized: false
    }
};
