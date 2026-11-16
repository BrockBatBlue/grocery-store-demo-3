import { createFileRoute } from '@tanstack/react-router'
import { Department5 } from '#/components/shadcn-space/blocks/portfolio-01/fifth-department'

export const Route = createFileRoute('/dairy')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department5 />
    </div>
  )
}
