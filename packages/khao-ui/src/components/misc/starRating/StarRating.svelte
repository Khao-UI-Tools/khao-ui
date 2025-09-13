<svelte:options customElement="khao-star-rating" />

<script lang="ts">
  import Icon from "../../../icons/Icon.svelte";
  import {
    type StarRatingColor,
    starRatingColorDefault,
  } from "./types/StarRatingColor";
  import {
    type StarRatingStarBackgroundColor,
    starRatingStarBackgroundColorDefault,
  } from "./types/StarRatingStarBackgroundColor";
  import {
    type StarRatingSize,
    starRatingSizeDefault,
  } from "./types/StarRatingSize";

  export let rating: number = 0;
  export let maxRating: number = 5;
  export let starColor: StarRatingColor = starRatingColorDefault;
  export let starBackgroundColor: StarRatingStarBackgroundColor =
    starRatingStarBackgroundColorDefault;
  export let starSize: StarRatingSize = starRatingSizeDefault;
  export let readonly: boolean = false;
  export let name: string = "star-rating";
  export let ariaLabel: string = "";
  export let noRatingLabel: string = "No rating";
  export let oneStarLabel: string = "1 star out of";
  export let multipleStarsLabel: string = "stars out of";
  export let currentRatingLabel: string = "Current rating";

  $: ratingOptions = Array.from(
    { length: maxRating / 0.5 + 1 },
    (_, i) => i * 0.5
  );

  function handleRatingChange(event: Event) {
    if (readonly) return;

    const target = event.target as HTMLInputElement;
    const newRating = parseFloat(target.value);
    rating = newRating;

    const customEvent = new CustomEvent("ratingchange", {
      detail: { rating: newRating },
      bubbles: true,
    });
    target.dispatchEvent(customEvent);
  }

  function getStarType(
    starIndex: number,
    currentRating: number
  ): "filled" | "half" | "empty" {
    const starValue = starIndex + 1;
    if (currentRating >= starValue) return "filled";
    if (currentRating >= starValue - 0.5) return "half";
    return "empty";
  }

  function getRatingText(value: number): string {
    if (value === 0) return noRatingLabel;
    if (value === 1) return oneStarLabel + " " + maxRating;
    return value + " " + multipleStarsLabel + " " + maxRating;
  }
</script>

<fieldset
  class="star-rating star-rating-{starColor} star-rating-bg-{starBackgroundColor}"
  class:readonly
  style="--total-stars: {maxRating}"
  aria-describedby="{name}-description"
>
  <legend class="visuallyhidden">{ariaLabel}</legend>

  <div class="rating-inputs">
    {#each ratingOptions as ratingValue}
      <input
        type="radio"
        id="{name}-{ratingValue}"
        {name}
        value={ratingValue}
        checked={rating === ratingValue}
        disabled={readonly}
        on:change={handleRatingChange}
        class="visuallyhidden"
      />
    {/each}
  </div>

  <div class="click-areas">
    {#each ratingOptions as ratingValue}
      <label
        for="{name}-{ratingValue}"
        class="click-area"
        title={getRatingText(ratingValue)}
      >
        <span class="visuallyhidden">{getRatingText(ratingValue)}</span>
      </label>
    {/each}
  </div>

  <div class="stars-display" aria-hidden="true">
    {#each Array(maxRating) as _, starIndex}
      {@const starType = getStarType(starIndex, rating)}
      <div class="star star-{starType}">
        <Icon iconName="star" sizeFactor={starSize} />
        {#if starType === "half"}
          <div class="star-half-overlay">
            <Icon iconName="star" sizeFactor={starSize} />
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div id="{name}-description" class="visuallyhidden">
    {currentRatingLabel}: {getRatingText(rating)}
  </div>
</fieldset>

<style>
  :host {
    --khao-star-rating-size: var(--khao-sys-size-regular-6);
    --khao-star-rating-gap: var(--khao-sys-size-regular-1);

    --khao-star-rating-filled-color: var(--khao-sys-color-primary);
    --khao-star-rating-empty-color: var(--khao-sys-color-surface-container);
    --khao-star-rating-hover-color: var(--khao-sys-color-primary);
  }

  .star-rating {
    border: none;
    padding: 0;
    margin: 0;
    display: inline-block;
    position: relative;
  }

  .rating-inputs {
    position: absolute;
    left: -9999px;
  }

  .click-areas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 10;
  }

  .click-area {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: calc(100% / var(--total-stars) / 2);
  }

  .readonly .click-area {
    cursor: default;
    pointer-events: none;
  }

  .stars-display {
    display: flex;
    gap: var(--khao-star-rating-gap);
    position: relative;
  }

  .star {
    position: relative;
    color: var(--khao-star-rating-empty-color);
    transition: color 0.2s ease;
  }

  .star-filled {
    color: var(--khao-star-rating-filled-color);
  }

  .star-half {
    color: var(--khao-star-rating-empty-color);
  }

  .star-half .star-half-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    overflow: hidden;
    color: var(--khao-star-rating-filled-color);
  }

  .star-rating:focus-within {
    outline-offset: 2px;
    outline: 2px solid
      color-mix(
        in srgb,
        var(--khao-star-rating-filled-color),
        var(--khao-star-rating-filled-color)
          var(--khao-sys-state-focus-state-layer-opacity)
      );
    border-radius: var(--khao-sys-shape-corner-small);
  }

  .rating-inputs input:focus {
    outline: none;
  }

  .visuallyhidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .star-rating-primary {
    --khao-star-rating-filled-color: var(--khao-sys-color-primary);
    --khao-star-rating-hover-color: var(--khao-sys-color-primary);
  }

  .star-rating-secondary {
    --khao-star-rating-filled-color: var(--khao-sys-color-secondary);
    --khao-star-rating-hover-color: var(--khao-sys-color-secondary);
  }

  .star-rating-tertiary {
    --khao-star-rating-filled-color: var(--khao-sys-color-tertiary);
    --khao-star-rating-hover-color: var(--khao-sys-color-tertiary);
  }

  .star-rating-bg-surface-container {
    --khao-star-rating-empty-color: var(--khao-sys-color-surface-container);
  }

  .star-rating-bg-surface-container-low {
    --khao-star-rating-empty-color: var(--khao-sys-color-surface-container-low);
  }

  .star-rating-bg-surface-container-high {
    --khao-star-rating-empty-color: var(
      --khao-sys-color-surface-container-high
    );
  }

  .star-rating-bg-surface-container-highest {
    --khao-star-rating-empty-color: var(
      --khao-sys-color-surface-container-highest
    );
  }
</style>
