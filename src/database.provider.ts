import { TypeOrmModule } from "@nestjs/typeorm"
export const databasePorvider = [
  TypeOrmModule.forRoot({
    password: "admin",
    host: "localhost",
    username: "postgres",
    database: "nestjs",
    port: 5432,
    type: "postgres",
    entities: [__dirname+'/**/*.entities{.ts,.js}'],
    synchronize:true,
  })
]
