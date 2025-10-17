import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ContentWithIcon from "../../src/components/misc/contentWithIcon/ContentWithIcon.svelte";
import { iconNames } from "../../src/icons/types/IconName";
import {
  iconSizeFactors,
  iconSizeFactorDefault,
} from "../../src/icons/types/IconSizeFactor";
import {
  iconOpacities,
  iconOpacityDefault,
} from "../../src/icons/types/IconOpacity";

const meta = {
  title: "Misc/Content With Icon",
  component: "khao-content-with-icon",
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: iconNames,
    },
    iconSizeFactor: {
      control: { type: "select" },
      options: iconSizeFactors,
      default: iconSizeFactorDefault,
    },
    iconOpacity: {
      control: { type: "select" },
      options: iconOpacities,
      default: iconOpacityDefault,
    },
  },
} satisfies Meta<ContentWithIcon>;

interface renderProps {
  iconName: string;
  iconSizeFactor: string;
  iconOpacity?: string;
  slot: string;
}

const render = (props: renderProps): string => {
  return `<khao-content-with-icon iconName="${
    props.iconName || ""
  }" iconSizeFactor=${props.iconSizeFactor} iconOpacity="${
    props.iconOpacity
  }">${props.slot}</khao-content-with-icon>`;
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthorExample: Story = {
  args: {
    iconName: "person",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<khao-link href="/info/ueber-mich/" title="Über den Autor">Jens<span class="meta__author__extended">&nbsp;(<span>Der Reiskoch</span>)</span>
</khao-link>`,
  },
  render: render,
};

export const DateExample: Story = {
  args: {
    iconName: "date-time",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<time datetime="2017-07-17T10:44:00+02:00">17.07.2017</time>`,
  },
  render: render,
};

export const CategoryExample: Story = {
  args: {
    iconName: "folder",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<khao-link href="/dies-und-das/" rel="category" title="Zur Kategorie">Dies &amp; Das</khao-link>`,
  },
  render: render,
};

export const LangExample: Story = {
  args: {
    iconName: "globe",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<span><khao-link class="meta__item-translations--current" title="Mein Tagebuch (August 2024) (Deutsche Version)">DE</khao-link>/<khao-link class="meta__link meta__link_lang" href="/en/diary/diary-2024-08/" title="Foodie Diary (August 2024) (English Version)">EN
                    </khao-link></span>`,
  },
  render: render,
};

export const MealExample: Story = {
  args: {
    iconName: "noodle-soup",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<span>ยำหมูย่าง</span>`,
  },
  render: render,
};

export const RegionExample: Story = {
  args: {
    iconName: "map",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<span>Isaan</span>`,
  },
  render: render,
};
