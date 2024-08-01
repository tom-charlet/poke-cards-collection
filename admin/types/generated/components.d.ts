import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentCardItem extends Schema.Component {
  collectionName: 'components_content_card_items';
  info: {
    displayName: 'CardItem';
    description: '';
  };
  attributes: {
    front: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    variants: Attribute.Relation<
      'content.card-item',
      'oneToMany',
      'api::variant.variant'
    >;
    quality: Attribute.Relation<
      'content.card-item',
      'oneToOne',
      'api::quality.quality'
    >;
    back: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    order: Attribute.Relation<
      'content.card-item',
      'oneToOne',
      'api::order.order'
    >;
  };
}

export interface ContentCardCount extends Schema.Component {
  collectionName: 'components_content_card_counts';
  info: {
    displayName: 'CardCount';
    description: '';
  };
  attributes: {
    official: Attribute.Integer;
    total: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.card-item': ContentCardItem;
      'content.card-count': ContentCardCount;
    }
  }
}
