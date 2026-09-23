import { Injectable } from '@nestjs/common';

@Injectable()
export class ChunkingService {
  chunk(text: string, maxSentences = 1): string[] {
    const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
    const chunks: string[] = [];

    for (let i = 0; i < sentences.length; i += maxSentences) {
      chunks.push(
        sentences
          .slice(i, i + maxSentences)
          .map((s) => s.trim())
          .join(' '),
      );
    }

    return chunks;
  }
}
