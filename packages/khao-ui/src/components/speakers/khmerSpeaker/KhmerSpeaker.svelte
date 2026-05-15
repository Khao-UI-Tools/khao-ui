<svelte:options customElement="khao-khmer-speaker" />

<script lang="ts">
  import LanguageSpeaker from "../languageSpeaker/LanguageSpeaker.svelte";

  const khmerVoiceMatchers = [
    (voice: SpeechSynthesisVoice) => voice.lang === "km-KH",
    (voice: SpeechSynthesisVoice) => voice.lang.startsWith("km"),
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
  lang="km"
  languageLabel="Khmer"
  missingVoiceMessage="Sorry, your browser can't speak Khmer!"
  rate={0.86}
  pitch={0.95}
  volume={1}
  voiceMatchers={khmerVoiceMatchers}
/>
