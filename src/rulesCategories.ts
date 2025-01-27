const rulesCategories = {
  layout: {
    categoryName: 'Layout',
    categoryUri: 'layout',
    targets: [
      'sm',
      'md',
      'lg',
      'xl',
      'z-',
      'flex',
      'grid',
      'end-',
      'top-',
      'block',
      'table',
      'fixed',
      'left-',
      'inline',
      'hidden',
      'static',
      'sticky',
      'inset-',
      'start-',
      'right-',
      'aspect-',
      'isolate',
      'bottom-',
      'visible',
      'columns-',
      'contents',
      'absolute',
      'relative',
      'collapse',
      'container',
      'flow-root',
      'list-item',
      'float-end',
      'clear-end',
      'overflow-',
      'invisible',
      'box-border',
      'float-left',
      'float-none',
      'clear-left',
      'clear-both',
      'clear-none',
      'isolation-',
      'object-top',
      'box-content',
      'float-start',
      'float-right',
      'clear-start',
      'clear-right',
      'object-fill',
      'object-none',
      'object-left',
      'overscroll-',
      'break-after-',
      'object-cover',
      'object-right',
      'break-before-',
      'break-inside-',
      'object-bottom',
      'object-center',
      'object-contain',
      'object-scale-down',
      'box-decoration-clone',
      'box-decoration-slice',
    ],
  },
  'flexbox-and-grid': {
    categoryName: 'Flexbox & Grid',
    categoryUri: 'flexbox-and-grid',
    targets: [
      'grow',
      'col-',
      'row-',
      'gap-',
      'flex-',
      'self-',
      'basis-',
      'shrink',
      'order-',
      'items-end',
      'grid-cols-',
      'grid-rows-',
      'auto-cols-',
      'auto-rows-',
      'justify-end',
      'content-end',
      'items-start',
      'place-self-',
      'items-center',
      'grid-flow-row',
      'grid-flow-col',
      'justify-start',
      'justify-self-',
      'content-start',
      'items-stretch',
      'justify-normal',
      'justify-center',
      'justify-around',
      'justify-evenly',
      'content-normal',
      'content-center',
      'content-around',
      'content-evenly',
      'items-baseline',
      'grid-flow-dense',
      'justify-between',
      'justify-stretch',
      'content-between',
      'content-stretch',
      'place-items-end',
      'content-baseline',
      'justify-items-end',
      'place-content-end',
      'place-items-start',
      'place-items-center',
      'justify-items-start',
      'place-content-start',
      'place-items-stretch',
      'justify-items-center',
      'place-content-center',
      'place-content-around',
      'place-content-evenly',
      'place-items-baseline',
      'justify-items-stretch',
      'place-content-between',
      'place-content-stretch',
      'place-content-baseline',
    ],
  },
  spacing: {
    categoryName: 'Spacing',
    categoryUri: 'spacing',
    targets: [
      'p-',
      'm-',
      'px-',
      'py-',
      'ps-',
      'pe-',
      'pt-',
      'pr-',
      'pb-',
      'pl-',
      'mx-',
      'my-',
      'ms-',
      'me-',
      'mt-',
      'mr-',
      'mb-',
      'ml-',
      'space-x-',
      'space-y-',
    ],
  },
  sizing: {
    categoryName: 'Sizing',
    categoryUri: 'sizing',
    targets: ['w-', 'h-', 'size-', 'min-w-', 'max-w-', 'min-h-', 'max-h-'],
  },
  typography: {
    categoryName: 'Typography',
    categoryUri: 'typography',
    targets: [
      'font-',
      'text-',
      'italic',
      'ordinal',
      'indent-',
      'leading-',
      'overline',
      'truncate',
      'hyphens-',
      'list-none',
      'list-disc',
      'underline',
      'uppercase',
      'lowercase',
      'align-top',
      'align-sub',
      'break-all',
      'not-italic',
      'capitalize',
      'break-keep',
      'antialiased',
      'normal-nums',
      'lining-nums',
      'line-clamp-',
      'list-inside',
      'decoration-',
      'normal-case',
      'align-super',
      'break-words',
      'slashed-zero',
      'tabular-nums',
      'list-outside',
      'list-decimal',
      'line-through',
      'no-underline',
      'align-middle',
      'align-bottom',
      'break-normal',
      'content-none',
      'oldstyle-nums',
      'tracking-wide',
      'tracking-tight',
      'align-baseline',
      'align-text-top',
      'whitespace-pre',
      'tracking-normal',
      'list-image-none',
      'proportional-nums',
      'stacked-fractions',
      'align-text-bottom',
      'whitespace-normal',
      'whitespace-nowrap',
      'diagonal-fractions',
      'subpixel-antialiased',
      'whitespace-break-spaces',
    ],
  },
  backgrounds: {
    categoryName: 'Backgrounds',
    categoryUri: 'backgrounds',
    targets: ['bg-', 'to-', 'via-', 'from-'],
  },
  borders: {
    categoryName: 'Borders',
    categoryUri: 'borders',
    targets: ['ring', 'border', 'rounded', 'divide-', 'outline'],
  },
  effects: {
    categoryName: 'Effects',
    categoryUri: 'effects',
    targets: [
      'shadow',
      'opacity-',
      'bg-blend-hue',
      'mix-blend-hue',
      'bg-blend-color',
      'mix-blend-color',
      'bg-blend-normal',
      'bg-blend-screen',
      'bg-blend-darken',
      'mix-blend-normal',
      'mix-blend-screen',
      'mix-blend-darken',
      'bg-blend-overlay',
      'bg-blend-lighten',
      'mix-blend-overlay',
      'mix-blend-lighten',
      'bg-blend-multiply',
      'mix-blend-multiply',
      'bg-blend-exclusion',
      'mix-blend-exclusion',
      'bg-blend-hard-light',
      'bg-blend-soft-light',
      'bg-blend-difference',
      'bg-blend-saturation',
      'bg-blend-luminosity',
      'mix-blend-hard-light',
      'mix-blend-soft-light',
      'mix-blend-difference',
      'mix-blend-saturation',
      'mix-blend-luminosity',
      'mix-blend-plus-lighter',
    ],
  },
  filters: {
    categoryName: 'Filters',
    categoryUri: 'filters',
    targets: [
      'blur',
      'sepia',
      'invert',
      'contrast-',
      'grayscale',
      'saturate-',
      'brightness-',
      'drop-shadow',
      'hue-rotate-',
      'backdrop-blur',
      'backdrop-scale',
      'backdrop-sepia',
      'backdrop-invert',
      'backdrop-opacity-',
      'backdrop-contrast-',
      'backdrop-saturate-',
      'backdrop-brightness-',
      'backdrop-hue-rotate-',
    ],
  },
  tables: {
    categoryName: 'Tables',
    categoryUri: 'tables',
    targets: [
      'table-',
      'caption-top',
      'caption-bottom',
      'border-collapse',
      'border-separate',
      'border-spacing-',
    ],
  },
  'transitions-and-animation': {
    categoryName: 'Transitions & Animation',
    categoryUri: 'transitions-and-animation',
    targets: [
      'delay-',
      'ease-in',
      'ease-out',
      'duration-',
      'transition',
      'ease-linear',
      'animate-none',
      'animate-spin',
      'animate-ping',
      'animate-pulse',
      'animate-bounce',
    ],
  },
  transforms: {
    categoryName: 'Transforms',
    categoryUri: 'transforms',
    targets: [
      'scale-',
      'rotate-',
      'skew-x-',
      'skew-y-',
      'origin-top',
      'origin-left',
      'translate-x-',
      'translate-y-',
      'origin-right',
      'origin-center',
      'origin-bottom',
    ],
  },
  interactivity: {
    categoryName: 'Interactivity',
    categoryUri: 'interactivity',
    targets: [
      'caret-',
      'resize',
      'snap-x',
      'snap-y',
      'touch-',
      'accent-',
      'cursor-',
      'scroll-',
      'select-',
      'snap-end',
      'snap-none',
      'snap-both',
      'snap-start',
      'appearance-',
      'snap-center',
      'snap-normal',
      'snap-always',
      'will-change-',
      'snap-mandatory',
      'snap-proximity',
      'pointer-events-',
      'snap-align-none',
    ],
  },
  svg: {
    categoryName: 'SVG',
    categoryUri: 'svg',
    targets: ['fill-', 'stroke-'],
  },
  accessibility: {
    categoryName: 'Accessibility',
    categoryUri: 'accessibility',
    targets: ['sr-only', 'not-sr-only', 'forced-color-adjust-'],
  },
};

export default rulesCategories;
