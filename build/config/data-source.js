"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("@nestjs/typeorm");
var dotenv = require("dotenv");
dotenv.config();
exports.AppDataSource = typeorm_1.TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map