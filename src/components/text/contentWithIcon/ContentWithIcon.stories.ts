import type { Meta, StoryObj } from "@storybook/svelte-vite";
import ContentWithIcon from "./ContentWithIcon.svelte";
import { iconNames } from "../../../icons/types/IconName";
import {
  iconSizeFactors,
  iconSizeFactorDefault,
} from "../../../icons/types/IconSizeFactor";
import {
  iconOpacities,
  iconOpacityDefault,
} from "../../../icons/types/IconOpacity";

const meta = {
  title: "Text/Content With Icon",
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
  return `<khao-content-with-icon iconName="${props.iconName || ""}" iconSizeFactor=${props.iconSizeFactor} iconOpacity="${props.iconOpacity}">${props.slot}</khao-content-with-icon>`;
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthorExample: Story = {
  args: {
    iconName: "meta-author",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<khao-link href="/info/ueber-mich/" title="Über den Autor">Jens<span class="meta__author__extended">&nbsp;(<span itemprop="author">Der Reiskoch</span>)</span>
</khao-link>`,
  },
  render: render,
};

export const DateExample: Story = {
  args: {
    iconName: "meta-date",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<time datetime="2017-07-17T10:44:00+02:00">17.07.2017</time>`,
  },
  render: render,
};

export const CategoryExample: Story = {
  args: {
    iconName: "meta-category",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<khao-link href="/dies-und-das/" rel="category" title="Zur Kategorie">Dies &amp; Das</khao-link>`,
  },
  render: render,
};

export const LangExample: Story = {
  args: {
    iconName: "meta-lang",
    iconSizeFactor: "5",
    iconOpacity: "50%",
    slot: `<span><khao-link class="meta__item-translations--current" title="Mein Tagebuch (August 2024) (Deutsche Version)">DE</khao-link>/<khao-link class="meta__link meta__link_lang" href="/en/diary/diary-2024-08/" title="Foodie Diary (August 2024) (English Version)">EN
                    </khao-link></span>`,
  },
  render: render,
};
