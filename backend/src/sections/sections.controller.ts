import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateSectionDto } from './dto/create-section.dto';
import { Request } from 'express';
import { Section as SectionEntity } from '../_gen/prisma-class/section';
import { UpdateSectionDto } from './dto/update-section.dto';

@ApiTags('섹션')
@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post('courses/:courseId/sections')
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '새 섹션 설정' })
  @ApiParam({ name: 'courseId', description: '코스 ID' })
  @ApiBody({ type: CreateSectionDto })
  @ApiOkResponse({
    description: '섹션 생성 성공',
    type: SectionEntity,
  })
  create(
    @Param('courseId') courseId: string,
    @Body() createSectionDto: CreateSectionDto,
    @Req() req: Request,
  ) {
    return this.sectionsService.create(
      courseId,
      createSectionDto,
      (req.user as Express.User).sub,
    );
  }

  @Get(':sectionId')
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '섹션 상세 정보' })
  @ApiParam({ name: 'sectionId', description: '섹션 ID' })
  @ApiOkResponse({ description: '섹션 상세 정보', type: SectionEntity })
  findOne(@Param('sectionId') sectionId: string, @Req() req: Request) {
    return this.sectionsService.findOne(
      sectionId,
      (req.user as Express.User).sub,
    );
  }

  @Patch(':sectionId')
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '섹션 업데이트' })
  @ApiParam({ name: 'sectionId', description: '섹션 ID' })
  @ApiBody({ type: UpdateSectionDto })
  @ApiOkResponse({ description: '섹션 업데이트 성공', type: SectionEntity })
  update(
    @Param('sectionId') sectionId: string,
    @Body() updateSessionDto: UpdateSectionDto,
    @Req() req: Request,
  ) {
    return this.sectionsService.update(
      sectionId,
      updateSessionDto,
      (req.user as Express.User).sub,
    );
  }

  @Delete(':sectionId')
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '섹션 삭제' })
  @ApiParam({ name: 'sectionId', description: '섹션 ID' })
  @ApiOkResponse({ description: '삭제 성공', type: SectionEntity })
  delete(@Param('sectionId') sectionId: string, @Req() req: Request) {
    return this.sectionsService.delete(
      sectionId,
      (req.user as Express.User).sub,
    );
  }
}
