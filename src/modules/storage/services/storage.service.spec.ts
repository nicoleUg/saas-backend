import { Test, TestingModule } from '@nestjs/testing';
import { StorageService } from './storage.service';

jest.mock('firebase-admin/storage', () => ({
  getStorage: jest.fn().mockReturnValue({
    bucket: jest.fn().mockReturnValue({
      file: jest.fn(),
    }),
  }),
}));

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageService],
    }).compile();

    service = module.get<StorageService>(StorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
