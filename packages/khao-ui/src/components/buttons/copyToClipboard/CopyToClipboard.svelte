<svelte:options customElement="khao-copy-to-clipboard" />

<script lang="ts">
  import type { ButtonPriority } from "../types/ButtonPriority";
  import Button from "../button/Button.svelte";
  import type { ButtonSize } from "../types/ButtonSize";
  import type { IconName } from "../../../icons/types/IconName";

  type UserFeedback = "none" | "success" | "error";

  interface Props {
    label?: string;
    title?: string;

    priority?: ButtonPriority;
    size?: ButtonSize;

    iconName: IconName | "";

    textToCopy?: string;
  }

  let userFeedback: UserFeedback = $state("none");

  let {
    label = "",
    title = "",
    priority = "primary",
    size = "medium",
    iconName = "copy",
    textToCopy = "",
  }: Props = $props();

  const giveUserFeedback = (feedbackType: UserFeedback) => {
    if (feedbackType) {
      userFeedback = feedbackType;

      setTimeout(() => {
        userFeedback = "none";
      }, 1000);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      giveUserFeedback("success");
    } catch (err) {
      giveUserFeedback("error");
    }
  };

  function handleClick() {
    if (textToCopy) {
      copyToClipboard(textToCopy);
    }
  }
</script>

<div class="feedback-{userFeedback}">
  <Button
    {label}
    {title}
    {priority}
    {size}
    {iconName}
    href="#"
    onClick={handleClick}
  ></Button>
</div>

<style>
  .feedback-none {
    animation: none;
  }

  @keyframes feedback-success {
    10%,
    90% {
      transform: translate3d(0, -1px, 0);
    }

    20%,
    80% {
      transform: translate3d(0, 2px, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(0, -4px, 0);
    }

    40%,
    60% {
      transform: translate3d(0, 4px, 0);
    }
  }

  .feedback-success {
    animation: feedback-success 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
</style>
