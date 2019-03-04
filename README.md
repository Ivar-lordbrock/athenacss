


## Usage

AthenaCSS is based on a 12 columns layout. The gutters are managed with the columns' padding.

### Layout

Build your grids with `.row` and `.col-x` elements. For example:

```html
<div class="row">
	<div class="col-12"></div>
	<div class="col-6"></div>
	<div class="col-6"></div>
	...
</div>	
```

### Mixed Widths

Columns can be set to a different width under a particular breakpoint. For example, use the class `small-6` to set the width of the column to 50% for small widths. For medium widths you can use `mid-6`. Breakpoints can of course be customized.

```html
<div class="row">
	<div class="col-3 mid-6 small-4"></div>
	<div class="col-3 mid-6 small-8"></div>
</div>
```

### Nesting

Nesting is possible with the class `.nested`

```html
<div class="col-8">
	<div class="row nested">
		<div class="col-6"></div>					
		<div class="col-6"></div>					
		<div class="col-4"></div>					
		<div class="col-4"></div>					
		<div class="col-4"></div>					
	</div>
</div>

<div class="col-4">
	<div class="row nested">
		<div class="col-6"></div>
		<div class="col-6"></div>
	</div>
</div>

```

### Offsets

You can add some left or right margins if needed. For example, add the class `.left-1` if you want a 1 column left margin, or `.right-2` if you want a 2 columns right-margin.

```html

<div class="col-8 right-2"></div>
<div class="col-1 left-1"></div>

```

### No padding! 

Get rid of the margins with the class `.no-padding`

```html

<div class="col-2 no-padding"></div>

```

### Flexbox magic :)

Use extra classes on `.row` elements:

`.x-top` for align-items: flex-start

`.x-middle` for align-items: center

`.x-bottom` for align-items: flex-end

`.x-stretch` for align-items: stretch

`.x-baseline` for align-items: baseline
	
`.x-left` for justify-content: flex-start

`.x-center` for justify-content: center

`.x-right` for justify-content: flex-end

`.x-between` for justify-content: space-between

`.x-around` for justify-content: space-around

Adapté depuis : [Pridx](https://github.com/anybodesign/pridx/ "Github Pridx")