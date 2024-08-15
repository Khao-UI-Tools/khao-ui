<script context="module">
    import Button from "../components/buttons/Button.svelte";
  
    export const meta = {
      title: "Button",
      component: Button
    }
  </script>
  
  <script>
    import { Story, Template } from '@storybook/addon-svelte-csf';
  </script>
  
  <Template let:args>
    <link rel="stylesheet" href="src/design/reference/palette.css" />
    <link rel="stylesheet" href="src/design/reference/size.css" />
    <link rel="stylesheet" href="src/design/reference/typeface.css" />
    <link rel="stylesheet" href="src/design/system/color.css" />
    <link rel="stylesheet" href="src/design/system/elevation.css" />
    <link rel="stylesheet" href="src/design/system/shape.css" />
    <link rel="stylesheet" href="src/design/system/size.css" />
    <link rel="stylesheet" href="src/design/system/state.css" />
    <link rel="stylesheet" href="src/design/system/typescale.css" />

    <style>
        body {
            font-family: var(--khao-sys-typescale-body-font);
        }
    </style>


    <Button {...args}></Button>
  </Template>
  
  <Story name="Primary" args={{label: 'Primary Button',  priority: 'primary'}}/>
