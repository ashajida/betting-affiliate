import React from 'react'
import type { Metadata } from 'next';
import type { Viewport } from 'next';
import {metadata as studioMetadata} from 'next-sanity/studio';
import { viewport as studioViewport } from 'next-sanity/studio';
import Studio  from './studio';

export const metadata:Metadata={
    ...studioMetadata,
    title:'Loading Studio...'
}

export const view:Viewport={
    ...studioViewport,
    interactiveWidget: 'resizes-content'
}

const StudioPage = () => {
  return <Studio />
}

export default StudioPage;