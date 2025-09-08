---
type: ProjectLayout
title: Software
slug: software
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/circuit_bg.avif
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 30
description: >-
  Firmware design and planning
featuredImage:
  type: ImageBlock
  url: /images/Software_Thumbnail_compressed.avif
  altText: Project thumbnail image
media:
  type: ImageBlock
  url: /images/Software_Thumbnail_compressed.avif
  altText: Project image
---

Software - Bare Metal C with STM32CubeIDE HAL

-

The whole idea for this watch start with playing around in an arduino simulator testing different styles of information presentation.

Instead of having the screen wake up and immediately display the time and date, which admittedly would be more efficient when checking the
time, I wanted to have each character printed out as if it were being typed/printed into a terminal.

<ImageBlock url="/images/arduino_sim.webp" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

Moving onto real hardware, I initially purchased an ATSAML10E16A dev board. I was interested in the low-power features advertised with the SAM
series of microcontrollers.

Unfortunately, I was not able to get anywhere near the advertised efficiency numbers, especially when in sleep. I took
measurements with both the built-in ammeter of the dev board as well as a Power Profiler Kit II.
In addition, the IDE and documentation for the ATSAM series is... difficult to navigate.

This led me to the STM32L4 series of microcontrollers that have a shutdown power mode that can be woken up
with a button press. This was exactly what I was looking for, and I have past experience with STM32CubeIDE that made getting up and running much faster.

<ImageBlock url="/images/test_platform_compressed.avif" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

The buttons allow the user to wake, and set the time/date of the watch.

The lower button is the "Run" button and will wake the watch when it is asleep.
The upper button is the "Set" button and does nothing when the watch is asleep.

If no other button presses are made, the watch will wake up, display the time and date, wait for 5 seconds, print "end", and then shut down again.

<ImageBlock url="/images/Run_Example.webp" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />

If however, the "Set" button is pressed during the 5 second display period (after the printing has been completed) then the watch will enter setting mode.

While in setting mode the display will show an underline for the currently selected field.
The "Set" button will increment the value of the currently selected field.
The "Run" button will move the selection to the next field.

If no button presses are made for a 5 second period then the watch will show a "^C" (Ctrl-C is used to end a process in a terminal) and then go back to sleep.

<ImageBlock url="/images/Set_Example.webp" altText="Another image" className="max-w-3xl mx-auto rounded-xl my-8 max-h-96" />
