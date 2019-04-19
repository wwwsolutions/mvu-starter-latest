const Model = {
  footer: {

    // logo: { // START RESPONSIVE IMAGE DEFINITION
    //   pictureTag: [
    //     {
    //       lodpi: ['/assets/images/logo-green-small-1x.png', '1x'],
    //       hidpi: ['/assets/images/logo-green-small-2x.png', '2x'],
    //       media: '(max-width: 37.5em)',
    //     },
    //     {
    //       lodpi: ['/assets/images/logo-green-1x.png', '1x'],
    //       hidpi: ['/assets/images/logo-green-2x.png', '2x'],
    //       alt: 'Footer logo',
    //       title: 'Footer logo',
    //     }
    //   ]
    // }, // END RESPONSIVE IMAGE DEFINITION

    logo: { // START RESPONSIVE IMAGE DEFINITION
      imageTag: {
        srcsets: [
          'assets/images/logo-green-small-1x.png 300w',
          'assets/images/logo-green-1x.png 1000w'
        ],
        sizes: [
          '(max-width: 900px) 20vw',
          '(max-width: 600px) 30vw',
          '300px',
        ],
        alt: 'Footer logo',
        src: 'assets/images/logo-green-1x.png'
      },
    }, // END RESPONSIVE IMAGE DEFINITION

    list: [
      { href: '#', title: 'Company' },
      { href: '#', title: 'Contack us' },
      { href: '#', title: 'Careers' },
      { href: '#', title: 'Privacy policy' },
      { href: '#', title: 'Terms' },
    ]
  }
};

export { Model as footerModel };
