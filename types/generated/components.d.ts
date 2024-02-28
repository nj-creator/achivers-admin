import type { Schema, Attribute } from '@strapi/strapi';

export interface FileFiles extends Schema.Component {
  collectionName: 'components_file_files';
  info: {
    displayName: 'files';
  };
  attributes: {
    filesData: Attribute.Media;
  };
}

export interface NotesFaculty extends Schema.Component {
  collectionName: 'components_notes_faculties';
  info: {
    displayName: 'Faculty';
  };
  attributes: {
    facultyName: Attribute.String & Attribute.Required;
    files: Attribute.Component<'file.files', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'file.files': FileFiles;
      'notes.faculty': NotesFaculty;
    }
  }
}
