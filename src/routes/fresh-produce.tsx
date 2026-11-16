import { createFileRoute } from '@tanstack/react-router'
import { Department1 } from '#/components/shadcn-space/blocks/portfolio-01/first-department'

export const Route = createFileRoute('/fresh-produce')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department1 />
    </div>
  )
}
