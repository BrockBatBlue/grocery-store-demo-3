import { createFileRoute } from '@tanstack/react-router'
import { Department3 } from '#/components/shadcn-space/blocks/portfolio-01/third-department'

export const Route = createFileRoute('/meat-fish')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department3 />
    </div>
  )
}
