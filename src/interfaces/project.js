import { number, shape, string } from 'prop-types';

const projectProps = shape({
  _id: number,
  name: string,
  description: string,
  img: string,
  link: string,
  linkName: string,
  repoLink: string,
  color: string,
  bgColor: string,
});

export default projectProps;
