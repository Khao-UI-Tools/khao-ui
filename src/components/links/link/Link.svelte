<svelte:options customElement="khao-link" />

<script lang="ts">
    import Icon from "../../../icons/Icon.svelte";
    import { type IconName } from "../../../icons/types/IconName";
    import { type IconLocation, iconLocationDefault } from "./LinkIconLocation";

   
    export let title: string = "";

    export let href: string | null = null;
    export let rel: string | null = null;
    export let target: string | null = null;
    export let iconName: IconName | "" = "";
    export let iconLocation: IconLocation = iconLocationDefault;

</script>

<a class="link {iconName !== "" ? 'link-with-icon'  : ''} icon-location-{iconLocation}" href={href} title={title} rel={rel} target={target}>
    <slot>Empty Link</slot>
    {#if iconName !== ""}
    <span class="icon" aria-hidden="true">
        <Icon iconName={iconName} sizeFactor="4" opacity="80%"/>
    </span>
    {/if}
</a>

<style>

    :host {
        --khao-link-icon-size: var(--khao-sys-size-regular-4);
        --khao-link-icon-space: var(--khao-sys-size-regular-1);
        --khao-link-space-to-next-char: 0.2rem;
    }

    .link {
        color: currentColor;
        word-wrap: break-word;
        text-decoration: underline;
        text-underline-offset: var(--khao-sys-size-regular-1);
        cursor: pointer;
        vertical-align: baseline;
    }

    .link-with-icon {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: var(--khao-link-icon-space);
    }

    .icon-location-before {
        flex-direction: row-reverse;
    }

    .link:hover {
        text-decoration-thickness: 2px;
    }

    .link:focus {
        text-decoration-thickness: 2px;
    }

    .icon {
        margin: 0 var(--khao-link-space-to-next-char) var(--khao-sys-size-regular-1) 0;
    }


</style>