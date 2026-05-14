<svelte:options customElement="khao-korean-speaker" />

<script lang="ts">
  import LanguageSpeaker from "../languageSpeaker/LanguageSpeaker.svelte";

  const koreanVoiceMatchers = [
    (voice: SpeechSynthesisVoice) => voice.lang === "ko-KR",
    (voice: SpeechSynthesisVoice) => voice.lang.startsWith("ko"),
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
  lang="ko"
  languageLabel="Korean"
  missingVoiceMessage="Sorry, your browser can't speak Korean!"
  rate={0.88}
  pitch={1}
  volume={1}
  voiceMatchers={koreanVoiceMatchers}
/>
