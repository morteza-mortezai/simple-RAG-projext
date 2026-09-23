import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DocumentChunk } from './entity/document-chunk.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Document, DocumentChunk])],
  providers: [DocumentsService],
})
export class DocumentsModule {}
