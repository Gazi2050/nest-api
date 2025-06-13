import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';

@Injectable()
export class ZodValidationPipe<T> implements PipeTransform {
    constructor(private schema: ZodSchema<T>) { }

    transform(value: unknown): T {
        try {
            return this.schema.parse(value);
        } catch (error: unknown) {
            if (error instanceof ZodError) {
                const formatted = error.errors.map(err => ({
                    path: err.path.join('.'),
                    message: err.message,
                }));
                throw new BadRequestException(formatted);
            }

            throw new BadRequestException('Validation failed');
        }
    }
}
