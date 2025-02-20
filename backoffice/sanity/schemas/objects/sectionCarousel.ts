import {defineField, defineType} from 'sanity'

import {sectionBaseMediaList} from '../base'

export const sectionCarousel = defineType({
    name: 'sectionCarousel',
    title: 'Sección con carrusel de lo que le pongas',
    type: 'object',
    fields: [...sectionBaseMediaList],
})
