import Departments from '#/components/shadcn-space/blocks/portfolio-01/all-departments'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/departments')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Departments />
    </div>
  )
}
