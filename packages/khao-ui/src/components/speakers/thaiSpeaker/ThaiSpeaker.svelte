<svelte:options customElement="khao-thai-speaker" />

<script lang="ts">
  import LanguageSpeaker from "../languageSpeaker/LanguageSpeaker.svelte";

  const thaiVoiceMatchers = [
    (voice: SpeechSynthesisVoice) => voice.lang === "th-TH",
  ];

  let {
    text,
    title = "",
    transliteration = "",
    ariaLabel = "",
    isDefinition = "false",
  }: {
    text: string;
    title?: string;
    transliteration?: string;
    ariaLabel?: string;
    isDefinition?: string;
  } = $props();
</script>

<LanguageSpeaker
  {text}
  {title}
  {transliteration}
  {ariaLabel}
  {isDefinition}
  lang="th"
  languageLabel="Thai"
  missingVoiceMessage="Sorry, your browser can't speak Thai!"
  rate={0.8}
  pitch={0.8}
  volume={1}
  voiceMatchers={thaiVoiceMatchers}
/>
