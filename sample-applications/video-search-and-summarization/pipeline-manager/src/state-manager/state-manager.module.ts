// Copyright (C) 2025 Intel Corporation
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import { StateService } from './services/state.service';
import { StatesController } from './states.controller';
import { PipelineService } from './services/pipeline.service';
import { DatastoreModule } from 'src/datastore/datastore.module';
import { EvamModule } from 'src/evam/evam.module';
import { LanguageModelModule } from 'src/language-model/language-model.module';
import { ChunkingService } from './queues/chunking.service';
import { SummaryService } from './queues/summary.service';
import { UiService } from './services/ui.service';
import { PipelineController } from './pipeline.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntity } from './models/state.entity';
import { StateDbService } from './services/state-db.service';
import { AudioQueueService } from './queues/audio-queue.service';
import { AudioModule } from 'src/audio/audio.module';

@Module({
  providers: [
    StateService,
    PipelineService,
    ChunkingService,
    SummaryService,
    UiService,
    StateDbService,
    AudioQueueService,
  ],
  controllers: [StatesController, PipelineController],
  exports: [StateService, UiService, AudioQueueService],
  imports: [
    DatastoreModule,
    EvamModule,
    AudioModule,
    LanguageModelModule,
    TypeOrmModule.forFeature([StateEntity]),
  ],
})
export class StateManagerModule {}
