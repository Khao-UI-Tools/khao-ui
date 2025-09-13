import type { Meta, StoryObj } from "@storybook/svelte-vite";
import StarRating from "../../src/components/misc/starRating/StarRating.svelte";

import {
  starRatingColors,
  starRatingColorDefault,
} from "../../src/components/misc/starRating/types/StarRatingColor";

import {
  starRatingStarBackgroundColors,
  starRatingStarBackgroundColorDefault,
} from "../../src/components/misc/starRating/types/StarRatingStarBackgroundColor";

import {
  starRatingSizes,
  starRatingSizeDefault,
} from "../../src/components/misc/starRating/types/StarRatingSize";

const meta = {
  title: "Misc/StarRating",
  component: "khao-star-rating",
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
      description: "Current rating value (0-5 with 0.5 steps)",
    },
    maxRating: {
      control: { type: "number", min: 3, max: 10 },
      description: "Maximum number of stars",
    },
    starColor: {
      control: { type: "select" },
      options: starRatingColors,
      description: "Color theme for the stars",
    },
    starBackgroundColor: {
      control: { type: "select" },
      options: starRatingStarBackgroundColors,
      description: "Background color surface container variant",
    },
    starSize: {
      control: { type: "select" },
      options: starRatingSizes,
      description: "Size of the stars",
    },
    readonly: {
      control: { type: "boolean" },
      description: "Whether the rating is read-only",
    },
    name: {
      control: "text",
      description: "Form input name",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for screen readers",
    },
    noRatingLabel: {
      control: "text",
      description: "Label when there is not rating yet",
    },
    oneStarLabel: {
      control: "text",
      description: "Label when there is one star selected",
    },
    multipleStarsLabel: {
      control: "text",
      description: "Label when there are multiple stars selected",
    },
    currentRatingLabel: {
      control: "text",
      description: "Label for the current rating",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
An accessible star rating component that follows WCAG guidelines. Uses radio buttons for proper form semantics and keyboard navigation.

**Accessibility Features:**
- Screen reader support with descriptive labels
- Keyboard navigation with Tab and Arrow keys
- Semantic fieldset/legend structure
- Focus indicators
- No dependence on color alone

**Usage:**
- Supports ratings from 0-5 in 0.5 increments by default
- Configurable star colors (primary, secondary, tertiary)
- Configurable background colors (5 surface container variants)
- Can be made read-only for display purposes
- Emits 'ratingchange' events for form handling
        `,
      },
    },
  },
} satisfies Meta<StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 3.5,
    maxRating: 5,
    starColor: starRatingColorDefault,
    starBackgroundColor: starRatingStarBackgroundColorDefault,
    starSize: starRatingSizeDefault,
    readonly: false,
    name: "rating",
    ariaLabel: "Bewertung",
    noRatingLabel: "Noch keine Bewertung",
    oneStarLabel: "1 Stern von",
    multipleStarsLabel: "Sterne von",
    currentRatingLabel: "Aktuelle Bewertung",
  },
};

export const ReadOnly: Story = {
  args: {
    rating: 4,
    maxRating: 5,
    starColor: "primary",
    readonly: true,
    name: "rating-readonly",
    ariaLabel: "Current rating",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A read-only star rating for displaying existing ratings without user interaction.",
      },
    },
  },
};

export const CustomMaxRating: Story = {
  args: {
    rating: 7,
    maxRating: 10,
    starColor: "primary",
    readonly: false,
    name: "rating-ten",
    ariaLabel: "Rate from 1 to 10",
  },
  parameters: {
    docs: {
      description: {
        story: "Custom maximum rating with 10 stars.",
      },
    },
  },
};

export const ColorVariants: Story = {
  render: () => `
    <div style="display: flex; gap: 2rem; flex-direction: column;">
      <div>
        <h4>Primary (default)</h4>
        <khao-star-rating rating="4" starColor="primary" readonly name="primary"></khao-star-rating>
      </div>
      <div>
        <h4>Secondary</h4>
        <khao-star-rating rating="3.5" starColor="secondary" readonly name="secondary"></khao-star-rating>
      </div>
      <div>
        <h4>Tertiary</h4>
        <khao-star-rating rating="2.5" starColor="tertiary" readonly name="tertiary"></khao-star-rating>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Different color variants available for the star rating component.",
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    rating: 0,
    maxRating: 5,
    starColor: "primary",
    readonly: false,
    name: "rating-interactive",
    ariaLabel: "Please rate your experience",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example starting with no rating. Click on stars to set a rating.",
      },
    },
  },
};

export const SizeVariants: Story = {
  render: () => `
    <div style="display: flex; gap: 2rem; flex-direction: column; align-items: flex-start;">
      <div>
        <h4>Extra Small (sizeFactor 6)</h4>
        <khao-star-rating rating="4" starSize="6" readonly name="size-xs"></khao-star-rating>
      </div>
      <div>
        <h4>Small (sizeFactor 8)</h4>
        <khao-star-rating rating="4" starSize="8" readonly name="size-small"></khao-star-rating>
      </div>
      <div>
        <h4>Medium (sizeFactor 10)</h4>
        <khao-star-rating rating="4" starSize="10" readonly name="size-medium"></khao-star-rating>
      </div>
      <div>
        <h4>Large (sizeFactor 16)</h4>
        <khao-star-rating rating="4" starSize="16" readonly name="size-large"></khao-star-rating>
      </div>
      <div>
        <h4>Extra Large (sizeFactor 20)</h4>
        <khao-star-rating rating="4" starSize="20" readonly name="size-xl"></khao-star-rating>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Different size variants available for the star rating component using Icon sizeFactor values (6-20).",
      },
    },
  },
};
