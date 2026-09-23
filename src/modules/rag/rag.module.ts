import { Module } from '@nestjs/common';
import { RagService } from './rag.service';
import { ChunkingService } from './chunking.service';

@Module({
  controllers: [],
  providers: [RagService, ChunkingService],
  exports: [RagService, ChunkingService],
})
export class RagModule {}
