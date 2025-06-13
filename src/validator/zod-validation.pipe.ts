import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodSchema<any>) { }

    transform(value: any) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return this.schema.parse(value);
        } catch (e) {
            if (e instanceof ZodError) {
                throw new BadRequestException(e.errors);
            }
            throw e;
        }
    }
}
