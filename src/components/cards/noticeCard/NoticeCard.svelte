<svelte:options customElement="khao-card-notice" />

<script lang="ts">
   import { onMount } from 'svelte';
    import Card from "../card/Card.svelte";
    import Icon from "../../../icons/Icon.svelte";
    import { type IconName } from "../../../icons/IconName";
    import {type CardFilling, cardFillingDefault} from "../types/CardFilling";
    import { type NoticeType, noticeTypeDefault } from "./NoticeTypes";
    

    let cardFilling:CardFilling = "primary";
    let iconName: IconName = "info"

    onMount( () => {
		
        switch (type) {
            case "neutral": {
                cardFilling = cardFillingDefault;
                break;
            }
            case "warning": {
                cardFilling = "tertiary";
                iconName = "notification"
                break;
            }
        }
	});

    export let type: NoticeType = noticeTypeDefault;
    export let title: string = "";
  
</script>

<Card filling={cardFilling} type="elevated">
    <div class="title">{ title }</div>

    <div class="content">
        <div class="icon">
            <Icon {iconName} />
        </div>
        <slot>
            Notice Content comes here. if it's longer it breaks the next line but not the container, because that would look rather ugly. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </slot>
    </div>
</Card>


<style>
    :host {
       --khao-notice-card-title-space: var(--khao-sys-size-regular-2);
       --khao-notice-card-icon-size: var(--khao-sys-size-regular-7);
       --khao-notice-card-icon-space: var(--khao-sys-size-regular-2);
    }

    .title {
        font-size: 1.2rem;
        font-weight: 800;
        margin-bottom: var(--khao-notice-card-title-space);
    }

    .content {
        display: inline;
        line-height: var(--khao-sys-size-regular-7);
        vertical-align: top;
    }

    .icon {
        float: left;
        width: var(--khao-notice-card-icon-size);
        height: var(--khao-notice-card-icon-size);
        margin-right: var(--khao-notice-card-icon-space);
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
    }
   

</style>