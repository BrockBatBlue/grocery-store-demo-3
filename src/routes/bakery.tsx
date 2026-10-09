import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bakery')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bakery"!</div>
}
