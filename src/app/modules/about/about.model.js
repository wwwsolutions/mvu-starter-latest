const Model = {
  about: {
    title: 'Exciting tours for adventerous people',
    headlines: [
      'You\'re going to fall in love with nature',
      'Live adventures like you never have before',
    ],
    copies: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.',
      'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.',
    ],
    btn: { href: '#', title: 'Learn more' },
    imageComposition: [
      { order: 2, src: '/assets/images/nat-1-large.jpg', alt: 'Photo 1' },
      { order: 3, src: '/assets/images/nat-2-large.jpg', alt: 'Photo 2' },
      { order: 1, src: '/assets/images/nat-3-large.jpg', alt: 'Photo 3' },
    ]
  }
};

export { Model as aboutModel };
