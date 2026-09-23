import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DocumentChunk } from './entity/document-chunk.entity';
import { Document } from './entity/document.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Document, DocumentChunk])],
  providers: [DocumentsService],
})
export class DocumentsModule {}
