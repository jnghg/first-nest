import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// npm i @nestjs/mapped-types dto를 변환시켜줌
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
