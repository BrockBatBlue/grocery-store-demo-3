import { createFileRoute } from '@tanstack/react-router'
import { Department4 } from '#/components/shadcn-space/blocks/portfolio-01/fourth-department'

export const Route = createFileRoute('/dry-goods')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department4 />
    </div>
  )
}
