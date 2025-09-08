---
type: ProjectLayout
title: Hardware
slug: hardware
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/circuit_bg.avif
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 30
description: >-
  Case design protoypes and revisions
featuredImage:
  type: ImageBlock
  url: /images/Hardware_Thumbnail_compressed.avif
  altText: Project thumbnail image
media:
  type: ImageBlock
  url: /images/Hardware_Thumbnail_compressed.avif
  altText: Project image
---

Case - 316L Stainless Steel

Buttons - 316L Stainless Steel

Crystals - Mineral Crystal

-

The initial design concept for the watch was limited by the choice of an OLED display.
The display extends quite far past the active portion of the display and left a large, unused portion of the watch face.

In order to add some visual interest while also referencing computer internals I thought of adding a heatsink-like portion.

Through multiple iterations of 3D printing I came to the realization that the heatsink "fins" would either be too small
to be reliably machinable or too large and cut into the internal space too much for the display to fit.

The heatsink idea was translated to the engraved grooves in the final design that solve both of the prior issues.

<ImageBlock url="/images/heatsink_proto_compressed.jpg" altText="Image of rough draft design concept" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

For the personal satisfaction of having the watch look more like a finished product I wanted to add a logo to the watch face.
Since there was no persistant images on the OLED display, it made sense to engrave the logo into the watch case itself.

I wanted a logo that clearly blended the two ideas of watches and programming, while staying simple enough to be engraved.

While trying to think of simple shapes that represented programming I came up with the idea of placing ">\_",
which is commonly seen as a terminal prompt, inside of a clock face. The ">" served both as the clock hands and the prompt character.

<ImageBlock url="/images/White_Logo.png" altText="Image of watch logo" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

The most confounding part of the design proces for me was the buttons.
How to seal the buttons from water ingress, have them line up with buttons on the PCB, and also have a satisfying click?

After weeks of searching I was able to source E-clips, O-rings, and springs small enough that would allow adequate travel,
without leaving the material around the button opening too thin.

The front and back crystals were attached to the case using a watch crystal epoxy.

<ImageBlock url="/images/Fusion_exploded_compressed.avif" altText="Image of exploded view of final design components" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

The final design was the result of months and dozens of iterations and is 90% of what I envisioned it to be. Which for never having used CAD software before, I am quite happy with.

The only part I feel needs another update is the case-back which at the moment does not properly fit a gasket and has the screws sitting proud.
A better design would be to have the screw heads recessed, as well as a cutout for a gasket to sit into for proper weather-sealing.
