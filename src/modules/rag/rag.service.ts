import { Injectable } from '@nestjs/common';

@Injectable()
export class RagService {
  findAll() {
    return `This action returns all rag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rag`;
  }
}
