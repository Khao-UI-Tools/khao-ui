<svelte:options customElement="khao-lao-speaker" />

<script lang="ts">
  import LanguageSpeaker from "../languageSpeaker/LanguageSpeaker.svelte";

  const laoVoiceMatchers = [
    (voice: SpeechSynthesisVoice) => voice.lang === "lo-LA",
    (voice: SpeechSynthesisVoice) => voice.lang.startsWith("lo"),
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
  lang="lo"
  languageLabel="Lao"
  missingVoiceMessage="Sorry, your browser can't speak Lao!"
  rate={0.88}
  pitch={0.95}
  volume={1}
  voiceMatchers={laoVoiceMatchers}
/>
