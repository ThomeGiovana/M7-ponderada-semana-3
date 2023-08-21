import { ApiProperty } from '@nestjs/swagger';

export class CreateSongDto {
  name: string;
  authorId: number;
}
