<svelte:options customElement="khao-social-buttons" />

<script lang="ts">
    import IconButton from "../buttons/IconButton.svelte";

    const socialButtonsPriority = 'secondary';
    const socialButtonsTarget = '_blank';
    const socialButtonsRel = 'noopener noreferrer';

    export let newsletterTitle: string = "";
    export let newsletterUrl: string = "";

    export let facebookTitle: string = "";
    export let facebookUrl: string = "";

    export let instagramTitle: string = "";
    export let inatagramUrl: string = "";

    export let pinterestTitle: string = "";
    export let pinterestUrl: string = "";

    export let rssTitle: string = "";
    export let rssUrl: string = "";

</script>


<div class="container">
    <IconButton
        iconName="newsletter"
        priority={socialButtonsPriority}
        customHoverColor="#9acd32"
        title={newsletterTitle}
        href={newsletterUrl}
        target={socialButtonsTarget}
        rel={socialButtonsRel}
    />

    <IconButton
        iconName="facebook"
        priority={socialButtonsPriority}
        customHoverColor="#3b5998"
        title={facebookTitle}
        href={facebookUrl}
        target={socialButtonsTarget}
        rel={socialButtonsRel}
    />

    <IconButton
        iconName="instagram"
        priority={socialButtonsPriority}
        customHoverColor="#e4405f"
        title={instagramTitle}
        href={inatagramUrl}
        target={socialButtonsTarget}
        rel={socialButtonsRel}
    />

    <IconButton
        iconName="pinterest"
        priority={socialButtonsPriority}
        customHoverColor="#bd081c"
        title={pinterestTitle}
        href={pinterestUrl}
        target={socialButtonsTarget}
        rel={socialButtonsRel}
    />

    <IconButton
        iconName="rss"
        priority={socialButtonsPriority}
        customHoverColor="#ff9900"
        title={rssTitle}
        href={rssUrl}
        target={socialButtonsTarget}
        rel={socialButtonsRel}
    />
</div>


<style>

    .container {
        display: flex;
        justify-content: space-around;
        padding-top: var(--khao-sys-size-regular-3);
        max-width: 350px;
        margin: 0 auto;
        gap: var(--khao-sys-size-regular-2);
    }

</style>