import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meat-fish')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/meat-fish"!</div>
}
