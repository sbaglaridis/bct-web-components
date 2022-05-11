export default {
  title: 'Components'
};

const Template = args => {
  return `
      <bct-author-block
        avatar="${args.avatar}"
        name="${args.name}"
        text="${args.text}"
      />
  `;
};

export const BctAuthorBlock = Template.bind({});

BctAuthorBlock.args = {
  avatar: 'https://via.placeholder.com/150',
  name: 'Scarlett Johansson',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt dolore est laudantium nulla perferendis quae quis recusandae, repellat saepe sequi veritatis voluptatum? Dicta error explicabo modi omnis, quos rerum.',
};
