"use client";

import * as React from "react";
import * as PlaceDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";

const PlaceDialog = PlaceDialogPrimitive.Root;

const PlaceDialogTrigger = PlaceDialogPrimitive.Trigger;

const PlaceDialogPortal = ({
  className,
  children,
  ...props
}: PlaceDialogPrimitive.AlertDialogPortalProps) => (
  <PlaceDialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {children}
    </div>
  </PlaceDialogPrimitive.Portal>
);
PlaceDialogPortal.displayName = PlaceDialogPrimitive.Portal.displayName;

const PlaceDialogOverlay = React.forwardRef<
  React.ElementRef<typeof PlaceDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof PlaceDialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <PlaceDialogPrimitive.Overlay
    className={cn(
      "animate-in fade-in fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
      className
    )}
    {...props}
    ref={ref}
  />
));
PlaceDialogOverlay.displayName = PlaceDialogPrimitive.Overlay.displayName;

const PlaceDialogContent = React.forwardRef<
  React.ElementRef<typeof PlaceDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PlaceDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <PlaceDialogPortal>
    <PlaceDialogOverlay />
    <PlaceDialogPrimitive.Content
      ref={ref}
      className={cn(
        "animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 fixed z-50 grid w-full max-w-4xl scale-100 gap-4 bg-white p-6 opacity-100 sm:rounded-lg md:w-full",
        "dark:bg-slate-900",
        className
      )}
      {...props}
    />
  </PlaceDialogPortal>
));
PlaceDialogContent.displayName = PlaceDialogPrimitive.Content.displayName;

const PlaceDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-left",
      className
    )}
    {...props}
  />
);
PlaceDialogHeader.displayName = "PlaceDialogHeader";

const PlaceDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
PlaceDialogFooter.displayName = "PlaceDialogFooter";

const PlaceDialogTitle = React.forwardRef<
  React.ElementRef<typeof PlaceDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof PlaceDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <PlaceDialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold text-slate-900",
      "dark:text-slate-50",
      className
    )}
    {...props}
  />
));
PlaceDialogTitle.displayName = PlaceDialogPrimitive.Title.displayName;

const PlaceDialogDescription = React.forwardRef<
  React.ElementRef<typeof PlaceDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof PlaceDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <PlaceDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-slate-500", "dark:text-slate-400", className)}
    {...props}
  />
));
PlaceDialogDescription.displayName =
  PlaceDialogPrimitive.Description.displayName;

const PlaceDialogAction = React.forwardRef<
  React.ElementRef<typeof PlaceDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof PlaceDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <PlaceDialogPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-slate-900 py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
      className
    )}
    {...props}
  />
));
PlaceDialogAction.displayName = PlaceDialogPrimitive.Action.displayName;

const PlaceDialogCancel = React.forwardRef<
  React.ElementRef<typeof PlaceDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof PlaceDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <PlaceDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md  border-slate-200 bg-transparent py-2 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 sm:mt-0",
      className
    )}
    {...props}
  />
));
PlaceDialogCancel.displayName = PlaceDialogPrimitive.Cancel.displayName;

export {
  PlaceDialog,
  PlaceDialogTrigger,
  PlaceDialogContent,
  PlaceDialogHeader,
  PlaceDialogFooter,
  PlaceDialogTitle,
  PlaceDialogDescription,
  PlaceDialogAction,
  PlaceDialogCancel,
};
