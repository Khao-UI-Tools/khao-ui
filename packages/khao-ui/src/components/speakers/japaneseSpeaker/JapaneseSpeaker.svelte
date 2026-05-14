<svelte:options customElement="khao-japanese-speaker" />

<script lang="ts">
  import LanguageSpeaker from "../languageSpeaker/LanguageSpeaker.svelte";

  const japaneseVoiceMatchers = [
    (voice: SpeechSynthesisVoice) => voice.lang === "ja-JP",
    (voice: SpeechSynthesisVoice) => voice.lang.startsWith("ja"),
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
  lang="ja"
  languageLabel="Japanese"
  missingVoiceMessage="Sorry, your browser can't speak Japanese!"
  rate={0.9}
  pitch={1}
  volume={1}
  voiceMatchers={japaneseVoiceMatchers}
/>
