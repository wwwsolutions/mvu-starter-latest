const Model = {
  heroLarge: {

    image1: {
      pictureTag: [
        {
          hasImgTag: false,
          lodpi: ['assets/images/@large@1@1920x1440@custom@woman.jpg', '1920'],
          hidpi: ['assets/images/@large@2@3840x2880@custom@woman.jpg', '3840'],
          media: '(min-width: 992px)',
        },
        {
          hasImgTag: false,
          lodpi: ['assets/images/@medium@1@1380x1035@4x3@woman.jpg', '1380'],
          hidpi: ['assets/images/@medium@2@2760x2070@4x3@woman.jpg', '2760'],
          media: '(min-width: 768px)',
        },
        {
          hasImgTag: false,
          lodpi: ['assets/images/@small@1@990x743@4x3@woman.jpg', '990'],
          hidpi: ['assets/images/@small@2@1980x1484@4x3@woman.jpg', '1980'],
          media: '(min-width: 576px)',
        },
        {
          hasImgTag: true,
          lodpi: ['assets/images/@default@1@640x875@4x3@woman.jpg', '640'],
          hidpi: ['assets/images/@default@2@1280x1750@4x3@woman.jpg', '1280'],
          class: 'large-hero__image object-fit_cover',
          alt: 'Coastal view of ocean and mountains',
          title: 'Women Under Water',
        }
      ]
    }, // END RESPONSIVE IMAGE DEFINITION


  }
};

export { Model as heroLargeModel };
