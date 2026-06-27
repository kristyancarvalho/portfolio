import data from '@/entities/version/versions.json'
import type { PortfolioVersion } from '@/entities/version/model'

export const portfolioVersions: PortfolioVersion[] = data

export const currentPortfolioVersion =
  portfolioVersions.find((version) => version.current) ?? portfolioVersions[0]
