import Department03 from '#/components/shadcn-space/blocks/portfolio-01/department-03'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meat-fish')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department03 />
    </div>
  )
}
