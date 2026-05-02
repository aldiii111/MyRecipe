import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

interface Layout {
    navContent: React.ReactNode
    mainContent: React.ReactNode
}

export function ResizableVertical({ navContent, mainContent }: Layout) {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="min-h-screen w-full"
    >
      <ResizablePanel defaultSize="8%">
        {navContent}
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="92%">
        {mainContent}
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
