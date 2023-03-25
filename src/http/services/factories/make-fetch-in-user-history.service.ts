import { PrismaCheckInsRepository } from '~/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsHistoryService } from '../fetch-user-check-ins-history.service'

export function makeFetchUserCheckInsHistoryService() {
  const repository = new PrismaCheckInsRepository()
  const service = new FetchUserCheckInsHistoryService(repository)

  return service
}
