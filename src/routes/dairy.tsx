import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dairy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dairy"!</div>
}
