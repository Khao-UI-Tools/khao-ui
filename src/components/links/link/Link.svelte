<svelte:options customElement="khao-link" />

<script lang="ts">
    import Icon from "../../../icons/Icon.svelte";
    import { type IconName } from "../../../icons/types/IconName";
    import { type IconLocation, iconLocationDefault } from "./LinkIconLocation";
    import openInNewWindow from "./utils/openInNewWindow";

    const onClick = (event: MouseEvent) => {
        if (href !== "" && opensNewWindow === "true") {
            event.preventDefault();
            event.stopPropagation();
            openInNewWindow(href);   
        }
    }

   
    export let title: string = "";
    export let href: string = "";
    export let rel: string | null = null;
    export let target: string | null = null;
    export let iconName: IconName | "" = "";
    export let iconLocation: IconLocation = iconLocationDefault;
    export let opensNewWindow: string = "false";

</script>

<a 
    class="link {iconName !== "" ? (iconLocation === 'after') ? 'link-with-icon-after' : 'link-with-icon-before': ''}" 
    href={href} 
    title={title} 
    rel={rel} 
    target={target}
    on:click={onClick}
    >
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
        margin-right: var(--khao-link-space-to-next-char);
    }

    .link-with-icon-after {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: var(--khao-link-icon-space);
    }

    .link-with-icon-before {
        display: inline-flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: var(--khao-link-icon-space);
        margin-right: 0;
        margin-left: var(--khao-link-space-to-next-char);
    }

    .link:hover {
        text-decoration-thickness: 2px;
    }

    .link:focus {
        text-decoration-thickness: 2px;
    }

    .icon {
        margin-bottom: var(--khao-sys-size-regular-1);
    }


</style>