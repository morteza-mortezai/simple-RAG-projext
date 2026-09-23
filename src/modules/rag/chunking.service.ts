import { Injectable } from '@nestjs/common';

@Injectable()
export class ChunkingService {
  chunk(text: string, chunkSize = 200): string[] {
    const words = text.split(/\s+/);

    const chunks: string[] = [];

    for (let i = 0; i < words.length; i += chunkSize) {
      chunks.push(words.slice(i, i + chunkSize).join(' '));
    }

    return chunks;
  }
}
