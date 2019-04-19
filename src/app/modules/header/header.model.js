const Model = {
  header: {
    heading: ['Outdoors', 'is where life happens'],
    btnCta: { href: '#tours', title: 'Discover our tours' },

    logo: { // START RESPONSIVE IMAGE DEFINITION
      // Art Direction and Density Switching
      pictureTag: [
        {
          lodpi: ['assets/images/logo-white.png', '990w'],
          hidpi: ['assets/images/logo-white.png', '1980w'],
          media: '(min-width: 576px)',
        },
        {
          lodpi: ['assets/images/logo-white.png', '640w'],
          hidpi: ['assets/images/logo-white.png', '1280w'],
          alt: 'Header logo',
          title: 'Header logo',
        }
      ]

      // Density and Resolution Switching

    }, // END RESPONSIVE IMAGE DEFINITION

  },

};

export { Model as headerModel };
