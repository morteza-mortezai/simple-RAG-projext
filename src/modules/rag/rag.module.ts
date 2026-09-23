import { Module } from '@nestjs/common';
import { RagService } from './rag.service';
import { RagController } from './rag.controller';
import { ChunkingService } from './chunking.service';

@Module({
  controllers: [RagController],
  providers: [RagService, ChunkingService],
  exports: [RagService, ChunkingService],
})
export class RagModule {}
