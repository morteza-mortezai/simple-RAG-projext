// src/documents/entities/document-chunk.entity.ts

import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
} from '@mikro-orm/core';

import { Document } from './document.entity';

@Entity()
export class DocumentChunk {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Document)
  document!: Document;

  @Property({ type: 'text' })
  content!: string;

  @Property()
  chunkIndex!: number;

  // We'll add the embedding here shortly.
}