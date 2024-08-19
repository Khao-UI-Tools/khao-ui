<svelte:options customElement="khao-link" />

<script lang="ts">
   import Icon from "../../../icons/Icon.svelte";
   import { type IconName } from "../../../icons/types/IconName";

   export let label: string;
   export let title: string = label;

  export let href: string | null = null;
  export let rel: string | null = null;
  export let target: string | null = null;
  export let iconName: IconName | "" = "";

</script>

<a class="link" href={href} title={title} rel={rel} target={target}>
    <span class="label">{label}</span>
    {#if iconName !== ""}
    <Icon iconName={iconName} sizeFactor="4" opacity="80%"/>
    {/if}
</a>


<style>

    :host {
        --khao-link-icon-size: var(--khao-sys-size-regular-4);
        --khao-link-icon-space: var(--khao-sys-size-regular-1);
    }


    .link {
        display: inline-flex;
        color: currentColor;
        text-decoration: underline;
        text-underline-offset: var(--khao-sys-size-regular-1);
        gap: var(--khao-link-icon-space);
        cursor: pointer;
        align-items: center;
    }

    .link:hover {
        text-decoration: none;
    }

    .label {
        display: inline-block;
        vertical-align: center;
        line-height: var(--khao-link-icon-size);
    }


</style>