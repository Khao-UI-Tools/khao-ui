import type { Meta, StoryObj } from "@storybook/web-components-vite";
import InfiniteScroll from "./InfiniteScroll.svelte";

const meta = {
  title: "Misc/InfiniteScroll",
  component: "khao-infinite-scroll",
  tags: ["autodocs"],
  argTypes: {
    querySelector: {
      control: "text",
      type: "string",
    },
    paginationSlug: {
      control: "text",
      type: "string",
    },
    buttonLabel: {
      control: "text",
      type: "string",
    },
    numberOfPages: {
      control: "number",
      type: "string",
    },
  },
} satisfies Meta<InfiniteScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    querySelector: "article.recipe",
    paginationSlug: "page/",
    buttonLabel: "Load more...",
    numberOfPages: 3,
  },

  render: () => {
    const mockContent = `<div style="height:1500px">
       <style>
          article.recipe {
          
            margin-bottom: 2rem;
            padding: 1rem;
            border: 1px solid gray; 
          
          }
       </style>
        
       <h2>&lt;khao-infinite-scroll&gt;</h2>

        <article class="recipe">
          <p>
          With the help of the &lt;khao-infinite-scroll&gt; you can transform a series of static list pages like in the following example
          into an infinite scroll experience without the need for pagination controls.  
          </p>

        <ul>
          <li>/recipes/</li>
          <li>/recipes/page/1/</li>
          <li>/recipes/page/2/</li>
          <li>/recipes/page/3/</li>
          <li>...</li>
          <li>/recipes/page/23/</li>
        </ul>

        </article>

        <article class="recipe">
          <p>Just put the &lt;khao-infinite-scroll&gt; web component at the bottom of your HTML document 
          (or any other place in your document where you want to trigger a lazy load of following pages).
          </p>
          <p>
          You have to tell the component how the URLs of following pages look like by setting the "paginationSlug" attribute.
          For the example above this would be "page/"
          </p>
          <p>
            The second information the component needs, is which HTML elemensts should be added to the current page. 
            You can tell that by setting the querySelector attribute to a value like "article.recipe" or any oher valid query selector.
          </p>
        </article>


        <article class="recipe">
          <p>As soon as the &lt;khao-infinite-scroll&gt; is scrolled into view, it loads the content of the following page, parses the response body and adds
          items and the end of the list. It also adds an history entry so that the url in the browser bar is adjusted. 
          </p>
          <p>
          There is also e custom event called "khao-infinite-scroll-loaded-more" that is triggered aftet the new itemes are added. You can use it to 
          lazy load images or any other action that is needed if content is added to your document dynamically.
          </p>
        </article>

        <article class="recipe" id="mock-added-item">
          <p>This new item appears when the "khao-infinite-scroll-loaded-more" event is dispatched.</p>

          <p>But this is only mocked to demonstrate how it would work!</p>
        </article>

        <h2>Please scroll down!</h2>

      </div>`;

    const eventListener = `<script>

      const mockItem = document.getElementById('mock-added-item');
      mockItem.style.display = "none";


      window.addEventListener(
        'khao-infinite-scroll-loaded-more',

        () => {
            alert('khao-infinite-scroll-loaded-more');
            mockItem.style.display = "block";
            
        }
    );
    
    </script>`;

    return `${mockContent}${eventListener}<khao-infinite-scroll querySelector="article.recipe" paginationSlug="page" buttonLabel="Load More ..." numberOfPages="3" /">`;
  },
};
