import { Post, PostComment } from '@/types/posts';
import { faker } from '@faker-js/faker';

const createFakeComment = (): PostComment =>
  ({
    id: faker.string.uuid(),
    text: faker.lorem.paragraphs(1),
    username: faker.person.firstName(),
  } as PostComment);

export const createFakePost = (): Post => ({
  id: faker.string.uuid(),
  title: faker.company.catchPhrase(),
  body: faker.lorem.paragraph(),
  author: faker.person.firstName(),
  date: faker.date.anytime(),
  comments: faker.helpers.multiple(createFakeComment, { count: 3 }),
});

export const posts: Post[] = faker.helpers.multiple(createFakePost, {
  count: 10,
});
