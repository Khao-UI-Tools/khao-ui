<svelte:options customElement="khao-thai-speaker" />

<script lang="ts">
  let {
    text,
    title = "",
    transliteration = "",
    ariaLabel = "",
  }: {
    text: string;
    title?: string;
    transliteration?: string;
    ariaLabel?: string;
  } = $props();

  let computedTitle = $derived(
    title || (transliteration ? `${transliteration} (${text})` : text),
  );
  let computedAriaLabel = $derived(ariaLabel || computedTitle);

  const speak = () => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser can't speak!");
      return;
    }

    const speakWith = (voices: SpeechSynthesisVoice[]) => {
      const thaiVoice = voices.find((v) => v.lang === "th-TH");
      if (!thaiVoice) {
        alert("Sorry, your browser can't speak Thai!");
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = thaiVoice;
      utterance.rate = 0.8;
      utterance.pitch = 0.8;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      speakWith(voices);
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        speakWith(window.speechSynthesis.getVoices());
      };
    }
  };
</script>

{#if transliteration}
  "{transliteration}"
  <span class="parens"
    >(<button
      class="link"
      type="button"
      title={computedTitle}
      aria-label={computedAriaLabel}
      onclick={speak}
      ><span class="text" lang="th">{text}</span>{@render icon()}</button
    >)</span
  >
{:else}
  <button
    class="link"
    type="button"
    title={computedTitle}
    aria-label={computedAriaLabel}
    onclick={speak}
  >
    <span class="text" lang="th">{text}</span>
    {@render icon()}
  </button>
{/if}

{#snippet icon()}
  <span class="icon-wrap">
    <svg
      class="icon"
      aria-hidden="true"
      viewBox="0 0 51 48"
      fill="currentColor"
      width="1em"
      height="1em"
    >
      <path
        d="M41.721 43.221c-0.576 0-1.152-0.22-1.591-0.659-0.879-0.879-0.879-2.303 0-3.182 4.108-4.108 6.37-9.57 6.37-15.38s-2.262-11.271-6.37-15.38c-0.879-0.879-0.879-2.303 0-3.182s2.303-0.879 3.182 0c4.958 4.958 7.689 11.55 7.689 18.562s-2.731 13.603-7.689 18.562c-0.439 0.439-1.015 0.659-1.591 0.659zM33.728 38.978c-0.576 0-1.152-0.22-1.591-0.659-0.879-0.879-0.879-2.303 0-3.182 6.141-6.141 6.141-16.133 0-22.274-0.879-0.879-0.879-2.303 0-3.182s2.303-0.879 3.182 0c3.825 3.825 5.931 8.91 5.931 14.319s-2.106 10.494-5.931 14.319c-0.439 0.439-1.015 0.659-1.591 0.659v0zM25.735 34.735c-0.576 0-1.152-0.22-1.591-0.659-0.879-0.879-0.879-2.303 0-3.182 3.802-3.802 3.802-9.987 0-13.789-0.879-0.879-0.879-2.303 0-3.182s2.303-0.879 3.182 0c5.556 5.556 5.556 14.596 0 20.153-0.439 0.439-1.015 0.659-1.591 0.659z"
      />
      <path
        d="M19.5 45c-0.39 0-0.774-0.152-1.061-0.439l-11.561-11.561h-5.379c-0.828 0-1.5-0.672-1.5-1.5v-15c0-0.828 0.672-1.5 1.5-1.5h5.379l11.561-11.561c0.429-0.429 1.074-0.557 1.635-0.325s0.926 0.779 0.926 1.386v39c0 0.607-0.365 1.154-0.926 1.386-0.186 0.077-0.381 0.114-0.574 0.114z"
      />
    </svg>
  </span>
{/snippet}

<style>
  :host {
    --khao-link-icon-space: var(--khao-sys-size-regular-1);
    --khao-link-space-to-next-char: 0;
    --khao-thai-speaker-icon-color: color-mix(
      in srgb,
      currentColor,
      transparent 20%
    );
  }

  .parens {
    white-space: nowrap;
  }

  .link {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--khao-link-icon-space);
    margin-right: var(--khao-link-space-to-next-char);
    color: currentColor;
    cursor: pointer;
    max-width: 100%;
    overflow: hidden;
    vertical-align: baseline;
    text-decoration: underline;
    text-underline-offset: var(--khao-sys-size-regular-1);
    text-decoration-color: color-mix(in srgb, currentColor, transparent 50%);

    &:hover {
      text-decoration-thickness: 2px;
      text-decoration-color: currentColor;
    }

    &:focus-visible {
      outline: 2px solid color-mix(in srgb, currentColor, transparent 50%);
      outline-offset: 0;
      text-decoration: none;
      padding: var(--khao-sys-size-regular-1);
      height: var(--khao-sys-size-regular-4);
      border-radius: var(--khao-sys-shape-corner-small);
      backdrop-filter: saturate(80%);
    }
  }

  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    text-decoration: underline;
    text-underline-offset: var(--khao-sys-size-regular-1);
    text-decoration-color: inherit;
  }

  .icon-wrap {
    align-self: flex-start;
    height: 1em;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    margin-top: 6px;
    margin-right: 0.15em;
  }

  .icon {
    width: 1em;
    height: 1em;
    color: var(--khao-thai-speaker-icon-color);
  }
</style>
