"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

/* -------------------------------------------------------------------------- */
/*                                   ROOT                                     */
/* -------------------------------------------------------------------------- */

function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />
}

function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return <DialogPrimitive.Trigger {...props} />
}

function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  return <DialogPrimitive.Close {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                   PORTAL                                   */
/* -------------------------------------------------------------------------- */

function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return <DialogPrimitive.Portal {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm",
        "data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                              CONTENT + SIZE                                */
/* -------------------------------------------------------------------------- */

type DialogSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full"

const sizeClasses: Record<DialogSize, string> = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  full: "sm:max-w-[95vw]",
}

function DialogContent({
  className,
  children,
  size = "md",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  size?: DialogSize
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        className={cn(
          "fixed top-1/2 left-1/2 z-50 w-full",
          "max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2",
          "rounded-xl bg-background shadow-lg",
          "flex max-h-[90vh] flex-col",
          "data-[state=closed]:animate-out data-[state=open]:animate-in",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}

        {showCloseButton && (
          <DialogPrimitive.Close asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-3 right-3"
            >
              <X size={18} />
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

/* -------------------------------------------------------------------------- */
/*                              STRUCTURE PARTS                               */
/* -------------------------------------------------------------------------- */

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("shrink-0 border-b px-6 py-4", className)} {...props} />
  )
}

function DialogBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex-1 overflow-y-auto px-6 py-4", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "shrink-0 border-t px-6 py-4",
        "flex justify-end gap-2",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle(
  props: React.ComponentProps<typeof DialogPrimitive.Title>
) {
  return <DialogPrimitive.Title className="text-lg font-semibold" {...props} />
}

function DialogDescription(
  props: React.ComponentProps<typeof DialogPrimitive.Description>
) {
  return (
    <DialogPrimitive.Description
      className="text-sm text-muted-foreground"
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
