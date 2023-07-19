import React from 'react';
import {
  registerFilter,
  ConfigCase,
  Brightness,
  Sepia,
  ScreenBlend,
  RadialGradient,
  ConfigWithIntermediates,
  Config,
} from 'react-native-image-filter-kit';

const Ashby = registerFilter(
  'Ashby',
  {
    image: 'image',
    disableCache: 'bool',
    disableIntermediateCaches: 'bool',
  },
  ({ image, disableCache, disableIntermediateCaches = true }) => ({
    name: 'Saturate',
    disableCache,
    amount: 1.8,
    image: {
      name: 'Contrast',
      disableCache,
      amount: 1.2,
      image: {
        name: 'Sepia',
        disableCache,
        amount: 0.5,
        image: {
          name: 'LightenBlendColor',
          disableCache,
          disableIntermediateCaches,
          dstImage: image,
          srcColor: 'rgba(125, 105, 24, 0.35)',
        },
      },
    },
  })
);

const Poprocket = registerFilter(
  'Poprocket',
  {
    image: 'image',
    disableCache: 'bool',
    disableIntermediateCaches: 'bool',
  },
  ({ image, disableCache, disableIntermediateCaches = true }) => ({
    name: 'Brightness',
    disableCache,
    amount: 1.2,
    image: {
      name: 'Sepia',
      disableCache,
      amount: 0.15,
      image: {
        name: 'ScreenBlend',
        disableCache,
        resizeCanvasTo: 'dstImage',
        dstImage: image,
        srcImage: {
          name: 'RadialGradient',
          disableCache: disableIntermediateCaches,
          colors: ['rgba(206, 39, 70, 0.75)', 'rgba(0, 0, 0, 1)'],
          stops: [0.4, 0.8],
          radius: '70min',
        },
      },
    },
  })
);

const PoprocketStandalone = ({
  image,
  disableCache,
  disableIntermediateCaches = true,
}) => (
  <Brightness
    disableCache={disableCache}
    amount={1.2}
    image={
      <Sepia
        disableCache={disableCache}
        amount={0.15}
        image={
          <ScreenBlend
            disableCache={disableCache}
            resizeCanvasTo={'dstImage'}
            dstImage={image}
            srcImage={
              <RadialGradient
                disableCache={disableIntermediateCaches}
                colors={['rgba(206, 39, 70, 0.75)', 'rgba(0, 0, 0, 1)']}
                stops={[0.4, 0.8]}
                radius={'70min'}
              />
            }
          />
        }
      />
    }
  />
);

export default{ Ashby, Poprocket, PoprocketStandalone };
