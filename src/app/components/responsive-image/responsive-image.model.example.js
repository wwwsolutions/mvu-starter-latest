/* RESPONSIVE IMAGE MODEL EXAMPLE

  > SRCSET SLOTS

    > DENSITY DESCRIPTOR: '1x', '2x', '3x'

    > WIDTH DESCRIPTOR: 'w'
    Note:
    For the slot width, you may provide an absolute length (px, em) or a length relative to the viewport (vw),
    but not percentages. You may have noticed that the last slot width has no media condition (this is the default
    that is chosen when none of the media conditions are true). The browser ignores everything after the first matching
    condition, so be careful how you order the media conditions.

    > [RESPONSIVE IMAGE ERROR] Tags attributes array cannot be empty!
    > [RESPONSIVE IMAGE ERROR] Tags attributes array must have at least one IMG and one SOURCE element!

    /////////////////////////////////////////////////*/


//
// INTER

const Model = {


  module: {

    // ...

    // --> INTERGRATE INTO CURRENT MODULE MODEL
    responsiveImage: { // START RESPONSIVE_IMAGE DEFINITION

      // <picture>
      pictureTag: [

        // [OPTIONAL]
        // <source>
        {
          lodpi: ['hipi_image-1x.png', '1920w'], // ALTERNATIVE SYNTAX:  '1x'
          hidpi: ['hipi_image-2x.png', '3840w'], // ALTERNATIVE SYNTAX:  '2x'
          media: 'only screen and (min-width: 75em)',
        },

        // [OPTIONAL]
        // <source>
        {
          lodpi: ['lodpi_image-1x.png', '1380w'],
          hidpi: ['hidpi_image-2x.png', '2760w'],
          media: 'only screen and (max-width: 56.25em)',
        },

        // [MANDATORY] AT LEAST ONE SOURCE
        // <source>
        // OBJECT MUST CONTAIN AT LEAST ONE SET OF PARAMETERS FOR <SOURCE> TAG
        {
          lodpi: ['lodpi_image-1x.png', '990w'],
          hidpi: ['hidpi_image-2x.png', '1980w'],
          media: 'only screen and (max-width: 37.5em)',
        },

        // [MANDATORY]
        // <img>
        // OBJECT MUST CONTAIN ONE SET OF PARAMETERS FOR <IMG> TAG
        {
          lodpi: ['lodpi_image-1x.png', '640w'], // ALTERNATIVE SYNTAX:  '1x'
          hidpi: ['hidpi_image-2x.png', '1280w'],  // ALTERNATIVE SYNTAX:  '1x'
          alt: 'Footer logo',
          title: 'Footer logo',
        }
      ]
    }, // END RESPONSIVE_IMAGE DEFINITION

    // ...

  }
};


