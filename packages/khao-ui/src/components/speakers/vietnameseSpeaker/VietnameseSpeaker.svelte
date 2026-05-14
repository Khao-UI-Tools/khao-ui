<svelte:options customElement="khao-vietnamese-speaker" />

<script lang="ts">
  import LanguageSpeaker from "../languageSpeaker/LanguageSpeaker.svelte";

  const vietnameseVoiceMatchers = [
    (voice: SpeechSynthesisVoice) => voice.lang === "vi-VN",
    (voice: SpeechSynthesisVoice) => voice.lang.startsWith("vi"),
  ];

  let {
    text,
    title = "",
    ariaLabel = "",
  }: {
    text: string;
    title?: string;
    ariaLabel?: string;
  } = $props();
</script>

<LanguageSpeaker
  {text}
  {title}
  {ariaLabel}
  lang="vi"
  languageLabel="Vietnamese"
  missingVoiceMessage="Sorry, your browser can't speak Vietnamese!"
  rate={0.85}
  pitch={0.9}
  volume={1}
  voiceMatchers={vietnameseVoiceMatchers}
/>
