<svelte:options customElement="khao-chinese-speaker" />

<script lang="ts">
  import LanguageSpeaker from "../languageSpeaker/LanguageSpeaker.svelte";

  type ChineseVariant = "mandarin" | "cantonese";

  const variantConfig: Record<
    ChineseVariant,
    {
      label: string;
      langAttribute: string;
      voiceMatchers: ((voice: SpeechSynthesisVoice) => boolean)[];
      rate: number;
      pitch: number;
    }
  > = {
    mandarin: {
      label: "Mandarin",
      langAttribute: "zh",
      voiceMatchers: [
        (voice) => voice.lang === "zh-CN",
        (voice) => voice.lang === "zh-SG",
        (voice) => voice.lang === "zh-TW",
        (voice) => voice.lang.startsWith("cmn"),
        (voice) => voice.lang.startsWith("zh"),
      ],
      rate: 0.82,
      pitch: 0.9,
    },
    cantonese: {
      label: "Cantonese",
      langAttribute: "zh-HK",
      voiceMatchers: [
        (voice) => voice.lang === "zh-HK",
        (voice) => voice.lang.startsWith("yue"),
        (voice) =>
          voice.lang.startsWith("zh") &&
          /cantonese|hong kong/i.test(
            `${voice.name} ${voice.voiceURI} ${voice.lang}`,
          ),
      ],
      rate: 0.82,
      pitch: 0.9,
    },
  };

  let {
    text,
    variant = "mandarin",
    title = "",
    transliteration = "",
    ariaLabel = "",
  }: {
    text: string;
    variant?: ChineseVariant;
    title?: string;
    transliteration?: string;
    ariaLabel?: string;
  } = $props();

  let currentVariant = $derived.by(
    () => variantConfig[variant] ?? variantConfig.mandarin,
  );
</script>

<LanguageSpeaker
  {text}
  {title}
  {transliteration}
  {ariaLabel}
  lang={currentVariant.langAttribute}
  languageLabel={currentVariant.label}
  rate={currentVariant.rate}
  pitch={currentVariant.pitch}
  volume={1}
  voiceMatchers={currentVariant.voiceMatchers}
/>
