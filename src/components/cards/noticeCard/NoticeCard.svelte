<svelte:options customElement="khao-card-notice" />

<script lang="ts">
   import { onMount } from 'svelte';
    import Card from "../card/Card.svelte";
    import { type IconName } from "../../../icons/types/IconName";
    import {type CardFilling, cardFillingDefault} from "../types/CardFilling";
    import { type NoticeType, noticeTypeDefault } from "./NoticeTypes";
    
    let cardFilling:CardFilling = "primary";
    let iconName: IconName = "info"

    onMount( () => {
		
        switch (type) {
            case "info": {
                cardFilling = "primary";
                iconName = "info"
                break;
            }
            case "neutral": {
                cardFilling = cardFillingDefault;
                iconName = "info"
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

<Card filling={cardFilling} title={title} iconName={iconName} type="elevated">
    <slot>Notice Card is a specialized semantic card with a reduced set of fillings and icons</slot>
</Card>