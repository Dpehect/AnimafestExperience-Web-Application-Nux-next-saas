import { Controller, Get, Post, Body, Query, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { InternshipService } from './internship.service';
import { CreateInternshipDto, InternshipQueryDto } from './dto/internship.dto';

@Controller('internships')
export class InternshipController {
  constructor(private readonly internshipService: InternshipService) {}

  /**
   * @description Retrieves a list of internships with robust filtering.
   * Demonstrates the "Pure JSON" approach with standardized metadata.
   */
  @Get()
  @UsePipes(new ZodValidationPipe(InternshipQueryDto))
  async findAll(@Query() query: InternshipQueryDto) {
    const data = await this.internshipService.findAll(query);
    
    return {
      success: true,
      data: data.items,
      meta: {
        total: data.total, // Fixed: total count from enterprise service
        query: query,
        serverTime: new Date().toISOString()
      }
    };
  }

  /**
   * @description Securely creates an internship posting.
   */
  @Post()
  @UsePipes(new ZodValidationPipe(CreateInternshipDto))
  async create(@Body() createDto: CreateInternshipDto) {
    const result = await this.internshipService.create(createDto);
    
    return {
      success: true,
      message: 'Internship posting created successfully.',
      data: result
    };
  }
}
