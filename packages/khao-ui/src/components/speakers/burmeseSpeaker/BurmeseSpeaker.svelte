<svelte:options customElement="khao-burmese-speaker" />

<script lang="ts">
  import LanguageSpeaker from "../languageSpeaker/LanguageSpeaker.svelte";

  const burmeseVoiceMatchers = [
    (voice: SpeechSynthesisVoice) => voice.lang === "my-MM",
    (voice: SpeechSynthesisVoice) => voice.lang.startsWith("my"),
  ];

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
</script>

<LanguageSpeaker
  {text}
  {title}
  {transliteration}
  {ariaLabel}
  lang="my"
  languageLabel="Burmese"
  missingVoiceMessage="Sorry, your browser can't speak Burmese!"
  rate={0.86}
  pitch={0.92}
  volume={1}
  voiceMatchers={burmeseVoiceMatchers}
/>
