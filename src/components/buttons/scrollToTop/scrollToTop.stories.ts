import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { action } from "@storybook/addon-actions";
import ScrollToTop from "./scrollToTop.svelte";
import { buttonSizeDefault, buttonSizes } from "../types/ButtonSize";

const meta = {
  title: "Buttons/ScrollToTopButton",
  component: "khao-scroll-to-top",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      type: "string",
    },
    anchorName: {
      control: "text",
      type: "string",
    },
    scrollThreshold: {
      control: "text",
      type: "string",
    },
    size: {
      control: { type: "select" },
      options: buttonSizes,
      default: buttonSizeDefault,
    },
    forceVisible: {
      control: { type: "boolean" },
      type: "Boolean",
    },
  },
} satisfies Meta<ScrollToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

interface renderProps {
  title: string;
  anchorName: string;
  scrollThreshold: string;
  forceVisible: string;
  size: string;
}

export const Example: Story = {
  args: {
    title: "Scroll to the top",
    anchorName: "top-of-page",
    scrollThreshold: "100",
    size: buttonSizeDefault,
    forceVisible: false,
  },

  render: (props: renderProps) => {
    window.addEventListener(
      "khao-scroll-to-top-visibility-change",

      () => {
        console.log("khao-scroll-to-top-visibility-change");
        action("khao-scroll-to-top-visibility-change");
      }
    );

    const mockContent = `<div style="height:1400px">
       <style>
          article.recipe {
          
            margin-bottom: 2rem;
            padding: 1rem;
            border: 1px solid gray; 
          
          }
       </style>
        
       <a name="${props.anchorName}"></a>
       <h2>&lt;khao-scroll-to-top&gt;</h2>

        <article class="recipe">
          <p>
          This component ads a "Scroll To Top" button to your document when the user scrolls over a given horizontal threshold.
          </p>

          <p>
          As "onClick" not always work on touch devices you can also give a fallback anchorName (for exaample "top-of-page") 
          which defines the top on your page.
          </p>
         </article>  

      
        <h2>Please scroll down!</h2>

      </div>`;

    return `${mockContent}
      <khao-scroll-to-top 
        title="${props.title}"
        anchorName="${props.anchorName}" 
        scrollThreshold="${props.scrollThreshold}" 
        forceVisible="${props.forceVisible}"
        size="${props.size}"
        />`;
  },
};
