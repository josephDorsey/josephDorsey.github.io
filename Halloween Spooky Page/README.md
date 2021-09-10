This is where I'll practice the code I learn from the HTML/CSS Course and from other sources like the Syntax Podcast on Spotify.

# Podcast Notes

## Productivity

### Alfred app

## How do you structure your CSS files?

creates a css file for presets, classes, elements, pseudo-classes. That way I dont have to organize all my stuff in one CSS folder where it can be super long. This way if I know what I'm looking for I can go to my corresponding css sheet!

OR you can component the files. For example, whatever component you're working on the page get's its own css file. Sure you end up with more files, but you know exactly where your component is.

## SASS notes (Hex value +/- number)

`Hex value +/- 10` it'll bump up or decrease all the values by 10.

`#fff + 10`
Good uses: hover,

# Halloween Notes

The goal is to pick some stories that viewers will read and then type their answer into the input field. Which will then light up green and say correct or light up red and incorrect if not the right answer.

### input tag

adding `<input type="text">`. Future goal of when viewers press submit with their guess written in the input field it will tell them if they are right or wrong.

### Image Rendering

```
img {
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
```

#### auto

`auto:` default value that uses the browser’s standard algorithm to maximize the appearance of an image.

#### crisp-edges

`crisp-edges:` the contrast, colors and edges of the image will be preserved without any smoothing or blurring. According to the spec this was specifically intended for pixel art. This value applies to images scaled up or down.

#### pixelated

`pixelated:` as the image changes size the browser will preserve its pixelated style by using nearest-neighbour scaling. This value only applies to images that are scaled up.

### Border-radius (how to make rounded corners)

We want to use 25px to create a rounded corner.
We can use a shorthand property to target the necessary corners:

```
This property is a shorthand for the following CSS properties:

border-top-left-radius
border-top-right-radius
border-bottom-right-radius
border-bottom-left-radius
```

```
border-radius: 0 0 0 0;
```
