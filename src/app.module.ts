import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from './config/env.validation';
import { appConfig } from './config/app.config';
import { mikroOrmConfig } from './config/mikro-orm.config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { jwtConfig } from './config/jwt.config';
import { DocumentsModule } from './modules/documents/documents.module';
import { EmbeddingsModule } from './modules/embeddings/embeddings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationSchema,
      load: [appConfig],
      validationOptions: {
        libraryOptions: {
          abortEarly: true,
        },
      },
    }),
    JwtModule.registerAsync(jwtConfig),
    MikroOrmModule.forRootAsync(mikroOrmConfig),
    DocumentsModule,
    EmbeddingsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
