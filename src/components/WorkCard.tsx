import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from './Text'
import { Grid } from './Grid'
import { Card } from './Card'
import { Container } from './Container'
import { Section } from './Section'

interface WorkItem {
  id: string
  title: string
  description: string
  tech: string[]
  imageUrl?: string
}

interface WorkCardProps {
  work: WorkItem
}

export const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <Card className="overflow-hidden group">
      {work.imageUrl && (
        <div className="aspect-video bg-surface-hover overflow-hidden">
          <img
            src={work.imageUrl}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <Text variant="h5" weight="semibold" className="mb-2">
          {work.title}
        </Text>
        <Text variant="body" color="muted" className="mb-4">
          {work.description}
        </Text>
        <div className="flex flex-wrap gap-2 mb-4">
          {work.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-surface-hover rounded text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <Link to={`/work/${work.id}`} className="text-accent hover:underline font-medium">
          View Case Study →
        </Link>
      </div>
    </Card>
  )
}

interface WorkGridProps {
  works: WorkItem[]
}

export const WorkGrid: React.FC<WorkGridProps> = ({ works }) => {
  return (
    <Section>
      <Container>
        <Text variant="h2" weight="bold" className="mb-8 text-center">
          Our Work
        </Text>
        <Grid cols={1} md={2} lg={3} gap="lg">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}