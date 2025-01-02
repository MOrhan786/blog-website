import { type SchemaTypeDefinition } from 'sanity'

import { comment } from './comments/comment'
import { cards } from './cards/cards'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cards, comment],
}
