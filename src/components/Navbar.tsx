"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/graduation/grad3.jpg";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavigationMenu className="w-screen z-[50]" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <div className="flex items-center justify-between px-4 py-3 lg:py-5 lg:px-8">
        <div className="lg:hidden">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              >
                {isOpen ? (
                  <Icons.close className="h-6 w-6" />
                ) : (
                  <Icons.menu className="h-6 w-6" />
                )}
              </button>
            </DialogTrigger>
            <DialogContent
              className="m-auto z-[60] flex items-center justify-center bg-zinc-900 p-4"
            >
              <DialogHeader className="absolute top-4 right-4">
                <DialogClose asChild onClick={() => setIsOpen(false)} />
              </DialogHeader>
              <nav className="flex flex-col items-center justify-center space-y-4">

                {/* Small List */}
                <NavigationMenuList className="flex flex-col items-center space-y-4">
                  <NavigationMenuItem onClick={() => setIsOpen(false)}>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Gallery</AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid gap-3 p-4">
                            <ListItem href="/gallery/graduation" title="Graduation" onClick={() => setIsOpen(false)}>
                              Celebrate Life&apos;s Acheivements.
                            </ListItem>
                            <ListItem href="/gallery/portraits" title="Portraits" onClick={() => setIsOpen(false)}>
                             Show Off Your Signature Style.
                            </ListItem>
                            <ListItem href="/gallery/headshots" title="Professional Headshots" onClick={() => setIsOpen(false)}>
                              Look Your Professional Best.
                            </ListItem>
                            <ListItem href="/gallery/events" title="Events" onClick={() => setIsOpen(false)}>
                              Capture The Moments That Matter.
                            </ListItem>
                            <ListItem href="/gallery/landscape&architecture" title="Landscape & Architecture" onClick={() => setIsOpen(false)}>
                              Discover Stunning Views.
                            </ListItem>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </NavigationMenuItem>
                  <NavigationMenuItem onClick={() => setIsOpen(false)}>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem onClick={() => setIsOpen(false)}>
                    <Link href="/services" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem onClick={() => setIsOpen(false)}>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  {/*
                  <NavigationMenuItem onClick={() => setIsOpen(false)}>
                    <Link href="/faq" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        FAQ
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  */}
                </NavigationMenuList>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-between w-full">
        {/* Big List */}
        <NavigationMenuList className="w-full flex justify-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
            <NavigationMenuContent className="z-[9999]">
              <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:w-[600px] lg:w-[700px]">
                <div className="flex justify-center items-center">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full aspect-square select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src={logo}
                        alt="D-Labs Logo"
                        className="w-0 h-0 lg:w-full lg:h-full"
                        layout="responsive"
                      />
                    </a>
                  </NavigationMenuLink>
                </div>
                <ul className="flex flex-col justify-center space-y-4">
                  <ListItem href="/gallery/graduation" title="Graduation">
                    Celebrate Life&apos;s Acheivements.
                  </ListItem>
                  <ListItem href="/gallery/portraits" title="Portraits">
                    Show Off Your Signature Style.
                  </ListItem>
                  <ListItem href="/gallery/headshots" title="Professional Headshots">
                    Look Your Professional Best.
                  </ListItem>
                  <ListItem href="/gallery/events" title="Events">
                    Capture Moments That Matter.
                  </ListItem>
                  <ListItem href="/gallery/landscape&architecture" title="Landscape & Architecture">
                    Discover Stunning Views.
                  </ListItem>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/services" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/*}
          <NavigationMenuItem>
            <Link href="/faq" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQ
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          */}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md px-10 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
