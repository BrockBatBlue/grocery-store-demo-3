import { createFileRoute } from '@tanstack/react-router'
import { Department2 } from '#/components/shadcn-space/blocks/portfolio-01/second-department'

export const Route = createFileRoute('/frozen-foods')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department2 />
    </div>
  )
}
