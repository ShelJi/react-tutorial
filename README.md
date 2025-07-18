# React-tutorial

```css
Linear gradient text

<!-- snippet  -->

@utility text-gradient {
background: linear-gradient(to bottom, #ffffff, #898989);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}
```

Learn React with detailed explaination of Components and structured Code

`npm create vite@latest`

daisyui and tailwind css

`npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest`

## hooks

Hooks always starts with re'use*' ex, useState, ...

## react-responsive

`import { useMediQuery } from "react-responsive";`

## GSAP

`npm install gsap @gsap/react`

[Gsap basic elements](https://gsap-crash-course.vercel.app/)

### SplitText

```jsx
import { SplitText } from "gsap/all";

const heroSplit = new SplitText(".title", {
    type: "chars, words",
});

const paragraphSplit = new SplitText(".subtitle", {
    type: "lines",
});

```

### video

Video need to be optimised for scrub based animation for smoother experience
for that use FFMPEG software and the command is
``

```jsx
videoRef.current.onloadedmetadata = () => {
    tl.to(videoRef.current, {
            currentTime: videoRef.current.duration,
        });
    };
```
