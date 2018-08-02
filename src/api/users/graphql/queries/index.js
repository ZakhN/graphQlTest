import me from './me';

const queries = {
  me,
  showDb: (root, args, context) => console.log(context.db),
};

export default queries;
