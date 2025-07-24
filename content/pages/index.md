---
type: PageLayout
title: ./watch
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/circuit_bg.avif
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 30
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      ./watch
    subtitle: >-
      Many quartz watches do their best to hide away any electronic components from view. 
      The design concept for this watch was to embrace those digital components instead, taking inspiration from command-line interfaces and computer hardware.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-6
          - pl-4
          - pr-4
        flexDirection: row-reverse
        textAlign: left
    type: HeroSection
    actions: []
  - type: HeroSection
    title: ''
    subtitle: ''
    media:
      type: ImageBlock
      url: /images/PropShot_compressed.avif
      altText: Watch Prop Shot
      caption: ''
      elementId: 'watch-hero-image'
      className: 'max-w-md w-full h-auto rounded-4xl mx-auto'
    styles:
      self:
        height: full
        maxHeight: 300px
        width: narrow
        maxWidth: 500px
        padding:
          - pt-0
          - pb-6
          - pl-6
          - pr-6
        margin:
          - mt-0
          - mb-0
        flexDirection: col
        textAlign: center
  - type: DividerSection
    elementId: 'divider-propshot-featured'
    styles:
      self:
        height: auto
        width: wide
        borderStyle: solid
        borderWidth: 1
        padding:
          - pt-4
          - pb-4
          - pl-0
          - pr-0
        margin:
          - mt-0
          - mb-0
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/electronics.md
      - content/pages/hardware.md
      - content/pages/software.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        textAlign: left
  - type: DividerSection
    elementId: 'divider-propshot-featured'
    styles:
      self:
        height: full
        width: wide
        borderStyle: solid
        borderWidth: 1
        padding:
          - pt-4
          - pb-4
          - pl-0
          - pr-0
        margin:
          - mt-0
          - mb-0
  - type: CtaSection
    colors: colors-f
    elementId: github-button
    actions:
      - type: Button
        label: GitHub ⌚︎
        url: https://github.com/zsteig/.watch
        style: primary
        elementId: github-link
    styles:
      self:
        height: full
        width: full
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-6
          - pb-6
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: column
        display: flex
        textAlign: center
---
