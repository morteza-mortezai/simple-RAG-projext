import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { EmbeddingsService } from '../embeddings/embeddings.service';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: EntityRepository<Document>,

    private readonly embeddingsService: EmbeddingsService,
  ) {}

  async create() {
    // const document = this.documentRepository.create({
    //   title: 'Company Policy',
    //   content: '...'

    // });

    // // we'll add chunks here

    // await this.documentRepository.getEntityManager().persistAndFlush(document);

    // return document;
  }
}
