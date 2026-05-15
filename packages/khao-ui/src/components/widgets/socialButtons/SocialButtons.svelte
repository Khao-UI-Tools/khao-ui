<svelte:options customElement="khao-social-buttons" />

<script lang="ts">
  import IconButton from "../../buttons/iconButton/IconButton.svelte";
  import { type ButtonSize } from "../../buttons/types/ButtonSize";

  const socialButtonsPriority = "secondary";
  const socialButtonsTarget = "_blank";
  const socialButtonsRel = "noopener noreferrer";

  type SocialButtonsSize = "tiny" | "small" | "medium" | "large";

  const mapWidgetSizeToIconButtonSize = (
    size: SocialButtonsSize
  ): ButtonSize | "tiny" => (size === "small" ? "compact" : size);

  let {
    newsletterTeaser = "true",
    size = "medium",
    newsletterTitle = "",
    newsletterUrl = "",
    facebookTitle = "",
    facebookUrl = "",
    instagramTitle = "",
    instagramUrl = "",
    pinterestTitle = "",
    pinterestUrl = "",
    rssTitle = "",
    rssUrl = "",
  }: {
    newsletterTeaser?: string;
    size?: SocialButtonsSize;
    newsletterTitle?: string;
    newsletterUrl?: string;
    facebookTitle?: string;
    facebookUrl?: string;
    instagramTitle?: string;
    instagramUrl?: string;
    pinterestTitle?: string;
    pinterestUrl?: string;
    rssTitle?: string;
    rssUrl?: string;
  } = $props();

  let iconButtonSize = $derived(mapWidgetSizeToIconButtonSize(size));
</script>

<div class="container container-size-{size}">
  <span class={newsletterTeaser === "true" ? "teaser" : ""}>
    <IconButton
      iconName="newsletter"
      priority={socialButtonsPriority}
      customColor="var(--khao-sys-static-color-white)"
      customBGColor="var(--khao-sys-color-secondary)"
      customHoverColor="#9acd32"
      title={newsletterTitle}
      href={newsletterUrl}
      target="_self"
      size={iconButtonSize}
    />
  </span>

  <IconButton
    iconName="facebook"
    priority={socialButtonsPriority}
    customColor="var(--khao-sys-static-color-white)"
    customBGColor="var(--khao-sys-color-secondary)"
    customHoverColor="#3b5998"
    title={facebookTitle}
    href={facebookUrl}
    target={socialButtonsTarget}
    rel={socialButtonsRel}
    size={iconButtonSize}
  />

  <IconButton
    iconName="instagram"
    priority={socialButtonsPriority}
    customColor="var(--khao-sys-static-color-white)"
    customBGColor="var(--khao-sys-color-secondary)"
    customHoverColor="#e4405f"
    title={instagramTitle}
    href={instagramUrl}
    target={socialButtonsTarget}
    rel={socialButtonsRel}
    size={iconButtonSize}
  />

  <IconButton
    iconName="pinterest"
    priority={socialButtonsPriority}
    customColor="var(--khao-sys-static-color-white)"
    customBGColor="var(--khao-sys-color-secondary)"
    customHoverColor="#bd081c"
    title={pinterestTitle}
    href={pinterestUrl}
    target={socialButtonsTarget}
    rel={socialButtonsRel}
    size={iconButtonSize}
  />

  <IconButton
    iconName="rss"
    priority={socialButtonsPriority}
    customColor="var(--khao-sys-static-color-white)"
    customBGColor="var(--khao-sys-color-secondary)"
    customHoverColor="#ff9900"
    title={rssTitle}
    href={rssUrl}
    target="_self"
    size={iconButtonSize}
  />
</div>

<style>
  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 320px;
    margin: 0 auto;
    gap: var(--khao-sys-size-regular-4) var(--khao-sys-size-regular-1);
  }

  .container-size-tiny {
    gap: var(--khao-sys-size-regular-2);
    max-width: 240px;
    justify-content: center;
  }

  .container-size-small {
    gap: var(--khao-sys-size-regular-3) var(--khao-sys-size-regular-1);
    max-width: 300px;
    justify-content: center;
  }

  .container-size-large {
    max-width: 420px;
  }

  @keyframes blinker {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }
  .teaser {
    animation-name: blinker;
    animation-duration: 0.6s;
    animation-iteration-count: 4;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  }
</style>
