export default {
  title: 'Components'
};

const Template = args => {
  return `
      <bct-socials
        facebook="${args.facebook}"
        twitter="${args.twitter}"
        instagram="${args.instagram}"
        youtube="${args.youtube}"
      />
  `;
};

export const BctSocials = Template.bind({});

BctSocials.args = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  youtube: '#'
};
