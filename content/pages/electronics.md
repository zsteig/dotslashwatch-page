---
type: ProjectLayout
title: Electronics
slug: electronics
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/circuit_bg.avif
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 30
description: PCB-design decisions and rationale
featuredImage:
  type: ImageBlock
  url: /images/Electronics_Thumbnail_compressed.avif
  altText: Project thumbnail image
media:
  - type: ImageBlock
    url: /images/Electronics_Thumbnail_compressed.avif
    altText: Project image
---

MCU - STM32L432KC

RTC - Micro Crystal RV-2123

Battery - CR1620 Coin Cell

Display - Crystalfontz CFAL9664B-F-B2

-

I knew that the unique packaging restraints of a watch would mean that a custom PCB was required. I had never done any PCB design before
and downloaded KiCAD with no idea how it worked.

I used the schematics and PCB layouts that came with the dev boards I purchased for the STM32, RTC, and OLED display to have a starting point to
work with. I added in additional circuitry for the two tactile buttons and a load switch to fully disconnect the OLED (to reduce idle power draw).

<ImageBlock url="/images/schematic_compressed.avif" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

When looking for an RTC that would be accurate enough but compact enough, as something like the common DS3231 is much too large, I came across
the RV-2123.

The RV-2123 is an RTC with a glass top that allows you to see the quartz crystal itself inside the component. For a device intending to put
computer components on display instead of hiding them, this was way too cool to pass up on.

(Unfortunately, shortly after finishing the fully functional prototype of the watch, Micro Crystal AG announced that the RV-2123 would be reaching EOL.)

<ImageBlock url="/images/rtc_magnify_compressed.jpg" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

After weeks of iterations, shifting/rerouting traces, adjusting the mounting holes to align with the case, and reorganizing components,
I had a design that I was ready to have manufactured.

For another space-minded decision, I chose to use a Tag-Connect header for the programming interface. This allowed me to tuck it inbetween the pads
for the tactile buttons and not take up any vertical space.

<ImageBlock url="/images/PCB_Layout_compressed.avif" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

All of the SMD components, including the buttons on the back were soldered using a stencil and a hot plate. The OLED display was drag soldered by
hand with an iron.

<ImageBlock url="/images/hot_plate_compressed.jpg" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

In an effort to give the most display area for the more interesting components (to me anyway) I decided to place the battery retainer on the rear of the PCB.
Fortunately, this aligned perfectly with the curvature limits of the OLED display ribbon cable and turned what would have been a wasted void
inside the watch into useful space.

<ImageBlock url="/images/PCB_Rear_compressed.avif" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

After final assembly, the board was programmed and tested to be working exactly as expected!
(After I realized that I wired the programming header upside-down and had to order a second batch of PCBs...)

<ImageBlock url="/images/PCB_Front_compressed.avif" altText="Breadboard and Dev boards" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />
