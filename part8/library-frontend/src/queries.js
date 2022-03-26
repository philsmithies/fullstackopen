import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      id
      born
      authorBookCount
    }
  }
`;

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
      published
      id
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $title: String!
    $author: String!
    $published: Int
    $genres: [String]
  ) {
    addBook(
      title: $title
      published: $published
      author: $author
      genres: $genres
    ) {
      title
      published
      author
      genres
    }
  }
`;

export const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $born: Int) {
    editAuthor(name: $name, born: $born) {
      name
      born
    }
  }
`;
